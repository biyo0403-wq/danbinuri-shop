// 이 파일은 scripts/import-ksk.ps1 로 자동 생성됩니다. 직접 수정하지 마세요.
// 표시 이름을 바꾸려면 lib/product-names.ts 에 추가하세요.
export type ProductCategory = {
  slug: string;
  label: string;
  productSlugs: string[];
};

export type Product = {
  slug: string;
  category: string;
  subCategory: string;
  title: string;
  images: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "workwear",
    label: "작업복",
    productSlugs: [],
  },
  {
    slug: "vest",
    label: "단체 조끼/모자",
    productSlugs: [],
  },
  {
    slug: "fleece",
    label: "근무복/후리스",
    productSlugs: [],
  },
  {
    slug: "tshirt",
    label: "단체티셔츠",
    productSlugs: [],
  },
  {
    slug: "sportswear",
    label: "체육복/운동복",
    productSlugs: [],
  },
  {
    slug: "safety",
    label: "안전화",
    productSlugs: [],
  },
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
