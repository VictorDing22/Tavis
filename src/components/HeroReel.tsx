"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { CASES, type CaseStudy } from "@/data/cases";

const SLIDE_MS = 4800;
const FADE_S = 0.9;
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

const pad = (value: number) => String(value).padStart(2, "0");

interface ReelScreenProps {
  caseStudy: CaseStudy;
  priority?: boolean;
  eager?: boolean;
}

function ReelScreen({ caseStudy: { image }, priority = false, eager = false }: ReelScreenProps) {
  const loading = priority ? undefined : eager ? "eager" : undefined;

  if (Array.isArray(image)) {
    return (
      <div className="absolute inset-x-0 top-[9%] flex items-start justify-center gap-[4%]">
        {image.map((src, index) => (
          <div
            key={src}
            className={`relative aspect-[585/1270] w-[34%] overflow-hidden rounded-[7.5%/3.5%] shadow-[0_30px_80px_rgba(15,23,42,0.3)] md:w-[17%] ${
              index === 1 ? "mt-[8%] md:mt-[4%]" : ""
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={priority}
              loading={loading}
              sizes="(min-width: 768px) 240px, 34vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute left-[8%] top-[12%] flex h-[94%] w-[125%] flex-col overflow-hidden rounded-t-xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.25)] md:left-[12%] md:top-[10%] md:h-[96%] md:w-[76%] md:rounded-t-2xl">
      <div className="flex h-7 shrink-0 items-center gap-1.5 border-b border-black/[0.06] px-3 md:h-9 md:gap-2 md:px-4">
        <span className="h-2 w-2 rounded-full bg-[#ff605c] md:h-2.5 md:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#ffbd44] md:h-2.5 md:w-2.5" />
        <span className="h-2 w-2 rounded-full bg-[#00ca4e] md:h-2.5 md:w-2.5" />
      </div>
      <div className="relative flex-1">
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          loading={loading}
          sizes="(min-width: 768px) 1100px, 130vw"
          className="object-cover object-left-top"
        />
      </div>
    </div>
  );
}

interface ReelSlideProps {
  caseStudy: CaseStudy;
  priority?: boolean;
  animateIn?: boolean;
}

function ReelSlide({ caseStudy, priority = false, animateIn = false }: ReelSlideProps) {
  const reducedMotion = useReducedMotion();
  const enter = animateIn && !reducedMotion;

  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient}`}
      initial={enter ? { opacity: 0 } : false}
      animate={{ opacity: 1 }}
      transition={{ duration: FADE_S, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0"
        initial={enter ? { y: "6%" } : false}
        animate={{ y: 0 }}
        transition={{ duration: 1.8, ease: EXPO_OUT }}
      >
        <motion.div
          className="absolute inset-0"
          animate={reducedMotion ? undefined : { y: "-2%" }}
          transition={{ duration: SLIDE_MS / 1000 + FADE_S, ease: "linear" }}
        >
          <ReelScreen caseStudy={caseStudy} priority={priority} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroReel() {
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [scrollLinked, setScrollLinked] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panel,
    offset: ["start end", "start 0.2"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [48, 24]);

  const autoplay = playing && !reducedMotion;
  const index = step % CASES.length;
  const caseStudy = CASES[index];
  const nextCase = CASES[(index + 1) % CASES.length];

  useEffect(() => {
    if (!autoplay) return;
    const timer = setTimeout(() => setStep((value) => value + 1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [autoplay, step]);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );
    const sync = () => setScrollLinked(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <div>
      <motion.div
        ref={panel}
        style={scrollLinked ? { scale, borderRadius } : undefined}
        className="relative isolate aspect-square overflow-hidden rounded-[20px] bg-neutral-100 md:aspect-[16/8]"
      >
        <Link
          href={`/cases/${caseStudy.slug}`}
          data-cursor
          aria-label={`${caseStudy.title}，查看项目详情`}
          className={`absolute inset-0 block ${
            reducedMotion ? "" : "[@media(hover:hover)_and_(pointer:fine)]:cursor-none"
          }`}
        >
          {step > 0 && (
            <ReelSlide key={step - 1} caseStudy={CASES[(step - 1) % CASES.length]} />
          )}
          <ReelSlide
            key={step}
            caseStudy={caseStudy}
            priority={step === 0}
            animateIn={step > 0}
          />
        </Link>
        <div className="invisible absolute h-0 w-0 overflow-hidden" aria-hidden="true">
          <ReelScreen caseStudy={nextCase} eager />
        </div>
      </motion.div>

      <div className="mt-5 flex items-center justify-between gap-6 md:mt-6">
        <p className="min-w-0 truncate text-[15px] text-primary md:text-base">
          <b className="font-semibold">{caseStudy.title}</b>
          <span className="hidden text-secondary sm:inline"> — {caseStudy.subtitle}</span>
        </p>
        <div className="flex shrink-0 items-center gap-4">
          <span className="font-mono text-xs tabular-nums text-secondary">
            {pad(index + 1)} / {pad(CASES.length)}
          </span>
          <span
            className="relative hidden h-px w-24 overflow-hidden bg-primary/15 sm:block"
            aria-hidden="true"
          >
            {autoplay && (
              <motion.span
                key={step}
                className="absolute inset-y-0 left-0 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
              />
            )}
          </span>
          <button
            type="button"
            onClick={() =>
              reducedMotion ? setStep((value) => value + 1) : setPlaying((value) => !value)
            }
            aria-label={reducedMotion ? "下一个作品" : playing ? "暂停作品轮播" : "继续作品轮播"}
            className="grid h-9 w-9 place-items-center rounded-full border border-primary/15 text-primary transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {reducedMotion ? (
              <ArrowRight size={14} />
            ) : playing ? (
              <Pause size={12} fill="currentColor" />
            ) : (
              <Play size={12} fill="currentColor" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
