"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type State = "visible" | "hidden" | "revealed";

export default function Reveal({
  children,
  delayMs = 0,
  className = "",
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // Default is always fully visible — SSR output and the first client render
  // both land here, so content never depends on JS to become visible.
  const [state, setState] = useState<State>("visible");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) return;

    setState("hidden");

    // threshold is a fraction of the TARGET's own height, not the viewport —
    // for a tall target (e.g. a long stacked card grid on mobile) a 0.15
    // threshold can require scrolling almost a full extra screen past the
    // element's top edge before it ever intersects enough to reveal. Use a
    // 0 threshold (fires on first pixel) with a viewport-relative rootMargin
    // instead, so reveal timing stays independent of the target's height.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationClass = state === "hidden" ? "opacity-0" : state === "revealed" ? "animate-fade-in-up" : "";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={state === "revealed" ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
