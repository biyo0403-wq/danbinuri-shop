import Link from "next/link";

const footerCols = [
  {
    title: "고객센터",
    items: [
      { label: "1:1 문의", href: "/cs/inquiry" },
      { label: "자주 묻는 질문", href: "/cs/faq" },
      { label: "공지사항", href: "/cs/notice" },
    ],
  },
  {
    title: "주문 · 배송",
    items: [
      { label: "주문조회", href: "/order" },
      { label: "배송안내", href: "/cs/delivery" },
      { label: "반품 · 교환", href: "/cs/return" },
    ],
  },
  {
    title: "회사소개",
    items: [
      { label: "단비누리 소개", href: "/about" },
      { label: "매장안내", href: "/stores" },
      { label: "채용정보", href: "/careers" },
    ],
  },
  {
    title: "이용안내",
    items: [
      { label: "이용약관", href: "/terms" },
      { label: "개인정보처리방침", href: "/privacy" },
      { label: "멤버십 안내", href: "/membership" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-neutral-50">
      <div className="mx-auto max-w-shell px-5 py-12">
        {/* 고객센터 강조 영역 */}
        <div className="flex flex-col gap-8 border-b border-line pb-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm text-muted">고객센터</p>
            <p className="mt-1 text-3xl font-extrabold tracking-tight">
              1588-0000
            </p>
            <p className="mt-2 text-xs text-muted">
              평일 09:00 - 18:00 (점심 12:00 - 13:00) · 주말/공휴일 휴무
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                href="/cs/inquiry"
                className="rounded border border-ink px-4 py-2 text-sm font-semibold"
              >
                1:1 문의
              </Link>
              <Link
                href="/cs/faq"
                className="rounded border border-line bg-white px-4 py-2 text-sm"
              >
                자주 묻는 질문
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerCols.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-sm font-bold">{col.title}</p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 회사 정보 */}
        <div className="flex flex-col gap-6 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1 text-xs leading-relaxed text-muted">
            <p className="text-base font-extrabold text-ink">DANBINURI</p>
            <p>
              (주)단비누리 · 대표 홍길동 · 서울특별시 강남구 테헤란로 000
            </p>
            <p>
              사업자등록번호 000-00-00000 · 통신판매업신고 제2026-서울강남-0000호
            </p>
            <p>개인정보보호책임자 홍길동 · 호스팅 제공자 (주)단비누리</p>
            <p className="pt-2">
              © 2026 DANBINURI. All rights reserved.
            </p>
          </div>

          <div className="flex gap-3 text-xs text-muted">
            <Link href="/terms" className="hover:text-ink">
              이용약관
            </Link>
            <span className="text-line">|</span>
            <Link href="/privacy" className="font-semibold text-ink">
              개인정보처리방침
            </Link>
            <span className="text-line">|</span>
            <Link href="/stores" className="hover:text-ink">
              매장안내
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
