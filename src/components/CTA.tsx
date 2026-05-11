import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-semibold tracking-tight leading-tight mb-5">
          有项目想法？
          <br />
          聊聊看。
        </h2>
        <p className="text-base sm:text-lg text-secondary max-w-[500px] mx-auto mb-8">
          无论是全新产品还是现有系统优化，我们都能提供合适的技术方案。
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-neutral-800 active:scale-[0.98] transition-all min-h-[48px]"
        >
          联系我们
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
