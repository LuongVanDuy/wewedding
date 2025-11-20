import Image from "next/image";
import localFont from "next/font/local";
import { siteContent } from "../data/site";
import { ScrollReveal } from "../components/scroll-reveal";

const greatVibes = localFont({
  src: "../fonts/GreatVibes-Regular.ttf",
  weight: "400",
  style: "normal",
  fallback: ["Great Vibes", "Great Vibes Fallback", "cursive"],
  display: "swap",
});

const IMAGE_QUALITY = 100;

export function GreetingSection() {
  const { hero } = siteContent;

  return (
    <section
      id="greeting"
      className="flex items-center justify-center bg-[#f2f2f2] py-8 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <ScrollReveal>
          <Image
            src="/assets/images/icon-loingo.webp"
            alt="Lời ngỏ"
            width={200}
            height={100}
            className="w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px]"
            quality={IMAGE_QUALITY}
            sizes="200px"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2
            className={`${greatVibes.className} h2 mt-2 font-gv md:text-[70px] text-[50px] leading-[90px]`}
          >
            {hero.greeting}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-base md:text-lg text-slate-600">
            {hero.message}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3} className="w-full" scaleFrom={0.9}>
          <div className="mt-10 w-full overflow-hidden shadow-lg">
            <Image
              src={hero.greetingImage}
              alt="Lời ngỏ"
              width={1000}
              height={1000}
              className="h-auto w-full object-cover"
              quality={IMAGE_QUALITY}
              sizes="(max-width: 768px) 90vw, 1000px"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
