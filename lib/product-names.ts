/**
 * 제품 표시 이름표.
 * key: "카테고리slug/제품slug", value: 사이트에 표시할 이름.
 * 여기에 없는 제품은 원본 제목이 그대로 표시된다.
 * 카테고리 구조 개편(2026-07)으로 이전 이름표는 모두 비웠습니다.
 */
export const productNames: Record<string, string> = {};

/** 이름표에 있으면 그 이름, 없으면 원본 제목 반환 */
export function displayTitle(p: {
  category: string;
  slug: string;
  title: string;
}) {
  return productNames[`${p.category}/${p.slug}`] ?? p.title;
}
