"use client";

import { ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function CTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden bg-dark text-white">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="relative max-w-content mx-auto px-6 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-semibold tracking-tight leading-tight mb-6">
            有项目想法？
            <br />
            <span className="gradient-text">聊聊看。</span>
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15}>
          <p className="text-base sm:text-lg text-neutral-400 max-w-[500px] mx-auto mb-10">
            无论是全新产品还是现有系统优化，我们都能提供合适的技术方案。
          </p>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98] transition-all min-h-[52px]"
          >
            联系我们
            <ArrowRight size={16} />
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
