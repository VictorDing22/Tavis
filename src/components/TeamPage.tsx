"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

/* ============================================================
   TODO: 自定义团队成员详细信息
   1. 修改 TEAM_MEMBERS 数组增删改成员
   2. 替换 gradient 为真实头像：添加 image 字段
   3. 可自由添加 skills 标签
   ============================================================ */
const TEAM_MEMBERS: {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  gradient: string;
}[] = [
  {
    name: "成员姓名",
    role: "创始人 / 全栈工程师",
    bio: "负责工作室整体技术方向与架构设计，多年项目开发与管理经验。专注于系统架构设计、技术选型与团队管理，推动工作室从零到一的技术体系建设。",
    skills: ["架构设计", "项目管理", "React", "Node.js", "Python"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    name: "成员姓名",
    role: "前端负责人",
    bio: "专注前端工程化与用户体验，熟悉 React / Vue 生态及小程序开发。追求极致的交互体验与代码质量，负责工作室所有面向用户端的产品交付。",
    skills: ["React", "Vue.js", "TypeScript", "小程序", "Three.js"],
    gradient: "from-pink-400 to-rose-500",
  },
  {
    name: "成员姓名",
    role: "后端工程师",
    bio: "擅长高并发系统设计、数据库优化与第三方系统集成。负责后端架构搭建与性能调优，确保系统在高负载下的稳定运行。",
    skills: ["Java", "Spring Boot", "MySQL", "Redis", "微服务"],
    gradient: "from-sky-400 to-cyan-400",
  },
];

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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <Link
            href="/#team"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            返回首页
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-primary">
            认识我们的团队
          </h1>
          <p className="text-lg sm:text-xl text-secondary max-w-[600px] mt-6 leading-relaxed">
            一支由校级科研团队与优秀学生组成的跨学科技术团队，校内外教授、高工担任专家顾问。
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="space-y-20 md:space-y-28">
            {TEAM_MEMBERS.map((member, i) => (
              <AnimateOnScroll key={i}>
                <div
                  className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                  style={i % 2 === 1 ? { direction: "rtl" } : undefined}
                >
                  {/* Avatar */}
                  <div
                    style={{ direction: "ltr" }}
                    className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center overflow-hidden`}
                  >
                    {/* TODO: 替换为 <Image src={member.image} /> */}
                    <span className="text-white font-medium">头像</span>
                  </div>

                  {/* Info */}
                  <div style={{ direction: "ltr" }}>
                    <p className="text-sm font-medium text-accent mb-2">
                      {member.role}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
                      {member.name}
                    </h2>
                    <p className="text-base text-secondary leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1.5 rounded-full border border-border text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

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
