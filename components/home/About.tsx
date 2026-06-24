import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-white">
      <div className="mx-auto max-w-shell px-4 py-14 text-center lg:px-5 lg:py-20">
        <p className="text-sm font-bold text-point">ABOUT</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-2xl font-extrabold leading-snug tracking-tight lg:text-[34px]">
          현장에 꼭 맞는 단체복,
          <br className="hidden sm:block" /> {site.name}가 제작합니다.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted lg:text-base">
          작업복부터 안전조끼, 단체 점퍼까지 — 소량 주문부터 대량 납품까지
          직접 제작합니다. 로고 자수·인쇄 상담과 시안 제작을 함께 진행해
          현장에 꼭 맞는 단체복을 합리적인 가격에 만들어 드립니다.
        </p>
      </div>
    </section>
  );
}
