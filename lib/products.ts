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
  {
    slug: "jacket",
    label: "점퍼(바람막이/후리스/패딩)",
    productSlugs: ["windbreaker", "fleece", "padding", "aviation"],
  },
  {
    slug: "tshirt",
    label: "단체티셔츠",
    productSlugs: ["cotton", "cool", "winter"],
  },
  {
    slug: "hoodie",
    label: "후드/맨투맨",
    productSlugs: [
      "sweatshirt-fleece",
      "sweatshirt-basic",
      "hood-fleece",
      "hood-basic",
      "hood-zip-fleece",
      "hood-zip-basic",
    ],
  },
  { slug: "safety", label: "안전화/모자", productSlugs: ["boa", "winter", "insulated"] },
];

export const products: Product[] = [
  {
    slug: "boa",
    category: "safety",
    subCategory: "안전화",
    title: "다이얼락(BOA) 다목적안전화",
    images: [
      "/products/safety/boa/01.jpg",
      "/products/safety/boa/02.jpg",
      "/products/safety/boa/03.jpg",
      "/products/safety/boa/04.jpg",
      "/products/safety/boa/05.jpg",
    ],
  },
  {
    slug: "winter",
    category: "safety",
    subCategory: "안전화",
    title: "겨울용안전화",
    images: [
      "/products/safety/winter/01.jpg",
      "/products/safety/winter/02.jpg",
      "/products/safety/winter/03.jpg",
      "/products/safety/winter/04.jpg",
      "/products/safety/winter/05.jpg",
    ],
  },
  {
    slug: "insulated",
    category: "safety",
    subCategory: "안전화",
    title: "절연화",
    images: [
      "/products/safety/insulated/01.jpg",
      "/products/safety/insulated/02.jpg",
      "/products/safety/insulated/03.jpg",
      "/products/safety/insulated/04.jpg",
    ],
  },
  {
    slug: "sweatshirt-fleece",
    category: "hoodie",
    subCategory: "맨투맨",
    title: "맨투맨 기모",
    images: [
      "/products/hoodie/sweatshirt-fleece/01.jpg",
      "/products/hoodie/sweatshirt-fleece/02.jpg",
      "/products/hoodie/sweatshirt-fleece/03.jpg",
      "/products/hoodie/sweatshirt-fleece/04.jpg",
      "/products/hoodie/sweatshirt-fleece/05.jpg",
    ],
  },
  {
    slug: "sweatshirt-basic",
    category: "hoodie",
    subCategory: "맨투맨",
    title: "맨투맨 기본",
    images: [
      "/products/hoodie/sweatshirt-basic/01.jpg",
      "/products/hoodie/sweatshirt-basic/02.jpg",
      "/products/hoodie/sweatshirt-basic/03.jpg",
      "/products/hoodie/sweatshirt-basic/04.jpg",
      "/products/hoodie/sweatshirt-basic/05.jpg",
    ],
  },
  {
    slug: "hood-fleece",
    category: "hoodie",
    subCategory: "후드",
    title: "후드 기모",
    images: [
      "/products/hoodie/hood-fleece/01.jpg",
      "/products/hoodie/hood-fleece/02.jpg",
      "/products/hoodie/hood-fleece/03.jpg",
      "/products/hoodie/hood-fleece/04.jpg",
      "/products/hoodie/hood-fleece/05.jpg",
    ],
  },
  {
    slug: "hood-basic",
    category: "hoodie",
    subCategory: "후드",
    title: "후드 기본",
    images: [
      "/products/hoodie/hood-basic/01.jpg",
      "/products/hoodie/hood-basic/02.jpg",
      "/products/hoodie/hood-basic/03.jpg",
      "/products/hoodie/hood-basic/04.jpg",
      "/products/hoodie/hood-basic/05.jpg",
    ],
  },
  {
    slug: "hood-zip-fleece",
    category: "hoodie",
    subCategory: "후드",
    title: "후드집업 기모",
    images: [
      "/products/hoodie/hood-zip-fleece/01.jpg",
      "/products/hoodie/hood-zip-fleece/02.jpg",
      "/products/hoodie/hood-zip-fleece/03.jpg",
      "/products/hoodie/hood-zip-fleece/04.jpg",
      "/products/hoodie/hood-zip-fleece/05.jpg",
    ],
  },
  {
    slug: "hood-zip-basic",
    category: "hoodie",
    subCategory: "후드",
    title: "후드집업 기본",
    images: [
      "/products/hoodie/hood-zip-basic/01.jpg",
      "/products/hoodie/hood-zip-basic/02.jpg",
      "/products/hoodie/hood-zip-basic/03.jpg",
      "/products/hoodie/hood-zip-basic/04.jpg",
      "/products/hoodie/hood-zip-basic/05.jpg",
    ],
  },
  {
    slug: "windbreaker",
    category: "jacket",
    subCategory: "바람막이",
    title: "바람막이",
    images: [
      "/products/jacket/windbreaker/01.jpg",
      "/products/jacket/windbreaker/02.jpg",
      "/products/jacket/windbreaker/03.jpg",
      "/products/jacket/windbreaker/04.jpg",
      "/products/jacket/windbreaker/05.jpg",
    ],
  },
  {
    slug: "fleece",
    category: "jacket",
    subCategory: "후리스",
    title: "후리스",
    images: [
      "/products/jacket/fleece/01.jpg",
      "/products/jacket/fleece/02.jpg",
      "/products/jacket/fleece/03.jpg",
      "/products/jacket/fleece/04.jpg",
      "/products/jacket/fleece/05.jpg",
    ],
  },
  {
    slug: "padding",
    category: "jacket",
    subCategory: "패딩",
    title: "패딩",
    images: [
      "/products/jacket/padding/01.jpg",
      "/products/jacket/padding/02.jpg",
      "/products/jacket/padding/03.jpg",
      "/products/jacket/padding/04.jpg",
      "/products/jacket/padding/05.jpg",
    ],
  },
  {
    slug: "aviation",
    category: "jacket",
    subCategory: "항공점퍼",
    title: "항공점퍼",
    images: [
      "/products/jacket/aviation/01.jpg",
      "/products/jacket/aviation/02.jpg",
      "/products/jacket/aviation/03.jpg",
      "/products/jacket/aviation/04.jpg",
      "/products/jacket/aviation/05.jpg",
    ],
  },
  {
    slug: "cotton",
    category: "tshirt",
    subCategory: "면티",
    title: "면티",
    images: [
      "/products/tshirt/cotton/01.jpg",
      "/products/tshirt/cotton/02.jpg",
      "/products/tshirt/cotton/03.jpg",
      "/products/tshirt/cotton/04.jpg",
      "/products/tshirt/cotton/05.jpg",
    ],
  },
  {
    slug: "cool",
    category: "tshirt",
    subCategory: "쿨론티",
    title: "쿨론티",
    images: [
      "/products/tshirt/cool/01.jpg",
      "/products/tshirt/cool/02.jpg",
      "/products/tshirt/cool/03.jpg",
      "/products/tshirt/cool/04.jpg",
      "/products/tshirt/cool/05.jpg",
    ],
  },
  {
    slug: "winter",
    category: "tshirt",
    subCategory: "겨울용 티셔츠",
    title: "겨울용 티셔츠",
    images: [
      "/products/tshirt/winter/01.jpg",
      "/products/tshirt/winter/02.jpg",
      "/products/tshirt/winter/03.jpg",
      "/products/tshirt/winter/04.jpg",
      "/products/tshirt/winter/05.jpg",
    ],
  },
];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(category: string, slug: string) {
  return products.find((p) => p.category === category && p.slug === slug);
}
