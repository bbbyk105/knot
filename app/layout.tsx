import type { Metadata } from "next";
import { M_PLUS_1p, Kanit } from "next/font/google";
import "./globals.css";

const mplus = M_PLUS_1p({
  variable: "--font-mplus",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knot｜AI導入・業務自動化のパートナー",
  description:
    "Knotは、AI導入・業務自動化・Web / EC制作・集客運用まで一気通貫で支援するパートナーです。中小企業・個人事業主向け。初回相談無料。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${mplus.variable} ${kanit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
