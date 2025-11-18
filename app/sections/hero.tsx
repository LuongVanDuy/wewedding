import { siteContent } from "../data/site";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className="relative isolate min-h-screen overflow-hidden" id="home">
      <video
        className="absolute inset-0 h-full w-full object-cover"
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

