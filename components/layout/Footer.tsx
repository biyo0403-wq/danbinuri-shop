import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { site, mailto } from "@/lib/site";

export default function Footer() {
  const c = site.company;
  return (
    <footer className="mt-20 px-4 pb-6 lg:px-5">
      <div className="mx-auto max-w-shell rounded-2xl bg-brand px-6 py-12 text-white/80 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* 좌측: 브랜드 + 연락 */}
          <div>
            <p className="text-2xl font-extrabold text-white">{c.bizName}</p>
            <p className="mt-1 text-sm">{site.tagline}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-1.5 rounded bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={site.kakaoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                <MessageCircle className="h-4 w-4" />
                카카오톡 상담
              </a>
              <a
                href={mailto}
                className="flex items-center gap-1.5 rounded bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </div>

          {/* 우측: 회사정보 */}
          <div className="space-y-1 text-xs leading-relaxed">
            <p>{c.bizName} · 대표 {c.ceo}</p>
            <p>사업자등록번호 {c.bizNo}</p>
            <p>{c.address}</p>
            <p>
              TEL {site.phone} · FAX {c.fax} · {site.email}
            </p>
            <p>운영시간 {site.hours}</p>
            <div className="flex gap-3 pt-3 text-white/90">
              <Link href="/terms" className="hover:underline">이용약관</Link>
              <span className="text-white/30">|</span>
              <Link href="/privacy" className="font-semibold hover:underline">개인정보처리방침</Link>
              <span className="text-white/30">|</span>
              <Link href="/#inquiry" className="hover:underline">견적문의</Link>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © 2026 {c.bizName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
