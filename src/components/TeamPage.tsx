"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
