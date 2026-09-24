"use client";

import Link from "next/link";
import TeamMembers from "./TeamMembers";
import AnimateOnScroll from "./AnimateOnScroll";
import headingStyles from "./CasesPage.module.css";


const VALUES: { title: string; desc: string }[] = [
  {
    title: "质量优先",
    desc: "不追求规模，只追求每个项目的交付质量。代码可维护、架构可扩展、产品可落地。",
  },
  {
    title: "深度协作",
    desc: "深入理解客户业务，不做「需求翻译机」。我们是你的技术合伙人，而不仅仅是外包供应商。",
  },
  {
    title: "持续学习",
    desc: "依托欧亚学院学术资源，保持对前沿技术的敏感度，持续将科研成果转化为产品能力。",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[88px] pb-16 md:pt-24 md:pb-20 bg-white text-[#111]">
        <div className={headingStyles.container}>
          <header className={headingStyles.header}>
            <h1 className={headingStyles.title}>
              认识我们的团队
            </h1>
            <p className={headingStyles.intro}>
              一支由校级科研团队与优秀学生组成的跨学科技术团队，校内外教授、高工担任专家顾问。
            </p>
          </header>
        </div>
      </section>

      <TeamMembers />

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-content mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary text-center mb-16">
              我们的价值观
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-3 gap-8">
            {VALUES.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="max-w-content mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary mb-4">
              想和我们合作？
            </h2>
            <p className="text-base text-secondary mb-8">
              告诉我们您的项目需求，我们会在 24 小时内回复。
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all"
            >
              联系我们
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
