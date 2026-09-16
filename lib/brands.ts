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

/** 지정한 순서(order)대로 이미지 경로 목록을 만든다. */
function imageList(slug: string, order: number[]): string[] {
  return order.map(
    (n) => `/brands/${slug}/${String(n).padStart(2, "0")}.jpg`
  );
}

// 원본 사이트와 나열 순서가 겹치지 않도록 무작위로 섞은 고정 순서.
const sportsOrder = [7, 12, 3, 15, 1, 9, 5, 14, 2, 11, 6, 13, 4, 10, 8];
const outdoorOrder = [5, 11, 2, 8, 1, 12, 4, 9, 6, 3, 10, 7];

export const brandGroups: BrandGroup[] = [
  {
    slug: "sports",
    label: "스포츠브랜드",
    desc: "축구·러닝·트레이닝 등 스포츠 브랜드 정품 구매대행",
    cover: `/brands/sports/${String(sportsOrder[0]).padStart(2, "0")}.jpg`,
    images: imageList("sports", sportsOrder),
  },
  {
    slug: "outdoor",
    label: "아웃도어브랜드",
    desc: "등산·캠핑·방한 등 아웃도어 브랜드 정품 구매대행",
    cover: `/brands/outdoor/${String(outdoorOrder[0]).padStart(2, "0")}.jpg`,
    images: imageList("outdoor", outdoorOrder),
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
