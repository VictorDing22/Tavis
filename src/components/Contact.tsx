"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      projectType: (form.elements.namedItem("projectType") as HTMLSelectElement)
        .value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "提交失败，请稍后重试");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "提交失败，请稍后重试");
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-white">
      <div className="max-w-content mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-tight text-primary">
              联系我们
            </h2>
            <p className="text-base sm:text-lg text-secondary mt-4">
              告诉我们您的项目需求，我们会在 24 小时内回复。
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-[900px] mx-auto">
          {/* Form */}
          <AnimateOnScroll variant="fade-left" className="order-2 md:order-1">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">姓名</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="您的姓名"
                  autoComplete="name"
                  className="w-full px-4 py-3.5 border border-border rounded-xl text-base bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">邮箱</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  className="w-full px-4 py-3.5 border border-border rounded-xl text-base bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  项目类型
                </label>
                <select
                  name="projectType"
                  className="w-full px-4 py-3.5 border border-border rounded-xl text-base bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all appearance-none"
                >
                  <option>Web 系统与网站开发</option>
                  <option>移动应用开发</option>
                  <option>企业级应用系统</option>
                  <option>数据库设计与优化</option>
                  <option>系统集成与技术咨询</option>
                  <option>其他</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  项目描述
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="简单描述您的项目需求..."
                  className="w-full px-4 py-3.5 border border-border rounded-xl text-base bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/5 transition-all resize-vertical min-h-[120px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-primary text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all min-h-[52px] disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    发送中…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    发送消息
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm">
                  <CheckCircle size={16} />
                  消息已发送，我们会尽快回复您！
                </div>
              )}
              {status === "error" && (
                <p className="mt-4 text-rose-500 text-sm">{errorMsg}</p>
              )}
            </form>
          </AnimateOnScroll>

          {/* Contact Info */}
          <AnimateOnScroll variant="fade-right" className="order-1 md:order-2">
            <div className="space-y-8">
              {/* ── TODO: 替换为真实联系信息 ── */}
              <ContactItem
                icon={<Mail size={20} />}
                title="邮箱"
                text="contact@tavis.cn"
              />
              <ContactItem
                icon={<Phone size={20} />}
                title="电话"
                text="+86 138 xxxx xxxx"
              />
              <ContactItem
                icon={<MapPin size={20} />}
                title="地址"
                text="中国 · 待填写城市"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-secondary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-sm text-secondary">{text}</p>
      </div>
    </div>
  );
}
