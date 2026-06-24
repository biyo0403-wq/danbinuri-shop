export type NavItem = {
  label: string;
  href: string;
  highlight?: boolean;
};

/** 히어로 패널 (작업복 / 안전조끼 등) */
export type HeroPanel = {
  id: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  href: string;
  /** public/images/hero/ 하위 파일 경로 */
  image: string;
};

/** 강점 카드 */
export type Strength = {
  id: string;
  title: string;
  desc: string;
};

/** 제작 품목 카테고리 */
export type Category = {
  label: string;
  href: string;
  image: string;
  desc?: string;
};

/** 제작 과정 단계 */
export type ProcessStep = {
  step: number;
  title: string;
  desc: string;
};

