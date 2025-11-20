"use client";

import Image from "next/image";
import localFont from "next/font/local";
import { siteContent } from "../data/site";
import { ScrollReveal } from "../components/scroll-reveal";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Plugins
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const cormorant = localFont({
  src: "../fonts/CormorantUpright-Regular.ttf",
  weight: "400",
  style: "normal",
  display: "swap",
  fallback: ["Cormorant Upright", "serif"],
});

const IMAGE_QUALITY = 100;

export function GallerySection() {
  const { gallery } = siteContent;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = gallery.map((img) => ({
    src: img.src,
    alt: img.alt,
  }));

  return (
    <section id="gallery" className="bg-[#f2f2f2]">
      <div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="mx-auto flex flex-col items-center gap-6 text-center md:gap-8">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              <Image
                src="/assets/images/icon-loingo.webp"
                alt="Decoration"
                width={200}
                height={100}
                className="w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px]"
                quality={IMAGE_QUALITY}
                sizes="200px"
              />
              <h2
                className={`${cormorant.className} text-4xl md:text-6xl mt-2`}
              >
                Ảnh Cưới
              </h2>
            </div>
          </ScrollReveal>

          <div className="w-full">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4">
              {gallery.map((image, idx) => (
                <ScrollReveal
                  once
                  key={image.src}
                  className="mb-4 break-inside-avoid"
                  delay={(idx % 4) * 0.05}
                >
                  <div
                    className="overflow-hidden rounded-xl shadow-md transition-transform duration-500 hover:scale-[1.02] cursor-pointer"
                    onClick={() => {
                      setIndex(idx);
                      setOpen(true);
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 50vw"
                      loading="lazy"
                      quality={IMAGE_QUALITY}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          index={index}
          close={() => setOpen(false)}
          slides={slides}
          plugins={[Zoom, Thumbnails]} // thêm Zoom và Thumbnail
          thumbnails={{ position: "bottom" }} // danh sách bên dưới
        />
      )}
    </section>
  );
}
