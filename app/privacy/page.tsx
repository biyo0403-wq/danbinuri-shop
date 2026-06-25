import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${site.name}`,
  description: `${site.name} 개인정보처리방침`,
};

export default function PrivacyPage() {
  const c = site.company;
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 lg:px-5 lg:py-16">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-ink hover:underline">
          홈
        </Link>
        <span className="mx-1">/</span>
        <span className="text-ink">개인정보처리방침</span>
      </nav>

      <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
        개인정보처리방침
      </h1>
      <p className="mt-2 text-sm text-muted">시행일자: 2026년 1월 1일</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink/90">
        <p>
          {c.bizName}(이하 &quot;회사&quot;)는 이용자의 개인정보를 중요하게
          생각하며, 「개인정보 보호법」 등 관련 법령을 준수합니다. 본
          방침은 회사가 견적·주문 상담 과정에서 수집하는 개인정보의 처리에
          관한 사항을 안내합니다.
        </p>

        <article>
          <h2 className="text-base font-bold">1. 수집하는 개인정보 항목</h2>
          <p className="mt-2">
            회사는 견적 문의 및 상담을 위하여 아래의 정보를 수집할 수 있습니다.
            <br />
            · 필수: 성함(담당자명), 연락처(전화번호 또는 이메일)
            <br />
            · 선택: 회사·단체명, 주소, 문의 내용에 포함된 정보
            <br />
            ※ 견적 신청은 외부 도구(구글폼) 또는 전화·카카오톡·이메일을 통해
            접수되며, 각 채널의 개인정보 처리에는 해당 서비스의 정책도 함께
            적용됩니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">2. 개인정보의 수집 및 이용 목적</h2>
          <p className="mt-2">
            · 견적 산정 및 상담 응대
            <br />
            · 주문 접수, 제작·납품 및 배송 안내
            <br />
            · 거래 관련 고지사항 전달 및 고객 문의 처리
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">3. 개인정보의 보유 및 이용 기간</h2>
          <p className="mt-2">
            수집된 개인정보는 수집·이용 목적이 달성되면 지체 없이 파기합니다.
            다만 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안
            보관합니다.
            <br />
            · 계약 또는 청약철회 등에 관한 기록: 5년
            <br />
            · 대금결제 및 재화 등의 공급에 관한 기록: 5년
            <br />
            · 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">4. 개인정보의 제3자 제공</h2>
          <p className="mt-2">
            회사는 이용자의 개인정보를 본 방침에 명시한 목적 범위를 초과하여
            이용하거나 제3자에게 제공하지 않습니다. 다만 제작·배송 등 서비스
            이행에 필요한 범위에서 이용자의 동의를 받아 협력업체에 제공할 수
            있습니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">5. 개인정보의 파기 절차 및 방법</h2>
          <p className="mt-2">
            전자적 파일은 복구가 불가능한 방법으로 영구 삭제하며, 종이에
            출력된 정보는 분쇄하거나 소각하여 파기합니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">6. 이용자의 권리</h2>
          <p className="mt-2">
            이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를
            요청할 수 있으며, 회사는 관련 법령에 따라 지체 없이 조치합니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">7. 개인정보 보호책임자</h2>
          <p className="mt-2">
            {c.bizName} · 대표 {c.ceo}
            <br />
            {c.address}
            <br />
            TEL {site.phone} · {site.email}
          </p>
        </article>
      </div>

      <p className="mt-10 rounded-lg bg-neutral-50 px-4 py-3 text-xs text-muted">
        ※ 본 방침은 표준 양식을 바탕으로 작성된 예시이며, 실제 운영 방식에
        맞추어 추후 수정될 수 있습니다.
      </p>
    </section>
  );
}
