"use client";

import {
  GraduationCap,
  Factory,
  Plane,
  Landmark,
  ShieldCheck,
  HeartPulse,
  HandHeart,
} from "lucide-react";
import type { ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const INDUSTRIES: { icon: ReactNode; label: string }[] = [
  { icon: <GraduationCap size={28} />, label: "教育" },
  { icon: <Factory size={28} />, label: "工业" },
  { icon: <Plane size={28} />, label: "航空" },
  { icon: <Landmark size={28} />, label: "考古" },
  { icon: <ShieldCheck size={28} />, label: "安全" },
  { icon: <HeartPulse size={28} />, label: "医疗" },
  { icon: <HandHeart size={28} />, label: "康养" },
];

export default function Industries() {
  return (
    <section className="py-20 md:py-24 bg-dark text-white">
      <div className="max-w-content mx-auto px-6 text-center">
        <AnimateOnScroll>
          <p className="text-xs uppercase tracking-[4px] text-neutral-500 mb-12">
            覆盖行业领域
          </p>
        </AnimateOnScroll>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {INDUSTRIES.map((item, i) => (
            <AnimateOnScroll key={item.label} variant="scale-up" delay={i * 0.06}>
              <div className="flex flex-col items-center gap-3 w-20 group">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-accent-light group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  {item.label}
                </span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
