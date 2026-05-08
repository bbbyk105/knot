import {
  CTABanner,
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
  flowItems,
} from "../subpage-components";

const principles = [
  {
    title: "小さく始める",
    desc: "全社展開を最初から狙わず、効果が見える単一業務から始めて勝ち筋を作ります。",
  },
  {
    title: "現場と一緒に作る",
    desc: "外から仕組みを与えるのではなく、現場メンバーが説明できる状態を目指します。",
  },
  {
    title: "数字で振り返る",
    desc: "削減時間や処理件数など、効果の出方を都度可視化して次の改善につなげます。",
  },
];

export default function FlowPage() {
  return (
    <SubPageShell>
      <PageHero
        label="FLOW"
        title="相談から導入、定着までを段階的に進めます。"
        description="最初から大きく変えるのではなく、効果が見えやすい領域を選び、現場に無理のない形で導入します。"
      />

      <ContentSection>
        <SectionHeading
          eyebrow="STEPS"
          title="導入5ステップ"
          description="ご相談から運用までを1つの流れとして設計しています。各ステップの想定期間も併せて掲載します。"
        />
        <ol className="mt-12 grid gap-4">
          {flowItems.map((item, index) => (
            <li key={item.title}>
              <article className="card grid gap-5 p-6 sm:grid-cols-[80px_1fr_140px] sm:items-center sm:gap-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-[var(--primary)] font-kanit text-[18px] text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-[16px] font-bold text-[var(--ink)]">{item.title}</h2>
                  <p className="mt-2 text-[13px] leading-[1.85] text-[var(--fg-mute)]">{item.desc}</p>
                </div>
                <div className="flex sm:flex-col sm:items-end">
                  <span className="font-kanit text-[10.5px] tracking-[0.18em] text-[var(--fg-faint)]">
                    DURATION
                  </span>
                  <span className="ml-3 text-[13px] font-bold text-[var(--ink)] sm:ml-0 sm:mt-1">
                    {item.duration}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </ContentSection>

      <ContentSection tone="soft">
        <SectionHeading
          eyebrow="PRINCIPLES"
          title="進め方の前提"
          description="どの案件でも一貫して大事にしている、3つのスタンスです。"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {principles.map((p, idx) => (
            <article key={p.title} className="card p-7">
              <span className="font-kanit text-[40px] leading-none text-[var(--primary-soft)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[16px] font-bold text-[var(--ink)]">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.85] text-[var(--fg-mute)]">{p.desc}</p>
            </article>
          ))}
        </div>
      </ContentSection>

      <CTABanner
        title="進め方をすり合わせるところから始められます。"
        description="現状をお聞きして、どのステップから着手するのが適切か一緒に判断します。"
      />
    </SubPageShell>
  );
}
