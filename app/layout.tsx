import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | 단체복 · 작업복 맞춤 제작`,
  description: site.description,
  // 카카오톡·문자 등으로 링크 공유 시 표시되는 미리보기
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: site.name,
    title: `${site.name} | 단체복 · 작업복 맞춤 제작`,
    description: site.description,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
  },
  // 네이버 서치어드바이저 사이트 소유 확인
  verification: {
    other: {
      "naver-site-verification": "56537eba795c088651debbbf736b41df2cc48b6d",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard 웹폰트 (CDN, 다운로드 불필요) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.css"
        />
      </head>
      {/* 모바일에서는 하단 고정 CTA 바 높이만큼 여백 확보 */}
      <body className="pb-20 lg:pb-0">
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
