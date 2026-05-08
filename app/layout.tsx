import type { Metadata, Viewport } from "next";
import { M_PLUS_1p, Kanit } from "next/font/google";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}｜中小企業のためのAI導入・業務自動化パートナー`,
    template: `%s｜${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "AI導入",
    "AI活用",
    "業務自動化",
    "AIコンサルティング",
    "ChatGPT導入",
    "Claude導入",
    "中小企業 DX",
    "個人事業主 AI",
    "Shopify EC構築",
    "n8n",
    "MCP",
    "Knot",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME}｜中小企業のためのAI導入・業務自動化パートナー`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}｜中小企業のためのAI導入・業務自動化パートナー`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#12aa84",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: SITE_DESCRIPTION,
  areaServed: "JP",
  knowsAbout: [
    "AI導入支援",
    "業務自動化",
    "AIコンサルティング",
    "Shopify EC構築",
    "Web制作",
    "ChatGPT・Claude活用支援",
  ],
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
