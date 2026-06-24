import Link from "next/link";
import { brandGroups } from "@/lib/brands";
import Img from "@/components/ui/Img";

export default function Brands() {
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
          <a
            href="#inquiry"
            className="text-sm text-muted hover:text-ink hover:underline"
          >
            브랜드 문의 +
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {brandGroups.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="group block"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-neutral-100">
                <Img
                  src={b.cover}
                  alt={b.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-base font-bold lg:text-lg">{b.label}</h3>
                <p className="mt-0.5 text-sm text-muted">{b.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
