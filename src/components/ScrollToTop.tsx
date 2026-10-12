"use client";

import { useLayoutEffect } from "react";

export default function ScrollToTop({ routeKey }: { routeKey: string }) {
  useLayoutEffect(() => {
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    let secondFrame = 0;

    const reset = () => {
      html.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    html.style.scrollBehavior = "auto";
    reset();
    const firstFrame = requestAnimationFrame(() => {
      reset();
      secondFrame = requestAnimationFrame(() => {
        reset();
        html.style.scrollBehavior = previousBehavior;
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
      html.style.scrollBehavior = previousBehavior;
    };
  }, [routeKey]);

  return null;
}
