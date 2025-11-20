import { siteContent } from "../data/site";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="home"
      className="h-[40dvh] md:h-[80dvh] xl:h-screen w-screen relative bg-primary/10 overflow-hidden"
    >
      <div className="absolute inset-0 z-10 bg-primary/0"></div>
      <video
        className="w-full h-full object-contain overflow-hidden"
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
