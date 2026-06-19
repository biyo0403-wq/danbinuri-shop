import type { Gnb } from "./types";

export const utilityLinks = [
  { label: "멤버십", href: "/membership" },
  { label: "매장안내", href: "/stores" },
  { label: "고객센터", href: "/cs" },
];

export const gnb: Gnb[] = [
  {
    label: "브랜드",
    href: "/brand",
    columns: [
      {
        title: "여성",
        items: [
          { label: "단비누리 우먼", href: "/brand/women" },
          { label: "에디트", href: "/brand/edit" },
          { label: "라넌큘러스", href: "/brand/ranunculus" },
        ],
      },
      {
        title: "남성",
        items: [
          { label: "단비누리 맨", href: "/brand/men" },
          { label: "그레이라벨", href: "/brand/gray" },
          { label: "어반스탠다드", href: "/brand/urban" },
        ],
      },
      {
        title: "스포츠 · 라이프",
        items: [
          { label: "액티브", href: "/brand/active" },
          { label: "아웃도어", href: "/brand/outdoor" },
          { label: "골프", href: "/brand/golf" },
        ],
      },
    ],
  },
  {
    label: "여성",
    href: "/women",
    columns: [
      {
        title: "의류",
        items: [
          { label: "아우터", href: "/women/outer" },
          { label: "니트 · 가디건", href: "/women/knit" },
          { label: "티셔츠", href: "/women/tshirt" },
          { label: "블라우스 · 셔츠", href: "/women/blouse" },
          { label: "원피스", href: "/women/dress" },
          { label: "팬츠", href: "/women/pants" },
          { label: "스커트", href: "/women/skirt" },
        ],
      },
      {
        title: "잡화",
        items: [
          { label: "가방", href: "/women/bag" },
          { label: "슈즈", href: "/women/shoes" },
          { label: "액세서리", href: "/women/acc" },
        ],
      },
    ],
  },
  {
    label: "남성",
    href: "/men",
    columns: [
      {
        title: "의류",
        items: [
          { label: "아우터", href: "/men/outer" },
          { label: "니트 · 스웨트", href: "/men/knit" },
          { label: "티셔츠", href: "/men/tshirt" },
          { label: "셔츠", href: "/men/shirt" },
          { label: "팬츠", href: "/men/pants" },
        ],
      },
      {
        title: "잡화",
        items: [
          { label: "가방", href: "/men/bag" },
          { label: "슈즈", href: "/men/shoes" },
          { label: "액세서리", href: "/men/acc" },
        ],
      },
    ],
  },
  {
    label: "키즈",
    href: "/kids",
    columns: [
      {
        title: "키즈",
        items: [
          { label: "남아", href: "/kids/boy" },
          { label: "여아", href: "/kids/girl" },
          { label: "베이비", href: "/kids/baby" },
        ],
      },
    ],
  },
  {
    label: "슈즈 · 가방",
    href: "/shoes-bag",
    columns: [
      {
        title: "슈즈",
        items: [
          { label: "스니커즈", href: "/shoes-bag/sneakers" },
          { label: "구두", href: "/shoes-bag/dress-shoes" },
          { label: "부츠", href: "/shoes-bag/boots" },
        ],
      },
      {
        title: "가방",
        items: [
          { label: "백팩", href: "/shoes-bag/backpack" },
          { label: "토트백", href: "/shoes-bag/tote" },
          { label: "크로스백", href: "/shoes-bag/cross" },
        ],
      },
    ],
  },
  { label: "뷰티", href: "/beauty" },
  { label: "아울렛", href: "/outlet" },
  { label: "세일", href: "/sale", highlight: true },
];
