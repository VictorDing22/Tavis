"use client";

import { useEffect } from "react";

// Re-align the contact anchor when the services section finishes measuring.
export default function ContactAnchor() {
  useEffect(() => {
    let stop = () => {};
    const navigate = () => {
      stop();
      if (window.location.hash !== "#contact") return;
      const target = document.getElementById("contact");
      const main = target?.closest("main");
      if (!target || !main) return;

      let cancelled = false;
      let frame = 0;
      const align = () => {
        if (cancelled || window.location.hash !== "#contact") return;
        target.scrollIntoView({ block: "start", behavior: "instant" });
      };
      const observer = new ResizeObserver(() => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(align);
      });
      const cancel = () => stop();
      const cancelOnKey = (event: KeyboardEvent) => {
        if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) stop();
      };
      const timer = window.setTimeout(() => stop(), 3000);
      stop = () => {
        cancelled = true;
        observer.disconnect();
        cancelAnimationFrame(frame);
        clearTimeout(timer);
        window.removeEventListener("wheel", cancel);
        window.removeEventListener("touchstart", cancel);
        window.removeEventListener("keydown", cancelOnKey);
      };
      observer.observe(main);
      align();
      frame = requestAnimationFrame(align);
      void document.fonts.ready.then(align);
      window.addEventListener("wheel", cancel, { passive: true });
      window.addEventListener("touchstart", cancel, { passive: true });
      window.addEventListener("keydown", cancelOnKey);
    };
    navigate();
    window.addEventListener("hashchange", navigate);
    window.addEventListener("contact:navigate", navigate);
    return () => {
      stop();
      window.removeEventListener("hashchange", navigate);
      window.removeEventListener("contact:navigate", navigate);
    };
  }, []);

  return null;
}
