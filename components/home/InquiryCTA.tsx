import { Phone, FileText, MessageCircle, Mail } from "lucide-react";
import { site, mailto } from "@/lib/site";

export default function InquiryCTA() {
  return (
    <section id="inquiry" className="px-4 lg:px-5">
      <div className="mx-auto max-w-shell rounded-2xl bg-brand px-6 py-16 text-center text-white lg:px-10 lg:py-24">
        <p className="text-sm font-bold text-white/70">CONTACT</p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight lg:text-4xl">
          무료로 견적을 받아보세요
        </h2>
        <p className="mt-4 text-sm text-white/80 lg:text-base">
          품목 · 수량 · 로고 여부만 알려주시면 빠르게 견적을 보내드립니다.
          <br className="hidden sm:block" />
          전화 · 카카오톡 · 신청서 중 편한 방법으로 문의해 주세요.
        </p>

        <div className="mx-auto mt-9 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {/* 구글폼 (메인 CTA) */}
          <a
            href={site.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-point px-5 py-4 text-base font-bold text-white hover:bg-blue-700 sm:col-span-2"
          >
            <FileText className="h-5 w-5" />
            견적 신청서 작성하기 (구글폼)
          </a>

          {/* 전화 */}
          <a
            href={`tel:${site.phone}`}
            className="flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-base font-bold text-brand hover:bg-white/90"
          >
            <Phone className="h-5 w-5" />
            전화 상담 {site.phone}
          </a>

          {/* 카카오톡 */}
          <a
            href={site.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-5 py-4 text-base font-bold text-[#3A1D1D] hover:brightness-95"
          >
            <MessageCircle className="h-5 w-5" />
            카카오톡 상담
          </a>

          {/* 이메일 */}
          <a
            href={mailto}
            className="flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-4 text-base font-bold text-white hover:bg-white/10 sm:col-span-2"
          >
            <Mail className="h-5 w-5" />
            이메일 문의 {site.email}
          </a>
        </div>

        <p className="mt-6 text-xs text-white/60">상담 가능 시간 · {site.hours}</p>
      </div>
    </section>
  );
}
