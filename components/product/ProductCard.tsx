"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/data";
import { cn } from "@/lib/cn";
import Img from "@/components/ui/Img";

export default function ProductCard({
  product,
  rank,
}: {
  product: Product;
  rank?: number;
}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-neutral-100">
        <Link href={`/product/${product.id}`}>
          <Img
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {typeof rank === "number" && (
          <span className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center bg-ink text-sm font-bold text-white">
            {rank}
          </span>
        )}

        {product.isNew && (
          <span className="absolute left-2 top-2 bg-white px-2 py-0.5 text-[11px] font-bold">
            NEW
          </span>
        )}

        <button
          aria-label="찜하기"
          onClick={() => setLiked((v) => !v)}
          className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 opacity-0 transition-opacity group-hover:opacity-100"
        >
          <Heart
            className={cn(
              "h-4 w-4",
              liked ? "fill-sale text-sale" : "text-ink"
            )}
          />
        </button>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-[13px] font-bold">{product.brand}</p>
        <Link href={`/product/${product.id}`}>
          <p className="line-clamp-2 text-[13px] text-ink/80 hover:underline">
            {product.name}
          </p>
        </Link>

        <div className="flex items-center gap-2 pt-0.5">
          {product.sale ? (
            <span className="text-sm font-bold text-sale">
              {product.sale}%
            </span>
          ) : null}
          <span className="text-[15px] font-bold">
            {formatPrice(product.price)}
          </span>
          {product.listPrice ? (
            <span className="text-xs text-muted line-through">
              {formatPrice(product.listPrice)}
            </span>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-1 pt-1">
          {product.coupon && (
            <span className="border border-line px-1.5 py-0.5 text-[10px] text-muted">
              쿠폰
            </span>
          )}
          {product.colors ? (
            <span className="text-[11px] text-muted">
              컬러 {product.colors}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
