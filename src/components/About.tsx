"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import CountUp from "./CountUp";

/* ============================================================
   TODO: 自定义关于我们内容
   - 修改下方文案段落
   - 修改 STATS 数组中的数字和标签
   ============================================================ */
const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 2023, suffix: "", label: "成立年份" },
  { value: 6, suffix: "+", label: "覆盖行业" },
  { value: 10, suffix: "+", label: "完成项目" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <AnimateOnScroll>
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight leading-tight">
              关于我们
            </h2>
            <p className="text-base sm:text-lg text-secondary max-w-[600px] mt-4 leading-relaxed">
              我们相信好的软件来自对业务的深刻理解，而非技术的堆砌。
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-[700px]">
          <AnimateOnScroll delay={0.1}>
            <p className="text-lg text-secondary leading-loose mb-6">
              太微工作室成立于 2023 年 5 月，面向信息技术产业发展的行业需求，聚焦软件开发，通过
              ORU 模式将信息技术与产业实践结合，推动校企合作与科研创新。
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="text-lg text-secondary leading-loose mb-6">
              产品与解决方案已应用于教育、工业、航空、考古、安全、医疗和康养等多个业务领域，持续推动区域智能化实体经济发展。
            </p>
          </AnimateOnScroll>

          {/* Stats with CountUp */}
          <AnimateOnScroll delay={0.3}>
            <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-border">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                    <CountUp
                      end={s.value}
                      suffix={s.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-sm text-secondary mt-2">{s.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
