"use client";

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

const IMAGE_QUALITY = 100;

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
    <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden bg-slate-100 p-4">
      <Image
        src={qr}
        alt={`QR ${role}`}
        fill
        sizes="12rem"
        className="object-contain"
        quality={IMAGE_QUALITY}
      />
    </div>

    <p className={`${cormorant.className} text-2xl text-[#1f2a44]`}>{role}</p>

    <p className="mt-1 text-lg font-semibold text-slate-800 uppercase">
      {name}
    </p>

    <div className="mt-1 text-sm text-slate-500">{bank}</div>

    <button
      onClick={onCopy}
      className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
    >
      <span>Tài khoản: {account}</span>
    </button>
  </div>
);

export function WishesSection() {
  const { wishes } = siteContent;
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (value: string) => {
    try {
      if (typeof navigator === "undefined") return;
      await navigator.clipboard.writeText(value);
      setCopied(value);
      setTimeout(() => setCopied(null), 2000);
    } catch {}
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
              quality={IMAGE_QUALITY}
            />

            <h2
              className={`${cormorant.className} text-4xl md:text-5xl font-bold`}
            >
              {wishes.title}
            </h2>

            <p className="text-base md:text-lg text-white/90 max-w-2xl">
              {wishes.description}
            </p>

            {/* 👉 HIỂN THỊ LUÔN 2 TÀI KHOẢN */}
            <div className="mt-8 grid w-full gap-4 md:grid-cols-2">
              {wishes.gifts.map((gift) => (
                <GiftCard
                  key={gift.role}
                  {...gift}
                  onCopy={() => handleCopy(gift.account)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

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
