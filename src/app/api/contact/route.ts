import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ============================================================
   联系表单邮件发送
   环境变量（本地 .env.local / Vercel Environment Variables）：

   - RESEND_API_KEY     Resend API Key（必填）
   - CONTACT_EMAIL      接收咨询邮件的邮箱
   - RESEND_FROM_EMAIL  发件地址，可选。默认使用 Resend 测试发件人
                        "SuperUnknown <onboarding@resend.dev>"，该地址
                        仅能发往 Resend 账号注册邮箱。
                        在 Resend 验证 tavis.com.cn 后设置为
                        "SuperUnknown <noreply@tavis.com.cn>"
   ============================================================ */

const DEFAULT_FROM = "SuperUnknown <onboarding@resend.dev>";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "请求格式不正确" }, { status: 400 });
    }

    const fields = (body ?? {}) as Record<string, unknown>;
    const name = readText(fields.name);
    const email = readText(fields.email);
    const projectType = readText(fields.projectType) || "未填写";
    const message = readText(fields.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "请填写有效的邮箱地址" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "邮件服务未配置，请联系管理员" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_EMAIL || "dse0403@163.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim() || DEFAULT_FROM;

    // Resend 的 send 不会抛错，而是返回 { data, error }，必须显式检查，
    // 否则发送失败时接口仍会返回成功。
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `[网站咨询] ${sanitizeSubject(name)} — ${sanitizeSubject(projectType)}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a0a0a; border-bottom: 1px solid #e5e5e5; padding-bottom: 12px;">
            新的项目咨询
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #737373; width: 80px; vertical-align: top;">姓名</td>
              <td style="padding: 8px 0; color: #0a0a0a;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #737373; vertical-align: top;">邮箱</td>
              <td style="padding: 8px 0; color: #0a0a0a;">
                <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #737373; vertical-align: top;">项目类型</td>
              <td style="padding: 8px 0; color: #0a0a0a;">${escapeHtml(projectType)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #737373; vertical-align: top;">描述</td>
              <td style="padding: 8px 0; color: #0a0a0a; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; font-size: 12px; color: #a3a3a3;">
            来自 www.tavis.com.cn 网站联系表单
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json(
        { error: "邮件发送失败，请稍后重试" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "邮件发送失败，请稍后重试" },
      { status: 500 }
    );
  }
}

function readText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeSubject(value: string): string {
  return value.replace(/[\r\n]+/g, " ");
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
