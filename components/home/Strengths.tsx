import { Boxes, Stamp, Truck, BadgeCheck } from "lucide-react";
import { strengths } from "@/lib/data";

const icons = [Boxes, Stamp, Truck, BadgeCheck];

export default function Strengths() {
  return (
    <section className="mx-auto max-w-shell px-4 py-14 lg:px-5 lg:py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold text-point">WHY DANBINURI</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight lg:text-3xl">
          단비누리를 선택하는 이유
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
        {strengths.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={s.id}
              className="rounded-xl border border-line p-6 text-center transition-shadow hover:shadow-md"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand/5 text-brand">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-base font-bold lg:text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
