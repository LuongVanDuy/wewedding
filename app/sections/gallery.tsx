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

export function GallerySection() {
  const { gallery } = siteContent;

  return (
    <section id="gallery" className="bg-[#fdf9f7]">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:gap-8">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/icon-loingo.webp"
                alt="Decoration"
                width={200}
                height={100}
                className="w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px]"
              />
              <h2 className={`${cormorant.className} text-4xl md:text-5xl mt-2 text-[#1f2937]`}>
                Ảnh Cưới
              </h2>
            </div>
          </ScrollReveal>

          <div className="w-full">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
              {gallery.map((image, index) => (
                <ScrollReveal
                  key={image.src}
                  className="mb-4 break-inside-avoid"
                  delay={(index % 4) * 0.05}
                >
                  <div className="overflow-hidden rounded-2xl shadow-md transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                    />
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
