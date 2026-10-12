"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import styles from "./Services.module.css";

interface Service {
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    title: "Web 系统与网站开发",
    description:
      "企业官网、电商平台与 SaaS 系统，从信息架构、响应式设计到性能优化和正式上线，提供完整的 Web 产品交付。",
  },
  {
    title: "移动应用开发",
    description:
      "覆盖 iOS、Android、跨平台应用与微信小程序，把业务流程转化为清晰、稳定且易于使用的移动体验。",
  },
  {
    title: "企业级应用系统",
    description:
      "围绕真实业务流程定制 ERP、CRM、OA 等管理系统，支持复杂权限、多租户架构与持续扩展。",
  },
  {
    title: "数据库设计与优化",
    description:
      "提供数据库架构设计、性能调优与数据迁移方案，让关键业务数据保持稳定、安全并具备长期演进能力。",
  },
  {
    title: "系统集成与技术咨询",
    description:
      "从架构评审、技术选型到第三方系统对接、性能优化与代码审查，为关键技术决策提供可靠支持。",
  },
  {
    title: "智能 Agent 应用开发",
    description:
      "定制业务智能体、多 Agent 协作系统、RAG 知识库与自动化任务流程，落地可自主推理和执行的 AI 应用。",
  },
];

function GeometricArtwork({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="absolute inset-y-0 right-0 w-[46%] overflow-hidden">
        {[0, 1, 2, 3, 4, 5].map((line) => (
          <span
            key={line}
            className="absolute inset-y-0 w-px bg-white/10"
            style={{ left: `${14 + line * 14}%` }}
          />
        ))}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(128,126,210,0.82),rgba(57,61,120,0.4)_37%,transparent_72%)]" />
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="absolute inset-y-0 right-0 w-[52%] overflow-hidden">
        {[0, 1, 2, 3].map((level) => (
          <span
            key={level}
            className="absolute bottom-[-42%] left-1/2 aspect-square -translate-x-1/2 rotate-45 border border-[#7779b7]/25 bg-[#31344f]/35"
            style={{ width: `${98 - level * 18}%` }}
          />
        ))}
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="absolute inset-y-0 right-0 w-[53%] overflow-hidden">
        {[0, 1, 2, 3].map((level) => (
          <span
            key={level}
            className="absolute left-1/2 aspect-square -translate-x-1/2 rounded-full border border-[#7779b7]/25 bg-[#363953]/35"
            style={{ width: `${95 - level * 18}%`, bottom: `${-48 + level * 2}%` }}
          />
        ))}
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="absolute inset-y-0 right-0 w-[54%] overflow-hidden">
        {[0, 1, 2, 3].map((level) => (
          <span
            key={level}
            className="absolute left-1/2 -translate-x-1/2 rounded-[38%] border border-[#7779b7]/25 bg-[#343750]/35"
            style={{ width: `${95 - level * 17}%`, height: `${86 - level * 16}%`, bottom: `${-23 + level * 4}%` }}
          />
        ))}
      </div>
    );
  }

  if (index === 4) {
    return (
      <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden">
        {[0, 1, 2, 3].map((level) => (
          <span
            key={level}
            className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[20%] border border-[#7779b7]/25 bg-[#343750]/30"
            style={{ width: `${86 - level * 17}%` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-y-0 right-0 w-[50%] overflow-hidden">
      {[0, 1, 2, 3].map((level) => (
        <span
          key={level}
          className="absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7779b7]/25"
          style={{ width: `${90 - level * 18}%` }}
        />
      ))}
      <span className="absolute left-1/2 top-0 h-full w-px bg-[#7779b7]/25" />
      <span className="absolute left-0 top-1/2 h-px w-full bg-[#7779b7]/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(113,109,197,0.5),transparent_58%)]" />
    </div>
  );
}

export default function Services() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;
    const cards = Array.from(main.querySelectorAll<HTMLElement>('article'));
    const desktop = window.matchMedia('(min-width: 768px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let disposed = false;
    let offsets: { top: number; bottom: number }[] = [];
    let progress: number[] = cards.map((_, i) => i === 0 ? 1 : 0);
    const paint = (index: number, value: number) => {
      const card = cards[index];
      const eased = 1 - (1 - value) ** 2;
      card.style.setProperty('--open', String(value));
      card.style.setProperty('--rows', `${value}fr`);
      card.style.setProperty('--tone', String(eased));
      card.style.setProperty('--content', String(1 - (1 - Math.max(0, (value - .4) / .6)) ** 2));
      const link = card.querySelector('a');
      if (link) link.tabIndex = value > .6 ? 0 : -1;
      card.querySelector('button')?.setAttribute('aria-expanded', String(value > .5));
    };
    let lastTime = 0;
    const tick = (time: number) => {
      frame = 0;
      if (!desktop.matches || disposed) return;
      const top = main.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const delta = Math.min(time - lastTime || 16, 64);
      lastTime = time;
      let moving = false;
      offsets.forEach((offset, i) => {
        const start = offset.top - vh * .7;
        const end = offset.bottom - vh * .8;
        const target = i === 0 || reduced.matches ? 1 : Math.max(0, Math.min(1, (-top - start) / Math.max(1, end - start)));
        const next = reduced.matches ? target : progress[i] + (target - progress[i]) * (1 - Math.exp(-delta / 180));
        progress[i] = Math.abs(next - target) < .001 ? target : next;
        paint(i, progress[i]);
        moving ||= progress[i] !== target;
      });
      if (moving) frame = requestAnimationFrame(tick);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(tick); };
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      main.style.removeProperty('height');
      cards.forEach((_, i) => paint(i, 1));
      if (desktop.matches && !reduced.matches) {
        const origin = main.getBoundingClientRect().top;
        offsets = cards.map(card => {
          const rect = card.getBoundingClientRect();
          return { top: rect.top - origin, bottom: rect.bottom - origin };
        });
        main.style.height = `${main.getBoundingClientRect().height}px`;
        cards.forEach((_, i) => paint(i, progress[i]));
        schedule();
      } else {
        progress = cards.map((_, i) => reduced.matches || i === 0 ? 1 : 0);
        cards.forEach((_, i) => paint(i, progress[i]));
      }
    };
    const toggle = (event: Event) => {
      if (desktop.matches) return;
      const button = (event.target as Element).closest('button');
      if (!button) return;
      const index = cards.findIndex(card => card.contains(button));
      if (index < 0) return;
      progress[index] = progress[index] > .5 ? 0 : 1;
      paint(index, progress[index]);
    };
    measure();
    document.fonts.ready.then(() => { if (!disposed) measure(); });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    reduced.addEventListener('change', measure);
    main.addEventListener('click', toggle);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      reduced.removeEventListener('change', measure);
      main.removeEventListener('click', toggle);
    };
  }, []);

  return (
    <section id="services" className="bg-white py-24 text-primary md:py-32">
      <div className="mx-auto max-w-content px-6">
        <AnimateOnScroll>
          <div className="mb-14 grid gap-6 md:mb-20 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-end">
            <h2 className="max-w-[760px] text-3xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-4xl lg:text-[48px]">
              我们能做什么
            </h2>
            <p className="max-w-[500px] text-base leading-relaxed text-secondary sm:text-lg">
              从产品构想到技术落地，我们将设计、工程与长期业务价值放在同一条路径上。
            </p>
          </div>
        </AnimateOnScroll>

        <div ref={mainRef} className={styles.main}>
          <div className={styles.items}>
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className={styles.card}
            >
              <div className={styles.artwork} aria-hidden="true">
              <GeometricArtwork index={index} />
              </div>
              <h3 className={styles.heading}>
                <button type="button" className={styles.toggle} aria-expanded={index === 0} aria-controls={`service-content-${index}`}>
                    {service.title}
                  <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                </button>
              </h3>
              <div className={styles.accordion}>
                <div id={`service-content-${index}`} className={styles.content}>
                  <p className={styles.description}>
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className={styles.link}
                  >
                    了解服务
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </span>
                  </a>
                </div>

              </div>
            </article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
