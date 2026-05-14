"use client";

import Image from "next/image";
import {
  Globe,
  Smartphone,
  Layers,
  Database,
  Settings,
} from "lucide-react";
import type { ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";


const SERVICES: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <Globe className="w-7 h-7" strokeWidth={1.5} />,
    title: "Web 系统与网站开发",
    desc: "企业官网、电商平台、SaaS 系统，响应式设计与性能优化，从原型到上线全流程交付。",
  },
  {
    icon: <Smartphone className="w-7 h-7" strokeWidth={1.5} />,
    title: "移动应用开发",
    desc: "iOS / Android 原生及跨平台应用，微信小程序开发，覆盖设计、开发、上架全环节。",
  },
  {
    icon: <Layers className="w-7 h-7" strokeWidth={1.5} />,
    title: "企业级应用系统",
    desc: "ERP、CRM、OA 等管理系统定制开发，对接现有业务流程，支持多租户与权限体系。",
  },
  {
    icon: <Database className="w-7 h-7" strokeWidth={1.5} />,
    title: "数据库设计与优化",
    desc: "数据库架构设计、性能调优、数据迁移方案，保障系统稳定高效运行。",
  },
  {
    icon: <Settings className="w-7 h-7" strokeWidth={1.5} />,
    title: "系统集成与技术咨询",
    desc: "架构评审、技术选型、第三方系统对接、性能调优与代码审查，提供专业技术顾问服务。",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-dark">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/about/desk.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-dark/85" />
      </div>

      <div className="relative max-w-content mx-auto px-6 py-24 md:py-32">
        <AnimateOnScroll>
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-tight text-white">
              我们能做什么
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 max-w-[600px] mt-4 leading-relaxed">
              从需求分析、系统设计到开发部署，覆盖产品全周期的技术服务。
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 0.08}>
              <div className="group border border-white/10 bg-white/[0.04] backdrop-blur-sm rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 h-full">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-5">
                  {s.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Bottom fade to next light section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
