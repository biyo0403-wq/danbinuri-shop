/**
 * 제품 표시 이름표.
 * key: "카테고리slug/제품slug", value: 사이트에 표시할 이름.
 * 여기에 없는 제품은 자동 생성된 기본 제목이 그대로 표시된다.
 * 이 파일은 import 스크립트가 건드리지 않으므로 자유롭게 수정해도 안전하다.
 *
 * 색상·형태는 제품 사진을 보고 구분하기 위해 붙인 것이며,
 * 실제 제작 시에는 원하는 색상으로 맞춤 제작이 가능하다.
 */
export const productNames: Record<string, string> = {
  // 작업복 · 점퍼/자켓
  "workwear/ksk-211": "네이비 배색 작업 점퍼",
  "workwear/ksk-212": "네이비·블루 배색 작업 점퍼",
  "workwear/ksk-220": "그레이 셔츠카라 점퍼",
  "workwear/ksk-2301": "네이비 패턴 항공 점퍼",
  "workwear/ksk-504": "그레이 배색카라 작업 점퍼",
  "workwear/ksk-601": "네이비 캠프카라 점퍼",
  "workwear/ksk-602": "라이트그레이 배색카라 점퍼",
  "workwear/ksk-901": "네이비 스탠드카라 점퍼",
  "workwear/ksk-902": "라이트베이지 스탠드카라 점퍼",
  "workwear/ksk-907": "네이비 정장카라 점퍼",

  // 작업복 · 상하 세트
  "workwear/ksk-1401": "네이비 레드포인트 작업복 세트",
  "workwear/ksk-10": "그레이 네이비카라 작업복 세트",
  "workwear/ksk-11": "그레이 네이비요크 작업복 세트",
  "workwear/ksk-12": "그린 배색 작업복 세트",
  "workwear/ksk-14": "블루 작업복 세트",
  "workwear/ksk-15": "라이트블루 샴브레이 작업복 세트",
  "workwear/ksk-14-a": "네이비 데님 반사 작업복 세트",
  "workwear/ksk-103": "그레이 배색 반팔 작업복 세트",
  "workwear/ksk-104": "그레이 요크배색 작업복 세트",
  "workwear/ksk-115": "그레이 네이비배색 작업복 세트",
  "workwear/ksk-506": "네이비 작업복 세트",
  "workwear/ksk-508": "그레이 샴브레이 작업복 세트",
  "workwear/ksk-603": "그레이 배색카라 작업복 세트",
  "workwear/ksk-720": "그레이·오렌지 배색 작업복 세트",
  "workwear/ksk-903": "블루그레이 배색 작업복 세트",
  "workwear/ksk-906": "그레이 스탠드카라 작업복 세트",
  "workwear/ksk-a-1": "블루그레이 요크배색 작업복 세트",
  "workwear/ksk-a-2": "그레이 사이드배색 작업복 세트",
  "workwear/ksk-a-3": "청지 스탠드카라 작업복 세트",
  "workwear/ksk-a-4": "청지 셔츠카라 작업복 세트",

  // 작업복 · 우주복/멜빵바지 (일체형 스즈끼 · 멜빵)
  "workwear/ksk-1402": "디지털카모 일체형 스즈끼",
  "workwear/ksk-715": "우드랜드카모 일체형 스즈끼",
  "workwear/ksk-16": "블랙·레드 배색 일체형 스즈끼",
  "workwear/ksk-18": "그레이·블루 배색 일체형 스즈끼",
  "workwear/ksk-19": "네이비·옐로우 배색 일체형 스즈끼",
  "workwear/ksk-21": "그레이 레드포인트 일체형 스즈끼",
  "workwear/ksk-23": "그레이·레드 배색 일체형 스즈끼",
  "workwear/ksk-24": "그레이·오렌지 배색 일체형 스즈끼",
  "workwear/ksk-116": "네이비 일체형 스즈끼",
  "workwear/ksk-711": "네이비·그레이 배색 일체형 스즈끼",
  "workwear/ksk-712": "블랙 오렌지포인트 일체형 스즈끼",
  "workwear/ksk-713": "퍼플·그레이 배색 일체형 스즈끼",
  "workwear/ksk-716": "청지 스탠드카라 일체형 스즈끼",
  "workwear/ksk-717": "청지 셔츠카라 일체형 스즈끼",
  "workwear/ksk-20": "블랙 오렌지포인트 멜빵바지",
  "workwear/ksk-26": "그레이 멜빵바지",
  "workwear/ksk-27": "네이비 멜빵바지",

  // 근무복/후리스 · 방진복(제전복)
  "fleece/ksk-2501": "블루·그레이 배색 제전 점퍼",
  "fleece/ksk-03": "그레이 네이비카라 제전 점퍼",
  "fleece/ksk-06": "그레이 플랩포켓 제전 점퍼",
  "fleece/ksk-07": "아이보리 배색 제전 점퍼",
  "fleece/ksk-150": "블루그레이 요크배색 제전 점퍼",
  "fleece/ksk-101": "라이트블루 반팔 제전 점퍼",
  "fleece/ksk-101-1": "라이트그레이 요크배색 제전 점퍼",
  "fleece/ksk-102": "그레이 요크배색 반팔 제전 점퍼",
  "fleece/ksk-113": "라이트그레이 소매배색 제전 점퍼",
  "fleece/ksk-114": "그레이 배색 반팔 제전 점퍼",
  "fleece/ksk-1801": "그레이 자주포인트 제전 점퍼",
  "fleece/ksk-908": "블루그레이 제전 점퍼",

  // 근무복/후리스 · 경비복
  "fleece/ksk-25": "하늘색 긴팔 경비복",
  "fleece/ksk-25-1": "베이지 반팔 경비복",
  "fleece/ksk-25-2": "하늘색 반팔 경비복",

  // 단체티셔츠 · 카라/기능성
  "tshirt/ksk-528": "네이비 카라 반팔티",
  "tshirt/ksk-593": "블루·오렌지 카라 반팔티",
  "tshirt/ksk-594": "네이비·레드 카라 반팔티",
  "tshirt/ksk-595": "오렌지 배색 카라 반팔티",
  "tshirt/ksk-500-500-1": "네이비 반집업 쿨론 반팔티",
  "tshirt/ksk-574-575": "네이비 카라 쿨론 반팔티",
  "tshirt/ksk-520": "그린 쿨론 긴팔티",
  "tshirt/ksk-583-592": "네이비 쿨론 긴팔티",
  "tshirt/ksk-2628": "아이스쿨 에어홀 냉감 반팔티 (곤색)",
  "tshirt/ksk-2629": "아이스쿨 에어홀 냉감 반팔티 (챠콜그레이)",

  // 단체 조끼
  "vest/ksk-45-50-a-550-553-a-565-a": "그레이 네이비배색 야광띠 조끼",
  "vest/ksk-51-66-a": "레드 야광띠 조끼",
  "vest/ksk-774": "블랙 라이더 특수조끼",
  "vest/ksk-777-778-779": "반사띠 특수조끼 (3색)",
  "vest/ksk-560-561-562-563": "타스란 망사 조끼 (플랩포켓)",
  "vest/ksk-771-773": "타스란 망사 조끼 (지퍼포켓)",
};

/** 이름표에 있으면 그 이름, 없으면 원본 제목(코드) 반환 */
export function displayTitle(p: {
  category: string;
  slug: string;
  title: string;
}) {
  return productNames[`${p.category}/${p.slug}`] ?? p.title;
}
