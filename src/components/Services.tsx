import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Settings,
} from "lucide-react";
import type { ReactNode } from "react";

/* ============================================================
   TODO: 自定义服务内容
   修改下方 SERVICES 数组即可增删改服务卡片，
   页面会自动适配任意数量（1~6 张卡片均可正常展示）。
   ============================================================ */
const SERVICES: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <Globe className="w-10 h-10" strokeWidth={1.5} />,
    title: "Web 系统与网站开发",
    desc: "企业官网、电商平台、SaaS 系统，响应式设计与性能优化，从原型到上线全流程交付。",
  },
  {
    icon: <Smartphone className="w-10 h-10" strokeWidth={1.5} />,
    title: "移动应用开发",
    desc: "iOS / Android 原生及跨平台应用，微信小程序开发，覆盖设计、开发、上架全环节。",
  },
  {
    icon: <Layers className="w-10 h-10" strokeWidth={1.5} />,
    title: "企业级应用系统",
    desc: "ERP、CRM、OA 等管理系统定制开发，对接现有业务流程，支持多租户与权限体系。",
  },
  {
    icon: <Database className="w-10 h-10" strokeWidth={1.5} />,
    title: "数据库设计与优化",
    desc: "数据库架构设计、性能调优、数据迁移方案，保障系统稳定高效运行。",
  },
  {
    icon: <Settings className="w-10 h-10" strokeWidth={1.5} />,
    title: "系统集成与技术咨询",
    desc: "架构评审、技术选型、第三方系统对接、性能调优与代码审查，提供专业技术顾问服务。",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-24 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-tight">
            我们能做什么
          </h2>
          <p className="text-base sm:text-lg text-secondary max-w-[600px] mt-4 leading-relaxed">
            从需求分析、系统设计到开发部署，覆盖产品全周期的技术服务。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-border rounded-2xl p-8 transition-all hover:border-neutral-300 hover:-translate-y-0.5"
            >
              <div className="text-primary mb-5">{s.icon}</div>
              <h3 className="text-base font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
