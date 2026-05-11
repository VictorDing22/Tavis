import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ============================================================
   TODO: 配置邮件发送
   1. 在 Resend (https://resend.com) 注册并获取 API Key
   2. 在 Vercel 项目设置 → Environment Variables 中添加：
      - RESEND_API_KEY = re_xxxxxxxx
      - CONTACT_EMAIL  = 你的接收邮箱
   3. 如使用自定义发件域名，在 Resend 中验证 tavis.cn 域名后
      将下方 from 地址改为 noreply@tavis.cn
   ============================================================ */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "请填写所有必填字段" },
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
    const toEmail = process.env.CONTACT_EMAIL || "contact@tavis.cn";

    await resend.emails.send({
      from: "太微工作室 <onboarding@resend.dev>",
      to: [toEmail],
      subject: `[网站咨询] ${name} — ${projectType}`,
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
            来自 tavis.cn 网站联系表单
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "邮件发送失败，请稍后重试" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
