import Link from "next/link";
import {
  CTABanner,
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
  newsItems,
} from "../subpage-components";

export default function NewsPage() {
  const [latest, ...rest] = newsItems;

  return (
    <SubPageShell>
      <PageHero
        label="NEWS"
        title="お知らせ・ブログ"
        description="AI活用や業務改善に関する発信、登壇情報、更新情報をまとめています。"
      />

      <ContentSection>
        <SectionHeading eyebrow="LATEST" title="最新の発信" />
        <article className="card mt-10 grid gap-6 p-7 sm:p-9 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
          <div className="aspect-[4/3] rounded-2xl bg-linear-to-br from-[var(--primary-soft)] to-[var(--bg-tint)] lg:aspect-auto" />
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <time className="font-kanit text-[12px] tracking-[0.16em] text-[var(--fg-mute)]">
                {latest.date}
              </time>
              <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 text-[11px] font-bold text-[var(--primary-text)]">
                {latest.cat}
              </span>
            </div>
            <h2 className="mt-4 text-[20px] font-bold leading-[1.5] text-[var(--ink)] sm:text-[22px]">
              {latest.title}
            </h2>
            <p className="mt-4 text-[13.5px] leading-[1.9] text-[var(--fg-mute)]">{latest.excerpt}</p>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[var(--primary)]">
                公開準備中
              </span>
            </div>
          </div>
        </article>
      </ContentSection>

      <ContentSection tone="soft">
        <SectionHeading eyebrow="ARCHIVE" title="過去の記事" />
        <ul className="mt-10 grid gap-4">
          {rest.map((item) => (
            <li key={item.title}>
              <article className="card grid gap-3 p-6 sm:grid-cols-[120px_90px_1fr] sm:items-start sm:gap-6">
                <time className="font-kanit text-[12.5px] tracking-[0.08em] text-[var(--fg-mute)]">
                  {item.date}
                </time>
                <span className="w-fit rounded-full bg-[var(--primary-soft)] px-3 py-1 text-[11px] font-bold text-[var(--primary-text)]">
                  {item.cat}
                </span>
                <div>
                  <h3 className="text-[14.5px] font-bold leading-[1.6] text-[var(--ink)]">{item.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-[1.85] text-[var(--fg-mute)]">{item.excerpt}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-outline">執筆・登壇のご相談</Link>
          <Link href="/about" className="btn-outline">運営チームについて</Link>
        </div>
      </ContentSection>

      <CTABanner />
    </SubPageShell>
  );
}
