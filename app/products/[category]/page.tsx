import Link from "next/link";
import { notFound } from "next/navigation";
import { FileText, MessageCircle } from "lucide-react";
import Img from "@/components/ui/Img";
import { site } from "@/lib/site";
import {
  productCategories,
  getCategory,
  getProductsByCategory,
} from "@/lib/products";
import { displayTitle } from "@/lib/product-names";

export function generateStaticParams() {
  return productCategories.map((c) => ({ category: c.slug }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = getCategory(params.category);
  if (!cat) notFound();
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
        제품을 선택하면 상세 이미지를 볼 수 있습니다. 견적은 제품 페이지에서
        문의해 주세요.
      </p>

      {list.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-line bg-neutral-50 px-6 py-16 text-center">
          <p className="text-lg font-bold">제품을 준비 중입니다</p>
          <p className="mt-2 text-sm text-muted">
            해당 품목은 맞춤 제작으로 진행됩니다. 원하시는 디자인 · 수량을
            알려주시면 견적을 안내해 드립니다.
          </p>
          <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/inquiry?category=${encodeURIComponent(cat.label)}`}
              className="flex items-center justify-center gap-2 rounded-lg bg-point px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              <FileText className="h-4 w-4" />
              견적 신청하기
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
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {list.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${cat.slug}/${p.slug}`}
            className="group block"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100">
              <Img
                src={p.images[0]}
                alt={displayTitle(p)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 text-sm font-bold lg:text-base">
              {displayTitle(p)}
            </h3>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
