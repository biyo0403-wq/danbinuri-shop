import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { site } from "@/lib/site";

/**
 * 우측 하단 고정 플로팅 버튼 (카카오톡 상담 · 견적문의 · 전화상담).
 * 모바일에는 하단 고정 CTA 바(MobileCTABar)가 따로 있으므로,
 * 이 플로팅 버튼은 데스크탑(lg 이상)에서만 노출한다.
 */
export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-2.5 lg:flex">
      {/* 카카오톡 상담 */}
      <a
        href={site.kakaoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#FEE500] px-5 py-3 text-sm font-bold text-[#3A1D1D] shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        카카오톡 상담
      </a>

      {/* 견적문의하기 */}
      <Link
        href="/inquiry"
        className="flex items-center gap-2 rounded-full bg-point px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
      >
        <FileText className="h-5 w-5" />
        견적문의하기
      </Link>

      {/* 전화상담 */}
      <a
        href={`tel:${site.phone}`}
        className="flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
        전화상담
      </a>
    </div>
  );
}
