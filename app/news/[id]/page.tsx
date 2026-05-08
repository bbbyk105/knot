import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ContentSection,
  CTABanner,
  SubPageShell,
} from "../../subpage-components";
import {
  fetchNewsItem,
  fetchNewsList,
  formatPublishedDate,
  getCategoryBadgeStyle,
  getCategoryName,
  getThumbnail,
} from "@/lib/microcms";
import { articleJsonLd, breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { NewsThumbnailFallback } from "../thumbnail-fallback";

export const revalidate = 60;

export async function generateStaticParams() {
  const { contents } = await fetchNewsList({ limit: 100, fields: "id" });
  return contents.map((item) => ({ id: item.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = await fetchNewsItem(id);
  if (!item) {
    return {
      title: "記事が見つかりません",
      robots: { index: false, follow: false },
    };
  }
  const thumb = getThumbnail(item);
  const description =
    item.excerpt ?? `${item.title}に関するKnotブログ記事です。`;
  const canonical = `/news/${id}`;
  return {
    title: item.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: item.title,
      description,
      url: canonical,
      publishedTime: item.publishedAt,
      modifiedTime: item.updatedAt,
      images: thumb ? [{ url: thumb.url, width: thumb.width, height: thumb.height }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description,
      images: thumb ? [thumb.url] : undefined,
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await fetchNewsItem(id);
  if (!item) notFound();

  const thumb = getThumbnail(item);
  const categoryName = getCategoryName(item.category);

  return (
    <SubPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "ホーム", path: "/" },
              { name: "ブログ", path: "/news" },
              { name: item.title, path: `/news/${id}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            articleJsonLd({
              id,
              title: item.title,
              excerpt: item.excerpt,
              publishedAt: item.publishedAt,
              updatedAt: item.updatedAt,
              imageUrl: thumb?.url,
              category: categoryName,
            }),
          ),
        }}
      />
      <article>
        <header className="bg-linear-to-b from-bg-tint to-white px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
          <div className="mx-auto max-w-[820px]">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-fg-mute transition-colors hover:text-primary"
            >
              ← ブログ一覧へ
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <time className="font-kanit text-[12px] tracking-[0.16em] text-fg-mute">
                {formatPublishedDate(item.publishedAt)}
              </time>
              {(() => {
                const name = getCategoryName(item.category);
                if (!name) return null;
                const badge = getCategoryBadgeStyle(name);
                return (
                  <span className={`rounded-full ${badge.bg} ${badge.text} ${badge.ring} px-3 py-1 text-[11px] font-bold`}>
                    {name}
                  </span>
                );
              })()}
            </div>
            <h1 className="mt-5 text-[28px] font-bold leading-[1.4] tracking-[-0.01em] text-ink sm:text-[36px]">
              {item.title}
            </h1>
            {item.excerpt ? (
              <p className="mt-5 text-[14px] leading-[1.9] text-fg-mute sm:text-[15px]">
                {item.excerpt}
              </p>
            ) : null}
          </div>
        </header>

        <div className="px-5 sm:px-7 lg:px-10">
          <div className="mx-auto max-w-[820px]">
            {(() => {
              const thumb = getThumbnail(item);
              return thumb ? (
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-bg-soft">
                  <Image
                    src={thumb.url}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 820px, 100vw"
                    priority
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-border">
                  <NewsThumbnailFallback
                    title={item.title}
                    category={getCategoryName(item.category)}
                    size="hero"
                  />
                </div>
              );
            })()}
          </div>
        </div>

        <ContentSection>
          <div className="mx-auto max-w-[760px]">
            {item.content ? (
              <div
                className="news-body"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            ) : (
              <p className="text-[14px] leading-[1.9] text-fg-mute">
                本文は準備中です。
              </p>
            )}

            <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-border pt-8 text-[12.5px] text-fg-mute">
              <span>
                最終更新: {formatPublishedDate(item.updatedAt)}
              </span>
              <Link href="/news" className="font-bold text-primary hover:underline">
                ブログ一覧に戻る →
              </Link>
            </div>
          </div>
        </ContentSection>
      </article>

      <CTABanner />
    </SubPageShell>
  );
}
