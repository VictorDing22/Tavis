import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 md:pt-44 md:pb-28">
      <div className="max-w-content mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.1] tracking-tight max-w-[700px] animate-fade-in-up">
          用技术驱动
          <br />
          业务创新
        </h1>
        <p className="text-lg sm:text-xl lg:text-[22px] text-secondary max-w-[560px] mt-6 leading-relaxed animate-fade-in-up [animation-delay:100ms] opacity-0">
          太微工作室聚焦软件开发，将信息技术与产业实践结合，为教育、工业、医疗等领域提供可靠的数字化解决方案。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up [animation-delay:200ms] opacity-0">
          <a
            href="#cases"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all min-h-[48px]"
          >
            查看案例
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-border text-primary text-sm font-medium hover:bg-surface active:scale-[0.98] transition-all min-h-[48px]"
          >
            开始合作
          </a>
        </div>
      </div>
    </section>
  );
}
