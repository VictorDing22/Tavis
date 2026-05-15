"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CountUp from "./CountUp";


const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 2023, suffix: "", label: "工作室成立" },
  { value: 7, suffix: "+", label: "覆盖行业领域" },
  { value: 50, suffix: "+", label: "已交付项目" },
  { value: 5, suffix: "+", label: "战略合作企业" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white text-center">
      <div className="max-w-content mx-auto px-6">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-tight text-primary">
            来自西安欧亚学院的跨学科技术团队
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <p className="text-base md:text-lg text-secondary max-w-[680px] mx-auto mt-6 leading-relaxed">
            充分发挥校企在人工智能、信息技术、信息安全等领域的优势资源
            <br className="hidden sm:block" />
            通过 ORU 模式将科研成果与产业应用深度融合
          </p>
        </AnimateOnScroll>

        {/* Stats */}
        <AnimateOnScroll delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-10 border-t border-border">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl sm:text-4xl lg:text-[46px] font-semibold tracking-tight text-primary">
                  <CountUp end={s.value} suffix={s.suffix} duration={2} />
                </div>
                <p className="text-sm text-secondary mt-2">{s.label}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
