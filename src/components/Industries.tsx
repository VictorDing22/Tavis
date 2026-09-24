"use client";

import {
  Factory,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Plane,
  ShieldCheck,
} from "lucide-react";
import type { ReactNode } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

interface Industry {
  icon: ReactNode;
  label: string;
}

const INDUSTRIES: Industry[] = [
  { icon: <GraduationCap size={26} />, label: "教育" },
  { icon: <Factory size={26} />, label: "工业" },
  { icon: <Plane size={26} />, label: "航空" },
  { icon: <Landmark size={26} />, label: "考古" },
  { icon: <ShieldCheck size={26} />, label: "安全" },
  { icon: <HeartPulse size={26} />, label: "医疗" },
  { icon: <HandHeart size={26} />, label: "康养" },
];

const SECOND_ROW = [...INDUSTRIES.slice(3), ...INDUSTRIES.slice(0, 3)];

function IndustryGroup({ industries }: { industries: Industry[] }) {
  return (
    <div className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20">
      {industries.map((industry, index) => (
        <div
          key={industry.label}
          className="group flex shrink-0 items-center gap-5"
        >
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.12] bg-white/[0.055] text-neutral-400 shadow-[0_12px_32px_rgba(0,0,0,0.24)] transition-all duration-300 group-hover:border-accent/45 group-hover:bg-accent/10 group-hover:text-accent-light ${
              index % 2 === 0 ? "-rotate-3" : "rotate-3"
            }`}
          >
            {industry.icon}
          </div>
          <span className="whitespace-nowrap text-xl font-medium tracking-[-0.025em] text-neutral-300 transition-colors group-hover:text-white sm:text-2xl lg:text-[28px]">
            {industry.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function IndustryMarquee({
  industries,
  reverse = false,
}: {
  industries: Industry[];
  reverse?: boolean;
}) {
  return (
    <div
      className="industry-marquee overflow-hidden py-2"
      aria-hidden="true"
    >
      <div
        className={`industry-marquee-track flex w-max ${
          reverse ? "industry-marquee-track-reverse" : ""
        }`}
      >
        <IndustryGroup industries={industries} />
        <IndustryGroup industries={industries} />
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section className="overflow-hidden bg-dark py-20 text-white md:py-24">
      <div className="mx-auto max-w-content px-6 text-center">
        <AnimateOnScroll>
          <p className="text-xs uppercase tracking-[4px] text-neutral-500">
            覆盖行业领域
          </p>
        </AnimateOnScroll>
      </div>

      <ul className="sr-only">
        {INDUSTRIES.map((industry) => (
          <li key={industry.label}>{industry.label}</li>
        ))}
      </ul>

      <AnimateOnScroll variant="fade" duration={0.8}>
        <div className="mt-12 space-y-7 md:mt-14 md:space-y-10">
          <IndustryMarquee industries={INDUSTRIES} />
          <IndustryMarquee industries={SECOND_ROW} reverse />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
