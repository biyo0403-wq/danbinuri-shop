/**
 * 제품 표시 이름표.
 * key: "카테고리slug/제품slug", value: 사이트에 표시할 이름.
 * 여기에 없는 제품은 KSK 원본 폴더 이름(코드)이 그대로 표시된다.
 * 이 파일은 import 스크립트가 건드리지 않으므로 자유롭게 수정해도 안전하다.
 *
 * 예시:
 *   "workwear/211": "춘추 작업복 점퍼",
 *   "tshirt/500": "쿨론 라운드 티셔츠",
 */
export const productNames: Record<string, string> = {};

/** 이름표에 있으면 그 이름, 없으면 원본 제목(코드) 반환 */
export function displayTitle(p: {
  category: string;
  slug: string;
  title: string;
}) {
  return productNames[`${p.category}/${p.slug}`] ?? p.title;
}
