import type { MetadataRoute } from "next";
import { SITE_URL, PAGE_PATHS } from "@/lib/site";
import { fetchNewsList } from "@/lib/microcms";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}${PAGE_PATHS.home}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}${PAGE_PATHS.service}`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}${PAGE_PATHS.useCases}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}${PAGE_PATHS.flow}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}${PAGE_PATHS.faq}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}${PAGE_PATHS.about}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}${PAGE_PATHS.news}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}${PAGE_PATHS.contact}`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}${PAGE_PATHS.download}`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];

  let newsEntries: MetadataRoute.Sitemap = [];
  try {
    const { contents } = await fetchNewsList({ limit: 100, fields: "id,updatedAt,publishedAt" });
    newsEntries = contents.map((item) => ({
      url: `${SITE_URL}/news/${item.id}`,
      lastModified: new Date(item.updatedAt ?? item.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    newsEntries = [];
  }

  return [...staticEntries, ...newsEntries];
}
