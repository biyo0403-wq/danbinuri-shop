import { certBadges } from "@/lib/data";
import Img from "@/components/ui/Img";

export default function Certifications() {
  return (
    <section id="certifications" className="border-t border-line bg-neutral-50 py-14 lg:py-20">
      <div className="mx-auto max-w-shell px-4 lg:px-5">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold text-point">CERTIFICATION</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight lg:text-3xl">
            인증 현황
          </h2>
          <p className="mt-2 text-sm text-muted">
            정부 · 공공기관에서 인증받은 믿을 수 있는 기업입니다.
          </p>
        </div>

        <div className="mx-auto flex max-w-2xl flex-wrap items-start justify-center gap-8 sm:gap-14">
          {certBadges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-3">
              <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-line bg-white shadow-sm lg:h-32 lg:w-32">
                <Img
                  src={badge.image}
                  alt={badge.label}
                  className="h-full w-full object-contain p-3"
                />
              </div>
              <p className="text-sm font-semibold text-ink">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
