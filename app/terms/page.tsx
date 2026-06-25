import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `이용약관 | ${site.name}`,
  description: `${site.name} 이용약관`,
};

export default function TermsPage() {
  const c = site.company;
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 lg:px-5 lg:py-16">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/" className="hover:text-ink hover:underline">
          홈
        </Link>
        <span className="mx-1">/</span>
        <span className="text-ink">이용약관</span>
      </nav>

      <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl">
        이용약관
      </h1>
      <p className="mt-2 text-sm text-muted">
        시행일자: 2026년 1월 1일
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-ink/90">
        <article>
          <h2 className="text-base font-bold">제1조 (목적)</h2>
          <p className="mt-2">
            본 약관은 {c.bizName}(이하 &quot;회사&quot;)가 운영하는 웹사이트(이하
            &quot;사이트&quot;)에서 제공하는 단체복·작업복 제작 및 브랜드 상품
            구매대행 관련 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여
            회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">제2조 (정의)</h2>
          <p className="mt-2">
            1. &quot;이용자&quot;란 사이트에 접속하여 본 약관에 따라 회사가
            제공하는 서비스를 이용하는 자를 말합니다.
            <br />
            2. &quot;견적 문의&quot;란 이용자가 전화·이메일·카카오톡·온라인
            신청서 등을 통해 제품 제작 또는 구매대행에 관한 상담을 요청하는
            행위를 말합니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">제3조 (약관의 효력 및 변경)</h2>
          <p className="mt-2">
            1. 본 약관은 사이트에 게시함으로써 효력이 발생합니다.
            <br />
            2. 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수
            있으며, 개정 시 적용일자 및 개정사유를 명시하여 사이트에
            공지합니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">제4조 (서비스의 제공)</h2>
          <p className="mt-2">
            1. 회사는 단체복·작업복 등의 맞춤 제작 상담 및 브랜드 상품
            구매대행 안내를 제공합니다.
            <br />
            2. 제품의 사양·수량·납기·가격 등 구체적인 거래 조건은 견적 문의 및
            상담을 통해 개별적으로 협의하여 정합니다.
            <br />
            3. 사이트에 게시된 이미지·가격·문구는 참고용이며, 실제 제품 및
            거래 조건과 다를 수 있습니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">제5조 (구매대행 상품)</h2>
          <p className="mt-2">
            구매대행으로 안내되는 브랜드 상품은 해당 브랜드의 정품을 대상으로
            하며, 상표 및 이미지의 권리는 각 권리자에게 있습니다. 회사는 정당한
            구매대행 범위 내에서 상품을 안내·공급합니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">제6조 (이용자의 의무)</h2>
          <p className="mt-2">
            이용자는 견적·주문 과정에서 정확한 정보를 제공하여야 하며, 허위
            정보 제공으로 인해 발생하는 불이익에 대한 책임은 이용자에게
            있습니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">제7조 (책임의 제한)</h2>
          <p className="mt-2">
            회사는 천재지변, 통신 장애 등 회사의 합리적 통제를 벗어난 사유로
            서비스를 제공할 수 없는 경우 그에 대한 책임이 면제됩니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">제8조 (분쟁의 해결)</h2>
          <p className="mt-2">
            본 약관과 관련하여 분쟁이 발생한 경우 회사와 이용자는 신의성실의
            원칙에 따라 원만히 해결하도록 노력하며, 합의가 이루어지지 않을 경우
            관련 법령 및 상관례에 따릅니다.
          </p>
        </article>

        <article>
          <h2 className="text-base font-bold">문의처</h2>
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
        ※ 본 약관은 표준 양식을 바탕으로 작성된 예시이며, 실제 운영 정책에
        맞추어 추후 수정될 수 있습니다.
      </p>
    </section>
  );
}
