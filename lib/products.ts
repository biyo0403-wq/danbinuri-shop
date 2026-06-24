// 이 파일은 scripts/import-ksk.ps1 로 자동 생성됩니다. 직접 수정하지 마세요.
export type ProductCategory = {
  slug: string;
  label: string;
  productSlugs: string[];
};

export type Product = {
  slug: string;
  category: string;
  title: string;
  images: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "workwear",
    label: "작업복",
    productSlugs: ["03", "101-1", "113", "114", "150", "1801", "211", "212", "213", "220", "2301", "29-30", "601", "602", "901-902", "907", "ksk2501", "ksk2623"],
  },
  {
    slug: "vest",
    label: "단체 조끼/모자",
    productSlugs: ["65", "665", "71-72", "774", "777-778-779-3", "79", "80", "81", "925", "ksk2560", "ksk2599", "tc", "tc-13", "781-789", "42-43-44"],
  },
  {
    slug: "tshirt",
    label: "단체티셔츠",
    productSlugs: ["500", "500-1", "510", "571", "574", "579-580-581", "587", "590", "591", "593", "594", "ksk2626", "ksk2628", "ksk2629"],
  }
];

export const products: Product[] = [
  {
    slug: "03",
    category: "workwear",
    title: "03",
    images: [
      "/products/workwear/03/01.jpg",
      "/products/workwear/03/02.jpg",
      "/products/workwear/03/03.jpg",
      "/products/workwear/03/04.jpg",
      "/products/workwear/03/05.jpg",
      "/products/workwear/03/06.jpg"
    ],
  },
  {
    slug: "101-1",
    category: "workwear",
    title: "101-1",
    images: [
      "/products/workwear/101-1/01.jpg",
      "/products/workwear/101-1/02.jpg",
      "/products/workwear/101-1/03.jpg",
      "/products/workwear/101-1/04.jpg",
      "/products/workwear/101-1/05.jpg",
      "/products/workwear/101-1/06.jpg",
      "/products/workwear/101-1/07.jpg",
      "/products/workwear/101-1/08.jpg"
    ],
  },
  {
    slug: "113",
    category: "workwear",
    title: "113",
    images: [
      "/products/workwear/113/01.jpg",
      "/products/workwear/113/02.jpg"
    ],
  },
  {
    slug: "114",
    category: "workwear",
    title: "114",
    images: [
      "/products/workwear/114/01.jpg",
      "/products/workwear/114/02.jpg",
      "/products/workwear/114/03.jpg",
      "/products/workwear/114/04.jpg",
      "/products/workwear/114/05.jpg",
      "/products/workwear/114/06.jpg",
      "/products/workwear/114/07.jpg",
      "/products/workwear/114/08.jpg"
    ],
  },
  {
    slug: "150",
    category: "workwear",
    title: "150",
    images: [
      "/products/workwear/150/01.jpg",
      "/products/workwear/150/02.jpg",
      "/products/workwear/150/03.jpg",
      "/products/workwear/150/04.jpg",
      "/products/workwear/150/05.jpg",
      "/products/workwear/150/06.jpg",
      "/products/workwear/150/07.jpg"
    ],
  },
  {
    slug: "1801",
    category: "workwear",
    title: "1801",
    images: [
      "/products/workwear/1801/01.jpg",
      "/products/workwear/1801/02.jpg",
      "/products/workwear/1801/03.jpg",
      "/products/workwear/1801/04.jpg",
      "/products/workwear/1801/05.jpg",
      "/products/workwear/1801/06.jpg",
      "/products/workwear/1801/07.jpg",
      "/products/workwear/1801/08.jpg"
    ],
  },
  {
    slug: "211",
    category: "workwear",
    title: "211점퍼",
    images: [
      "/products/workwear/211/01.jpg",
      "/products/workwear/211/02.jpg",
      "/products/workwear/211/03.jpg",
      "/products/workwear/211/04.jpg",
      "/products/workwear/211/05.jpg",
      "/products/workwear/211/06.jpg",
      "/products/workwear/211/07.jpg",
      "/products/workwear/211/08.jpg"
    ],
  },
  {
    slug: "212",
    category: "workwear",
    title: "212점퍼",
    images: [
      "/products/workwear/212/01.jpg",
      "/products/workwear/212/02.jpg",
      "/products/workwear/212/03.jpg",
      "/products/workwear/212/04.jpg",
      "/products/workwear/212/05.jpg",
      "/products/workwear/212/06.jpg",
      "/products/workwear/212/07.jpg",
      "/products/workwear/212/08.jpg"
    ],
  },
  {
    slug: "213",
    category: "workwear",
    title: "213점퍼",
    images: [
      "/products/workwear/213/01.jpg",
      "/products/workwear/213/02.jpg",
      "/products/workwear/213/03.jpg",
      "/products/workwear/213/04.jpg",
      "/products/workwear/213/05.jpg",
      "/products/workwear/213/06.jpg",
      "/products/workwear/213/07.jpg",
      "/products/workwear/213/08.jpg"
    ],
  },
  {
    slug: "220",
    category: "workwear",
    title: "220",
    images: [
      "/products/workwear/220/01.jpg",
      "/products/workwear/220/02.jpg",
      "/products/workwear/220/03.jpg",
      "/products/workwear/220/04.jpg",
      "/products/workwear/220/05.jpg",
      "/products/workwear/220/06.jpg",
      "/products/workwear/220/07.jpg",
      "/products/workwear/220/08.jpg"
    ],
  },
  {
    slug: "2301",
    category: "workwear",
    title: "2301",
    images: [
      "/products/workwear/2301/01.jpg",
      "/products/workwear/2301/02.jpg",
      "/products/workwear/2301/03.jpg",
      "/products/workwear/2301/04.jpg",
      "/products/workwear/2301/05.jpg",
      "/products/workwear/2301/06.jpg",
      "/products/workwear/2301/07.jpg",
      "/products/workwear/2301/08.jpg"
    ],
  },
  {
    slug: "29-30",
    category: "workwear",
    title: "29,30 항공바람막이",
    images: [
      "/products/workwear/29-30/01.jpg",
      "/products/workwear/29-30/02.jpg",
      "/products/workwear/29-30/03.jpg",
      "/products/workwear/29-30/04.jpg",
      "/products/workwear/29-30/05.jpg",
      "/products/workwear/29-30/06.jpg",
      "/products/workwear/29-30/07.jpg",
      "/products/workwear/29-30/08.jpg"
    ],
  },
  {
    slug: "601",
    category: "workwear",
    title: "601",
    images: [
      "/products/workwear/601/01.jpg",
      "/products/workwear/601/02.jpg",
      "/products/workwear/601/03.jpg",
      "/products/workwear/601/04.jpg",
      "/products/workwear/601/05.jpg",
      "/products/workwear/601/06.jpg",
      "/products/workwear/601/07.jpg"
    ],
  },
  {
    slug: "602",
    category: "workwear",
    title: "602",
    images: [
      "/products/workwear/602/01.jpg",
      "/products/workwear/602/02.jpg",
      "/products/workwear/602/03.jpg",
      "/products/workwear/602/04.jpg",
      "/products/workwear/602/05.jpg",
      "/products/workwear/602/06.jpg"
    ],
  },
  {
    slug: "901-902",
    category: "workwear",
    title: "901&902",
    images: [
      "/products/workwear/901-902/01.jpg",
      "/products/workwear/901-902/02.jpg",
      "/products/workwear/901-902/03.jpg",
      "/products/workwear/901-902/04.jpg",
      "/products/workwear/901-902/05.jpg",
      "/products/workwear/901-902/06.jpg",
      "/products/workwear/901-902/07.jpg",
      "/products/workwear/901-902/08.jpg"
    ],
  },
  {
    slug: "907",
    category: "workwear",
    title: "907",
    images: [
      "/products/workwear/907/01.jpg",
      "/products/workwear/907/02.jpg",
      "/products/workwear/907/03.jpg",
      "/products/workwear/907/04.jpg",
      "/products/workwear/907/05.jpg",
      "/products/workwear/907/06.jpg",
      "/products/workwear/907/07.jpg"
    ],
  },
  {
    slug: "ksk2501",
    category: "workwear",
    title: "KSK2501 투톤배색",
    images: [
      "/products/workwear/ksk2501/01.jpg",
      "/products/workwear/ksk2501/02.jpg",
      "/products/workwear/ksk2501/03.jpg",
      "/products/workwear/ksk2501/04.jpg",
      "/products/workwear/ksk2501/05.jpg",
      "/products/workwear/ksk2501/06.jpg",
      "/products/workwear/ksk2501/07.jpg",
      "/products/workwear/ksk2501/08.jpg"
    ],
  },
  {
    slug: "ksk2623",
    category: "workwear",
    title: "KSK2623(데님헤지 셔츠)",
    images: [
      "/products/workwear/ksk2623/01.jpg",
      "/products/workwear/ksk2623/02.jpg",
      "/products/workwear/ksk2623/03.jpg",
      "/products/workwear/ksk2623/04.jpg",
      "/products/workwear/ksk2623/05.jpg",
      "/products/workwear/ksk2623/06.jpg",
      "/products/workwear/ksk2623/07.jpg",
      "/products/workwear/ksk2623/08.jpg"
    ],
  },
  {
    slug: "65",
    category: "vest",
    title: "65 회색망사조끼",
    images: [
      "/products/vest/65/01.jpg",
      "/products/vest/65/02.jpg"
    ],
  },
  {
    slug: "665",
    category: "vest",
    title: "665",
    images: [
      "/products/vest/665/01.jpg",
      "/products/vest/665/02.jpg",
      "/products/vest/665/03.jpg",
      "/products/vest/665/04.jpg",
      "/products/vest/665/05.jpg",
      "/products/vest/665/06.jpg",
      "/products/vest/665/07.jpg",
      "/products/vest/665/08.jpg"
    ],
  },
  {
    slug: "71-72",
    category: "vest",
    title: "71.72 밀리터리 망사조끼",
    images: [
      "/products/vest/71-72/01.jpg",
      "/products/vest/71-72/02.jpg",
      "/products/vest/71-72/03.jpg",
      "/products/vest/71-72/04.jpg",
      "/products/vest/71-72/05.jpg",
      "/products/vest/71-72/06.jpg",
      "/products/vest/71-72/07.jpg",
      "/products/vest/71-72/08.jpg"
    ],
  },
  {
    slug: "774",
    category: "vest",
    title: "774 특수조끼  블랙",
    images: [
      "/products/vest/774/01.jpg",
      "/products/vest/774/02.jpg",
      "/products/vest/774/03.jpg",
      "/products/vest/774/04.jpg",
      "/products/vest/774/05.jpg",
      "/products/vest/774/06.jpg",
      "/products/vest/774/07.jpg",
      "/products/vest/774/08.jpg"
    ],
  },
  {
    slug: "777-778-779-3",
    category: "vest",
    title: "777.778.779 특수조끼3종",
    images: [
      "/products/vest/777-778-779-3/01.jpg",
      "/products/vest/777-778-779-3/02.jpg",
      "/products/vest/777-778-779-3/03.jpg",
      "/products/vest/777-778-779-3/04.jpg",
      "/products/vest/777-778-779-3/05.jpg",
      "/products/vest/777-778-779-3/06.jpg",
      "/products/vest/777-778-779-3/07.jpg",
      "/products/vest/777-778-779-3/08.jpg"
    ],
  },
  {
    slug: "79",
    category: "vest",
    title: "79 경찰,보안조끼 형광",
    images: [
      "/products/vest/79/01.jpg",
      "/products/vest/79/02.jpg",
      "/products/vest/79/03.jpg",
      "/products/vest/79/04.jpg"
    ],
  },
  {
    slug: "80",
    category: "vest",
    title: "80 곤색망사조끼 신형",
    images: [
      "/products/vest/80/01.jpg",
      "/products/vest/80/02.jpg",
      "/products/vest/80/03.jpg",
      "/products/vest/80/04.jpg"
    ],
  },
  {
    slug: "81",
    category: "vest",
    title: "81 검정망사조끼 신상",
    images: [
      "/products/vest/81/01.jpg",
      "/products/vest/81/02.jpg",
      "/products/vest/81/03.jpg"
    ],
  },
  {
    slug: "925",
    category: "vest",
    title: "925",
    images: [
      "/products/vest/925/01.jpg",
      "/products/vest/925/02.jpg",
      "/products/vest/925/03.jpg",
      "/products/vest/925/04.jpg",
      "/products/vest/925/05.jpg",
      "/products/vest/925/06.jpg",
      "/products/vest/925/07.jpg",
      "/products/vest/925/08.jpg"
    ],
  },
  {
    slug: "ksk2560",
    category: "vest",
    title: "KSK2560(챠콜+오렌지)조끼",
    images: [
      "/products/vest/ksk2560/01.jpg",
      "/products/vest/ksk2560/02.jpg",
      "/products/vest/ksk2560/03.jpg",
      "/products/vest/ksk2560/04.jpg",
      "/products/vest/ksk2560/05.jpg",
      "/products/vest/ksk2560/06.jpg",
      "/products/vest/ksk2560/07.jpg",
      "/products/vest/ksk2560/08.jpg"
    ],
  },
  {
    slug: "ksk2599",
    category: "vest",
    title: "KSK2599(챠콜+블루)조끼",
    images: [
      "/products/vest/ksk2599/01.jpg",
      "/products/vest/ksk2599/02.jpg",
      "/products/vest/ksk2599/03.jpg",
      "/products/vest/ksk2599/04.jpg",
      "/products/vest/ksk2599/05.jpg",
      "/products/vest/ksk2599/06.jpg",
      "/products/vest/ksk2599/07.jpg",
      "/products/vest/ksk2599/08.jpg"
    ],
  },
  {
    slug: "tc",
    category: "vest",
    title: "TC망사조끼",
    images: [
      "/products/vest/tc/01.jpg",
      "/products/vest/tc/02.jpg",
      "/products/vest/tc/03.jpg",
      "/products/vest/tc/04.jpg",
      "/products/vest/tc/05.jpg",
      "/products/vest/tc/06.jpg",
      "/products/vest/tc/07.jpg",
      "/products/vest/tc/08.jpg"
    ],
  },
  {
    slug: "tc-13",
    category: "vest",
    title: "TC조끼",
    images: [
      "/products/vest/tc-13/01.jpg",
      "/products/vest/tc-13/02.jpg",
      "/products/vest/tc-13/03.jpg",
      "/products/vest/tc-13/04.jpg",
      "/products/vest/tc-13/05.jpg",
      "/products/vest/tc-13/06.jpg",
      "/products/vest/tc-13/07.jpg",
      "/products/vest/tc-13/08.jpg"
    ],
  },
  {
    slug: "781-789",
    category: "vest",
    title: "사다리조끼 781-789",
    images: [
      "/products/vest/781-789/01.jpg",
      "/products/vest/781-789/02.jpg",
      "/products/vest/781-789/03.jpg",
      "/products/vest/781-789/04.jpg",
      "/products/vest/781-789/05.jpg",
      "/products/vest/781-789/06.jpg",
      "/products/vest/781-789/07.jpg",
      "/products/vest/781-789/08.jpg"
    ],
  },
  {
    slug: "42-43-44",
    category: "vest",
    title: "타스란 42.43.44",
    images: [
      "/products/vest/42-43-44/01.jpg",
      "/products/vest/42-43-44/02.jpg",
      "/products/vest/42-43-44/03.jpg",
      "/products/vest/42-43-44/04.jpg",
      "/products/vest/42-43-44/05.jpg",
      "/products/vest/42-43-44/06.jpg"
    ],
  },
  {
    slug: "500",
    category: "tshirt",
    title: "500",
    images: [
      "/products/tshirt/500/01.jpg",
      "/products/tshirt/500/02.jpg"
    ],
  },
  {
    slug: "500-1",
    category: "tshirt",
    title: "500-1 긴팔 티셔츠",
    images: [
      "/products/tshirt/500-1/01.jpg",
      "/products/tshirt/500-1/02.jpg",
      "/products/tshirt/500-1/03.jpg",
      "/products/tshirt/500-1/04.jpg",
      "/products/tshirt/500-1/05.jpg",
      "/products/tshirt/500-1/06.jpg"
    ],
  },
  {
    slug: "510",
    category: "tshirt",
    title: "510",
    images: [
      "/products/tshirt/510/01.jpg",
      "/products/tshirt/510/02.jpg"
    ],
  },
  {
    slug: "571",
    category: "tshirt",
    title: "571",
    images: [
      "/products/tshirt/571/01.jpg",
      "/products/tshirt/571/02.jpg",
      "/products/tshirt/571/03.jpg"
    ],
  },
  {
    slug: "574",
    category: "tshirt",
    title: "574",
    images: [
      "/products/tshirt/574/01.jpg",
      "/products/tshirt/574/02.jpg",
      "/products/tshirt/574/03.jpg",
      "/products/tshirt/574/04.jpg",
      "/products/tshirt/574/05.jpg",
      "/products/tshirt/574/06.jpg",
      "/products/tshirt/574/07.jpg",
      "/products/tshirt/574/08.jpg"
    ],
  },
  {
    slug: "579-580-581",
    category: "tshirt",
    title: "579,580,581",
    images: [
      "/products/tshirt/579-580-581/01.jpg",
      "/products/tshirt/579-580-581/02.jpg",
      "/products/tshirt/579-580-581/03.jpg",
      "/products/tshirt/579-580-581/04.jpg",
      "/products/tshirt/579-580-581/05.jpg",
      "/products/tshirt/579-580-581/06.jpg",
      "/products/tshirt/579-580-581/07.jpg",
      "/products/tshirt/579-580-581/08.jpg"
    ],
  },
  {
    slug: "587",
    category: "tshirt",
    title: "587(그레이)라운드티셔츠",
    images: [
      "/products/tshirt/587/01.jpg",
      "/products/tshirt/587/02.jpg",
      "/products/tshirt/587/03.jpg",
      "/products/tshirt/587/04.jpg",
      "/products/tshirt/587/05.jpg",
      "/products/tshirt/587/06.jpg"
    ],
  },
  {
    slug: "590",
    category: "tshirt",
    title: "590",
    images: [
      "/products/tshirt/590/01.jpg",
      "/products/tshirt/590/02.jpg",
      "/products/tshirt/590/03.jpg",
      "/products/tshirt/590/04.jpg",
      "/products/tshirt/590/05.jpg",
      "/products/tshirt/590/06.jpg",
      "/products/tshirt/590/07.jpg",
      "/products/tshirt/590/08.jpg"
    ],
  },
  {
    slug: "591",
    category: "tshirt",
    title: "591",
    images: [
      "/products/tshirt/591/01.jpg",
      "/products/tshirt/591/02.jpg",
      "/products/tshirt/591/03.jpg",
      "/products/tshirt/591/04.jpg",
      "/products/tshirt/591/05.jpg"
    ],
  },
  {
    slug: "593",
    category: "tshirt",
    title: "593",
    images: [
      "/products/tshirt/593/01.jpg",
      "/products/tshirt/593/02.jpg",
      "/products/tshirt/593/03.jpg",
      "/products/tshirt/593/04.jpg",
      "/products/tshirt/593/05.jpg"
    ],
  },
  {
    slug: "594",
    category: "tshirt",
    title: "594",
    images: [
      "/products/tshirt/594/01.jpg",
      "/products/tshirt/594/02.jpg",
      "/products/tshirt/594/03.jpg",
      "/products/tshirt/594/04.jpg",
      "/products/tshirt/594/05.jpg",
      "/products/tshirt/594/06.jpg",
      "/products/tshirt/594/07.jpg",
      "/products/tshirt/594/08.jpg"
    ],
  },
  {
    slug: "ksk2626",
    category: "tshirt",
    title: "KSK2626 (프로아이스쿨 냉감기능성티셔츠 곤색)",
    images: [
      "/products/tshirt/ksk2626/01.jpg",
      "/products/tshirt/ksk2626/02.jpg",
      "/products/tshirt/ksk2626/03.jpg",
      "/products/tshirt/ksk2626/04.jpg",
      "/products/tshirt/ksk2626/05.jpg",
      "/products/tshirt/ksk2626/06.jpg",
      "/products/tshirt/ksk2626/07.jpg",
      "/products/tshirt/ksk2626/08.jpg"
    ],
  },
  {
    slug: "ksk2628",
    category: "tshirt",
    title: "KSK2628 (아이스쿨 에어홀 냉감티셔츠 곤색)",
    images: [
      "/products/tshirt/ksk2628/01.jpg",
      "/products/tshirt/ksk2628/02.jpg",
      "/products/tshirt/ksk2628/03.jpg",
      "/products/tshirt/ksk2628/04.jpg",
      "/products/tshirt/ksk2628/05.jpg",
      "/products/tshirt/ksk2628/06.jpg",
      "/products/tshirt/ksk2628/07.jpg",
      "/products/tshirt/ksk2628/08.jpg"
    ],
  },
  {
    slug: "ksk2629",
    category: "tshirt",
    title: "KSK2629 (아이스쿨 에어홀 냉감티셔츠 챠콜그레이)",
    images: [
      "/products/tshirt/ksk2629/01.jpg",
      "/products/tshirt/ksk2629/02.jpg",
      "/products/tshirt/ksk2629/03.jpg",
      "/products/tshirt/ksk2629/04.jpg",
      "/products/tshirt/ksk2629/05.jpg",
      "/products/tshirt/ksk2629/06.jpg",
      "/products/tshirt/ksk2629/07.jpg",
      "/products/tshirt/ksk2629/08.jpg"
    ],
  }
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
