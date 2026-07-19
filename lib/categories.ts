/**
 * 카테고리 · 세부카테고리 구조 정의 (UI 탭 구성용 고정 데이터).
 * 실제 제품 데이터(lib/products.ts)가 비어 있어도 이 구조대로 탭이 항상 표시된다.
 * 근무복/작업복만 계절(춘추/겨울) 아래에 세부카테고리가 있는 2단 구조다.
 */

export type SeasonDef = {
  /** 계절 라벨. Product.season 값과 동일한 문자열이어야 매칭된다. */
  label: string;
  /** 이 계절 아래의 세부카테고리 라벨 목록. Product.subCategory 값과 매칭된다. */
  subCategories: string[];
};

export type CategoryDef = {
  slug: string;
  label: string;
  /** 근무복/작업복처럼 계절별로 세부카테고리가 달라지는 경우 */
  seasons?: SeasonDef[];
  /** 일반 카테고리의 세부카테고리 라벨 목록 */
  subCategories?: string[];
};

export const categoryDefs: CategoryDef[] = [
  {
    slug: "workwear",
    label: "근무복/작업복",
    seasons: [
      {
        label: "춘추",
        subCategories: ["작업복", "근무복", "제전복", "상하세트", "반팔(수선가능)작업복"],
      },
      {
        label: "겨울",
        subCategories: ["작업복", "근무복", "상하세트", "패딩"],
      },
    ],
  },
  {
    slug: "vest",
    label: "단체조끼",
    subCategories: ["망사조끼", "안전조끼", "반사띠 작업조끼", "패딩조끼"],
  },
  {
    slug: "jacket",
    label: "점퍼(바람막이/후리스/패딩)",
    subCategories: ["바람막이", "후리스", "패딩", "항공점퍼"],
  },
  {
    slug: "tshirt",
    label: "단체티셔츠",
    subCategories: ["면티", "쿨론티", "겨울용 티셔츠"],
  },
  {
    slug: "hoodie",
    label: "후드/맨투맨",
    subCategories: ["후드", "맨투맨"],
  },
  {
    slug: "safety",
    label: "안전화/모자",
    subCategories: ["안전화", "모자"],
  },
];

export function getCategoryDef(slug: string) {
  return categoryDefs.find((c) => c.slug === slug);
}
