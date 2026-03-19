"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/site";

export function HeroSection() {
  const { hero } = siteContent;
  const ref = useRef<HTMLDivElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="h-[40dvh] md:h-[80dvh] xl:h-screen w-screen relative bg-primary/10 overflow-hidden"
    >
      {!showVideo && (
        <img
          src={hero.posterSrc}
          className="w-full h-full object-cover"
          alt="poster"
        />
      )}

      {/* Lazy video */}
      {showVideo && (
        <video
          className="w-full h-full object-contain"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={hero.posterSrc}
        >
          <source src={hero.videoSrc} type="video/mp4" />
        </video>
      )}
    </section>
  );
}
