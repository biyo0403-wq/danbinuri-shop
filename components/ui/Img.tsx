"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** 플레이스홀더에 표시할 라벨 (기본: 파일 경로) */
  label?: string;
};

/**
 * 드롭인 이미지.
 * public 경로에 jpg가 있으면 그대로 렌더링하고,
 * 없으면(404) 회색 플레이스홀더로 대체해 어떤 파일을 넣어야 하는지 안내한다.
 */
export default function Img({ src, alt, className, label }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-1 bg-neutral-100 text-neutral-400 select-none",
          className
        )}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span className="px-2 text-center text-[11px] leading-tight break-all">
          {label ?? src.replace("/images/", "")}
        </span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
