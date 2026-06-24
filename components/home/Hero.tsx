"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroPanels } from "@/lib/data";
import Img from "@/components/ui/Img";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroPanels.length;

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
    <section className="px-4 pt-4 lg:px-5 lg:pt-6">
      <div
        className="relative mx-auto max-w-shell"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative aspect-[4/3] max-h-[560px] w-full overflow-hidden rounded-2xl bg-brand sm:aspect-[16/9] md:aspect-[16/7]">
          {heroPanels.map((slide, i) => (
            <Link
              key={slide.id}
              href={slide.href}
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                opacity: i === index ? 1 : 0,
                pointerEvents: i === index ? "auto" : "none",
              }}
            >
              <Img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              {/* 오른쪽 텍스트 가독성을 위한 그라데이션 */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-y-0 right-0 flex max-w-xl flex-col items-end justify-center px-7 text-right text-white lg:px-14">
                {slide.eyebrow && (
                  <span className="inline-block rounded bg-point px-2 py-1 text-xs font-bold tracking-wide">
                    {slide.eyebrow}
                  </span>
                )}
                <h2 className="mt-3 whitespace-pre-line break-keep text-2xl font-extrabold leading-tight lg:text-[38px]">
                  {slide.title}
                </h2>
                {slide.desc && (
                  <p className="mt-3 break-keep text-sm text-white/85 lg:text-base">
                    {slide.desc}
                  </p>
                )}
                <span className="mt-5 inline-flex items-center gap-1 rounded bg-point px-4 py-2 text-sm font-bold">
                  견적 문의하기
                  <ChevronRight className="h-4 w-4" />
                </span>
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
            {heroPanels.map((s, i) => (
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
      </div>
    </section>
  );
}
