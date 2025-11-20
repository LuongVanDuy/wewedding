"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  artist: string;
  src: string;
};

export function MusicPlayer({ title, artist, src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  };

  return (
    <div className="fixed bottom-6 left-4 z-50 flex items-center cursor-pointer">
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc"}
        className="relative flex items-center gap-2 cursor-pointer"
      >
        <div className="absolute">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ffa1a2]">
            <span
              className={`absolute inline-flex h-12 w-12 rounded-full -z-10 bg-rose-400 opacity-70 ${
                isPlaying ? "animate-ping" : ""
              }`}
            />
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white animate-[pulse_1.5s_ease-in-out_infinite] animate-audio"
              >
                <path d="M2 10v3" />
                <path d="M6 6v11" />
                <path d="M10 3v18" />
                <path d="M14 8v7" />
                <path d="M18 5v13" />
                <path d="M22 10v3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            )}
          </div>
        </div>
        <div className="pl-18  flex items-center gap-3 rounded-full bg-[#ffa1a2] px-5 py-2 text-white shadow-lg">
          <div className="text-sm font-semibold">
            {isPlaying ? "Đang phát" : "Phát nhạc"}
          </div>
        </div>
      </button>
      <audio ref={audioRef} src={src} loop preload="none" />
    </div>
  );
}
