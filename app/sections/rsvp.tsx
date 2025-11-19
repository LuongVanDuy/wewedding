import Image from "next/image";
import localFont from "next/font/local";
import { siteContent } from "../data/site";
import { ScrollReveal } from "../components/scroll-reveal";

const cormorant = localFont({
  src: "../fonts/CormorantUpright-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Cormorant Upright", "serif"],
});

const IMAGE_QUALITY = 100;

export function RSVPSection() {
  const { contact } = siteContent;

  return (
    <section id="rsvp" className="bg-[#fdf9f7] py-12 sm:py-16 md:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 xl:flex-row xl:items-stretch">
          <ScrollReveal className="w-full xl:w-1/2">
            <div className="flex h-full items-center bg-white/90 p-8 shadow-xl ring-1 ring-rose-100 backdrop-blur">
              <div className="flex flex-col items-center text-center gap-4 w-full">
                <Image
                  src={contact.icon}
                  alt="Decor"
                  width={200}
                  height={100}
                  className="w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px]"
                  quality={IMAGE_QUALITY}
                  sizes="200px"
                />
                <h2
                  className={`${cormorant.className} text-4xl md:text-5xl text-[#1f2937]`}
                >
                  {contact.title}
                </h2>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  {contact.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="relative w-full xl:flex-1 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.15)] bg-white">
            <Image
              src={contact.image}
              alt="Thông tin phản hồi"
              width={1600}
              height={900}
              className="w-full h-auto object-contain"
              sizes="100vw"
              quality={IMAGE_QUALITY}
              priority
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
