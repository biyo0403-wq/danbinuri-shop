"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import type { SeasonDef } from "@/lib/categories";
import { TabButton, ProductGrid, EmptyNotice } from "./ProductTabUI";

const ALL = "전체";

type Props = {
  catSlug: string;
  seasons: SeasonDef[];
  products: Product[];
};

/**
 * 근무복/작업복 전용 2단 탭.
 * 1단: 전체 · 춘추 · 겨울
 * 2단: 춘추 또는 겨울을 선택했을 때만 그 계절의 세부카테고리가 나타난다.
 */
export default function WorkwearTabs({ catSlug, seasons, products }: Props) {
  const [season, setSeason] = useState<string>(ALL);
  const [type, setType] = useState<string>(ALL);

  function selectSeason(next: string) {
    setSeason(next);
    setType(ALL); // 계절을 바꾸면 세부카테고리 선택은 초기화
  }

  const activeSeason = seasons.find((s) => s.label === season);

  const list = products.filter((p) => {
    if (season !== ALL && p.season !== season) return false;
    if (type !== ALL && p.subCategory !== type) return false;
    return true;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-4">
        <TabButton
          active={season === ALL}
          onClick={() => selectSeason(ALL)}
          label={`전체 (${products.length})`}
        />
        {seasons.map((s) => (
          <TabButton
            key={s.label}
            active={season === s.label}
            onClick={() => selectSeason(s.label)}
            label={`${s.label} (${products.filter((p) => p.season === s.label).length})`}
          />
        ))}
      </div>

      {activeSeason && (
        <div className="mt-3 flex flex-wrap gap-2">
          <TabButton
            small
            active={type === ALL}
            onClick={() => setType(ALL)}
            label="전체"
          />
          {activeSeason.subCategories.map((sub) => (
            <TabButton
              key={sub}
              small
              active={type === sub}
              onClick={() => setType(sub)}
              label={sub}
            />
          ))}
        </div>
      )}

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
