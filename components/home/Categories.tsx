import Link from "next/link";
import { categories } from "@/lib/data";
import Img from "@/components/ui/Img";

export default function Categories() {
  return (
    <section id="categories" className="bg-neutral-50 py-14 lg:py-20">
      <div className="mx-auto max-w-shell px-4 lg:px-5">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold text-point">PRODUCTS</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight lg:text-3xl">
              제작 가능한 품목
            </h2>
          </div>
          <a
            href="#inquiry"
            className="text-sm text-muted hover:text-ink hover:underline"
          >
            품목 문의 +
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-6">
          {categories.map((c) => (
            <Link key={c.label} href={c.href} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
                <Img
                  src={c.image}
                  alt={c.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-base font-bold lg:text-lg">{c.label}</h3>
                {c.desc && (
                  <p className="mt-0.5 text-sm text-muted">{c.desc}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
