/* ============================================================
   TODO: 自定义团队成员
   1. 修改 MEMBERS 数组增删改成员
   2. 替换 gradient 为真实头像：添加 image 字段
      例如: image: "/team/zhangsan.jpg"
   3. 页面支持 1~6 名成员自适应布局
   ============================================================ */
const MEMBERS: {
  name: string;
  role: string;
  desc: string;
  gradient: string;
}[] = [
  {
    name: "成员姓名",
    role: "创始人 / 全栈工程师",
    desc: "负责工作室整体技术方向与架构设计，多年项目开发与管理经验。",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    name: "成员姓名",
    role: "前端负责人",
    desc: "专注前端工程化与用户体验，熟悉 React / Vue 生态及小程序开发。",
    gradient: "from-pink-400 to-rose-500",
  },
  {
    name: "成员姓名",
    role: "后端工程师",
    desc: "擅长高并发系统设计、数据库优化与第三方系统集成。",
    gradient: "from-sky-400 to-cyan-400",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-tight">
            团队成员
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-[600px] mt-4 leading-relaxed">
            以校级科研团队和优秀学生为基础，校内外教授、高工担任专家顾问，与多家行业名企达成战略合作。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEMBERS.map((m, i) => (
            <div key={i} className="group">
              {/* 头像占位 — TODO: 替换为 <Image src={m.image} /> */}
              <div
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${m.gradient} flex items-center justify-center mb-4 overflow-hidden`}
              >
                <span className="text-white font-medium text-sm">头像</span>
              </div>
              <h3 className="text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-secondary mt-0.5 mb-2">{m.role}</p>
              <p className="text-sm text-secondary leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
