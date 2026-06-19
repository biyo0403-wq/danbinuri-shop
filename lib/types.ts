export type Gnb = {
  label: string;
  href: string;
  /** 메가메뉴 컬럼 (선택) */
  columns?: { title: string; items: { label: string; href: string }[] }[];
  highlight?: boolean;
};

export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  /** 정가 (할인 표기용) */
  listPrice?: number;
  /** 할인율 % */
  sale?: number;
  /** public/images/products/ 하위 파일명 */
  image: string;
  badges?: string[];
  colors?: number;
  isNew?: boolean;
  isBest?: boolean;
  coupon?: boolean;
};

export type Banner = {
  id: string;
  title: string;
  subtitle?: string;
  caption?: string;
  href: string;
  /** public/images/ 기준 경로 */
  image: string;
};

export type QuickCategory = {
  label: string;
  href: string;
  /** public/images/quick/ 하위 파일명 */
  image: string;
};
