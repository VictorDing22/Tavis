"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CASES } from "@/data/cases";
import HeroReel from "./HeroReel";
import Magnetic from "./Magnetic";
import ProjectCursor from "./ProjectCursor";

const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const PILL_INTERVAL_MS = 1800;

function HeroPill() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(
      () => setActive((value) => (value + 1) % CASES.length),
      PILL_INTERVAL_MS
    );
    return () => clearInterval(timer);
  }, [reducedMotion]);

  return (
    <motion.span
      aria-hidden="true"
      className="relative mx-[0.12em] hidden h-[0.8em] translate-y-[0.05em] overflow-hidden rounded-full align-baseline md:inline-block"
      initial={{ width: reducedMotion ? "1.7em" : 0 }}
      animate={{ width: "1.7em" }}
      transition={{ duration: reducedMotion ? 0 : 1.4, delay: reducedMotion ? 0 : 1, ease: EXPO_OUT }}
    >
      {CASES.map(({ slug, image, gradient }, index) => (
        <span
          key={slug}
          className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${gradient} ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        >
          {Array.isArray(image) ? (
            <span className="absolute left-1/2 top-[18%] aspect-[585/1270] w-[26%] -translate-x-1/2 overflow-hidden rounded-[0.06em] shadow-[0_6px_16px_rgba(15,23,42,0.3)]">
              <Image src={image[0]} alt="" fill sizes="60px" className="object-cover object-top" />
            </span>
          ) : (
            <span className="absolute left-[18%] top-[24%] h-full w-[110%] overflow-hidden rounded-tl-[0.06em] bg-white shadow-[0_6px_16px_rgba(15,23,42,0.25)]">
              <Image src={image} alt="" fill sizes="220px" className="object-cover object-left-top" />
            </span>
          )}
        </span>
      ))}
    </motion.span>
  );
}

function RevealLine({ children, delay }: { children: ReactNode; delay: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: reducedMotion ? 0 : "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: reducedMotion ? 0 : 1.6, delay: reducedMotion ? 0 : delay, ease: EXPO_OUT }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reducedMotion ? 0 : 1.2, delay: reducedMotion ? 0 : delay, ease: EXPO_OUT },
  });

  return (
    <section className="relative bg-white pb-20 pt-32 sm:pt-40 md:pb-28 lg:pt-44">
      {!reducedMotion && <ProjectCursor />}

      <div className="mx-auto max-w-content px-6 text-center">
        <motion.p
          {...fadeUp(0)}
          className="text-xs font-medium uppercase tracking-[0.24em] text-accent"
        >
          SuperUnknown · 软件开发工作室
        </motion.p>

        <h1 className="mt-7 text-[clamp(38px,7.2vw,104px)] font-medium leading-[1.12] tracking-[-0.04em] text-primary">
          <RevealLine delay={0.1}>为没有现成蓝图的</RevealLine>
          <RevealLine delay={0.22}>
            思想
            <HeroPill />
            赋予形态
          </RevealLine>
        </h1>

        <motion.p
          {...fadeUp(0.6)}
          className="mx-auto mt-8 max-w-[600px] text-lg leading-relaxed text-secondary sm:text-xl"
        >
          聚焦软件开发，将信息技术与产业实践结合，为教育、工业、医疗等领域提供可靠的数字化解决方案。
        </motion.p>

        <motion.div
          {...fadeUp(0.75)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Link
              href="/cases"
              className="group inline-flex h-14 min-w-[168px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              查看案例
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="inline-flex h-14 min-w-[168px] items-center justify-center rounded-full border border-primary/15 px-8 text-[15px] font-medium text-primary transition-colors duration-300 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              开始合作
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        {...fadeUp(0.9)}
        className="mx-auto mt-16 max-w-[1440px] px-4 sm:px-6 md:mt-20"
      >
        <HeroReel />
      </motion.div>
    </section>
  );
}
