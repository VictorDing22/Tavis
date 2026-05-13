"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

/* ============================================================
   TODO: 自定义案例
   - 修改 CASES 数组增删改案例
   - 想替换占位图为真实截图时，加 image 字段:
       image: "/cases/project1.png"
     图片放到 public/cases/ 下；保留 gradient 作为图片背景框色。
   - tags / highlights 可自由增减
   ============================================================ */
const CASES: {
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
  gradient: string;
  image?: string;
  highlights?: string[];
}[] = [
  {
    title: "中医经络虚拟仿真教学平台",
    subtitle: "高校中医专业 · 3D 交互教学",
    desc: "支撑高校中医专业课程教学，帮助学生识别十四条经络并进行交互答题、经络循行等操作。已在智慧树虚拟仿真实验平台上线使用。",
    tags: ["Three.js", "WebGL", "3D 可视化"],
    gradient: "from-stone-100 to-amber-50",
    image: "/cases/meridian.png",
    highlights: ["3D 经络模型交互", "在线答题系统", "智慧树平台上线"],
  },
  {
    title: "问卷调查测评系统",
    subtitle: "教育创新研究院 · SaaS 平台",
    desc: "针对问卷的设计、发布、收集、报告、统计等环节进行全面管理。支持多题型（是非题、单选、多选、填空、矩阵题）、逻辑跳转、自定义皮肤与本地化部署。",
    tags: ["React", "Node.js", "数据分析"],
    gradient: "from-teal-50 to-emerald-50",
    image: "/cases/questionnaire.png",
    highlights: ["多题型 + 逻辑跳转", "自定义皮肤与报告", "本地化部署支持"],
  },
  {
    title: "私人志愿定制平台",
    subtitle: "招生办 · 微信小程序",
    desc: "为高考学生推荐符合分数要求、自身兴趣等维度的定制化志愿方案，并提供专业就业薪资、就业前景等数据分析功能。",
    tags: ["微信小程序", "推荐算法", "数据分析"],
    gradient: "from-amber-400 to-orange-500",
    highlights: ["多维度志愿推荐", "就业前景分析", "小程序全端适配"],
  },
  {
    title: "学生创业孵化平台",
    subtitle: "高校创业服务 · 综合平台",
    desc: "通过信息通讯技术为有创业需求的人员提供创业课程、活动培训和创业大赛等模块的一站式信息服务和数据资源共享。",
    tags: ["Vue.js", "Spring Boot", "平台开发"],
    gradient: "from-emerald-400 to-teal-500",
    highlights: ["一站式创业服务", "课程与赛事管理", "多角色权限体系"],
  },
  {
    title: "高校绩效考核检测与分析系统",
    subtitle: "高校管理 · 数据系统",
    desc: "基于激励和目标管理理论，建立科学的绩效考核体系和指标体系，实现教师能力提升、人才管理改善和学校核心竞争力增强。",
    tags: ["数据可视化", "管理系统", "指标体系"],
    gradient: "from-sky-400 to-blue-500",
    highlights: ["科学指标体系", "多维绩效分析", "可视化报表"],
  },
  {
    title: "声发射工业检测平台",
    subtitle: "工业安全 · IoT + AI",
    desc: "依托声发射无损感知技术，融合 AI 智能算法与物联网实时传输，全天候在线监测压力容器、管道、风电等工业核心设备。精准捕捉早期微裂纹、疲劳损伤、腐蚀隐患。",
    tags: ["AI", "IoT", "实时监测", "无损检测"],
    gradient: "from-slate-500 to-zinc-700",
    highlights: [
      "无损不停机检测",
      "AI 降噪识别算法",
      "24h 在线云监测",
      "多行业适配",
    ],
  },
];

export default function CasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
        <div className="max-w-content mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={15} />
            返回首页
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-primary">
            我们的作品
          </h1>
          <p className="text-lg sm:text-xl text-secondary max-w-[600px] mt-6 leading-relaxed">
            从 3D 可视化到工业 IoT，我们为真实业务场景构建技术解决方案。
          </p>
        </div>
      </section>

      {/* Cases list — Polecat style: alternating large cards */}
      <section className="pb-24 md:pb-32 bg-white">
        <div className="max-w-content mx-auto px-6 space-y-16 md:space-y-24">
          {CASES.map((c, i) => (
            <AnimateOnScroll key={c.title}>
              <div
                className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image / Placeholder — Polecat style: image fills rounded card */}
                <div
                  className={`relative rounded-[20px] bg-gradient-to-br ${c.gradient} overflow-hidden ${
                    i % 2 === 1 ? "[direction:ltr]" : ""
                  }`}
                >
                  {c.image ? (
                    <div className="relative aspect-[16/10] m-3 md:m-4 rounded-xl overflow-hidden bg-white/90">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center">
                      <span className="text-white/70 text-sm font-medium">
                        项目截图
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                  <p className="text-xs uppercase tracking-widest text-secondary font-medium mb-3">
                    {c.subtitle}
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4 tracking-tight">
                    {c.title}
                  </h2>
                  <p className="text-base text-secondary leading-relaxed mb-6">
                    {c.desc}
                  </p>

                  {/* Highlights */}
                  {c.highlights && (
                    <ul className="space-y-2 mb-6">
                      {c.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-sm text-primary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full border border-border text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-dark text-white text-center">
        <div className="max-w-content mx-auto px-6">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              有类似的项目需求？
            </h2>
            <p className="text-base text-neutral-400 mb-8">
              告诉我们您的想法，我们来实现。
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-primary text-sm font-medium hover:bg-neutral-100 active:scale-[0.98] transition-all"
            >
              联系我们
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
