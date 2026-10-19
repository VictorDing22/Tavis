"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

export default function TeamPageShell({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    let cancelled = false;
    let firstFrame = 0;
    let secondFrame = 0;
    const previousRestoration = window.history.scrollRestoration;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    window.history.scrollRestoration = "manual";
    document.documentElement.style.scrollBehavior = "auto";

    const restore = sessionStorage.getItem("team:restore-position") === "true";
    sessionStorage.removeItem("team:restore-position");
    const savedY = Number(sessionStorage.getItem("team:list-scroll"));
    const hashMember = window.location.hash.startsWith("#member-")
      ? window.location.hash.slice("#member-".length)
      : null;
    const savedMember = sessionStorage.getItem("team:last-member") ?? hashMember;
    const savedOffsetValue = sessionStorage.getItem("team:last-member-offset");
    const savedOffset = savedOffsetValue === null ? Number.NaN : Number(savedOffsetValue);

    const restorePosition = () => {
      if (!restore && !hashMember) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        return;
      }

      const memberCard = savedMember
        ? document.getElementById(`member-${savedMember}`)
        : null;

      if (memberCard && Number.isFinite(savedOffset)) {
        const memberTop = window.scrollY + memberCard.getBoundingClientRect().top;
        window.scrollTo({
          top: Math.max(0, memberTop - savedOffset),
          left: 0,
          behavior: "instant",
        });
        return;
      }

      if (memberCard) {
        memberCard.scrollIntoView({ block: "start", behavior: "instant" });
        return;
      }

      const fallbackTop = Number.isFinite(savedY) ? Math.max(0, savedY) : 0;
      window.scrollTo({ top: fallbackTop, left: 0, behavior: "instant" });
    };

    // Keep the complete layout in place while reload scroll restoration and
    // font loading settle, then reveal the header and introduction together.
    void document.fonts.ready.then(() => {
      if (cancelled) return;
      restorePosition();
      firstFrame = requestAnimationFrame(() => {
        restorePosition();
        secondFrame = requestAnimationFrame(() => {
          restorePosition();
          document.documentElement.style.scrollBehavior = previousScrollBehavior;
          setReady(true);
        });
      });
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      window.history.scrollRestoration = previousRestoration;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return <div data-team-ready={ready} style={{ visibility: ready ? "visible" : "hidden" }}>{children}</div>;
}
