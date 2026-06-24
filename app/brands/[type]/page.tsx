import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, FileText, MessageCircle } from "lucide-react";
import Img from "@/components/ui/Img";
import { site } from "@/lib/site";
import { brandGroups, getBrandGroup } from "@/lib/brands";

export function generateStaticParams() {
  return brandGroups.map((b) => ({ type: b.slug }));
}

export default function BrandPage({
  params,
}: {
  params: { type: string };
}) {
  const group = getBrandGroup(params.type);
  if (!group) notFound();

  return (
    <section className="mx-auto max-w-shell px-4 py-12 lg:px-5 lg:py-16">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-ink hover:underline">
          홈
        </Link>
        <span className="mx-1">/</span>
        <Link href="/#brands" className="hover:text-ink hover:underline">
          취급 브랜드
        </Link>
        <span className="mx-1">/</span>
        <span className="text-ink">{group.label}</span>
      </nav>

      <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
        {group.label}
      </h1>
      <p className="mt-2 text-sm text-muted">{group.desc}</p>
      <p className="mt-1 text-sm text-muted">
        원하시는 브랜드 · 모델 · 수량을 알려주시면 정품 구매대행 견적을
        안내해 드립니다.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {group.images.map((src, i) => (
          <div
            key={src}
            className="aspect-square overflow-hidden rounded-lg bg-neutral-100"
          >
            <Img
              src={src}
              alt={`${group.label} ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-line bg-neutral-50 px-6 py-10 text-center">
        <p className="text-lg font-bold">이 브랜드 구매대행 문의</p>
        <p className="mt-2 text-sm text-muted">
          브랜드 · 모델명 · 수량을 남겨주시면 빠르게 견적을 보내드립니다.
        </p>
        <div className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={site.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-point px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            <FileText className="h-4 w-4" />
            견적 신청하기
          </a>
          <a
            href={`tel:${site.phone}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-bold text-ink hover:bg-neutral-50"
          >
            <Phone className="h-4 w-4" />
            전화 상담
          </a>
          <a
            href={site.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-5 py-3 text-sm font-bold text-[#3A1D1D] hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" />
            카카오톡 상담
          </a>
        </div>
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        ※ 표시된 이미지는 취급 브랜드 예시이며, 모든 상품은 정품 구매대행으로
        진행됩니다.
      </p>
    </section>
  );
}
