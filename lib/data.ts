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
  { label: "작업복", href: "#inquiry", image: "/images/category/uniform.jpg", desc: "춘추복 · 동복 · 하복" },
  { label: "안전조끼", href: "#inquiry", image: "/images/category/vest.jpg", desc: "건설 · 물류 · 행사" },
  { label: "점퍼", href: "#inquiry", image: "/images/category/jumper.jpg", desc: "방한 · 단체 점퍼" },
  { label: "모자", href: "#inquiry", image: "/images/category/cap.jpg", desc: "단체 캡 · 버킷" },
  { label: "업종별 단체복", href: "#inquiry", image: "/images/category/etc.jpg", desc: "맞춤 상담" },
];

/** 제작 과정 4단계 */
export const processSteps: ProcessStep[] = [
  { step: 1, title: "상담 · 견적", desc: "품목 · 수량 · 로고 여부를 알려주시면 견적을 드립니다." },
  { step: 2, title: "시안 디자인", desc: "로고 위치 · 색상을 반영한 시안을 제작합니다." },
  { step: 3, title: "샘플 확인", desc: "필요 시 샘플로 색감과 사이즈를 확인합니다." },
  { step: 4, title: "대량 제작 · 납품", desc: "확정 후 제작하여 일정에 맞춰 납품합니다." },
];
