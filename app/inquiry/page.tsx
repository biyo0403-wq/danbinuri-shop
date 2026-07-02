import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { site, mailto } from "@/lib/site";
import InquiryForm from "@/components/inquiry/InquiryForm";

export const metadata: Metadata = {
  title: `견적문의 | ${site.name}`,
  description:
    "단체복 · 작업복 맞춤 제작, 브랜드 구매대행 견적을 무료로 안내해 드립니다.",
};

export default function InquiryPage({
  searchParams,
}: {
  searchParams: { category?: string; product?: string };
}) {
  // 제품 상세에서 넘어온 경우 품목·제품번호를 미리 채운다
  const initialCategory = searchParams.category ?? "";
  const initialMessage = searchParams.product
    ? `제품 번호 ${searchParams.product} 견적 문의드립니다.\n`
    : "";

  return (
    <section className="mx-auto max-w-shell px-4 py-12 lg:px-5 lg:py-16">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-ink hover:underline">
          홈
        </Link>
        <span className="mx-1">/</span>
        <span className="text-ink">견적문의</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
        {/* 좌측: 폼 */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
            견적문의
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            품목 · 수량 · 로고 여부를 알려주시면 영업일 기준 1일 이내에
            견적을 안내해 드립니다.
          </p>
          <div className="mt-8">
            <InquiryForm
              initialCategory={initialCategory}
              initialMessage={initialMessage}
            />
          </div>
        </div>

        {/* 우측: 다른 문의 채널 */}
        <aside className="lg:pt-16">
          <div className="rounded-2xl bg-brand px-6 py-8 text-white">
            <p className="text-sm font-bold text-white/70">CONTACT</p>
            <p className="mt-2 text-lg font-extrabold">
              빠른 상담을 원하시면
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-2.5 rounded-lg bg-white/10 px-4 py-3 text-sm font-bold hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={site.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-lg bg-[#FEE500] px-4 py-3 text-sm font-bold text-[#3A1D1D] hover:brightness-95"
              >
                <MessageCircle className="h-4 w-4" />
                카카오톡 상담
              </a>
              <a
                href={mailto}
                className="flex items-center gap-2.5 rounded-lg bg-white/10 px-4 py-3 text-sm font-bold hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
            </div>
            <p className="mt-5 text-xs text-white/60">{site.hours}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
