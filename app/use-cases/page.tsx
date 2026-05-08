import type { Metadata } from "next";
import {
  CTABanner,
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
  beforeAfter,
  industries,
  useCaseItems,
} from "../subpage-components";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "活用シーン｜AIで効率化できる業務例",
  description:
    "文章作成・資料作成・情報整理・定型作業の自動化・Web/SNS運用・業務フロー改善など、Knotで実現できるAI活用シーンを業種別・業務別に紹介します。",
  alternates: { canonical: "/use-cases" },
  openGraph: {
    title: "活用シーン｜Knot",
    description:
      "中小企業・個人事業主向けに、日々の業務で使えるAI活用シーンを紹介。",
    url: "/use-cases",
  },
};

export default function UseCasesPage() {
  return (
    <SubPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "ホーム", path: "/" },
              { name: "活用シーン", path: "/use-cases" },
            ]),
          ),
        }}
      />
      <PageHero
        label="USE CASES"
        title="難しいAI導入ではなく、日々の業務で使えるところから仕組み化します。"
        description="文章作成、資料整理、定型作業、Web・SNS運用まで。繰り返し発生する作業から優先して、AIで効率化します。"
      />

      <ContentSection>
        <SectionHeading
          eyebrow="DAILY USE"
          title="日々の業務での活用例"
          description="現場で繰り返し発生する作業を、AIで下書き・整理・自動化します。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCaseItems.map((u) => (
            <article key={u.title} className="card p-7">
              <h3 className="text-[15.5px] font-bold leading-normal text-ink">{u.title}</h3>
              <p className="mt-3 text-[12.5px] leading-[1.85] text-fg-mute">{u.desc}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection tone="soft">
        <SectionHeading
          eyebrow="BY INDUSTRY"
          title="業界別の活用例"
          description="業界特有の業務にも、共通する型で効率化を進められます。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i, idx) => (
            <article key={i.name} className="card flex h-full flex-col gap-4 p-7">
              <span className="font-kanit text-xs tracking-[0.18em] text-primary">
                {String(idx + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold leading-[1.45] text-ink">{i.name}</h3>
              <p className="text-[12.5px] leading-[1.85] text-fg-mute">{i.desc}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeading
          eyebrow="BEFORE / AFTER"
          title="ビフォー・アフターのイメージ"
          description="繰り返し作業を仕組み化することで、これくらいの差が出ます。実数は業務によって変動します。"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {beforeAfter.map((b) => (
            <article key={b.title} className="card overflow-hidden">
              <header className="border-b border-border bg-bg-soft px-6 py-4">
                <h3 className="text-[15px] font-bold text-ink">{b.title}</h3>
              </header>
              <div className="grid gap-5 p-6">
                <div>
                  <p className="font-kanit text-[11px] tracking-[0.16em] text-fg-faint">BEFORE</p>
                  <p className="mt-2 text-sm font-bold leading-[1.6] text-ink">{b.before}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="font-kanit text-[11px] tracking-[0.16em] text-primary">AFTER</p>
                  <p className="mt-2 text-sm font-bold leading-[1.6] text-ink">{b.after}</p>
                </div>
                <div className="rounded-xl bg-primary-soft px-4 py-3">
                  <p className="text-[12.5px] font-bold text-primary-text">{b.impact}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <CTABanner
        title="自社の業務だとどう使えるかを話してみませんか。"
        description="現状の業務をお聞きしながら、活用余地と進め方を一緒に整理します。"
      />
    </SubPageShell>
  );
}
