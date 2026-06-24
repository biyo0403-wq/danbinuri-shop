import type {
  Category,
  HeroPanel,
  ProcessStep,
  Strength,
} from "./types";

/** 히어로 — 작업복 / 단체복 / 안전조끼·모자 3개 슬라이드 */
export const heroPanels: HeroPanel[] = [
  {
    id: "hero-uniform",
    eyebrow: "단비누리의 IDENTITY",
    title: "기관 · 기업 · 학교를 위한\n맞춤 단체복 전문 기업",
    desc: "브랜드 의류 구매부터 제조까지, 단체에 특화된 토탈 서비스를 제공합니다.",
    href: "#inquiry",
    image: "/images/hero/hero-uniform.jpg",
  },
  {
    id: "hero-group",
    eyebrow: "단비누리의 IDENTITY",
    title: "기관 · 기업 · 학교를 위한\n맞춤 단체복 전문 기업",
    desc: "브랜드 의류 구매부터 제조까지, 단체에 특화된 토탈 서비스를 제공합니다.",
    href: "#inquiry",
    image: "/images/hero/hero-group.jpg",
  },
  {
    id: "hero-vest",
    eyebrow: "단비누리의 IDENTITY",
    title: "기관 · 기업 · 학교를 위한\n맞춤 단체복 전문 기업",
    desc: "브랜드 의류 구매부터 제조까지, 단체에 특화된 토탈 서비스를 제공합니다.",
    href: "#inquiry",
    image: "/images/hero/hero-vest.jpg",
  },
];

/** 강점 4가지 */
export const strengths: Strength[] = [
  { id: "s1", title: "소량 제작 가능", desc: "한 벌부터 대량까지, 수량에 맞춰 제작합니다." },
  { id: "s3", title: "빠른 납기", desc: "급한 일정도 상담을 통해 최대한 맞춰 드립니다." },
  { id: "s4", title: "합리적인 단가", desc: "직접 제작으로 거품 없는 가격을 제공합니다." },
];

/** 제작 품목 6종 */
export const categories: Category[] = [
  { label: "작업복", href: "/products/workwear", image: "/images/category/uniform.jpg", desc: "춘추복 · 동복 · 하복" },
  { label: "단체 조끼/모자", href: "/products/vest", image: "/images/category/vest-cap.jpg", desc: "안전조끼 · 단체 캡" },
  { label: "근무복/후리스", href: "/products/fleece", image: "/images/category/fleece.jpg", desc: "사무 근무복 · 방한 후리스" },
  { label: "체육복/운동복", href: "/products/sportswear", image: "/images/category/sportswear.jpg", desc: "단체 체육복 · 트레이닝" },
  { label: "단체티셔츠", href: "/products/tshirt", image: "/images/category/tshirt.jpg", desc: "행사 · 단체 라운드/카라티" },
  { label: "안전화", href: "/products/safety", image: "/images/category/safety-shoes.jpg", desc: "현장 안전화" },
];

/** 제작 과정 5단계 */
export const processSteps: ProcessStep[] = [
  { step: 1, title: "견적 상담", desc: "품목 · 수량 · 로고 여부를 알려주시면 견적을 드립니다." },
  { step: 2, title: "주문 접수", desc: "견적 확정 후 사이즈 · 수량을 받아 주문을 접수합니다." },
  { step: 3, title: "시안", desc: "로고 위치 · 색상을 반영한 시안을 제작해 확인받습니다." },
  { step: 4, title: "제품 제작", desc: "시안 확정 후 본 제작에 들어갑니다." },
  { step: 5, title: "제품 발송", desc: "완성된 제품을 일정에 맞춰 발송합니다." },
];
