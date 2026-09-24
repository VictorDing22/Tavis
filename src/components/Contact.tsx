"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && status !== "loading") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, status]);

  function openForm() {
    setStatus("idle");
    setErrorMsg("");
    setIsOpen(true);
  }

  function closeForm() {
    if (status !== "loading") setIsOpen(false);
  }

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
    <>
      <section id="contact" className="bg-[#f7f7f5] py-24 md:py-32">
        <div className="mx-auto max-w-content px-6">
          <AnimateOnScroll>
            <div className="relative isolate mx-auto grid min-h-[380px] max-w-[980px] overflow-hidden rounded-[30px] border border-black/10 bg-gradient-to-br from-[#efefed] via-[#fafaf9] to-[#e5e5e2] p-5 shadow-[0_30px_80px_rgba(16,16,16,0.08)] md:grid-cols-[minmax(0,1.15fr)_minmax(290px,0.85fr)]">
              <div
                className="pointer-events-none absolute -right-[12%] -top-[55%] -z-10 h-[420px] w-[620px] rotate-[-8deg] rounded-[48%] bg-gradient-to-br from-white via-neutral-200/80 to-neutral-400/50 blur-[55px]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-[75%] left-[18%] -z-10 h-[430px] w-[650px] rotate-[10deg] rounded-[45%] bg-gradient-to-br from-neutral-300/70 via-white to-neutral-200 blur-[60px]"
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] [background-image:linear-gradient(rgba(0,0,0,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.8)_1px,transparent_1px)] [background-size:42px_42px]" />

              <div className="flex flex-col justify-between px-4 py-8 sm:px-7 md:py-7">
                <div>
                  <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    期待与您合作
                  </p>
                  <h2 className="max-w-[480px] text-4xl font-medium leading-[1.02] tracking-[-0.055em] text-neutral-950 sm:text-5xl md:text-[56px]">
                    一起把想法
                    <br />
                    变成现实。
                  </h2>
                  <p className="mt-6 max-w-[470px] text-sm leading-7 text-neutral-600 sm:text-[15px]">
                    无论是全新产品、现有系统优化，还是长期技术合作，都欢迎告诉我们您的想法。
                  </p>
                </div>

                <div className="mt-9 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openForm}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-neutral-950 bg-neutral-950 px-5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(17,17,17,0.17)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(17,17,17,0.23)] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  >
                    <Mail size={17} />
                    联系
                  </button>
                  <Link
                    href="/cases"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white/60 px-5 text-sm font-semibold text-neutral-900 backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
                  >
                    参见项目
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              <aside
                className="flex min-h-[300px] flex-col justify-between rounded-[22px] border border-white/80 bg-white/55 p-6 shadow-[0_22px_50px_rgba(44,44,44,0.09),inset_0_0_0_1px_rgba(20,20,20,0.04)] backdrop-blur-2xl transition-transform duration-500 hover:-translate-y-1"
                aria-label="联系方式"
              >
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    开放合作
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    通常会在 24 小时内回复
                  </p>
                </div>

                <div className="space-y-5 py-7">
                  <ContactItem
                    icon={<Mail size={18} />}
                    title="邮箱"
                    text="dse0403@163.com"
                  />
                  <ContactItem
                    icon={<Phone size={18} />}
                    title="电话"
                    text="+86 153 4925 1783"
                  />
                  <ContactItem
                    icon={<MapPin size={18} />}
                    title="地址"
                    text="中国 · 西安"
                  />
                </div>

                <p className="text-center text-[10px] leading-5 text-neutral-500">
                  <strong className="block text-[11px] font-semibold text-neutral-800">
                    SuperUnknown
                  </strong>
                  与你一同探索未知
                </p>
              </aside>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={closeForm}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/55 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-dialog-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative my-auto w-full max-w-[720px] rounded-[26px] border border-black/10 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.3)] sm:p-8"
            >
              <button
                type="button"
                onClick={closeForm}
                disabled={status === "loading"}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-neutral-950 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="关闭联系表单"
              >
                <X size={19} />
              </button>

              <div className="mb-7 pr-12">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                  项目咨询
                </p>
                <h2
                  id="contact-dialog-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl"
                >
                  告诉我们您的想法
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  填写下面的信息，我们会尽快与您联系。
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField label="姓名" htmlFor="contact-name">
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoFocus
                      placeholder="您的姓名"
                      autoComplete="name"
                      className="contact-input"
                    />
                  </FormField>
                  <FormField label="邮箱" htmlFor="contact-email">
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      autoComplete="email"
                      className="contact-input"
                    />
                  </FormField>
                </div>

                <div className="mt-5">
                  <FormField label="项目类型" htmlFor="contact-project-type">
                    <select
                      id="contact-project-type"
                      name="projectType"
                      className="contact-input appearance-none"
                    >
                      <option>Web 系统与网站开发</option>
                      <option>移动应用开发</option>
                      <option>企业级应用系统</option>
                      <option>数据库设计与优化</option>
                      <option>系统集成与技术咨询</option>
                      <option>智能 Agent 应用开发</option>
                      <option>其他</option>
                    </select>
                  </FormField>
                </div>

                <div className="mt-5">
                  <FormField label="项目描述" htmlFor="contact-message">
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      placeholder="简单描述您的项目需求..."
                      className="contact-input min-h-[110px] resize-y"
                    />
                  </FormField>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-neutral-950 px-7 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
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

                {status === "success" ? (
                  <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
                    <CheckCircle size={16} />
                    消息已发送，我们会尽快回复您！
                  </div>
                ) : null}
                {status === "error" ? (
                  <p className="mt-4 text-sm text-rose-500">{errorMsg}</p>
                ) : null}
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-neutral-800"
      >
        {label}
      </label>
      {children}
    </div>
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
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.06] bg-white/70 text-neutral-700">
        {icon}
      </div>
      <div className="min-w-0">
        <h3 className="text-xs font-medium text-neutral-500">{title}</h3>
        <p className="truncate text-sm font-medium text-neutral-900">{text}</p>
      </div>
    </div>
  );
}
