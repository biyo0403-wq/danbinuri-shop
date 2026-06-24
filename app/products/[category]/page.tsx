import Link from "next/link";
import { notFound } from "next/navigation";
import Img from "@/components/ui/Img";
import {
  productCategories,
  getCategory,
  getProductsByCategory,
} from "@/lib/products";

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
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 text-sm font-bold lg:text-base">{p.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
