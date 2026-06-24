import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { products, getProduct, getCategory } from "@/lib/products";
import { site } from "@/lib/site";
import ProductGallery from "@/components/products/ProductGallery";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.category, product: p.slug }));
}

export default function ProductPage({
  params,
}: {
  params: { category: string; product: string };
}) {
  const product = getProduct(params.category, params.product);
  if (!product) notFound();
  const cat = getCategory(params.category);

  return (
    <section className="mx-auto max-w-shell px-4 py-12 lg:px-5 lg:py-16">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-ink hover:underline">
          홈
        </Link>
        <span className="mx-1">/</span>
        <Link
          href={`/products/${cat?.slug}`}
          className="hover:text-ink hover:underline"
        >
          {cat?.label}
        </Link>
        <span className="mx-1">/</span>
        <span className="text-ink">{product.title}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductGallery images={product.images} title={product.title} />

        <div>
          <p className="text-sm font-bold text-point">{cat?.label}</p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight lg:text-3xl">
            {product.title}
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            품목 · 수량 · 로고 여부를 알려주시면 빠르게 견적을 보내드립니다.
            아래 방법 중 편한 채널로 문의해 주세요.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={site.googleFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-point px-5 py-4 text-base font-bold text-white hover:bg-blue-700"
            >
              <FileText className="h-5 w-5" />
              이 제품 견적 신청하기 (구글폼)
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-4 text-base font-bold text-ink hover:bg-neutral-50"
              >
                <Phone className="h-5 w-5" />
                전화 상담
              </a>
              <a
                href={site.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-5 py-4 text-base font-bold text-[#3A1D1D] hover:brightness-95"
              >
                <MessageCircle className="h-5 w-5" />
                카카오톡
              </a>
            </div>
          </div>

          <p className="mt-6 text-xs text-muted">
            ※ 제품 번호 <span className="font-semibold">{product.title}</span> 로
            문의해 주시면 더 빠르게 안내받으실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
