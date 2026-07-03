/**
 * 사이트 공통 설정.
 * 연락처 / 구글폼 / 카카오톡 / 이메일 주소를 여기 한 곳에서 관리한다.
 * 실제 값이 나오면 아래 문자열만 교체하면 사이트 전체에 반영된다.
 */
export const site = {
  name: "단비누리",
  nameEn: "DANBINURI",
  url: "https://www.danbiwear.co.kr",
  tagline: "단체복 · 작업복 맞춤 제작 · 브랜드 구매대행",
  description:
    "작업복·단체복·조끼·티셔츠를 한 벌부터 대량까지 맞춤 제작하고, 스포츠·아웃도어 브랜드 정품 구매대행을 함께 제공합니다.",

  // 문의 채널 — 견적 신청은 자체 폼(/inquiry)으로 받는다
  kakaoUrl: "http://pf.kakao.com/_VXXxfX", // 카카오톡 채널
  // TODO: danbinuri.kr 도메인 메일 개통 후 회사 메일로 교체
  email: "danbinuri25@naver.com",
  phone: "02-6448-7221", // 대표 전화
  mobile: "010-5267-7208", // 휴대폰

  hours: "평일 10:00 - 18:00 / 주말·공휴일 휴무",

  company: {
    bizName: "(주)단비누리",
    ceo: "이영기",
    bizNo: "490-81-03515",
    address: "서울특별시 서초구 논현로11길 49 2층(양재동)",
    fax: "02-579-4333",
  },
} as const;

/** 메일 보내기 링크 */
export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
  "[단비누리] 단체복 제작 견적 문의"
)}`;
