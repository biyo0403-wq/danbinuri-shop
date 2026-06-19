"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
} from "lucide-react";
import { gnb, utilityLinks } from "@/lib/nav";
import { cn } from "@/lib/cn";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* 1. 유틸리티 바 */}
      <div className="hidden border-b border-line lg:block">
        <div className="mx-auto flex h-9 max-w-shell items-center justify-end gap-4 px-5 text-xs text-muted">
          {utilityLinks.map((u) => (
            <Link key={u.href} href={u.href} className="hover:text-ink">
              {u.label}
            </Link>
          ))}
          <span className="h-3 w-px bg-line" />
          <Link href="/login" className="hover:text-ink">
            로그인
          </Link>
          <Link href="/signup" className="hover:text-ink">
            회원가입
          </Link>
          <Link href="/mypage" className="hover:text-ink">
            마이페이지
          </Link>
        </div>
      </div>

      {/* 2. 메인 헤더 */}
      <div className="border-b border-line">
        <div className="mx-auto flex h-16 max-w-shell items-center gap-4 px-4 lg:h-20 lg:px-5">
          {/* 모바일 메뉴 토글 */}
          <button
            className="lg:hidden"
            aria-label="메뉴 열기"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* 로고 */}
          <Link href="/" className="flex shrink-0 items-center">
            <span className="text-2xl font-extrabold tracking-tight lg:text-[26px]">
              DANBINURI
            </span>
          </Link>

          {/* 검색 (데스크탑) */}
          <div className="ml-6 hidden flex-1 lg:block">
            <form
              className="flex h-11 max-w-xl items-center gap-2 rounded-full border-2 border-ink px-4"
              action="/search"
            >
              <input
                name="q"
                placeholder="브랜드, 상품을 검색해 보세요"
                className="h-full flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <button type="submit" aria-label="검색">
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* 우측 아이콘 */}
          <div className="ml-auto flex items-center gap-4 lg:gap-5">
            <button className="lg:hidden" aria-label="검색">
              <Search className="h-6 w-6" />
            </button>
            <Link href="/wishlist" aria-label="찜" className="hidden lg:block">
              <Heart className="h-6 w-6" />
            </Link>
            <Link href="/mypage" aria-label="마이페이지" className="hidden lg:block">
              <User className="h-6 w-6" />
            </Link>
            <Link href="/cart" aria-label="장바구니" className="relative">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-sale px-1 text-[10px] font-bold text-white">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 3. GNB + 메가메뉴 (데스크탑) */}
      <nav
        className="relative hidden border-b border-line lg:block"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto max-w-shell px-5">
          <ul className="flex h-12 items-center gap-8">
            {gnb.map((item) => (
              <li
                key={item.href}
                className="h-full"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-full items-center text-[15px] font-semibold transition-colors",
                    item.highlight ? "text-sale" : "hover:text-muted",
                    activeMenu === item.label && "text-muted"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 메가메뉴 패널 */}
        {gnb.map(
          (item) =>
            activeMenu === item.label &&
            item.columns && (
              <div
                key={item.href}
                className="absolute inset-x-0 top-full border-t border-line bg-white shadow-[0_12px_24px_-12px_rgba(0,0,0,0.15)]"
              >
                <div className="mx-auto flex max-w-shell gap-12 px-5 py-7">
                  {item.columns.map((col) => (
                    <div key={col.title}>
                      <p className="mb-3 text-sm font-bold text-ink">
                        {col.title}
                      </p>
                      <ul className="space-y-2">
                        {col.items.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="text-sm text-muted hover:text-ink hover:underline"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </nav>

      {/* 모바일 드로어 */}
      {mobileOpen && (
        <MobileMenu onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-[80%] max-w-xs overflow-y-auto bg-white">
        <div className="flex h-16 items-center justify-between border-b border-line px-4">
          <span className="text-xl font-extrabold">DANBINURI</span>
          <button aria-label="닫기" onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex gap-3 border-b border-line px-4 py-3 text-sm">
          <Link href="/login" onClick={onClose} className="font-semibold">
            로그인
          </Link>
          <span className="text-line">|</span>
          <Link href="/signup" onClick={onClose}>
            회원가입
          </Link>
        </div>
        <ul className="py-2">
          {gnb.map((item) => (
            <li key={item.href} className="border-b border-line/60">
              {item.columns ? (
                <>
                  <button
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] font-semibold"
                    onClick={() =>
                      setOpen(open === item.label ? null : item.label)
                    }
                  >
                    <span className={cn(item.highlight && "text-sale")}>
                      {item.label}
                    </span>
                    <span className="text-muted">
                      {open === item.label ? "−" : "+"}
                    </span>
                  </button>
                  {open === item.label && (
                    <div className="bg-neutral-50 px-4 pb-3 pt-1">
                      {item.columns.map((col) => (
                        <div key={col.title} className="py-2">
                          <p className="mb-1 text-xs font-bold text-muted">
                            {col.title}
                          </p>
                          <ul className="space-y-1.5">
                            {col.items.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  onClick={onClose}
                                  className="text-sm text-ink"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block px-4 py-3 text-[15px] font-semibold",
                    item.highlight && "text-sale"
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
