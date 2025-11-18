'use client';

import Image from "next/image";
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "../data/site";
import { ScrollReveal } from "../components/scroll-reveal";

const italicSerif = localFont({
  src: "../fonts/CormorantUpright-Medium.ttf",
  weight: "500",
  style: "italic",
  display: "swap",
  fallback: ["Cormorant Upright", "serif"],
});

export function LoveStorySection() {
  const { loveStory } = siteContent;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (typeof window === "undefined") return;
      const viewportWidth = window.innerWidth;
      const mobile = viewportWidth < 768;
      setIsMobile(mobile);

      if (!trackRef.current || mobile) {
        setMaxTranslate(0);
        return;
      }

      const width = trackRef.current.scrollWidth - viewportWidth;
      setMaxTranslate(Math.max(width, 0));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [loveStory.length]);

  const x = useTransform(scrollYProgress, (value: number) => -value * maxTranslate);

  if (isMobile) {
    return (
      <section id="story" className="bg-[#000000E6] text-[#F0E7DA] py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6">
          {loveStory.map((item, index) => (
            <ScrollReveal key={item.title}>
              <article className="flex flex-col gap-5 rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg">
                <div className="flex flex-col items-center gap-4 text-center">
                  <p
                    className={`text-white text-3xl italic tracking-[0.2em] ${italicSerif.className}`}
                  >
                    Love Story
                  </p>
                  <div className="h-px w-20 bg-white/40" />
                  <Image
                    src={item.image2}
                    alt={item.title}
                    width={180}
                    height={70}
                    className="h-auto w-32"
                  />
                  <h3 className="text-2xl text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#bebebe]">{item.description}</p>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw"
                    priority={index === 0}
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${loveStory.length * 100}vh` }}
      className="relative"
    >
      <section
        id="story"
        ref={sectionRef}
        className="sticky top-0 flex h-screen items-center overflow-hidden bg-[#000000E6] text-[#F0E7DA]"
      >
        <motion.div
          ref={trackRef}
          className="flex h-full w-max items-stretch will-change-transform"
          style={{ x }}
        >
          {loveStory.map((item, index) => (
            <article
              key={item.title}
              className="w-screen h-screen px-6 md:px-12 flex flex-col xl:flex-row items-center gap-8 md:gap-12"
            >
              <div className="flex flex-1 flex-col items-center justify-center text-center gap-5">
                <p
                  className={`text-white text-2xl md:text-5xl italic tracking-[0.2em] ${italicSerif.className}`}
                >
                  Love Story
                </p>
                <div className="h-px w-full bg-white/40" />
                <Image
                  src={item.image2}
                  alt={item.title}
                  width={200}
                  height={80}
                  className="w-32 md:w-48 h-auto"
                />
                <h3 className="text-2xl md:text-4xl text-white uppercase tracking-widest">
                  {item.title}
                </h3>
                <p className="text-[#bebebe] text-base leading-relaxed md:text-lg min-h-[120px]">
                  {item.description}
                </p>
              </div>
              <div className="relative flex-1 w-full aspect-square overflow-hidden rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 600px"
                  priority={index === 0}
                />
              </div>
            </article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
