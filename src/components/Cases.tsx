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
    <section id="cases" className="py-20 md:py-24">
      <div className="max-w-content mx-auto px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-14 md:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-tight">
              精选案例
            </h2>
            <p className="text-base sm:text-lg text-secondary max-w-[600px] mt-4 leading-relaxed">
              我们与客户合作，为真实业务场景提供技术解决方案。
            </p>
          </div>
          {/* TODO: 如有案例详情页，可在此处添加链接 */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div key={c.title} className="group">
              {/* 占位图 — TODO: 替换为真实项目截图 <Image src={c.image} /> */}
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden`}
              >
                <span className="text-white/80 text-sm font-medium">
                  项目截图
                </span>
              </div>
              <p className="text-xs uppercase tracking-widest text-secondary mb-1.5">
                {c.category}
              </p>
              <h3 className="text-lg font-semibold mb-1.5 group-hover:text-secondary transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed mb-3">
                {c.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-surface border border-border text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
