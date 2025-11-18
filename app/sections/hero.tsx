import { siteContent } from "../data/site";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="relative isolate flex w-full items-center justify-center overflow-hidden bg-black md:min-h-[100dvh]"
    >
      <video
        className="w-full max-w-[100vw] object-contain md:h-full md:w-auto md:object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={hero.posterSrc}
      >
        <source src={hero.videoSrc} type="video/mp4" />
      </video>
    </section>
  );
}

