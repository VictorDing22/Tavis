"use client";

import { useEffect, useRef } from "react";
import styles from "./ProjectCursor.module.css";

export default function ProjectCursor() {
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
