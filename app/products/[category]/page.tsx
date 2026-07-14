import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import {
  productCategories,
  getCategory,
  getProductsByCategory,
} from "@/lib/products";
import { getCategoryDef } from "@/lib/categories";
import CategoryTabs from "@/components/products/CategoryTabs";
import WorkwearTabs from "@/components/products/WorkwearTabs";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = getCategory(params.category);
  const def = getCategoryDef(params.category);
  if (!cat || !def) notFound();
  const list = getProductsByCategory(cat.slug);

  return (
    <section className="mx-auto max-w-shell px-4 py-12 lg:px-5 lg:py-16">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-ink hover:underline">
          홈
        </Link>
        <span className="mx-1">/</span>
        <span className="text-ink">{cat.label}</span>
      </nav>

      <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
        {cat.label}
      </h1>
      <p className="mt-2 text-sm text-muted">
        아래 제품은 <span className="font-semibold text-ink">제작 샘플</span>
        입니다. 원하시는 디자인 · 색상 · 로고를 반영해 맞춤 제작해 드립니다.
        마음에 드는 샘플을 고르거나, 원하는 스타일을 알려주시면 견적을
        안내해 드립니다.
      </p>

      <div className="mt-8">
        {def.seasons ? (
          <WorkwearTabs catSlug={cat.slug} seasons={def.seasons} products={list} />
        ) : (
          <CategoryTabs
            catSlug={cat.slug}
            subCategories={def.subCategories ?? []}
            products={list}
          />
        )}
      </div>

      {/* 맞춤 제작 안내: 목록이 전부가 아님을 알린다 */}
      <div className="mt-14 rounded-2xl border border-line bg-neutral-50 px-6 py-10 text-center">
        <p className="text-lg font-bold">
          찾는 제품이 없거나, 원하는 디자인이 따로 있으신가요?
        </p>
        <p className="mt-2 text-sm text-muted">
          위 샘플 외에도 원단 · 색상 · 로고 자수/인쇄 · 수량에 맞춰
          맞춤 제작이 가능합니다. 편하게 문의해 주세요.
        </p>
        <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`/inquiry?category=${encodeURIComponent(cat.label)}`}
            className="flex items-center justify-center gap-2 rounded-lg bg-point px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
          >
            <FileText className="h-4 w-4" />
            맞춤 제작 문의하기
          </Link>
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
    </section>
  );
}
