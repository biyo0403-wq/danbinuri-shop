import type { Banner, Product, QuickCategory } from "./types";

export const heroBanners: Banner[] = [
  {
    id: "hero-1",
    title: "2026 SPRING PRE-ORDER",
    subtitle: "단비누리 시즌 프리뷰",
    caption: "지금 예약하면 최대 20% 적립",
    href: "/event/spring",
    image: "/images/hero/hero-1.jpg",
  },
  {
    id: "hero-2",
    title: "WEEKLY BEST",
    subtitle: "이번 주 가장 사랑받은 아이템",
    caption: "베스트 상품 모아보기",
    href: "/best",
    image: "/images/hero/hero-2.jpg",
  },
  {
    id: "hero-3",
    title: "OUTER COLLECTION",
    subtitle: "환절기 아우터 기획전",
    caption: "코트 · 자켓 · 점퍼 한눈에",
    href: "/event/outer",
    image: "/images/hero/hero-3.jpg",
  },
];

export const quickCategories: QuickCategory[] = [
  { label: "신상품", href: "/new", image: "/images/quick/new.jpg" },
  { label: "베스트", href: "/best", image: "/images/quick/best.jpg" },
  { label: "아우터", href: "/women/outer", image: "/images/quick/outer.jpg" },
  { label: "니트", href: "/women/knit", image: "/images/quick/knit.jpg" },
  { label: "원피스", href: "/women/dress", image: "/images/quick/dress.jpg" },
  { label: "팬츠", href: "/women/pants", image: "/images/quick/pants.jpg" },
  { label: "슈즈", href: "/shoes-bag/sneakers", image: "/images/quick/shoes.jpg" },
  { label: "가방", href: "/shoes-bag/tote", image: "/images/quick/bag.jpg" },
  { label: "액세서리", href: "/women/acc", image: "/images/quick/acc.jpg" },
  { label: "세일", href: "/sale", image: "/images/quick/sale.jpg" },
];

export const promoBanners: Banner[] = [
  {
    id: "promo-1",
    title: "신규 회원 15% 쿠폰",
    caption: "가입 즉시 전 상품 사용 가능",
    href: "/membership",
    image: "/images/promo/promo-1.jpg",
  },
  {
    id: "promo-2",
    title: "단독 브랜드관 OPEN",
    caption: "단비누리에서만 만나는 라인업",
    href: "/brand",
    image: "/images/promo/promo-2.jpg",
  },
];

export const wideBanner: Banner = {
  id: "wide-1",
  title: "MEMBERSHIP DAY",
  subtitle: "매월 둘째 주, 멤버십 데이",
  caption: "전 상품 최대 10% 추가 적립 + 무료배송",
  href: "/membership",
  image: "/images/promo/wide-1.jpg",
};

function makeProducts(
  prefix: string,
  flags: Partial<Product>
): Product[] {
  const brands = [
    "DANBINURI",
    "EDIT",
    "GRAY LABEL",
    "URBAN STD",
    "ACTIVE",
    "RANUNCULUS",
    "OUTDOOR",
    "GOLF LINE",
  ];
  const names = [
    "오버핏 울 블렌드 코트",
    "케이블 라운드넥 니트",
    "코튼 스트레이트 팬츠",
    "와이드 핏 데님",
    "릴렉스 셔츠 자켓",
    "베이직 무지 티셔츠",
    "플리츠 미디 스커트",
    "캐시미어 머플러",
  ];
  return Array.from({ length: 8 }, (_, i) => {
    const base = 39000 + i * 17000;
    const sale = flags.sale ?? (i % 3 === 0 ? 30 : i % 3 === 1 ? 20 : 0);
    const listPrice = sale ? Math.round((base / (1 - sale / 100)) / 1000) * 1000 : undefined;
    return {
      id: `${prefix}-${i + 1}`,
      brand: brands[i % brands.length],
      name: names[i % names.length],
      price: base,
      listPrice,
      sale: sale || undefined,
      image: `/images/products/${prefix}-${i + 1}.jpg`,
      colors: (i % 4) + 1,
      coupon: i % 2 === 0,
      ...flags,
    };
  });
}

// 상품을 모두 비워 둔 상태입니다.
// 다시 채우려면 아래처럼 makeProducts(...)를 호출하거나 직접 배열을 작성하세요.
//   export const newProducts: Product[] = makeProducts("new", { isNew: true, sale: 0 });
export const newProducts: Product[] = [];
export const bestProducts: Product[] = [];
export const saleProducts: Product[] = [];

export function formatPrice(n: number) {
  return n.toLocaleString("ko-KR") + "원";
}
