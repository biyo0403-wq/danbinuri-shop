import Link from "next/link";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";

export default function ProductSection({
  title,
  subtitle,
  href = "#",
  products,
  ranked = false,
}: {
  title: string;
  subtitle?: string;
  href?: string;
  products: Product[];
  ranked?: boolean;
}) {
  return (
    <section className="mx-auto max-w-shell px-4 py-10 lg:px-5 lg:py-14">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight lg:text-2xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-muted">{subtitle}</p>
          )}
        </div>
        <Link
          href={href}
          className="text-sm text-muted hover:text-ink hover:underline"
        >
          더보기 +
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard
            key={p.id}
            product={p}
            rank={ranked ? i + 1 : undefined}
          />
        ))}
      </div>
    </section>
  );
}
