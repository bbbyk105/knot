import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  CTABanner,
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
} from "../subpage-components";
import {
  fetchNewsList,
  formatPublishedDate,
  getCategoryBadgeStyle,
  getCategoryName,
  getThumbnail,
} from "@/lib/microcms";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";
import { NewsThumbnailFallback } from "./thumbnail-fallback";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "お知らせ・ブログ｜AI活用と業務改善の発信",
  description:
    "AI活用や業務改善・最新モデル動向（Claude Opus 4.7 / MCP / n8n / Shopify など）についてのKnotのブログ記事と更新情報をまとめています。",
  alternates: { canonical: "/news" },
  openGraph: {
    title: "お知らせ・ブログ｜Knot",
    description:
      "AI活用・業務自動化・最新モデル動向についての発信と更新情報をまとめています。",
    url: "/news",
    type: "website",
  },
};

export default async function NewsPage() {
  const { contents } = await fetchNewsList();
  const [latest, ...rest] = contents;

  return (
    <SubPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "ホーム", path: "/" },
              { name: "ブログ", path: "/news" },
            ]),
          ),
        }}
      />
      <PageHero
        label="NEWS"
        title="お知らせ・ブログ"
        description="AI活用や業務改善に関する発信、登壇情報、更新情報をまとめています。"
      />

      {!latest ? (
        <ContentSection>
          <div className="card mx-auto max-w-[640px] p-8 text-center">
            <p className="text-[14px] leading-[1.85] text-fg-mute">
              現在準備中です。最初の記事公開までもう少しお待ちください。
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="/" className="btn-outline">
                トップへ戻る
              </Link>
              <Link href="/contact" className="btn-primary">
                30分の無料相談
              </Link>
            </div>
          </div>
        </ContentSection>
      ) : (
        <>
          <ContentSection>
            <SectionHeading eyebrow="LATEST" title="最新の発信" />
            <Link
              href={`/news/${latest.id}`}
              className="card mt-10 grid gap-6 p-7 transition-colors hover:border-border-strong sm:p-9 lg:grid-cols-[1fr_1.4fr] lg:gap-10"
            >
              {(() => {
                const thumb = getThumbnail(latest);
                return thumb ? (
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-bg-soft lg:aspect-auto">
                    <Image
                      src={thumb.url}
                      alt={latest.title}
                      fill
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-4/3 overflow-hidden rounded-2xl border border-border lg:aspect-auto">
                    <NewsThumbnailFallback
                      title={latest.title}
                      category={getCategoryName(latest.category)}
                      size="hero"
                    />
                  </div>
                );
              })()}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-3">
                  <time className="font-kanit text-[12px] tracking-[0.16em] text-fg-mute">
                    {formatPublishedDate(latest.publishedAt)}
                  </time>
                  {(() => {
                    const name = getCategoryName(latest.category);
                    if (!name) return null;
                    const badge = getCategoryBadgeStyle(name);
                    return (
                      <span className={`rounded-full ${badge.bg} ${badge.text} ${badge.ring} px-3 py-1 text-[11px] font-bold`}>
                        {name}
                      </span>
                    );
                  })()}
                </div>
                <h2 className="mt-4 text-xl font-bold leading-normal text-ink sm:text-[22px]">
                  {latest.title}
                </h2>
                {latest.excerpt ? (
                  <p className="mt-4 text-[13.5px] leading-[1.9] text-fg-mute">
                    {latest.excerpt}
                  </p>
                ) : null}
                <div className="mt-auto pt-6">
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold text-primary">
                    続きを読む →
                  </span>
                </div>
              </div>
            </Link>
          </ContentSection>

          {rest.length > 0 ? (
            <ContentSection tone="soft">
              <SectionHeading eyebrow="ARCHIVE" title="過去の記事" />
              <ul className="mt-10 grid gap-4">
                {rest.map((item) => {
                  const name = getCategoryName(item.category);
                  const badge = getCategoryBadgeStyle(name);
                  return (
                  <li key={item.id}>
                    <Link
                      href={`/news/${item.id}`}
                      className="card grid gap-3 p-6 transition-colors hover:border-border-strong sm:grid-cols-[120px_90px_1fr] sm:items-start sm:gap-6"
                    >
                      <time className="font-kanit text-[12.5px] tracking-[0.08em] text-fg-mute">
                        {formatPublishedDate(item.publishedAt)}
                      </time>
                      {name ? (
                        <span className={`w-fit rounded-full ${badge.bg} ${badge.text} ${badge.ring} px-3 py-1 text-[11px] font-bold`}>
                          {name}
                        </span>
                      ) : (
                        <span aria-hidden />
                      )}
                      <div>
                        <h3 className="text-[14.5px] font-bold leading-[1.6] text-ink">
                          {item.title}
                        </h3>
                        {item.excerpt ? (
                          <p className="mt-2 text-[12.5px] leading-[1.85] text-fg-mute">
                            {item.excerpt}
                          </p>
                        ) : null}
                      </div>
                    </Link>
                  </li>
                  );
                })}
              </ul>
            </ContentSection>
          ) : null}
        </>
      )}

      <CTABanner />
    </SubPageShell>
  );
}
