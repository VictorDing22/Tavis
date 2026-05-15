import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});


const SITE_URL = "https://www.tavis.com.cn";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "太微工作室 — 软件开发与技术服务",
  description:
    "太微工作室专注软件开发，提供企业级应用、移动开发、Web系统、数据库优化与技术咨询服务。服务覆盖教育、工业、医疗、航空等多个行业领域。",
  keywords: [
    "太微工作室",
    "软件开发",
    "Web开发",
    "移动应用",
    "系统集成",
    "技术咨询",
  ],
  openGraph: {
    title: "太微工作室 — 软件开发与技术服务",
    description:
      "聚焦软件开发，通过ORU模式将信息技术与产业实践结合，产品覆盖教育、工业、医疗等多个领域。",
    url: SITE_URL,
    siteName: "太微工作室",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1024,
        height: 542,
        alt: "太微工作室 — 软件开发与技术服务",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "太微工作室 — 软件开发与技术服务",
    description:
      "聚焦软件开发，通过ORU模式将信息技术与产业实践结合，产品覆盖教育、工业、医疗等多个领域。",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
