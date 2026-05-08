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

export default function UseCasesPage() {
  return (
    <SubPageShell>
      <PageHero
        label="USE CASES"
        title="部門ごとの日常業務に、AI活用の余地があります。"
        description="営業、サポート、人事、経理、情報システム、経営企画など、繰り返し発生する作業から優先して効率化します。"
      />

      <ContentSection>
        <SectionHeading
          eyebrow="BY DEPARTMENT"
          title="部門別の活用例"
          description="どの部門でも、まず削れる作業から手を付けるのが定着の近道です。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCaseItems.map((u) => (
            <article key={u.title} className="card p-7">
              <h3 className="text-[15.5px] font-bold leading-[1.5] text-[var(--ink)]">{u.title}</h3>
              <p className="mt-3 text-[12.5px] leading-[1.85] text-[var(--fg-mute)]">{u.desc}</p>
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
              <span className="font-kanit text-[12px] tracking-[0.18em] text-[var(--primary)]">
                {String(idx + 1).padStart(2, "0")} / {String(industries.length).padStart(2, "0")}
              </span>
              <h3 className="text-[16px] font-bold leading-[1.45] text-[var(--ink)]">{i.name}</h3>
              <p className="text-[12.5px] leading-[1.85] text-[var(--fg-mute)]">{i.desc}</p>
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
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {beforeAfter.map((b) => (
            <article key={b.title} className="card overflow-hidden">
              <header className="border-b border-[var(--border)] bg-[var(--bg-soft)] px-6 py-4">
                <h3 className="text-[15px] font-bold text-[var(--ink)]">{b.title}</h3>
              </header>
              <div className="grid gap-5 p-6">
                <div>
                  <p className="font-kanit text-[11px] tracking-[0.16em] text-[var(--fg-faint)]">BEFORE</p>
                  <p className="mt-2 text-[14px] font-bold leading-[1.6] text-[var(--ink)]">{b.before}</p>
                </div>
                <div className="h-px bg-[var(--border)]" />
                <div>
                  <p className="font-kanit text-[11px] tracking-[0.16em] text-[var(--primary)]">AFTER</p>
                  <p className="mt-2 text-[14px] font-bold leading-[1.6] text-[var(--ink)]">{b.after}</p>
                </div>
                <div className="rounded-xl bg-[var(--primary-soft)] px-4 py-3">
                  <p className="text-[12.5px] font-bold text-[var(--primary-text)]">{b.impact}</p>
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
