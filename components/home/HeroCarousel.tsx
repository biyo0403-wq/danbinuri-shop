"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Banner } from "@/lib/types";
import Img from "@/components/ui/Img";

export default function HeroCarousel({ slides }: { slides: Banner[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (next: number) => setIndex((next + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => clearInterval(t);
  }, [paused, count]);

  return (
    <section
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/7] max-h-[560px] w-full overflow-hidden bg-neutral-100">
        {slides.map((slide, i) => (
          <Link
            key={slide.id}
            href={slide.href}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
          >
            <Img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute bottom-10 left-1/2 w-full max-w-shell -translate-x-1/2 px-6 text-white lg:bottom-16">
              {slide.subtitle && (
                <p className="text-sm font-medium opacity-90 lg:text-base">
                  {slide.subtitle}
                </p>
              )}
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight lg:text-4xl">
                {slide.title}
              </h2>
              {slide.caption && (
                <p className="mt-2 text-sm opacity-90 lg:text-base">
                  {slide.caption}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 좌우 화살표 */}
      <button
        aria-label="이전"
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink hover:bg-white lg:flex"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        aria-label="다음"
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-ink hover:bg-white lg:flex"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs text-white">
        <span className="font-bold">{index + 1}</span>
        <span className="opacity-60">/ {count}</span>
        <div className="ml-2 flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`${i + 1}번 슬라이드`}
              onClick={() => go(i)}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === index ? "w-5 bg-white" : "w-1.5 bg-white/50")
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
