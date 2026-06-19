import Link from "next/link";
import { promoBanners, wideBanner } from "@/lib/data";
import Img from "@/components/ui/Img";

export default function PromoBanners() {
  return (
    <section className="mx-auto max-w-shell px-4 py-6 lg:px-5">
      {/* 2분할 배너 */}
      <div className="grid gap-4 sm:grid-cols-2">
        {promoBanners.map((b) => (
          <Link
            key={b.id}
            href={b.href}
            className="group relative aspect-[16/9] overflow-hidden rounded-lg bg-neutral-100"
          >
            <Img
              src={b.image}
              alt={b.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-extrabold lg:text-xl">{b.title}</p>
              {b.caption && (
                <p className="mt-1 text-sm opacity-90">{b.caption}</p>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* 와이드 배너 */}
      <Link
        href={wideBanner.href}
        className="group relative mt-4 block aspect-[21/6] overflow-hidden rounded-lg bg-neutral-100"
      >
        <Img
          src={wideBanner.image}
          alt={wideBanner.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-y-0 left-8 flex flex-col justify-center text-white">
          {wideBanner.subtitle && (
            <p className="text-sm opacity-90 lg:text-base">
              {wideBanner.subtitle}
            </p>
          )}
          <p className="mt-1 text-xl font-extrabold tracking-tight lg:text-3xl">
            {wideBanner.title}
          </p>
          {wideBanner.caption && (
            <p className="mt-1 text-sm opacity-90">{wideBanner.caption}</p>
          )}
        </div>
      </Link>
    </section>
  );
}
