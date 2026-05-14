"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const SLIDES = ["/hero/slide-1.png", "/hero/slide-2.png"];
const SLIDE_DURATION_MS = 6000;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (SLIDES.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 8, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[index]}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark/85 via-dark/70 to-dark/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />

      {/* Accent glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 py-32 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[800px]"
        >
          <motion.p
            variants={item}
            className="text-sm tracking-[4px] uppercase text-accent-light mb-6 font-medium"
          >
            太微工作室 · Tavis Studio
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
          >
            用技术驱动
            <br />
            <span className="gradient-text">业务创新</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-neutral-300 max-w-[560px] mt-7 leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]"
          >
            聚焦软件开发，将信息技术与产业实践结合，为教育、工业、医疗等领域提供可靠的数字化解决方案。
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/cases"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-accent/30 active:scale-[0.98] transition-all min-h-[52px]"
            >
              查看案例
              <ArrowRight size={16} />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/10 active:scale-[0.98] transition-all min-h-[52px]"
            >
              开始合作
            </a>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        {SLIDES.length > 1 && (
          <div className="absolute bottom-12 left-6 right-6 max-w-content mx-auto flex gap-2 items-center">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`切换到第 ${i + 1} 张`}
                className="h-[2px] flex-1 max-w-[60px] bg-white/20 overflow-hidden rounded-full"
              >
                <motion.div
                  className="h-full bg-white"
                  initial={false}
                  animate={{
                    width: i === index ? "100%" : i < index ? "100%" : "0%",
                  }}
                  transition={{
                    duration: i === index ? SLIDE_DURATION_MS / 1000 : 0.3,
                    ease: "linear",
                  }}
                  key={`${i}-${index}`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Bottom fade to About (white) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
