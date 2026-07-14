"use client";

import Link from "next/link";
import Img from "@/components/ui/Img";
import { cn } from "@/lib/cn";
import type { Product } from "@/lib/products";
import { displayTitle } from "@/lib/product-names";

export function TabButton({
  active,
  onClick,
  label,
  small = false,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full font-semibold transition-colors",
        small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
        active
          ? "bg-brand text-white"
          : "bg-neutral-100 text-muted hover:bg-neutral-200"
      )}
    >
      {label}
    </button>
  );
}

export function ProductGrid({
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

export function EmptyNotice() {
  return (
    <div className="rounded-xl border border-line bg-neutral-50 px-6 py-14 text-center">
      <p className="text-base font-bold">이 항목은 샘플 준비 중입니다</p>
      <p className="mt-2 text-sm text-muted">
        아래 맞춤 제작 문의로 원하시는 디자인을 알려주세요.
      </p>
    </div>
  );
}
