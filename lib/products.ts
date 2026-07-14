// 카테고리 구조 개편(2026-07)으로 상품 데이터를 초기화한 상태입니다.
// 실제 제품 사진이 준비되면 이 배열을 채우세요. 세부카테고리 라벨은
// lib/categories.ts 의 정의와 동일한 문자열을 사용해야 탭에서 필터링됩니다.
export type ProductCategory = {
  slug: string;
  label: string;
  productSlugs: string[];
};

export type Product = {
  slug: string;
  category: string;
  /** lib/categories.ts 의 subCategories(또는 seasons[].subCategories) 값과 동일해야 함 */
  subCategory: string;
  /** 근무복/작업복(workwear) 카테고리에서만 사용: "춘추" | "겨울" */
  season?: string;
  title: string;
  images: string[];
};

export const productCategories: ProductCategory[] = [
  { slug: "workwear", label: "근무복/작업복", productSlugs: [] },
  { slug: "vest", label: "단체조끼", productSlugs: [] },
  { slug: "jacket", label: "점퍼(바람막이/후리스/패딩)", productSlugs: [] },
  { slug: "tshirt", label: "단체티셔츠", productSlugs: [] },
  { slug: "hoodie", label: "후드/맨투맨", productSlugs: [] },
  { slug: "safety", label: "안전화/모자", productSlugs: [] },
];

export const products: Product[] = [];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(category: string, slug: string) {
  return products.find((p) => p.category === category && p.slug === slug);
}
