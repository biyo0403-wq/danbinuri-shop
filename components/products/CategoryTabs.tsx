"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import { TabButton, ProductGrid, EmptyNotice } from "./ProductTabUI";

const ALL = "전체";

type Props = {
  catSlug: string;
  subCategories: string[];
  products: Product[];
};

/** 전체 + 세부카테고리 1단 탭. 세부카테고리는 lib/categories.ts 고정 목록을 그대로 사용한다. */
export default function CategoryTabs({ catSlug, subCategories, products }: Props) {
  const [active, setActive] = useState(ALL);

  const list =
    active === ALL ? products : products.filter((p) => p.subCategory === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-4">
        <TabButton
          active={active === ALL}
          onClick={() => setActive(ALL)}
          label={`전체 (${products.length})`}
        />
        {subCategories.map((sub) => (
          <TabButton
            key={sub}
            active={active === sub}
            onClick={() => setActive(sub)}
            label={`${sub} (${products.filter((p) => p.subCategory === sub).length})`}
          />
        ))}
      </div>

      <div className="mt-8">
        {list.length === 0 ? (
          <EmptyNotice />
        ) : (
          <ProductGrid catSlug={catSlug} products={list} />
        )}
      </div>
    </div>
  );
}
