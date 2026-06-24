/**
 * 취급 브랜드 (구매대행).
 * 스포츠브랜드 / 아웃도어브랜드 정품을 구매대행으로 공급한다.
 * 이미지는 public/brands/<slug>/NN.jpg 경로에 저장되어 있다.
 */
export type BrandGroup = {
  slug: string;
  label: string;
  desc: string;
  /** 홈 카드 대표 이미지 */
  cover: string;
  /** 상세 페이지에 나열할 이미지 목록 */
  images: string[];
};

function imageList(slug: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/brands/${slug}/${String(i + 1).padStart(2, "0")}.jpg`
  );
}

export const brandGroups: BrandGroup[] = [
  {
    slug: "sports",
    label: "스포츠브랜드",
    desc: "축구·러닝·트레이닝 등 스포츠 브랜드 정품 구매대행",
    cover: "/brands/sports/01.jpg",
    images: imageList("sports", 15),
  },
  {
    slug: "outdoor",
    label: "아웃도어브랜드",
    desc: "등산·캠핑·방한 등 아웃도어 브랜드 정품 구매대행",
    cover: "/brands/outdoor/01.jpg",
    images: imageList("outdoor", 12),
  },
];

export function getBrandGroup(slug: string) {
  return brandGroups.find((b) => b.slug === slug);
}

/** 홈 미리보기용 로고 목록 (스포츠·아웃도어 섞어서 최대 count개) */
export function previewLogos(count = 10): string[] {
  const out: string[] = [];
  const lists = brandGroups.map((b) => [...b.images]);
  let i = 0;
  while (out.length < count && lists.some((l) => l.length > 0)) {
    const list = lists[i % lists.length];
    const next = list.shift();
    if (next) out.push(next);
    i++;
  }
  return out.slice(0, count);
}
