import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

function normalizeServiceDomain(value: string | undefined): string | undefined {
  if (!value) return undefined;
  // 例: https://knotjapan.microcms.io/api/v1/blogs を渡されても
  //     knotjapan だけ抽出する
  const match = value.match(/^(?:https?:\/\/)?([a-z0-9-]+)(?:\.microcms\.io.*)?$/i);
  return match?.[1] ?? value;
}

const serviceDomain = normalizeServiceDomain(process.env.MICROCMS_SERVICE_DOMAIN);
const apiKey = process.env.MICROCMS_API_KEY;
const endpoint = process.env.MICROCMS_ENDPOINT ?? "news";

const client =
  serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

export type NewsThumbnail = {
  url: string;
  height: number;
  width: number;
};

export type NewsCategoryRef = {
  id: string;
  name: string;
  publishedAt?: string;
  updatedAt?: string;
};

export type NewsItem = {
  id: string;
  title: string;
  excerpt?: string;
  /** 文字列(セレクト)・コンテンツ参照(オブジェクト)・配列(複数参照)のいずれにも対応 */
  category?: string | NewsCategoryRef | NewsCategoryRef[];
  /** microCMS の標準ブログテンプレート互換 */
  eyecatch?: NewsThumbnail;
  /** 旧フィールド名 / 別運用との互換 */
  thumbnail?: NewsThumbnail;
  content?: string;
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  revisedAt?: string;
};

export function getThumbnail(item: NewsItem): NewsThumbnail | undefined {
  return item.eyecatch ?? item.thumbnail;
}

export function getCategoryName(
  category: NewsItem["category"],
): string | undefined {
  if (!category) return undefined;
  if (typeof category === "string") return category;
  if (Array.isArray(category)) {
    return category.map((c) => c.name).filter(Boolean).join(" / ") || undefined;
  }
  return category.name;
}

export type CategoryBadgeStyle = {
  bg: string;
  text: string;
  ring: string;
};

const categoryStyleMap: Record<string, CategoryBadgeStyle> = {
  更新情報: {
    bg: "bg-[#e3f7f1]",
    text: "text-[#08725a]",
    ring: "ring-1 ring-inset ring-[#9bd9c4]",
  },
  お知らせ: {
    bg: "bg-[#fff3e0]",
    text: "text-[#a04a00]",
    ring: "ring-1 ring-inset ring-[#f0c089]",
  },
  ブログ: {
    bg: "bg-[#e6efff]",
    text: "text-[#1d4fa3]",
    ring: "ring-1 ring-inset ring-[#a8c1ed]",
  },
  イベント: {
    bg: "bg-[#f1e9fb]",
    text: "text-[#5b329b]",
    ring: "ring-1 ring-inset ring-[#c4afe2]",
  },
  "登壇・イベント": {
    bg: "bg-[#f1e9fb]",
    text: "text-[#5b329b]",
    ring: "ring-1 ring-inset ring-[#c4afe2]",
  },
};

const defaultCategoryStyle: CategoryBadgeStyle = {
  bg: "bg-bg-soft",
  text: "text-fg-mute",
  ring: "ring-1 ring-inset ring-border",
};

export function getCategoryBadgeStyle(
  name: string | undefined,
): CategoryBadgeStyle {
  if (!name) return defaultCategoryStyle;
  return categoryStyleMap[name] ?? defaultCategoryStyle;
}

export type NewsListResponse = {
  contents: NewsItem[];
  totalCount: number;
  offset: number;
  limit: number;
};

export async function fetchNewsList(
  queries?: MicroCMSQueries,
): Promise<NewsListResponse> {
  if (!client) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY 未設定のため、news を空で返します。",
      );
    }
    return { contents: [], totalCount: 0, offset: 0, limit: 0 };
  }
  try {
    return await client.get<NewsListResponse>({
      endpoint,
      queries: { limit: 100, orders: "-publishedAt", ...queries },
    });
  } catch (err) {
    console.error("microCMS list fetch failed:", err);
    return { contents: [], totalCount: 0, offset: 0, limit: 0 };
  }
}

export async function fetchNewsItem(id: string): Promise<NewsItem | null> {
  if (!client) return null;
  try {
    return await client.get<NewsItem>({
      endpoint,
      contentId: id,
    });
  } catch (err) {
    console.error(`microCMS detail fetch failed (id=${id}):`, err);
    return null;
  }
}

export function formatPublishedDate(iso: string): string {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}
