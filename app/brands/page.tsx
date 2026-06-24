import Link from "next/link";
import { Phone, FileText, MessageCircle } from "lucide-react";
import Img from "@/components/ui/Img";
import { site } from "@/lib/site";
import { brandGroups } from "@/lib/brands";

export default function BrandsPage() {
  return (
    <section className="mx-auto max-w-shell px-4 py-12 lg:px-5 lg:py-16">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-ink hover:underline">
          홈
        </Link>
        <span className="mx-1">/</span>
        <span className="text-ink">취급 브랜드</span>
      </nav>

      <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
        취급 브랜드
      </h1>
      <p className="mt-2 text-sm text-muted">
        스포츠 · 아웃도어 브랜드 정품을 구매대행으로 공급합니다. 원하시는
        브랜드 · 모델 · 수량을 알려주시면 견적을 안내해 드립니다.
      </p>

      {brandGroups.map((group) => (
        <div key={group.slug} className="mt-12">
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <h2 className="text-xl font-extrabold tracking-tight lg:text-2xl">
              {group.label}
            </h2>
            <p className="text-sm text-muted">{group.desc}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {group.images.map((src, i) => (
              <div
                key={src}
                className="flex aspect-[16/7] items-center justify-center rounded-lg border border-line bg-white p-4"
              >
                <Img
                  src={src}
                  alt={`${group.label} ${i + 1}`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-14 rounded-2xl border border-line bg-neutral-50 px-6 py-10 text-center">
        <p className="text-lg font-bold">브랜드 구매대행 문의</p>
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
        ※ 표시된 브랜드는 취급 예시이며, 모든 상품은 정품 구매대행으로
        진행됩니다.
      </p>
    </section>
  );
}
