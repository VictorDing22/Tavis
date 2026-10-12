"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { CASES } from "@/data/cases";
import styles from "./CasesPage.module.css";

const FILTERS = [
  { id: "all", label: "全部作品" },
  { id: "ai", label: "AI 应用" },
  { id: "web", label: "Web 平台" },
  { id: "miniapp", label: "小程序" },
] as const;
type Filter = (typeof FILTERS)[number]["id"];

// Presentation categories are independent of the shared detail-page content.
const CATEGORIES: Record<string, Filter[]> = {
  "maic-classroom": ["ai", "web"],
  "procurement-agent": ["ai", "web"],
  "campus-sports-saas": ["web"],
  "acoustic-emission": ["web"],
  "smart-aging-platform": ["web", "miniapp"],
};

// Cuberto /projects: 70px reveal over 2s; filter fade-out .25s / fade-in .2s.
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const LIST_SCROLL_KEY = "cases:list-scroll";
const RESTORE_MARKER_KEY = "cases:restore-position";

function ProjectCursor() {
  const cursor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!media.matches || !cursor.current) return;

    const node = cursor.current;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frame = 0;

    const tick = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      const card = (event.target as Element | null)?.closest?.("[data-cursor]");
      node.dataset.active = card ? "true" : "false";
    };
    const onLeave = () => {
      node.dataset.active = "false";
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={cursor} className={styles.cursor} data-active="false" aria-hidden="true">
      <span className={styles.cursorBubble}>查看</span>
    </div>
  );
}

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
      {!reducedMotion && <ProjectCursor />}
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
                <span className={styles.rollClip}>
                  <span className={styles.rollText} data-label={category.label}>{category.label}</span>
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
                        data-cursor
                        onClick={() => sessionStorage.setItem(LIST_SCROLL_KEY, String(window.scrollY))}
                        aria-label={`${caseStudy.title}，查看项目详情`}>
                        <div className={styles.preview}>
                          <Image src={caseStudy.cover} alt={caseStudy.title} fill priority={index < 2}
                            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1239px) 44vw, 500px"
                            className={styles.image} />
                        </div>
                        <h2 className={styles.caption}>
                          <b>{caseStudy.title}</b>
                          <span aria-hidden="true"> – </span>
                          {caseStudy.summary}
                        </h2>
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
        <div className={styles.glow} aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <motion.div className={styles.outroInner}
          initial={{ opacity: 0, y: reducedMotion ? 0 : 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }} transition={{ duration: reducedMotion ? 0 : 1.4, ease: EXPO_OUT }}>
          <h2 id="projects-contact-title">有一个想做<br />或想重做的产品？</h2>
          <p className={styles.outroText}>告诉我们产品现在的状态、你想达成的目标，以及正在遇到的阻碍。</p>
          <Link href="/#contact" className={styles.contact}>
            <span className={styles.rollClip}>
              <span className={styles.rollText} data-label="聊聊你的项目">聊聊你的项目</span>
            </span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
