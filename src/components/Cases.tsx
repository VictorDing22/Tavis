"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import { motion } from "framer-motion";

/* ============================================================
   TODO: 自定义案例内容
   - 修改 CASES 数组增删改案例
   - 将 gradient 替换为真实截图：把 gradient 字段改为 image 字段
     例如: image: "/cases/project1.png"
   - tags 可自由增减，页面会自适应
   ============================================================ */
const CASES: {
  title: string;
  category: string;
  desc: string;
  tags: string[];
  gradient: string;
}[] = [
  {
    title: "中医经络虚拟仿真教学平台",
    category: "教育 · 3D 可视化",
    desc: "支撑高校中医专业课程教学，帮助学生识别十四条经络并进行交互答题。已在智慧树虚拟仿真实验上线。",
    tags: ["Three.js", "WebGL", "3D"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "问卷调查测评系统",
    category: "教育 · SaaS",
    desc: "支持多题型、逻辑跳转、自定义皮肤的问卷平台，具备统计分析与报告生成能力，支持本地化部署。",
    tags: ["React", "Node.js", "数据分析"],
    gradient: "from-pink-400 to-rose-500",
  },
  {
    title: "私人志愿定制平台",
    category: "教育 · 小程序",
    desc: "为高考学生提供基于分数、兴趣的定制化志愿推荐，涵盖专业就业薪资与前景分析。",
    tags: ["微信小程序", "推荐算法"],
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "学生创业孵化平台",
    category: "教育 · 平台",
    desc: "一站式创业信息服务平台，整合创业课程、活动培训与大赛资源，助力创业者成长。",
    tags: ["Vue.js", "Spring Boot"],
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "高校绩效考核检测与分析系统",
    category: "教育 · 管理系统",
    desc: "基于激励和目标管理理论，构建科学的绩效考核体系与指标体系，提升教师管理效能。",
    tags: ["数据可视化", "管理系统"],
    gradient: "from-sky-400 to-blue-500",
  },
  {
    title: "声发射工业检测平台",
    category: "工业 · IoT",
    desc: "融合 AI 算法与物联网技术，24 小时在线监测工业设备，精准捕捉早期损伤隐患，无损不停机。",
    tags: ["AI", "IoT", "实时监测"],
    gradient: "from-slate-500 to-zinc-700",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <AnimateOnScroll>
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-tight">
              精选案例
            </h2>
            <p className="text-base sm:text-lg text-secondary max-w-[600px] mt-4 leading-relaxed">
              我们与客户合作，为真实业务场景提供技术解决方案。
            </p>
          </div>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <AnimateOnScroll key={c.title} variant="scale-up" delay={i * 0.07}>
              <motion.div
                className="group cursor-default"
                whileHover="hover"
              >
                {/* 占位图 — TODO: 替换为真实项目截图 <Image src={c.image} /> */}
                <div
                  className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${c.gradient} overflow-hidden mb-5`}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    variants={{
                      hover: { scale: 1.08 },
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <span className="text-white/70 text-sm font-medium">
                      项目截图
                    </span>
                  </motion.div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <p className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
                  {c.category}
                </p>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                  {c.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-3">
                  {c.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/5 border border-accent/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
