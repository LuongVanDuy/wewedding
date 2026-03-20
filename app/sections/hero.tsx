"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/site";

export function HeroSection() {
  const { hero } = siteContent;
  const ref = useRef<HTMLDivElement | null>(null);

  const [isNearView, setIsNearView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "300px",
      },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="h-[30vh] md:min-h-[100vh] w-screen relative bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Loading + Text */}
      {isNearView && !loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10 text-center px-6">
          {/* Spinner */}
          <div className="h-10 w-10 border-4 border-slate-300 border-t-slate-600 rounded-full animate-spin" />

          {/* Text block */}
          <div className="min-h-[100px] flex flex-col items-center justify-center text-slate-800 max-w-xl">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight leading-tight">
              Lễ thành hôn <br />
              <span className="font-bold text-slate-900">
                Quang Huy ♥ Phương Loan
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-base text-slate-500 leading-relaxed">
              Chúng tôi trân trọng mời bạn đến dự lễ thành hôn vào ngày{" "}
              <span className="font-medium text-slate-700">30.03.2026</span>.
              <br />
              Hãy lưu ngày này cùng chúng tôi!
            </p>
          </div>
        </div>
      )}

      {/* Video */}
      {isNearView && (
        <video
          className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setLoaded(true)}
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
      )}
    </section>
  );
}
