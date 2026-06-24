import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-shell px-4 py-14 lg:px-5 lg:py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold text-point">PROCESS</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight lg:text-3xl">
          제작 과정
        </h2>
        <p className="mt-2 text-sm text-muted">
          문의부터 납품까지, 단계마다 함께 확인하며 진행합니다.
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {processSteps.map((s) => (
          <li
            key={s.step}
            className="relative rounded-xl border border-line p-6"
          >
            <span className="text-3xl font-extrabold text-brand/15">
              0{s.step}
            </span>
            <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
