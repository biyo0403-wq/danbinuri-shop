"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Img from "@/components/ui/Img";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/products";
import { displayTitle } from "@/lib/product-names";

type Props = {
  catSlug: string;
  products: Product[];
};

const ALL = "전체";

export default function ProductGridWithTabs({ catSlug, products }: Props) {
  const subCategories = useMemo(() => {
    const seen = new Set<string>();
    const order: string[] = [];
    for (const p of products) {
      if (!seen.has(p.subCategory)) {
        seen.add(p.subCategory);
        order.push(p.subCategory);
      }
    }
    return order;
  }, [products]);

  const [active, setActive] = useState(ALL);

  const list =
    active === ALL ? products : products.filter((p) => p.subCategory === active);

  if (subCategories.length <= 1) {
    return <ProductGrid catSlug={catSlug} products={products} />;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-4">
        <button
          onClick={() => setActive(ALL)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
            active === ALL
              ? "bg-brand text-white"
              : "bg-neutral-100 text-muted hover:bg-neutral-200"
          )}
        >
          전체 ({products.length})
        </button>
        {subCategories.map((sub) => {
          const count = products.filter((p) => p.subCategory === sub).length;
          return (
            <button
              key={sub}
              onClick={() => setActive(sub)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                active === sub
                  ? "bg-brand text-white"
                  : "bg-neutral-100 text-muted hover:bg-neutral-200"
              )}
            >
              {sub} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <ProductGrid catSlug={catSlug} products={list} />
      </div>
    </div>
  );
}

function ProductGrid({
  catSlug,
  products,
}: {
  catSlug: string;
  products: Product[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
      {products.map((p) => (
        <Link
          key={p.slug}
          href={`/products/${catSlug}/${p.slug}`}
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
  );
}
