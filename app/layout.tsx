import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const publicBasePath = "";
const siteUrl = isGitHubPages
  ? "https://bogota-car-life.github.io"
  : "https://bogota-car-life.minseong0213.chatgpt.site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "보고타 BOGOTA | 주행데이터 기반 차량 관리 개인화 서비스",
  description: "차를 잘 몰라도 괜찮아요. 내 차의 주행거리와 관리 이력을 바탕으로 소모품 교체 시기와 차량 정보를 쉽게 알려주는 보고타를 만나보세요.",
  icons: {
    icon: `${publicBasePath}/favicon.svg`,
    shortcut: `${publicBasePath}/favicon.svg`,
  },
  openGraph: {
    title: "보고타 BOGOTA | 주행데이터 기반 차량 관리 개인화 서비스",
    description: "내 차를 잘 몰라도, 보고타가 알아서 챙깁니다.",
    images: [{ url: `${publicBasePath}/og.png`, width: 1734, height: 907, alt: "보고타 서비스 소개" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "보고타 BOGOTA | 주행데이터 기반 차량 관리 개인화 서비스",
    description: "내 차를 잘 몰라도, 보고타가 알아서 챙깁니다.",
    images: [`${publicBasePath}/og.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
