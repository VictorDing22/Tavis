"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { CASES } from "@/data/cases";
import styles from "./CasesPage.module.css";

const FILTERS = [
  { id: "all", label: "全部作品" },
  { id: "web", label: "Web 平台" },
  { id: "miniapp", label: "小程序" },
  { id: "3d", label: "3D 可视化" },
] as const;
type Filter = (typeof FILTERS)[number]["id"];

// Presentation categories are independent of the shared detail-page content.
const CATEGORIES: Record<string, Filter[]> = {
  "acoustic-emission": ["web"],
  "meridian-learning": ["web", "3d"],
  "questionnaire-system": ["web"],
  "smart-aging-platform": ["web", "miniapp"],
  "air-quality-control": ["web"],
};

// Cuberto /projects: 70px reveal over 2s; filter fade-out .25s / fade-in .2s.
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const LIST_SCROLL_KEY = "cases:list-scroll";
const RESTORE_MARKER_KEY = "cases:restore-position";

export default function CasesPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const reducedMotion = useReducedMotion();
  const lenis = useRef<Lenis | null>(null);
  const items = CASES.filter((item) =>
    filter === "all" || CATEGORIES[item.slug]?.includes(filter)
  );

  useLayoutEffect(() => {
    if (sessionStorage.getItem(RESTORE_MARKER_KEY) !== "true") return;

    const savedY = Number(sessionStorage.getItem(LIST_SCROLL_KEY));
    sessionStorage.removeItem(RESTORE_MARKER_KEY);
    if (!Number.isFinite(savedY)) return;

    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    let secondFrame = 0;
    const restore = () => window.scrollTo(0, savedY);

    html.style.scrollBehavior = "auto";
    restore();
    const firstFrame = requestAnimationFrame(() => {
      restore();
      secondFrame = requestAnimationFrame(() => {
        restore();
        html.style.scrollBehavior = previousBehavior;
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      html.style.scrollBehavior = previousBehavior;
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const html = document.documentElement;
    const oldScrollBehavior = html.style.scrollBehavior;
    const stop = () => {
      cancelAnimationFrame(frame);
      lenis.current?.destroy();
      lenis.current = null;
      html.style.scrollBehavior = oldScrollBehavior;
    };
    const sync = () => {
      stop();
      if (!media.matches) return;
      html.style.scrollBehavior = "auto";
      const instance = new Lenis({ lerp: 0.1, smoothWheel: true });
      lenis.current = instance;
      const tick = (time: number) => {
        instance.raf(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.projects} aria-labelledby="projects-title">
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 id="projects-title" className={styles.title}>
              <motion.span initial={{ y: reducedMotion ? 0 : "120%" }} animate={{ y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 1.7, ease: EXPO_OUT }}>
                我们的作品
              </motion.span>
            </h1>
            <motion.p className={styles.intro}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 1.2, delay: reducedMotion ? 0 : 0.1, ease: EXPO_OUT }}>
              让想法成为现实，<br className={styles.mobileBreak} />创造真正有用的数字产品。
            </motion.p>
          </header>
          <div className={styles.filters} role="group" aria-label="作品分类">
            {FILTERS.map((category, index) => (
              <motion.button key={category.id} type="button" className={styles.filter}
                aria-label={category.label}
                aria-pressed={filter === category.id} aria-controls="project-results"
                onClick={() => setFilter(category.id)}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : 0.2 + index * 0.04, ease: EXPO_OUT }}>
                <span className={styles.filterClip}>
                  <span className={styles.filterText} data-label={category.label}>{category.label}</span>
                </span>
              </motion.button>
            ))}
          </div>
          <p className={styles.srOnly} role="status">{FILTERS.find((item) => item.id === filter)?.label}，共 {items.length} 个项目</p>
          <div id="project-results">
            <AnimatePresence mode="wait" initial={false} onExitComplete={() => lenis.current?.resize()}>
              <motion.div key={filter} className={styles.grid} initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: reducedMotion ? 0 : 0.2 } }}
                exit={{ opacity: 0, transition: { duration: reducedMotion ? 0 : 0.25 } }}
                onAnimationComplete={() => lenis.current?.resize()}>
                {items.map((caseStudy, index) => (
                  <article key={caseStudy.slug} className={styles.item}>
                    <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 70 }}
                      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.05 }}
                      transition={{
                        y: { duration: reducedMotion ? 0 : 2, ease: EXPO_OUT, delay: reducedMotion ? 0 : (index % 2) * 0.2 },
                        opacity: { duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : (index % 2) * 0.2 },
                      }}>
                      <Link
                        href={`/cases/${caseStudy.slug}`}
                        scroll
                        className={styles.card}
                        onClick={() => sessionStorage.setItem(LIST_SCROLL_KEY, String(window.scrollY))}
                        aria-label={`${caseStudy.title}，查看项目详情`}>
                        <div className={styles.preview}>
                          <Image src={caseStudy.image} alt={caseStudy.title} fill priority={index < 2}
                            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1439px) 42vw, 500px"
                            className={styles.image} />
                        </div>
                        <div className={styles.caption}>
                          <h2>{caseStudy.title}<span aria-hidden="true"> — </span><span className={styles.summary}>{caseStudy.summary}</span></h2>
                          <span className={styles.detail}>查看项目详情 <ArrowUpRight size={17} aria-hidden="true" /></span>
                        </div>
                      </Link>
                    </motion.div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className={styles.outro} aria-labelledby="projects-contact-title">
        <div className={styles.container}>
          <motion.div initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : 1.4, ease: EXPO_OUT }}>
            <p className={styles.eyebrow}>下一个作品，与你共创</p>
            <h2 id="projects-contact-title">有个想法，<br />想让它成为现实？</h2>
            <p className={styles.outroText}>告诉我们你的目标，一起探索产品的更多可能。</p>
            <Link href="/#contact" className={styles.contact}>聊聊你的项目 <ArrowUpRight size={24} aria-hidden="true" /></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
