import Image from "next/image";
import localFont from "next/font/local";
import { siteContent } from "../data/site";
import { CountdownTimer } from "../components/countdown-timer";
import { ScrollReveal } from "../components/scroll-reveal";

const greatVibes = localFont({
  src: "../fonts/GreatVibes-Regular.ttf",
  weight: "700",
  style: "normal",
  fallback: ["Great Vibes", "cursive"],
  display: "swap",
});

const cormorantUpright = localFont({
  src: "../fonts/CormorantUpright-SemiBold.ttf",
  weight: "700",
  style: "normal",
  display: "swap",
  fallback: ["Cormorant Upright", "Cormorant Upright Fallback", "serif"],
});

const IMAGE_QUALITY = 100;

export function InvitationSection() {
  const { invitation } = siteContent;
  const formattedDate = new Date(invitation.date)
    .toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ".");

  return (
    <section id="invitation" className="bg-[#f2f2f2]">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 text-center md:gap-10">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center">
              <Image
                src={invitation.icon}
                alt={invitation.label}
                width={200}
                height={100}
                className="w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px]"
                quality={IMAGE_QUALITY}
                sizes="200px"
              />
              <h2
                className={`text-6xl font-bold mt-2  ${cormorantUpright.className}`}
              >
                {invitation.label}
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="-mt-4 flex flex-col items-center md:-mt-10">
              <div
                className={`text-[#BB6A57] text-center font-bold text-[40px] md:text-[70px] mt-5 tracking-widest ${greatVibes.className}`}
              >
                {formattedDate}
              </div>
              <div className="relative h-[90px] w-[260px] md:h-[100px] md:w-[300px]">
                <Image
                  src={invitation.savedate}
                  alt="Save the date"
                  fill
                  sizes="(max-width: 768px) 260px, 300px"
                  className="object-cover"
                  quality={IMAGE_QUALITY}
                  priority
                />
              </div>
              <div className="mb-6 mt-6 w-full">
                <CountdownTimer targetDate={invitation.date} />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative w-[90vw] max-w-[500px] aspect-[2/2.8] overflow-hidden shadow-[0_0px_25px_-5px_rgba(0,0,0,0.2)]">
              <Image
                src={invitation.invitation}
                alt="Wedding invitation"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 500px"
                quality={IMAGE_QUALITY}
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
