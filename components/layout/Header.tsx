"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { nav } from "@/lib/nav";
import { site } from "@/lib/site";
import { certBadges } from "@/lib/data";
import { cn } from "@/lib/cn";
import Img from "@/components/ui/Img";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-20 max-w-shell items-center gap-4 px-4 lg:h-24 lg:px-5">
        {/* 로고 + 인증마크 */}
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/" className="flex items-center" aria-label={site.name}>
            <Img
              src="/images/logo.jpg"
              alt={site.name}
              className="h-12 w-auto object-contain lg:h-14"
            />
          </Link>
          <div className="hidden items-center gap-1.5 border-l border-line pl-3 sm:flex">
            {certBadges.map((badge) => (
              <div
                key={badge.label}
                title={badge.label}
                className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-line bg-white lg:h-9 lg:w-9"
              >
                <Img
                  src={badge.image}
                  alt={badge.label}
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 데스크탑 메뉴 */}
        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[15px] font-semibold transition-colors hover:text-point",
                item.highlight && "text-point"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 전화 + 견적 버튼 (데스크탑) */}
        <div className="ml-7 hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-1.5 text-sm font-bold text-brand"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/inquiry"
            className="rounded bg-point px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
          >
            무료 견적받기
          </Link>
        </div>

        {/* 모바일 토글 */}
        <button
          className="ml-auto lg:hidden"
          aria-label="메뉴"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* 모바일 드로어 */}
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white">
            <div className="flex h-20 items-center justify-between border-b border-line px-4">
              <span className="text-xl font-extrabold text-brand">
                {site.name}
              </span>
              <button aria-label="닫기" onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col py-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "border-b border-line/60 px-4 py-3 text-[15px] font-semibold",
                    item.highlight && "text-point"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 px-4 pt-4">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center justify-center gap-2 rounded border border-brand py-3 text-sm font-bold text-brand"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <Link
                href="/inquiry"
                onClick={() => setOpen(false)}
                className="rounded bg-point py-3 text-center text-sm font-bold text-white"
              >
                무료 견적받기
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
