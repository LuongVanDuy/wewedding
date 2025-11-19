import Image from "next/image";
import localFont from "next/font/local";
import { siteContent } from "../data/site";
import { ScrollReveal } from "../components/scroll-reveal";

const cormorantUpright = localFont({
  src: "../fonts/CormorantUpright-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Cormorant Upright", "Cormorant Upright Fallback", "serif"],
});

const alexBrush = localFont({
  src: "../fonts/AlexBrush-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Alex Brush", "cursive"],
});

export function CoupleSection() {
  const { couple } = siteContent;

  const cards = [
    {
      role: "Chú Rể",
      ...couple.groom,
    },
    {
      role: "Cô Dâu",
      ...couple.bride,
    },
  ];

  return (
    <section
      id="couple"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/assets/images/bg-couple.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 " />
      <div className="relative w-full px-4 py-5 lg:py-8">
        <div className="w-full max-w-4xl mx-auto md:rounded-t-full  flex items-center justify-center md:py-6 py-4 backdrop-blur-md border border-white/70  overflow-hidden">
          <div className="flex w-full flex-col px-3 sm:px-5">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <Image
                  src="/assets/images/icon-couple.svg"
                  alt="Couple icon"
                  width={180}
                  height={90}
                  className="w-32 h-16 md:w-40 md:h-20 lg:w-[180px] lg:h-[90px]"
                />
                <h2
                  className={`${cormorantUpright.className} text-[36px] leading-tight md:text-[50px] tracking-wide`}
                >
                  Chú Rể &amp; Cô Dâu
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-5 flex flex-col items-stretch justify-center gap-5 sm:flex-row md:gap-5">
              {cards.map((card, index) => (
                <ScrollReveal
                  key={card.role}
                  from={index === 0 ? "left" : "right"}
                  delay={index * 0.1}
                  className="flex w-full flex-col sm:w-[340px] sm:max-w-[340px]"
                >
                  <div className="w-full">
                    <div className="p-3 max-md:pb-2">
                      <div className="p-[1px] md:rounded-t-full max-md:rounded-full bg-white shadow-xl">
                        <Image
                          src={card.portrait}
                          alt={card.name}
                          width={340}
                          height={200}
                          className="w-full object-cover md:aspect-[3/4] aspect-square md:rounded-t-full max-md:rounded-full object-top"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-4 pb-0 text-center flex flex-col gap-1.5  items-center flex-1">
                    <h3
                      className={`${alexBrush.className} text-[34px] md:text-[40px] font-medium tracking-wide`}
                    >
                      {card.name}
                    </h3>
                    <div className="w-full bg-black/30 h-px" />
                    {card.parents.map((item) => (
                      <div key={item} className="text-sm ">
                        {item.includes(":") ? (
                          <>
                            {item.split(":")[0]} :{" "}
                            <span className=" font-semibold text-base ">
                              {item.split(":")[1]}
                            </span>
                          </>
                        ) : (
                          item
                        )}
                      </div>
                    ))}
                    <div className="text-center text-sm  ">
                      Tư gia : {card.address}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
