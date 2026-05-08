export const SITE_NAME = "Knot";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://knotjapan.com";
export const SITE_DESCRIPTION =
  "Knotは、中小企業・個人事業主向けにAI導入・業務自動化・Web / EC構築を一気通貫で支援するパートナーです。流行りのAIに乗るのではなく、現場で本当に使える形に整え、毎日の負担を確実に減らします。初回30分の相談は無料。";

export const PAGE_PATHS = {
  home: "/",
  service: "/service",
  useCases: "/use-cases",
  flow: "/flow",
  faq: "/faq",
  about: "/about",
  news: "/news",
  contact: "/contact",
  download: "/download",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
