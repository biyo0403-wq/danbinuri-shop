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
    productSlugs: ["03", "101-1", "113", "114", "150", "1801", "211", "212", "213", "220", "2301", "29-30", "601", "602", "901-902", "907", "ksk2501", "ksk2623", "06", "07", "102", "504", "903", "908", "kp2627", "kp", "kp10", "kp103", "kp11", "kp115", "kp12", "kp1401", "kp32", "kp33", "kp34", "kp35", "kp40", "kp407", "kp42", "kp43", "kp43-1", "kp44", "kp44-1", "kp505", "kp506", "kp508", "kp670", "kp671", "kp681", "kp720", "kp906", "kpa-1", "kpa1-903", "ksk603", "103", "104", "138", "1401", "14-a", "506", "a-4", "ksk2620-kp2620", "14", "906", "906-ksk", "ksk12", "ksk505", "116", "1402", "18", "19", "20-26-27-3", "21", "711", "712", "715", "716", "23", "24", "713", "717"],
  },
  {
    slug: "vest",
    label: "단체 조끼/모자",
    productSlugs: ["65", "665", "71-72", "774", "777-778-779-3", "79", "80", "81", "925", "ksk2560", "ksk2599", "tc", "tc-13", "781-789", "42-43-44", "51", "51-a", "52", "52-a", "53", "53-a", "550-a", "551", "552", "560-563", "57", "57-a", "58", "58-a", "59", "59-a", "64", "64-a", "66", "662", "663", "66-a", "775", "776", "922", "924"],
  },
  {
    slug: "fleece",
    label: "근무복/후리스",
    productSlugs: ["54-ksk", "55-ksk", "67-61-62", "904", "905", "2302", "25-1", "25-2", "29", "30", "205-tr", "214", "ksk238"],
  },
  {
    slug: "tshirt",
    label: "단체티셔츠",
    productSlugs: ["500", "500-1", "510", "571", "574", "579-580-581", "587", "590", "591", "593", "594", "ksk2626", "ksk2628", "ksk2629", "520", "572", "573", "575", "576", "577-ksk", "578", "582", "583", "584", "585", "586", "592", "595"],
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
    slug: "03",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "03",
    images: [
      "/products/workwear/03/01.jpg",
      "/products/workwear/03/02.jpg",
      "/products/workwear/03/03.jpg",
      "/products/workwear/03/04.jpg"
    ],
  },
  {
    slug: "101-1",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "101-1",
    images: [
      "/products/workwear/101-1/01.jpg",
      "/products/workwear/101-1/02.jpg",
      "/products/workwear/101-1/03.jpg",
      "/products/workwear/101-1/04.jpg"
    ],
  },
  {
    slug: "113",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "113",
    images: [
      "/products/workwear/113/01.jpg",
      "/products/workwear/113/02.jpg"
    ],
  },
  {
    slug: "114",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "114",
    images: [
      "/products/workwear/114/01.jpg",
      "/products/workwear/114/02.jpg",
      "/products/workwear/114/03.jpg",
      "/products/workwear/114/04.jpg"
    ],
  },
  {
    slug: "150",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "150",
    images: [
      "/products/workwear/150/01.jpg",
      "/products/workwear/150/02.jpg",
      "/products/workwear/150/03.jpg",
      "/products/workwear/150/04.jpg"
    ],
  },
  {
    slug: "1801",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "1801",
    images: [
      "/products/workwear/1801/01.jpg",
      "/products/workwear/1801/02.jpg",
      "/products/workwear/1801/03.jpg",
      "/products/workwear/1801/04.jpg"
    ],
  },
  {
    slug: "211",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "211점퍼",
    images: [
      "/products/workwear/211/01.jpg",
      "/products/workwear/211/02.jpg",
      "/products/workwear/211/03.jpg",
      "/products/workwear/211/04.jpg"
    ],
  },
  {
    slug: "212",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "212점퍼",
    images: [
      "/products/workwear/212/01.jpg",
      "/products/workwear/212/02.jpg",
      "/products/workwear/212/03.jpg",
      "/products/workwear/212/04.jpg"
    ],
  },
  {
    slug: "213",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "213점퍼",
    images: [
      "/products/workwear/213/01.jpg",
      "/products/workwear/213/02.jpg",
      "/products/workwear/213/03.jpg",
      "/products/workwear/213/04.jpg"
    ],
  },
  {
    slug: "220",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "220",
    images: [
      "/products/workwear/220/01.jpg",
      "/products/workwear/220/02.jpg",
      "/products/workwear/220/03.jpg",
      "/products/workwear/220/04.jpg"
    ],
  },
  {
    slug: "2301",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "2301",
    images: [
      "/products/workwear/2301/01.jpg",
      "/products/workwear/2301/02.jpg",
      "/products/workwear/2301/03.jpg",
      "/products/workwear/2301/04.jpg"
    ],
  },
  {
    slug: "29-30",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "29,30 항공바람막이",
    images: [
      "/products/workwear/29-30/01.jpg",
      "/products/workwear/29-30/02.jpg",
      "/products/workwear/29-30/03.jpg",
      "/products/workwear/29-30/04.jpg"
    ],
  },
  {
    slug: "601",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "601",
    images: [
      "/products/workwear/601/01.jpg",
      "/products/workwear/601/02.jpg",
      "/products/workwear/601/03.jpg",
      "/products/workwear/601/04.jpg"
    ],
  },
  {
    slug: "602",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "602",
    images: [
      "/products/workwear/602/01.jpg",
      "/products/workwear/602/02.jpg",
      "/products/workwear/602/03.jpg",
      "/products/workwear/602/04.jpg"
    ],
  },
  {
    slug: "901-902",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "901&902",
    images: [
      "/products/workwear/901-902/01.jpg",
      "/products/workwear/901-902/02.jpg",
      "/products/workwear/901-902/03.jpg",
      "/products/workwear/901-902/04.jpg"
    ],
  },
  {
    slug: "907",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "907",
    images: [
      "/products/workwear/907/01.jpg",
      "/products/workwear/907/02.jpg",
      "/products/workwear/907/03.jpg",
      "/products/workwear/907/04.jpg"
    ],
  },
  {
    slug: "ksk2501",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "KSK2501 투톤배색",
    images: [
      "/products/workwear/ksk2501/01.jpg",
      "/products/workwear/ksk2501/02.jpg",
      "/products/workwear/ksk2501/03.jpg",
      "/products/workwear/ksk2501/04.jpg"
    ],
  },
  {
    slug: "ksk2623",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "KSK2623(데님헤지 셔츠)",
    images: [
      "/products/workwear/ksk2623/01.jpg",
      "/products/workwear/ksk2623/02.jpg",
      "/products/workwear/ksk2623/03.jpg",
      "/products/workwear/ksk2623/04.jpg"
    ],
  },
  {
    slug: "06",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "06 1",
    images: [
      "/products/workwear/06/01.jpg"
    ],
  },
  {
    slug: "07",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "07",
    images: [
      "/products/workwear/07/01.jpg"
    ],
  },
  {
    slug: "102",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "102",
    images: [
      "/products/workwear/102/01.jpg"
    ],
  },
  {
    slug: "504",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "504",
    images: [
      "/products/workwear/504/01.jpg"
    ],
  },
  {
    slug: "903",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "903",
    images: [
      "/products/workwear/903/01.jpg"
    ],
  },
  {
    slug: "908",
    category: "workwear",
    subCategory: "점퍼/자켓",
    title: "908",
    images: [
      "/products/workwear/908/01.jpg"
    ],
  },
  {
    slug: "kp2627",
    category: "workwear",
    subCategory: "바지",
    title: "KP2627 (하이쿨 냉감 스판바지)",
    images: [
      "/products/workwear/kp2627/01.jpg",
      "/products/workwear/kp2627/02.jpg",
      "/products/workwear/kp2627/03.jpg",
      "/products/workwear/kp2627/04.jpg"
    ],
  },
  {
    slug: "kp",
    category: "workwear",
    subCategory: "바지",
    title: "KP",
    images: [
      "/products/workwear/kp/01.jpg",
      "/products/workwear/kp/02.jpg"
    ],
  },
  {
    slug: "kp10",
    category: "workwear",
    subCategory: "바지",
    title: "KP10",
    images: [
      "/products/workwear/kp10/01.jpg",
      "/products/workwear/kp10/02.jpg"
    ],
  },
  {
    slug: "kp103",
    category: "workwear",
    subCategory: "바지",
    title: "KP103",
    images: [
      "/products/workwear/kp103/01.jpg"
    ],
  },
  {
    slug: "kp11",
    category: "workwear",
    subCategory: "바지",
    title: "KP11",
    images: [
      "/products/workwear/kp11/01.jpg",
      "/products/workwear/kp11/02.jpg"
    ],
  },
  {
    slug: "kp115",
    category: "workwear",
    subCategory: "바지",
    title: "KP115하",
    images: [
      "/products/workwear/kp115/01.jpg"
    ],
  },
  {
    slug: "kp12",
    category: "workwear",
    subCategory: "바지",
    title: "KP12",
    images: [
      "/products/workwear/kp12/01.jpg"
    ],
  },
  {
    slug: "kp1401",
    category: "workwear",
    subCategory: "바지",
    title: "KP1401건빵바지",
    images: [
      "/products/workwear/kp1401/01.jpg"
    ],
  },
  {
    slug: "kp32",
    category: "workwear",
    subCategory: "바지",
    title: "KP32회색기능성하",
    images: [
      "/products/workwear/kp32/01.jpg"
    ],
  },
  {
    slug: "kp33",
    category: "workwear",
    subCategory: "바지",
    title: "KP33검기능",
    images: [
      "/products/workwear/kp33/01.jpg"
    ],
  },
  {
    slug: "kp34",
    category: "workwear",
    subCategory: "바지",
    title: "KP34카키기능성",
    images: [
      "/products/workwear/kp34/01.jpg"
    ],
  },
  {
    slug: "kp35",
    category: "workwear",
    subCategory: "바지",
    title: "KP35베이지기능성",
    images: [
      "/products/workwear/kp35/01.jpg"
    ],
  },
  {
    slug: "kp40",
    category: "workwear",
    subCategory: "바지",
    title: "KP40밀리터리바지",
    images: [
      "/products/workwear/kp40/01.jpg"
    ],
  },
  {
    slug: "kp407",
    category: "workwear",
    subCategory: "바지",
    title: "KP407",
    images: [
      "/products/workwear/kp407/01.jpg"
    ],
  },
  {
    slug: "kp42",
    category: "workwear",
    subCategory: "바지",
    title: "KP42 진얼룩",
    images: [
      "/products/workwear/kp42/01.jpg"
    ],
  },
  {
    slug: "kp43",
    category: "workwear",
    subCategory: "바지",
    title: "KP43 회얼룩",
    images: [
      "/products/workwear/kp43/01.jpg"
    ],
  },
  {
    slug: "kp43-1",
    category: "workwear",
    subCategory: "바지",
    title: "KP43-1 회얼룩반바지",
    images: [
      "/products/workwear/kp43-1/01.jpg"
    ],
  },
  {
    slug: "kp44",
    category: "workwear",
    subCategory: "바지",
    title: "KP44 연얼룩",
    images: [
      "/products/workwear/kp44/01.jpg"
    ],
  },
  {
    slug: "kp44-1",
    category: "workwear",
    subCategory: "바지",
    title: "KP44-1 연얼룩반바지",
    images: [
      "/products/workwear/kp44-1/01.jpg"
    ],
  },
  {
    slug: "kp505",
    category: "workwear",
    subCategory: "바지",
    title: "KP505회색",
    images: [
      "/products/workwear/kp505/01.jpg"
    ],
  },
  {
    slug: "kp506",
    category: "workwear",
    subCategory: "바지",
    title: "KP506",
    images: [
      "/products/workwear/kp506/01.jpg",
      "/products/workwear/kp506/02.jpg",
      "/products/workwear/kp506/03.jpg"
    ],
  },
  {
    slug: "kp508",
    category: "workwear",
    subCategory: "바지",
    title: "KP508하",
    images: [
      "/products/workwear/kp508/01.jpg"
    ],
  },
  {
    slug: "kp670",
    category: "workwear",
    subCategory: "바지",
    title: "KP670",
    images: [
      "/products/workwear/kp670/01.jpg",
      "/products/workwear/kp670/02.jpg"
    ],
  },
  {
    slug: "kp671",
    category: "workwear",
    subCategory: "바지",
    title: "KP671등산하",
    images: [
      "/products/workwear/kp671/01.jpg"
    ],
  },
  {
    slug: "kp681",
    category: "workwear",
    subCategory: "바지",
    title: "KP681밀리터리",
    images: [
      "/products/workwear/kp681/01.jpg"
    ],
  },
  {
    slug: "kp720",
    category: "workwear",
    subCategory: "바지",
    title: "KP 720하",
    images: [
      "/products/workwear/kp720/01.jpg"
    ],
  },
  {
    slug: "kp906",
    category: "workwear",
    subCategory: "바지",
    title: "KP906 소컷",
    images: [
      "/products/workwear/kp906/01.jpg"
    ],
  },
  {
    slug: "kpa-1",
    category: "workwear",
    subCategory: "바지",
    title: "KPA-1건빵바지",
    images: [
      "/products/workwear/kpa-1/01.jpg"
    ],
  },
  {
    slug: "kpa1-903",
    category: "workwear",
    subCategory: "바지",
    title: "KP A1,903",
    images: [
      "/products/workwear/kpa1-903/01.jpg"
    ],
  },
  {
    slug: "ksk603",
    category: "workwear",
    subCategory: "바지",
    title: "KSK603하",
    images: [
      "/products/workwear/ksk603/01.jpg"
    ],
  },
  {
    slug: "103",
    category: "workwear",
    subCategory: "상하 세트",
    title: "103",
    images: [
      "/products/workwear/103/01.jpg",
      "/products/workwear/103/02.jpg",
      "/products/workwear/103/03.jpg",
      "/products/workwear/103/04.jpg"
    ],
  },
  {
    slug: "104",
    category: "workwear",
    subCategory: "상하 세트",
    title: "104",
    images: [
      "/products/workwear/104/01.jpg",
      "/products/workwear/104/02.jpg",
      "/products/workwear/104/03.jpg",
      "/products/workwear/104/04.jpg"
    ],
  },
  {
    slug: "138",
    category: "workwear",
    subCategory: "상하 세트",
    title: "138",
    images: [
      "/products/workwear/138/01.jpg",
      "/products/workwear/138/02.jpg",
      "/products/workwear/138/03.jpg",
      "/products/workwear/138/04.jpg"
    ],
  },
  {
    slug: "1401",
    category: "workwear",
    subCategory: "상하 세트",
    title: "1401",
    images: [
      "/products/workwear/1401/01.jpg",
      "/products/workwear/1401/02.jpg",
      "/products/workwear/1401/03.jpg",
      "/products/workwear/1401/04.jpg"
    ],
  },
  {
    slug: "14-a",
    category: "workwear",
    subCategory: "상하 세트",
    title: "14-A 블루진 야광띠",
    images: [
      "/products/workwear/14-a/01.jpg",
      "/products/workwear/14-a/02.jpg",
      "/products/workwear/14-a/03.jpg",
      "/products/workwear/14-a/04.jpg"
    ],
  },
  {
    slug: "506",
    category: "workwear",
    subCategory: "상하 세트",
    title: "506",
    images: [
      "/products/workwear/506/01.jpg",
      "/products/workwear/506/02.jpg"
    ],
  },
  {
    slug: "a-4",
    category: "workwear",
    subCategory: "상하 세트",
    title: "A-4",
    images: [
      "/products/workwear/a-4/01.jpg",
      "/products/workwear/a-4/02.jpg",
      "/products/workwear/a-4/03.jpg",
      "/products/workwear/a-4/04.jpg"
    ],
  },
  {
    slug: "ksk2620-kp2620",
    category: "workwear",
    subCategory: "상하 세트",
    title: "KSK2620&KP2620(다크 인디고 스판데님 상.하)",
    images: [
      "/products/workwear/ksk2620-kp2620/01.jpg",
      "/products/workwear/ksk2620-kp2620/02.jpg",
      "/products/workwear/ksk2620-kp2620/03.jpg",
      "/products/workwear/ksk2620-kp2620/04.jpg"
    ],
  },
  {
    slug: "14",
    category: "workwear",
    subCategory: "상하 세트",
    title: "14블루진야광띠소컷1등판",
    images: [
      "/products/workwear/14/01.jpg"
    ],
  },
  {
    slug: "906",
    category: "workwear",
    subCategory: "상하 세트",
    title: "906 소컷 1",
    images: [
      "/products/workwear/906/01.jpg"
    ],
  },
  {
    slug: "906-ksk",
    category: "workwear",
    subCategory: "상하 세트",
    title: "906-KSK",
    images: [
      "/products/workwear/906-ksk/01.jpg"
    ],
  },
  {
    slug: "ksk12",
    category: "workwear",
    subCategory: "상하 세트",
    title: "KSK 12",
    images: [
      "/products/workwear/ksk12/01.jpg"
    ],
  },
  {
    slug: "ksk505",
    category: "workwear",
    subCategory: "상하 세트",
    title: "KSK 505",
    images: [
      "/products/workwear/ksk505/01.jpg"
    ],
  },
  {
    slug: "116",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "116",
    images: [
      "/products/workwear/116/01.jpg",
      "/products/workwear/116/02.jpg"
    ],
  },
  {
    slug: "1402",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "1402 밀리터리",
    images: [
      "/products/workwear/1402/01.jpg",
      "/products/workwear/1402/02.jpg",
      "/products/workwear/1402/03.jpg",
      "/products/workwear/1402/04.jpg"
    ],
  },
  {
    slug: "18",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "18",
    images: [
      "/products/workwear/18/01.jpg",
      "/products/workwear/18/02.jpg",
      "/products/workwear/18/03.jpg",
      "/products/workwear/18/04.jpg"
    ],
  },
  {
    slug: "19",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "19",
    images: [
      "/products/workwear/19/01.jpg",
      "/products/workwear/19/02.jpg"
    ],
  },
  {
    slug: "20-26-27-3",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "20,26,27 멜빵3종",
    images: [
      "/products/workwear/20-26-27-3/01.jpg",
      "/products/workwear/20-26-27-3/02.jpg"
    ],
  },
  {
    slug: "21",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "21 네이비+블루",
    images: [
      "/products/workwear/21/01.jpg",
      "/products/workwear/21/02.jpg"
    ],
  },
  {
    slug: "711",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "711",
    images: [
      "/products/workwear/711/01.jpg",
      "/products/workwear/711/02.jpg",
      "/products/workwear/711/03.jpg",
      "/products/workwear/711/04.jpg"
    ],
  },
  {
    slug: "712",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "712 우주",
    images: [
      "/products/workwear/712/01.jpg",
      "/products/workwear/712/02.jpg",
      "/products/workwear/712/03.jpg",
      "/products/workwear/712/04.jpg"
    ],
  },
  {
    slug: "715",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "715 밀리터리",
    images: [
      "/products/workwear/715/01.jpg",
      "/products/workwear/715/02.jpg",
      "/products/workwear/715/03.jpg",
      "/products/workwear/715/04.jpg"
    ],
  },
  {
    slug: "716",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "716 청지우주",
    images: [
      "/products/workwear/716/01.jpg",
      "/products/workwear/716/02.jpg",
      "/products/workwear/716/03.jpg",
      "/products/workwear/716/04.jpg"
    ],
  },
  {
    slug: "23",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "23",
    images: [
      "/products/workwear/23/01.jpg"
    ],
  },
  {
    slug: "24",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "24",
    images: [
      "/products/workwear/24/01.jpg"
    ],
  },
  {
    slug: "713",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "713",
    images: [
      "/products/workwear/713/01.jpg"
    ],
  },
  {
    slug: "717",
    category: "workwear",
    subCategory: "우주복/멜빵바지",
    title: "717 청스즈끼 (A-4원단동일)",
    images: [
      "/products/workwear/717/01.jpg"
    ],
  },
  {
    slug: "65",
    category: "vest",
    subCategory: "기본형",
    title: "65 회색망사조끼",
    images: [
      "/products/vest/65/01.jpg",
      "/products/vest/65/02.jpg"
    ],
  },
  {
    slug: "665",
    category: "vest",
    subCategory: "특수다용도",
    title: "665",
    images: [
      "/products/vest/665/01.jpg",
      "/products/vest/665/02.jpg",
      "/products/vest/665/03.jpg",
      "/products/vest/665/04.jpg"
    ],
  },
  {
    slug: "71-72",
    category: "vest",
    subCategory: "밀리터리",
    title: "71.72 밀리터리 망사조끼",
    images: [
      "/products/vest/71-72/01.jpg",
      "/products/vest/71-72/02.jpg",
      "/products/vest/71-72/03.jpg",
      "/products/vest/71-72/04.jpg"
    ],
  },
  {
    slug: "774",
    category: "vest",
    subCategory: "특수다용도",
    title: "774 특수조끼  블랙",
    images: [
      "/products/vest/774/01.jpg",
      "/products/vest/774/02.jpg",
      "/products/vest/774/03.jpg",
      "/products/vest/774/04.jpg"
    ],
  },
  {
    slug: "777-778-779-3",
    category: "vest",
    subCategory: "특수다용도",
    title: "777.778.779 특수조끼3종",
    images: [
      "/products/vest/777-778-779-3/01.jpg",
      "/products/vest/777-778-779-3/02.jpg",
      "/products/vest/777-778-779-3/03.jpg",
      "/products/vest/777-778-779-3/04.jpg"
    ],
  },
  {
    slug: "79",
    category: "vest",
    subCategory: "안전조끼",
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
    subCategory: "안전조끼",
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
    subCategory: "안전조끼",
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
    subCategory: "특수다용도",
    title: "925",
    images: [
      "/products/vest/925/01.jpg",
      "/products/vest/925/02.jpg",
      "/products/vest/925/03.jpg",
      "/products/vest/925/04.jpg"
    ],
  },
  {
    slug: "ksk2560",
    category: "vest",
    subCategory: "팀조끼",
    title: "KSK2560(챠콜+오렌지)조끼",
    images: [
      "/products/vest/ksk2560/01.jpg",
      "/products/vest/ksk2560/02.jpg",
      "/products/vest/ksk2560/03.jpg",
      "/products/vest/ksk2560/04.jpg"
    ],
  },
  {
    slug: "ksk2599",
    category: "vest",
    subCategory: "팀조끼",
    title: "KSK2599(챠콜+블루)조끼",
    images: [
      "/products/vest/ksk2599/01.jpg",
      "/products/vest/ksk2599/02.jpg",
      "/products/vest/ksk2599/03.jpg",
      "/products/vest/ksk2599/04.jpg"
    ],
  },
  {
    slug: "tc",
    category: "vest",
    subCategory: "기본형",
    title: "TC망사조끼",
    images: [
      "/products/vest/tc/01.jpg",
      "/products/vest/tc/02.jpg",
      "/products/vest/tc/03.jpg",
      "/products/vest/tc/04.jpg"
    ],
  },
  {
    slug: "tc-13",
    category: "vest",
    subCategory: "기본형",
    title: "TC조끼",
    images: [
      "/products/vest/tc-13/01.jpg",
      "/products/vest/tc-13/02.jpg",
      "/products/vest/tc-13/03.jpg",
      "/products/vest/tc-13/04.jpg"
    ],
  },
  {
    slug: "781-789",
    category: "vest",
    subCategory: "특수다용도",
    title: "사다리조끼 781-789",
    images: [
      "/products/vest/781-789/01.jpg",
      "/products/vest/781-789/02.jpg",
      "/products/vest/781-789/03.jpg",
      "/products/vest/781-789/04.jpg"
    ],
  },
  {
    slug: "42-43-44",
    category: "vest",
    subCategory: "팀조끼",
    title: "타스란 42.43.44",
    images: [
      "/products/vest/42-43-44/01.jpg",
      "/products/vest/42-43-44/02.jpg",
      "/products/vest/42-43-44/03.jpg",
      "/products/vest/42-43-44/04.jpg"
    ],
  },
  {
    slug: "51",
    category: "vest",
    subCategory: "기본형",
    title: "51",
    images: [
      "/products/vest/51/01.jpg",
      "/products/vest/51/02.jpg"
    ],
  },
  {
    slug: "51-a",
    category: "vest",
    subCategory: "기본형",
    title: "51-A",
    images: [
      "/products/vest/51-a/01.jpg",
      "/products/vest/51-a/02.jpg"
    ],
  },
  {
    slug: "52",
    category: "vest",
    subCategory: "기본형",
    title: "52뒤",
    images: [
      "/products/vest/52/01.jpg"
    ],
  },
  {
    slug: "52-a",
    category: "vest",
    subCategory: "기본형",
    title: "52-A",
    images: [
      "/products/vest/52-a/01.jpg",
      "/products/vest/52-a/02.jpg"
    ],
  },
  {
    slug: "53",
    category: "vest",
    subCategory: "기본형",
    title: "53",
    images: [
      "/products/vest/53/01.jpg",
      "/products/vest/53/02.jpg"
    ],
  },
  {
    slug: "53-a",
    category: "vest",
    subCategory: "기본형",
    title: "53-A",
    images: [
      "/products/vest/53-a/01.jpg",
      "/products/vest/53-a/02.jpg"
    ],
  },
  {
    slug: "550-a",
    category: "vest",
    subCategory: "기본형",
    title: "550-A",
    images: [
      "/products/vest/550-a/01.jpg",
      "/products/vest/550-a/02.jpg"
    ],
  },
  {
    slug: "551",
    category: "vest",
    subCategory: "기본형",
    title: "551견장",
    images: [
      "/products/vest/551/01.jpg"
    ],
  },
  {
    slug: "552",
    category: "vest",
    subCategory: "기본형",
    title: "552",
    images: [
      "/products/vest/552/01.jpg"
    ],
  },
  {
    slug: "560-563",
    category: "vest",
    subCategory: "기본형",
    title: "560~563",
    images: [
      "/products/vest/560-563/01.jpg",
      "/products/vest/560-563/02.jpg"
    ],
  },
  {
    slug: "57",
    category: "vest",
    subCategory: "기본형",
    title: "57",
    images: [
      "/products/vest/57/01.jpg",
      "/products/vest/57/02.jpg"
    ],
  },
  {
    slug: "57-a",
    category: "vest",
    subCategory: "기본형",
    title: "57-A",
    images: [
      "/products/vest/57-a/01.jpg",
      "/products/vest/57-a/02.jpg"
    ],
  },
  {
    slug: "58",
    category: "vest",
    subCategory: "기본형",
    title: "58",
    images: [
      "/products/vest/58/01.jpg",
      "/products/vest/58/02.jpg"
    ],
  },
  {
    slug: "58-a",
    category: "vest",
    subCategory: "기본형",
    title: "58-A",
    images: [
      "/products/vest/58-a/01.jpg",
      "/products/vest/58-a/02.jpg"
    ],
  },
  {
    slug: "59",
    category: "vest",
    subCategory: "기본형",
    title: "59",
    images: [
      "/products/vest/59/01.jpg",
      "/products/vest/59/02.jpg"
    ],
  },
  {
    slug: "59-a",
    category: "vest",
    subCategory: "기본형",
    title: "59-A",
    images: [
      "/products/vest/59-a/01.jpg",
      "/products/vest/59-a/02.jpg"
    ],
  },
  {
    slug: "64",
    category: "vest",
    subCategory: "기본형",
    title: "64",
    images: [
      "/products/vest/64/01.jpg",
      "/products/vest/64/02.jpg"
    ],
  },
  {
    slug: "64-a",
    category: "vest",
    subCategory: "기본형",
    title: "64-A",
    images: [
      "/products/vest/64-a/01.jpg",
      "/products/vest/64-a/02.jpg"
    ],
  },
  {
    slug: "66",
    category: "vest",
    subCategory: "기본형",
    title: "66",
    images: [
      "/products/vest/66/01.jpg",
      "/products/vest/66/02.jpg",
      "/products/vest/66/03.jpg"
    ],
  },
  {
    slug: "662",
    category: "vest",
    subCategory: "기본형",
    title: "662",
    images: [
      "/products/vest/662/01.jpg",
      "/products/vest/662/02.jpg"
    ],
  },
  {
    slug: "663",
    category: "vest",
    subCategory: "기본형",
    title: "663",
    images: [
      "/products/vest/663/01.jpg"
    ],
  },
  {
    slug: "66-a",
    category: "vest",
    subCategory: "기본형",
    title: "66-A",
    images: [
      "/products/vest/66-a/01.jpg"
    ],
  },
  {
    slug: "775",
    category: "vest",
    subCategory: "특수다용도",
    title: "775",
    images: [
      "/products/vest/775/01.jpg",
      "/products/vest/775/02.jpg"
    ],
  },
  {
    slug: "776",
    category: "vest",
    subCategory: "특수다용도",
    title: "776",
    images: [
      "/products/vest/776/01.jpg",
      "/products/vest/776/02.jpg"
    ],
  },
  {
    slug: "922",
    category: "vest",
    subCategory: "팀조끼",
    title: "922",
    images: [
      "/products/vest/922/01.jpg",
      "/products/vest/922/02.jpg",
      "/products/vest/922/03.jpg"
    ],
  },
  {
    slug: "924",
    category: "vest",
    subCategory: "기본형",
    title: "924",
    images: [
      "/products/vest/924/01.jpg"
    ],
  },
  {
    slug: "54-ksk",
    category: "fleece",
    subCategory: "제전복/위생복/가운",
    title: "54-KSK",
    images: [
      "/products/fleece/54-ksk/01.jpg"
    ],
  },
  {
    slug: "55-ksk",
    category: "fleece",
    subCategory: "제전복/위생복/가운",
    title: "55-KSK",
    images: [
      "/products/fleece/55-ksk/01.jpg"
    ],
  },
  {
    slug: "67-61-62",
    category: "fleece",
    subCategory: "제전복/위생복/가운",
    title: "67&61&62 위생복,약사까운",
    images: [
      "/products/fleece/67-61-62/01.jpg"
    ],
  },
  {
    slug: "904",
    category: "fleece",
    subCategory: "제전복/위생복/가운",
    title: "904 제전복 반팔",
    images: [
      "/products/fleece/904/01.jpg"
    ],
  },
  {
    slug: "905",
    category: "fleece",
    subCategory: "제전복/위생복/가운",
    title: "905",
    images: [
      "/products/fleece/905/01.jpg",
      "/products/fleece/905/02.jpg"
    ],
  },
  {
    slug: "2302",
    category: "fleece",
    subCategory: "경비복",
    title: "2302스트라이프셔츠",
    images: [
      "/products/fleece/2302/01.jpg",
      "/products/fleece/2302/02.jpg",
      "/products/fleece/2302/03.jpg",
      "/products/fleece/2302/04.jpg"
    ],
  },
  {
    slug: "25-1",
    category: "fleece",
    subCategory: "경비복",
    title: "25-1",
    images: [
      "/products/fleece/25-1/01.jpg",
      "/products/fleece/25-1/02.jpg",
      "/products/fleece/25-1/03.jpg"
    ],
  },
  {
    slug: "25-2",
    category: "fleece",
    subCategory: "경비복",
    title: "25-2",
    images: [
      "/products/fleece/25-2/01.jpg",
      "/products/fleece/25-2/02.jpg"
    ],
  },
  {
    slug: "29",
    category: "fleece",
    subCategory: "경비복",
    title: "29",
    images: [
      "/products/fleece/29/01.jpg",
      "/products/fleece/29/02.jpg"
    ],
  },
  {
    slug: "30",
    category: "fleece",
    subCategory: "경비복",
    title: "30",
    images: [
      "/products/fleece/30/01.jpg"
    ],
  },
  {
    slug: "205-tr",
    category: "fleece",
    subCategory: "민방위복",
    title: "205민방위(TR고밀도)",
    images: [
      "/products/fleece/205-tr/01.jpg",
      "/products/fleece/205-tr/02.jpg",
      "/products/fleece/205-tr/03.jpg",
      "/products/fleece/205-tr/04.jpg"
    ],
  },
  {
    slug: "214",
    category: "fleece",
    subCategory: "민방위복",
    title: "214민방위 (모슬린)",
    images: [
      "/products/fleece/214/01.jpg",
      "/products/fleece/214/02.jpg",
      "/products/fleece/214/03.jpg",
      "/products/fleece/214/04.jpg"
    ],
  },
  {
    slug: "ksk238",
    category: "fleece",
    subCategory: "민방위복",
    title: "KSK238 (신형)민방위복",
    images: [
      "/products/fleece/ksk238/01.jpg",
      "/products/fleece/ksk238/02.jpg",
      "/products/fleece/ksk238/03.jpg",
      "/products/fleece/ksk238/04.jpg"
    ],
  },
  {
    slug: "500",
    category: "tshirt",
    subCategory: "카라",
    title: "500",
    images: [
      "/products/tshirt/500/01.jpg",
      "/products/tshirt/500/02.jpg"
    ],
  },
  {
    slug: "500-1",
    category: "tshirt",
    subCategory: "카라",
    title: "500-1 긴팔 티셔츠",
    images: [
      "/products/tshirt/500-1/01.jpg",
      "/products/tshirt/500-1/02.jpg",
      "/products/tshirt/500-1/03.jpg",
      "/products/tshirt/500-1/04.jpg"
    ],
  },
  {
    slug: "510",
    category: "tshirt",
    subCategory: "카라",
    title: "510",
    images: [
      "/products/tshirt/510/01.jpg",
      "/products/tshirt/510/02.jpg"
    ],
  },
  {
    slug: "571",
    category: "tshirt",
    subCategory: "카라",
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
    subCategory: "카라",
    title: "574",
    images: [
      "/products/tshirt/574/01.jpg",
      "/products/tshirt/574/02.jpg",
      "/products/tshirt/574/03.jpg",
      "/products/tshirt/574/04.jpg"
    ],
  },
  {
    slug: "579-580-581",
    category: "tshirt",
    subCategory: "기능성집업",
    title: "579,580,581",
    images: [
      "/products/tshirt/579-580-581/01.jpg",
      "/products/tshirt/579-580-581/02.jpg",
      "/products/tshirt/579-580-581/03.jpg",
      "/products/tshirt/579-580-581/04.jpg"
    ],
  },
  {
    slug: "587",
    category: "tshirt",
    subCategory: "라운드",
    title: "587(그레이)라운드티셔츠",
    images: [
      "/products/tshirt/587/01.jpg",
      "/products/tshirt/587/02.jpg",
      "/products/tshirt/587/03.jpg",
      "/products/tshirt/587/04.jpg"
    ],
  },
  {
    slug: "590",
    category: "tshirt",
    subCategory: "카라",
    title: "590",
    images: [
      "/products/tshirt/590/01.jpg",
      "/products/tshirt/590/02.jpg",
      "/products/tshirt/590/03.jpg",
      "/products/tshirt/590/04.jpg"
    ],
  },
  {
    slug: "591",
    category: "tshirt",
    subCategory: "카라",
    title: "591",
    images: [
      "/products/tshirt/591/01.jpg",
      "/products/tshirt/591/02.jpg",
      "/products/tshirt/591/03.jpg",
      "/products/tshirt/591/04.jpg"
    ],
  },
  {
    slug: "593",
    category: "tshirt",
    subCategory: "카라",
    title: "593",
    images: [
      "/products/tshirt/593/01.jpg",
      "/products/tshirt/593/02.jpg",
      "/products/tshirt/593/03.jpg",
      "/products/tshirt/593/04.jpg"
    ],
  },
  {
    slug: "594",
    category: "tshirt",
    subCategory: "카라",
    title: "594",
    images: [
      "/products/tshirt/594/01.jpg",
      "/products/tshirt/594/02.jpg",
      "/products/tshirt/594/03.jpg",
      "/products/tshirt/594/04.jpg"
    ],
  },
  {
    slug: "ksk2626",
    category: "tshirt",
    subCategory: "카라",
    title: "KSK2626 (프로아이스쿨 냉감기능성티셔츠 곤색)",
    images: [
      "/products/tshirt/ksk2626/01.jpg",
      "/products/tshirt/ksk2626/02.jpg",
      "/products/tshirt/ksk2626/03.jpg",
      "/products/tshirt/ksk2626/04.jpg"
    ],
  },
  {
    slug: "ksk2628",
    category: "tshirt",
    subCategory: "카라",
    title: "KSK2628 (아이스쿨 에어홀 냉감티셔츠 곤색)",
    images: [
      "/products/tshirt/ksk2628/01.jpg",
      "/products/tshirt/ksk2628/02.jpg",
      "/products/tshirt/ksk2628/03.jpg",
      "/products/tshirt/ksk2628/04.jpg"
    ],
  },
  {
    slug: "ksk2629",
    category: "tshirt",
    subCategory: "카라",
    title: "KSK2629 (아이스쿨 에어홀 냉감티셔츠 챠콜그레이)",
    images: [
      "/products/tshirt/ksk2629/01.jpg",
      "/products/tshirt/ksk2629/02.jpg",
      "/products/tshirt/ksk2629/03.jpg",
      "/products/tshirt/ksk2629/04.jpg"
    ],
  },
  {
    slug: "520",
    category: "tshirt",
    subCategory: "카라",
    title: "520 티셔츠",
    images: [
      "/products/tshirt/520/01.jpg"
    ],
  },
  {
    slug: "572",
    category: "tshirt",
    subCategory: "카라",
    title: "572",
    images: [
      "/products/tshirt/572/01.jpg"
    ],
  },
  {
    slug: "573",
    category: "tshirt",
    subCategory: "카라",
    title: "573",
    images: [
      "/products/tshirt/573/01.jpg"
    ],
  },
  {
    slug: "575",
    category: "tshirt",
    subCategory: "카라",
    title: "575",
    images: [
      "/products/tshirt/575/01.jpg"
    ],
  },
  {
    slug: "576",
    category: "tshirt",
    subCategory: "카라",
    title: "576",
    images: [
      "/products/tshirt/576/01.jpg"
    ],
  },
  {
    slug: "577-ksk",
    category: "tshirt",
    subCategory: "카라",
    title: "577-KSK",
    images: [
      "/products/tshirt/577-ksk/01.jpg"
    ],
  },
  {
    slug: "578",
    category: "tshirt",
    subCategory: "카라",
    title: "578",
    images: [
      "/products/tshirt/578/01.jpg"
    ],
  },
  {
    slug: "582",
    category: "tshirt",
    subCategory: "카라",
    title: "582",
    images: [
      "/products/tshirt/582/01.jpg"
    ],
  },
  {
    slug: "583",
    category: "tshirt",
    subCategory: "카라",
    title: "583",
    images: [
      "/products/tshirt/583/01.jpg"
    ],
  },
  {
    slug: "584",
    category: "tshirt",
    subCategory: "카라",
    title: "584",
    images: [
      "/products/tshirt/584/01.jpg"
    ],
  },
  {
    slug: "585",
    category: "tshirt",
    subCategory: "카라",
    title: "585",
    images: [
      "/products/tshirt/585/01.jpg"
    ],
  },
  {
    slug: "586",
    category: "tshirt",
    subCategory: "카라",
    title: "586",
    images: [
      "/products/tshirt/586/01.jpg"
    ],
  },
  {
    slug: "592",
    category: "tshirt",
    subCategory: "카라",
    title: "592",
    images: [
      "/products/tshirt/592/01.jpg"
    ],
  },
  {
    slug: "595",
    category: "tshirt",
    subCategory: "카라",
    title: "595",
    images: [
      "/products/tshirt/595/01.jpg"
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
