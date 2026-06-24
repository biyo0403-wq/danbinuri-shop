import Link from "next/link";
import { previewLogos } from "@/lib/brands";
import Img from "@/components/ui/Img";

export default function Brands() {
  const logos = previewLogos(10);

  return (
    <section id="brands" className="py-14 lg:py-20">
      <div className="mx-auto max-w-shell px-4 lg:px-5">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-point">BRANDS</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight lg:text-3xl">
              취급 브랜드
            </h2>
            <p className="mt-2 text-sm text-muted">
              스포츠 · 아웃도어 브랜드 정품을 구매대행으로 공급합니다.
            </p>
          </div>
          <Link
            href="/brands"
            className="text-sm text-muted hover:text-ink hover:underline"
          >
            전체보기 +
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {logos.map((src, i) => (
            <div
              key={src}
              className="flex aspect-[16/7] items-center justify-center rounded-lg border border-line bg-white p-4"
            >
              <Img
                src={src}
                alt={`취급 브랜드 ${i + 1}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
