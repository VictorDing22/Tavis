"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";


const TEAM_MEMBERS: {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  gradient: string;
  image?: string;
}[] = [
  {
    name: "张迪",
    role: "项目指导",
    bio: "以系统化教学改革为抓手，推动人才培养模式向能力本位、实践导向升级。主持或参与十余项教改与科研项目，在教学管理、科研组织与项目统筹方面经验丰富；长期深耕科研产出，发表多篇相关学术论文。现任西安欧亚学院科研与社会服务委员会委员，为工作室提供教研与项目层面的专业指导。",
    skills: [
      "教学改革",
      "人才培养",
      "项目统筹",
      "科研管理",
      "教学管理",
      "教改课题",
      "学术论文",
    ],
    gradient: "from-amber-200 to-rose-200",
    image: "/team/zhang-di.png",
  },
  {
    name: "定赛尔",
    role: "全栈工程师",
    bio: "全栈交付：熟悉 React / Next.js / Vue 与 TypeScript 工程化，覆盖小程序与 Three.js 等前端场景。后端侧重高并发与分布式设计，使用 Spring Boot / Node.js，结合 Kafka、Flink 与 MySQL / Redis 等做性能与数据链路优化。熟悉 RAG、向量检索与 LangChain 等大模型应用落地，并负责 Docker、K8s 与 CI/CD 部署保障稳定运行。",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Webpack",
      "Three.js",
      "微信小程序",
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "golang",
      "高并发架构",
      "Kafka",
      "Flink",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "RAG",
      "LangChain",
      "向量检索",
      "LLM API",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
    gradient: "from-pink-400 to-rose-500",
    image: "/team/dingsaier.png",
  },
  {
    name: "孙淑海",
    role: "全栈工程师",
    bio: "全栈交付：精通全栈开发，熟悉前后端开发与服务部署，智能体开发，具备从需求梳理→原型设计→算法逻辑开发→前后端代码编写→联调测试→线上部署→项目全流程交付一站式落地能力，可独立承接全栈项目开发、功能定制、算法适配与成品交付，高效完成从技术方案到商业成品的完整落地。",
    skills: [
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Webpack",
      "Three.js",
      "微信小程序",
      "Node.js",
      "Java",
      "Spring Boot",
      "Python",
      "高并发架构",
      "Kafka",
      "Flink",
      "MySQL",
      "TDengine",
      "HBase",
      "Redis",
      "gRPC",
      "RAG",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
    gradient: "from-pink-400 to-rose-500",
    image: "/team/sun-shuhai.png",
  },
  {
    name: "李鑫",
    role: "前端 / AI 应用开发工程师",
    bio: "具备前端工程与 AI 应用开发能力，能够完成 Web 应用与基础智能系统的开发实现。前端方向熟悉 React、Vue 与 Next.js，能够进行组件化开发、页面搭建与交互优化，具备一定的工程化与性能优化意识。在 AI 应用方向，能够基于大模型能力进行基础应用开发，同时具备鸿蒙应用开发基础能力，可参与多端应用的功能实现与适配开发。",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "微信小程序",
      "鸿蒙应用开发",
      "Node.js",
      "Python",
      "MySQL",
      "Redis",
      "Docker",
      "Git",
      "RAG",
      "LangChain",
      "LLM API",
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    image: "/team/lixin.png",
  },
  {
    name: "翁子衡",
    role: "后端开发工程师",
    bio: "具备相关协调开发能力，能够完成 Web、小程序及基础后端服务的开发与联调工作。前端方面熟悉 React、Vue 与 Next.js，能够进行组件化开发与基础交互实现；移动端具备微信小程序开发经验，并了解鸿蒙应用与小程序开发的基础能力。在 AI 应用方向，能够结合大模型能力进行应用层设计与集成",
    skills: [
      "React",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "微信小程序",
      "鸿蒙应用开发",
      "Node.js",
      "Python",
      "Express",
      "MySQL",
      "Redis",
      "Docker",
      "Git",
      "RAG",
      "LLM API",
    ],
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
    image: "/team/wengziheng.png",
  },
  {
    name: "安姝菲",
    role: "前端开发 / 测试工程师",
    bio: "具备前端开发与基础测试能力，能够参与 Web 项目的页面开发与功能验证工作。前端方面熟悉 React 与 Vue，能够完成基础页面搭建与组件开发，配合团队进行界面实现与交互优化。在测试方向，能够进行基础功能测试与问题复现，参与接口与页面的联调验证，保障系统稳定性与基本体验。能够配合完成需求落地与版本迭代。",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue.js",
      "TypeScript",
      "微信小程序",
      "基础测试",
      "功能测试",
      "接口测试",
      "Git",
    ],
    gradient: "from-pink-400 via-rose-400 to-orange-400",
    image: "/team/anshufei.png",
  },
  {
    name: "何绍航",
    role: "后端开发工程师",
    bio: "前端覆盖 React / Vue 与 Three.js 可视化场景，熟悉 TypeScript 工程化开发。后端以 Java + Spring Boot 为主，结合 MySQL 与 Redis 完成数据层设计与性能优化。了解 RAG 检索增强生成技术栈，具备 Docker 容器化部署经验，持续向全栈方向成长。",
    skills: [
      "React",
      "Vue.js",
      "Three.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "MySQL",
      "Redis",
      "RAG",
      "Docker",
    ],
    gradient: "from-blue-400 to-indigo-500",
    image: "/team/heshaohang.png",
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
                  {/* Avatar — 统一正方形外框，照片居中裁切 */}
                  <div
                    style={{ direction: "ltr" }}
                    className="mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px]"
                  >
                    <div
                      className={`relative aspect-square w-full rounded-2xl overflow-hidden ring-1 ring-black/80 ${
                        member.image
                          ? "bg-neutral-100"
                          : `bg-gradient-to-br ${member.gradient} flex items-center justify-center`
                      }`}
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
                          className="object-cover object-center"
                        />
                      ) : (
                        <span className="text-white font-medium text-sm">
                          头像
                        </span>
                      )}
                    </div>
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
