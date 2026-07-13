// 이 파일은 scripts/import-clicksports.ps1 로 자동 생성됩니다. 직접 수정하지 마세요.
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
    productSlugs: ["ksk-138", "ksk-407", "ksk-505-505-1", "ksk-211", "ksk-212", "ksk-220", "ksk-2301", "ksk-504", "ksk-601", "ksk-602", "ksk-901", "ksk-902", "ksk-907", "ksk-1401", "ksk-10", "ksk-11", "ksk-12", "ksk-14", "ksk-15", "ksk-14-a", "ksk-103", "ksk-104", "ksk-115", "ksk-506", "ksk-508", "ksk-603", "ksk-720", "ksk-903", "ksk-906", "ksk-a-1", "ksk-a-2", "ksk-a-3", "ksk-a-4", "ksk-29-30", "ksk-1402", "ksk-715", "ksk-16", "ksk-18", "ksk-19", "ksk-21", "ksk-2620", "ksk-23", "ksk-24", "ksk-2623", "ksk-116", "ksk-2627", "ksk-711", "ksk-712", "ksk-713", "ksk-716", "ksk-717", "ksk-20", "ksk-26", "ksk-27", "kp-32-34-33-35", "kp-42-43-44", "kp-43-1-44-1", "kp-670-kp-671", "kp-40-681-tc", "p20289"],
  },
  {
    slug: "vest",
    label: "단체 조끼/모자",
    productSlugs: ["ksk-2599-2560", "ksk-42-43-44", "ksk-45-50-a-550-553-a-565-a", "ksk-51-66-a", "ksk-45-553", "ksk-777-778-779", "ksk-774", "ksk-922", "ksk-560-561-562-563", "ksk-771-773", "ksk-781-789", "ksk-51-81", "ksk-66", "ksk-79"],
  },
  {
    slug: "fleece",
    label: "근무복/후리스",
    productSlugs: ["ksk-2501", "ksk-03", "ksk-06", "ksk-07", "ksk-150", "ksk-101", "ksk-101-1", "ksk-102", "ksk-113", "ksk-114", "ksk-1801", "ksk-205", "ksk-214", "ksk-238", "ksk-904-905", "ksk-2302", "ksk-25", "ksk-25-1", "ksk-25-2", "ksk-54-55", "ksk-61-62-67", "ksk-908"],
  },
  {
    slug: "tshirt",
    label: "단체티셔츠",
    productSlugs: ["ksk-2626", "ksk-500-500-1", "ksk-2628", "ksk-2629", "ksk-583-592", "ksk-520", "ksk-574-575", "ksk-510", "ksk-528", "ksk-593", "ksk-594", "ksk-576-577-578", "ksk-595", "ksk-591", "ksk-580-581", "ksk-584-585-586-587", "ksk-579"],
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
  }
];

export const products: Product[] = [
  {
    slug: "ksk-2501",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-2501/01.jpg"
    ],
  },
  {
    slug: "ksk-2599-2560",
    category: "vest",
    subCategory: "특수다용도",
    title: "반사띠 조끼 작업조끼",
    images: [
      "/products/vest/ksk-2599-2560/01.jpg"
    ],
  },
  {
    slug: "ksk-03",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-03/01.jpg"
    ],
  },
  {
    slug: "ksk-06",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-06/01.jpg"
    ],
  },
  {
    slug: "ksk-07",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-07/01.jpg"
    ],
  },
  {
    slug: "ksk-150",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-150/01.jpg"
    ],
  },
  {
    slug: "ksk-101",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-101/01.jpg"
    ],
  },
  {
    slug: "ksk-101-1",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-101-1/01.jpg"
    ],
  },
  {
    slug: "ksk-102",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-102/01.jpg"
    ],
  },
  {
    slug: "ksk-113",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-113/01.jpg"
    ],
  },
  {
    slug: "ksk-138",
    category: "workwear",
    subCategory: "상하 세트",
    title: "TC 상하세트",
    images: [
      "/products/workwear/ksk-138/01.jpg"
    ],
  },
  {
    slug: "ksk-114",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-114/01.jpg"
    ],
  },
  {
    slug: "ksk-1801",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-1801/01.jpg"
    ],
  },
  {
    slug: "ksk-205",
    category: "fleece",
    subCategory: "민방위복",
    title: "민방위 점퍼",
    images: [
      "/products/fleece/ksk-205/01.jpg"
    ],
  },
  {
    slug: "ksk-214",
    category: "fleece",
    subCategory: "민방위복",
    title: "민방위 모슬린 점퍼",
    images: [
      "/products/fleece/ksk-214/01.jpg"
    ],
  },
  {
    slug: "ksk-407",
    category: "workwear",
    subCategory: "상하 세트",
    title: "TR 배색 상하세트",
    images: [
      "/products/workwear/ksk-407/01.jpg"
    ],
  },
  {
    slug: "ksk-238",
    category: "fleece",
    subCategory: "민방위복",
    title: "민방위복",
    images: [
      "/products/fleece/ksk-238/01.jpg"
    ],
  },
  {
    slug: "ksk-505-505-1",
    category: "workwear",
    subCategory: "상하 세트",
    title: "TR 개버딘 배색 상하세트",
    images: [
      "/products/workwear/ksk-505-505-1/01.jpg"
    ],
  },
  {
    slug: "ksk-211",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-211/01.jpg"
    ],
  },
  {
    slug: "ksk-42-43-44",
    category: "vest",
    subCategory: "기본형",
    title: "타스란 작업조끼",
    images: [
      "/products/vest/ksk-42-43-44/01.jpg"
    ],
  },
  {
    slug: "ksk-212",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-212/01.jpg",
      "/products/workwear/ksk-212/02.jpg"
    ],
  },
  {
    slug: "ksk-220",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-220/01.jpg"
    ],
  },
  {
    slug: "ksk-2301",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-2301/01.jpg"
    ],
  },
  {
    slug: "ksk-504",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-504/01.jpg"
    ],
  },
  {
    slug: "ksk-601",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-601/01.jpg"
    ],
  },
  {
    slug: "ksk-602",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-602/01.jpg"
    ],
  },
  {
    slug: "ksk-901",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-901/01.jpg"
    ],
  },
  {
    slug: "ksk-902",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-902/01.jpg"
    ],
  },
  {
    slug: "ksk-904-905",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복",
    images: [
      "/products/fleece/ksk-904-905/01.jpg"
    ],
  },
  {
    slug: "ksk-907",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "점퍼",
    images: [
      "/products/workwear/ksk-907/01.jpg"
    ],
  },
  {
    slug: "ksk-1401",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-1401/01.jpg"
    ],
  },
  {
    slug: "ksk-10",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-10/01.jpg"
    ],
  },
  {
    slug: "ksk-11",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-11/01.jpg"
    ],
  },
  {
    slug: "ksk-12",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-12/01.jpg"
    ],
  },
  {
    slug: "ksk-14",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-14/01.jpg"
    ],
  },
  {
    slug: "ksk-15",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-15/01.jpg"
    ],
  },
  {
    slug: "ksk-14-a",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-14-a/01.jpg"
    ],
  },
  {
    slug: "ksk-103",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-103/01.jpg"
    ],
  },
  {
    slug: "ksk-104",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-104/01.jpg"
    ],
  },
  {
    slug: "ksk-115",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-115/01.jpg"
    ],
  },
  {
    slug: "ksk-45-50-a-550-553-a-565-a",
    category: "vest",
    subCategory: "기본형",
    title: "야광띠 작업조끼",
    images: [
      "/products/vest/ksk-45-50-a-550-553-a-565-a/01.jpg"
    ],
  },
  {
    slug: "ksk-51-66-a",
    category: "vest",
    subCategory: "기본형",
    title: "야광띠 작업조끼",
    images: [
      "/products/vest/ksk-51-66-a/01.jpg"
    ],
  },
  {
    slug: "ksk-45-553",
    category: "vest",
    subCategory: "기본형",
    title: "TC 작업조끼",
    images: [
      "/products/vest/ksk-45-553/01.jpg"
    ],
  },
  {
    slug: "ksk-506",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-506/01.jpg"
    ],
  },
  {
    slug: "ksk-508",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-508/01.jpg"
    ],
  },
  {
    slug: "ksk-603",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-603/01.jpg"
    ],
  },
  {
    slug: "ksk-720",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-720/01.jpg"
    ],
  },
  {
    slug: "ksk-903",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-903/01.jpg",
      "/products/workwear/ksk-903/02.jpg"
    ],
  },
  {
    slug: "ksk-906",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-906/01.jpg",
      "/products/workwear/ksk-906/02.jpg"
    ],
  },
  {
    slug: "ksk-a-1",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-a-1/01.jpg",
      "/products/workwear/ksk-a-1/02.jpg"
    ],
  },
  {
    slug: "ksk-a-2",
    category: "workwear",
    subCategory: "상하 세트",
    title: "상·하 세트",
    images: [
      "/products/workwear/ksk-a-2/01.jpg",
      "/products/workwear/ksk-a-2/02.jpg"
    ],
  },
  {
    slug: "ksk-a-3",
    category: "workwear",
    subCategory: "상하 세트",
    title: "청지 상·하 세트",
    images: [
      "/products/workwear/ksk-a-3/01.jpg",
      "/products/workwear/ksk-a-3/02.jpg"
    ],
  },
  {
    slug: "ksk-a-4",
    category: "workwear",
    subCategory: "상하 세트",
    title: "청지 상·하 세트",
    images: [
      "/products/workwear/ksk-a-4/01.jpg",
      "/products/workwear/ksk-a-4/02.jpg"
    ],
  },
  {
    slug: "ksk-2302",
    category: "fleece",
    subCategory: "경비복",
    title: "스트라이프 경비복 셔츠",
    images: [
      "/products/fleece/ksk-2302/01.jpg",
      "/products/fleece/ksk-2302/02.jpg"
    ],
  },
  {
    slug: "ksk-25",
    category: "fleece",
    subCategory: "경비복",
    title: "경비복 상·하의",
    images: [
      "/products/fleece/ksk-25/01.jpg",
      "/products/fleece/ksk-25/02.jpg"
    ],
  },
  {
    slug: "ksk-25-1",
    category: "fleece",
    subCategory: "경비복",
    title: "경비복 상·하의",
    images: [
      "/products/fleece/ksk-25-1/01.jpg"
    ],
  },
  {
    slug: "ksk-25-2",
    category: "fleece",
    subCategory: "경비복",
    title: "경비복 상·하의",
    images: [
      "/products/fleece/ksk-25-2/01.jpg"
    ],
  },
  {
    slug: "ksk-29-30",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "항공 바람막이",
    images: [
      "/products/workwear/ksk-29-30/01.jpg"
    ],
  },
  {
    slug: "ksk-1402",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-1402/01.jpg"
    ],
  },
  {
    slug: "ksk-715",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-715/01.jpg"
    ],
  },
  {
    slug: "ksk-16",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-16/01.jpg"
    ],
  },
  {
    slug: "ksk-18",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-18/01.jpg"
    ],
  },
  {
    slug: "ksk-19",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-19/01.jpg"
    ],
  },
  {
    slug: "ksk-21",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-21/01.jpg"
    ],
  },
  {
    slug: "ksk-2620",
    category: "workwear",
    subCategory: "상하 세트",
    title: "스판 청지 상·하 세트",
    images: [
      "/products/workwear/ksk-2620/01.jpg"
    ],
  },
  {
    slug: "ksk-23",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-23/01.jpg"
    ],
  },
  {
    slug: "ksk-24",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-24/01.jpg"
    ],
  },
  {
    slug: "ksk-2623",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "데님헤지 긴팔 셔츠",
    images: [
      "/products/workwear/ksk-2623/01.jpg"
    ],
  },
  {
    slug: "ksk-116",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-116/01.jpg"
    ],
  },
  {
    slug: "ksk-2627",
    category: "workwear",
    subCategory: "바지",
    title: "스판 냉감 바지",
    images: [
      "/products/workwear/ksk-2627/01.jpg"
    ],
  },
  {
    slug: "ksk-711",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-711/01.jpg"
    ],
  },
  {
    slug: "ksk-712",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-712/01.jpg"
    ],
  },
  {
    slug: "ksk-713",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 스즈끼",
    images: [
      "/products/workwear/ksk-713/01.jpg"
    ],
  },
  {
    slug: "ksk-716",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 청지 스즈끼",
    images: [
      "/products/workwear/ksk-716/01.jpg"
    ],
  },
  {
    slug: "ksk-717",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "일체형 청지 스즈끼",
    images: [
      "/products/workwear/ksk-717/01.jpg"
    ],
  },
  {
    slug: "ksk-20",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "멜빵",
    images: [
      "/products/workwear/ksk-20/01.jpg"
    ],
  },
  {
    slug: "ksk-26",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "멜빵",
    images: [
      "/products/workwear/ksk-26/01.jpg"
    ],
  },
  {
    slug: "ksk-2626",
    category: "tshirt",
    subCategory: "카라",
    title: "프로 아이스쿨 냉감 기능성 반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-2626/01.jpg"
    ],
  },
  {
    slug: "ksk-27",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "멜빵",
    images: [
      "/products/workwear/ksk-27/01.jpg"
    ],
  },
  {
    slug: "ksk-500-500-1",
    category: "tshirt",
    subCategory: "카라",
    title: "쿨론 티셔츠",
    images: [
      "/products/tshirt/ksk-500-500-1/01.jpg"
    ],
  },
  {
    slug: "ksk-2628",
    category: "tshirt",
    subCategory: "카라",
    title: "아이스쿨 에어홀 냉감 반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-2628/01.jpg"
    ],
  },
  {
    slug: "ksk-2629",
    category: "tshirt",
    subCategory: "카라",
    title: "아이스쿨 에어홀 냉감 반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-2629/01.jpg"
    ],
  },
  {
    slug: "ksk-583-592",
    category: "tshirt",
    subCategory: "카라",
    title: "쿨론 긴팔 티셔츠",
    images: [
      "/products/tshirt/ksk-583-592/01.jpg"
    ],
  },
  {
    slug: "ksk-520",
    category: "tshirt",
    subCategory: "카라",
    title: "쿨론 긴팔 티셔츠",
    images: [
      "/products/tshirt/ksk-520/01.jpg",
      "/products/tshirt/ksk-520/02.jpg"
    ],
  },
  {
    slug: "ksk-574-575",
    category: "tshirt",
    subCategory: "카라",
    title: "쿨론 티셔츠",
    images: [
      "/products/tshirt/ksk-574-575/01.jpg"
    ],
  },
  {
    slug: "ksk-510",
    category: "tshirt",
    subCategory: "카라",
    title: "PK 30수 쿨론 티셔츠",
    images: [
      "/products/tshirt/ksk-510/01.jpg"
    ],
  },
  {
    slug: "ksk-528",
    category: "tshirt",
    subCategory: "카라",
    title: "반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-528/01.jpg"
    ],
  },
  {
    slug: "ksk-593",
    category: "tshirt",
    subCategory: "카라",
    title: "반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-593/01.jpg"
    ],
  },
  {
    slug: "ksk-594",
    category: "tshirt",
    subCategory: "카라",
    title: "반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-594/01.jpg"
    ],
  },
  {
    slug: "ksk-576-577-578",
    category: "tshirt",
    subCategory: "기능성집업",
    title: "쿨론 반팔 지퍼 티셔츠",
    images: [
      "/products/tshirt/ksk-576-577-578/01.jpg"
    ],
  },
  {
    slug: "ksk-595",
    category: "tshirt",
    subCategory: "카라",
    title: "반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-595/01.jpg"
    ],
  },
  {
    slug: "ksk-591",
    category: "tshirt",
    subCategory: "카라",
    title: "자수 반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-591/01.jpg"
    ],
  },
  {
    slug: "ksk-580-581",
    category: "tshirt",
    subCategory: "카라",
    title: "쿨론 차이나카라 반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-580-581/01.jpg"
    ],
  },
  {
    slug: "ksk-777-778-779",
    category: "vest",
    subCategory: "특수다용도",
    title: "반사띠 특수조끼",
    images: [
      "/products/vest/ksk-777-778-779/01.jpg"
    ],
  },
  {
    slug: "ksk-584-585-586-587",
    category: "tshirt",
    subCategory: "라운드",
    title: "쿨론라운드 반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-584-585-586-587/01.jpg"
    ],
  },
  {
    slug: "ksk-774",
    category: "vest",
    subCategory: "특수다용도",
    title: "반사띠 특수조끼",
    images: [
      "/products/vest/ksk-774/01.jpg"
    ],
  },
  {
    slug: "ksk-579",
    category: "tshirt",
    subCategory: "카라",
    title: "등산복 반팔 티셔츠",
    images: [
      "/products/tshirt/ksk-579/01.jpg"
    ],
  },
  {
    slug: "ksk-922",
    category: "vest",
    subCategory: "팀조끼",
    title: "배색 조끼",
    images: [
      "/products/vest/ksk-922/01.jpg"
    ],
  },
  {
    slug: "ksk-560-561-562-563",
    category: "vest",
    subCategory: "기본형",
    title: "타스란 망사 조끼",
    images: [
      "/products/vest/ksk-560-561-562-563/01.jpg"
    ],
  },
  {
    slug: "ksk-771-773",
    category: "vest",
    subCategory: "기본형",
    title: "타스란 망사 조끼",
    images: [
      "/products/vest/ksk-771-773/01.jpg"
    ],
  },
  {
    slug: "ksk-781-789",
    category: "vest",
    subCategory: "특수다용도",
    title: "사다리 조끼(야광띠 부착 가능)",
    images: [
      "/products/vest/ksk-781-789/01.jpg"
    ],
  },
  {
    slug: "ksk-54-55",
    category: "fleece",
    subCategory: "가운",
    title: "작업가운",
    images: [
      "/products/fleece/ksk-54-55/01.jpg"
    ],
  },
  {
    slug: "ksk-61-62-67",
    category: "fleece",
    subCategory: "병원복",
    title: "위생복 상.하 약사가운",
    images: [
      "/products/fleece/ksk-61-62-67/01.jpg"
    ],
  },
  {
    slug: "ksk-908",
    category: "fleece",
    subCategory: "방진복",
    title: "제전복 점퍼",
    images: [
      "/products/fleece/ksk-908/01.jpg"
    ],
  },
  {
    slug: "kp-32-34-33-35",
    category: "workwear",
    subCategory: "바지",
    title: "TC 기능성 바지",
    images: [
      "/products/workwear/kp-32-34-33-35/01.jpg"
    ],
  },
  {
    slug: "kp-42-43-44",
    category: "workwear",
    subCategory: "바지",
    title: "TC 기능성 얼룩 면바지",
    images: [
      "/products/workwear/kp-42-43-44/01.jpg"
    ],
  },
  {
    slug: "kp-43-1-44-1",
    category: "workwear",
    subCategory: "바지",
    title: "TC 기능성 얼룩 면바지(반바지)",
    images: [
      "/products/workwear/kp-43-1-44-1/01.jpg"
    ],
  },
  {
    slug: "ksk-51-81",
    category: "vest",
    subCategory: "기본형",
    title: "TC 망사조끼",
    images: [
      "/products/vest/ksk-51-81/01.jpg"
    ],
  },
  {
    slug: "ksk-66",
    category: "vest",
    subCategory: "안전조끼",
    title: "형광 망사 조끼",
    images: [
      "/products/vest/ksk-66/01.jpg"
    ],
  },
  {
    slug: "ksk-79",
    category: "vest",
    subCategory: "안전조끼",
    title: "형광 망사 보안 조끼",
    images: [
      "/products/vest/ksk-79/01.jpg"
    ],
  },
  {
    slug: "kp-670-kp-671",
    category: "workwear",
    subCategory: "바지",
    title: "여름 바지",
    images: [
      "/products/workwear/kp-670-kp-671/01.jpg"
    ],
  },
  {
    slug: "kp-40-681-tc",
    category: "workwear",
    subCategory: "바지",
    title: "TC 기능성 면 바지",
    images: [
      "/products/workwear/kp-40-681-tc/01.jpg"
    ],
  },
  {
    slug: "p20289",
    category: "workwear",
    subCategory: "바지",
    title: "TR 진회색건빵 · 작업바지",
    images: [
      "/products/workwear/p20289/01.jpg"
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
