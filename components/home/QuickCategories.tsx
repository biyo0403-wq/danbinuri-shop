import Link from "next/link";
import { quickCategories } from "@/lib/data";
import Img from "@/components/ui/Img";

export default function QuickCategories() {
  return (
    <section className="mx-auto max-w-shell px-4 py-8 lg:px-5 lg:py-12">
      <div className="grid grid-cols-5 gap-3 sm:gap-5 lg:grid-cols-10">
        {quickCategories.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group flex flex-col items-center gap-2"
          >
            <div className="aspect-square w-full overflow-hidden rounded-full bg-neutral-100">
              <Img
                src={c.image}
                alt={c.label}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-xs font-medium lg:text-sm">{c.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
