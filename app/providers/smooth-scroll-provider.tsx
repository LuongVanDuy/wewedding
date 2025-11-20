"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

type Props = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: Props) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      gestureOrientation: "vertical",
      wheelMultiplier: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let animationFrame: number;

    const onFrame = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(onFrame);
    };

    animationFrame = requestAnimationFrame(onFrame);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        cancelAnimationFrame(animationFrame);
        lenis.destroy();
      }
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return children;
}
