/**
 * 사이트 공통 설정.
 * 연락처 / 구글폼 / 카카오톡 / 이메일 주소를 여기 한 곳에서 관리한다.
 * 실제 값이 나오면 아래 문자열만 교체하면 사이트 전체에 반영된다.
 */
export const site = {
  name: "단비누리",
  nameEn: "DANBINURI",
  tagline: "단체복 · 스포츠 유니폼 맞춤 제작",
  description:
    "축구·농구·야구·마라톤 등 단체복과 유니폼을 소량부터 대량까지 맞춤 제작합니다.",

  // 문의 채널 (실제 주소로 교체하세요)
  googleFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScDKhReqJkTLEkl0FrgVm1ZAb0gSOPrOprkrTiYG1FQ01kr2Q/viewform", // 구글폼 견적/주문 신청서
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
