'use client';

import { useState } from "react";
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

const GiftCard = ({
  role,
  name,
  bank,
  account,
  qr,
  onCopy,
  className = "",
}: (typeof siteContent.wishes.gifts)[number] & {
  onCopy: () => void;
  className?: string;
}) => (
  <div
    className={`w-full rounded-[28px] bg-white p-5 text-center shadow-[0_20px_45px_rgba(15,23,42,0.1)] ${className}`}
  >
    <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-2xl bg-slate-100 p-4">
      <Image
        src={qr}
        alt={`QR ${role}`}
        fill
        sizes="200px"
        className="object-contain"
      />
    </div>
    <p className={`${cormorant.className} text-2xl text-[#1f2a44]`}>{role}</p>
    <p className="mt-1 text-lg font-semibold text-slate-800 uppercase">{name}</p>
    <div className="mt-1 text-sm text-slate-500">{bank}</div>
    <button
      onClick={onCopy}
      className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
    >
      <span>Tài khoản: {account}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path d="M8 17H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2" />
        <rect
          x="10"
          y="9"
          width="10"
          height="12"
          rx="2"
          ry="2"
        />
      </svg>
    </button>
  </div>
);

export function WishesSection() {
  const { wishes } = siteContent;
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      if (typeof navigator === "undefined") return;
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <>
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${wishes.background})` }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <Image
              src={wishes.icon}
              alt="Decor"
              width={200}
              height={100}
              className="w-40 h-20 md:w-48 md:h-24 lg:w-[200px] lg:h-[100px]"
            />
            <h2 className={`${cormorant.className} text-4xl md:text-5xl font-bold`}>
              {wishes.title}
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl">
              {wishes.description}
            </p>
            <button
              onClick={() => setOpen(true)}
              className="relative animate-shake  mt-4 inline-flex h-[150px] w-[150px] flex-col items-center justify-center gap-2 rounded-2xl border-2 border-white/70 bg-white/10 px-4 backdrop-blur transition hover:scale-105"
            >
              <span className="absolute inset-0 rounded-2xl bg-white/5 animate-pulse" />
              <Image
                src={wishes.giftIcon}
                alt="Gift box"
                width={100}
                height={100}
                className="relative z-10 h-25 w-25 "
              />
            
            </button>
          </ScrollReveal>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-4xl rounded-3xl bg-white p-6 shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
            >
              <span className="sr-only">Close</span>
              ✕
            </button>
            <div className="flex flex-col items-center text-center gap-3">
              <h3 className={`${cormorant.className} text-3xl md:text-4xl text-slate-800`}>
                Gửi quà cho cặp đôi
              </h3>
            </div>
            <p className="mt-2 text-xs text-slate-500 md:hidden">
              Chọn người bạn muốn xem thông tin
            </p>
            <div className="mt-4 flex w-full justify-center gap-3 md:hidden">
              {wishes.gifts.map((gift, index) => (
                <button
                  key={gift.role}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold ${
                    activeIndex === index
                      ? "bg-[#1f2a44] text-white"
                      : "border border-slate-200 text-[#1f2a44]"
                  }`}
                >
                  {gift.role}
                </button>
              ))}
            </div>

            <div className="mt-6 grid w-full gap-4">
              <div className="md:hidden">
                <GiftCard
                  {...wishes.gifts[activeIndex]}
                  onCopy={() => handleCopy(wishes.gifts[activeIndex].account)}
                />
              </div>
              <div className="hidden gap-4 md:grid md:grid-cols-2">
                {wishes.gifts.map((gift) => (
                  <GiftCard
                    key={gift.role}
                    {...gift}
                    onCopy={() => handleCopy(gift.account)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {copied && (
        <div className="fixed inset-x-0 bottom-8 z-50 flex justify-center">
          <div className="rounded-full bg-black/80 px-6 py-3 text-sm text-white shadow-lg">
            Đã sao chép số tài khoản: {copied}
          </div>
        </div>
      )}
    </>
  );
}
