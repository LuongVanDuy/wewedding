'use client';

import { useEffect, useMemo, useState } from "react";

type Units = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const pad = (value: number) => value.toString().padStart(2, "0");

const calculate = (targetDate: string): Units => {
  const now = new Date();
  const target = new Date(targetDate);
  const diff = Math.max(0, target.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  };
};

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<Units>(() => calculate(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const labels = useMemo(
    () => [
      { label: "Ngày", value: timeLeft.days },
      { label: "Giờ", value: timeLeft.hours },
      { label: "Phút", value: timeLeft.minutes },
      { label: "Giây", value: timeLeft.seconds },
    ],
    [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
  );

  return (
    <div className="countdown-timer text-center">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-10 text-xl font-bold">
        {labels.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center w-[4.5rem] h-20 sm:w-24 sm:h-24 bg-white/90 rounded-lg shadow-md border border-[#ffd154] relative overflow-hidden backdrop-blur-md px-4"
          >
            <div className="absolute top-0 left-0 w-full h-3 bg-[#ffd154]" />
            <div className="absolute top-1 left-3 w-2.5 h-2.5 bg-white rounded-full border border-[#ffd154]" />
            <div className="absolute top-1 right-3 w-2.5 h-2.5 bg-white rounded-full border border-[#ffd154]" />
            <span
              className="text-2xl sm:text-3xl font-bold text-[#3d3d3d]"
              aria-label={`${item.value} ${item.label}`}
            >
              {item.value}
            </span>
            <span className="text-xs sm:text-sm text-[#3D3D3DCC]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


