"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { site } from "@/lib/site";

/**
 * 모바일 전용 하단 고정 CTA 바 (전화 · 카카오톡 · 견적 신청).
 * /inquiry 폼 페이지에서는 제출 버튼을 가리지 않도록 숨긴다.
 */
export default function MobileCTABar() {
  const pathname = usePathname();
  if (pathname === "/inquiry") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] lg:hidden">
      <div className="flex gap-2">
        <a
          href={`tel:${site.phone}`}
          aria-label="전화 상담"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line text-brand"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={site.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 상담"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FEE500] text-[#3A1D1D]"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <Link
          href="/inquiry"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-point text-sm font-bold text-white"
        >
          <FileText className="h-4 w-4" />
          무료 견적 신청하기
        </Link>
      </div>
    </div>
  );
}
