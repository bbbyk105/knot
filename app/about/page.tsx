import {
  CTABanner,
  ContentSection,
  MemberCard,
  PageHero,
  SectionHeading,
  SubPageShell,
  companyInfo,
  members,
  milestones,
} from "../subpage-components";

export default function AboutPage() {
  return (
    <SubPageShell>
      <PageHero
        label="ABOUT"
        title="信念を技術で支え、未来の当たり前をつくる。"
        description="Knotは、AIと業務プロセスの最適化により、人と組織がより創造的に働ける状態を支援するチームです。"
      />

      <ContentSection>
        <SectionHeading
          eyebrow="MISSION"
          title="現場で使える形に整えて、毎日の時間を取り戻す。"
          description="ツールを入れること自体ではなく、現場が継続的に使い続けられる状態をゴールに置いています。"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "Mission",
              body: "テクノロジーを現場で使える形にし、日々の作業時間を価値ある時間へ変えます。",
            },
            {
              title: "Approach",
              body: "業務を理解し、小さく試し、成果が見えるところから無理なく広げます。",
            },
            {
              title: "Support",
              body: "導入して終わりではなく、使い続けられる運用と改善まで伴走します。",
            },
          ].map((item) => (
            <article key={item.title} className="card p-7">
              <h3 className="font-kanit text-[18px] text-[var(--primary)]">{item.title}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.9] text-[var(--fg-mute)]">{item.body}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection tone="soft">
        <SectionHeading
          eyebrow="MEMBERS"
          title="少数精鋭で、要件の入口から運用まで一気通貫。"
          description="営業・設計・実装・運用までを最小限のメンバーで担当することで、判断のスピードと現場感を両立します。"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-[860px]">
          {members.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="HISTORY"
            title="小さく始め、現場の声に合わせて拡張してきました。"
            description="受託からスタートし、伴走支援・構築領域を順次広げてきました。"
          />
          <ol className="grid gap-5">
            {milestones.map((m) => (
              <li key={m.year} className="card grid gap-3 p-6 sm:grid-cols-[120px_1fr] sm:items-start sm:gap-6">
                <span className="font-kanit text-[28px] leading-none text-[var(--primary)]">{m.year}</span>
                <p className="text-[13.5px] leading-[1.9] text-[var(--fg-mute)]">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </ContentSection>

      <ContentSection tone="soft">
        <SectionHeading eyebrow="COMPANY" title="会社情報" />
        <dl className="mt-10 overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
          {companyInfo.map(([label, value], idx) => (
            <div
              key={label}
              className={`grid gap-1 px-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-6 ${
                idx !== companyInfo.length - 1 ? "border-b border-[var(--border)]" : ""
              }`}
            >
              <dt className="text-[12.5px] font-bold tracking-[0.04em] text-[var(--fg-mute)]">{label}</dt>
              <dd className="text-[13.5px] leading-[1.85] text-[var(--ink)]">{value}</dd>
            </div>
          ))}
        </dl>
      </ContentSection>

      <CTABanner />
    </SubPageShell>
  );
}
