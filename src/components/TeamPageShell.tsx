"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

export default function TeamPageShell({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    let cancelled = false;
    let frame = 0;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const restore = sessionStorage.getItem("team:restore-position") === "true";
    sessionStorage.removeItem("team:restore-position");
    const savedY = Number(sessionStorage.getItem("team:list-scroll"));
    const top = restore && Number.isFinite(savedY) ? Math.max(0, savedY) : 0;

    // Keep the complete layout in place while reload scroll restoration and
    // font loading settle, then reveal the header and introduction together.
    void document.fonts.ready.then(() => {
      if (cancelled) return;
      window.scrollTo({ top, left: 0, behavior: "instant" });
      frame = requestAnimationFrame(() => {
        window.scrollTo({ top, left: 0, behavior: "instant" });
        setReady(true);
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  return <div data-team-ready={ready} style={{ visibility: ready ? "visible" : "hidden" }}>{children}</div>;
}
