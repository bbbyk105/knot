import Link from "next/link";
import {
  CTABanner,
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
  serviceItems,
} from "../subpage-components";

const fitFor = [
  "AI活用を始めたいが、どこから手を付けるか整理できていない",
  "属人化した業務を、現場が無理なく回せる形に整えたい",
  "自社にエンジニアがいない、または手が足りない",
  "ツール導入で終わらず、継続的に効果を出していきたい",
];

const deliverables = [
  { phase: "ヒアリング", body: "現状の業務マップ / 改善優先順位 / 想定スコープ" },
  { phase: "提案", body: "導入計画 / 効果見込み / 期間とプラン" },
  { phase: "導入", body: "ツール設定 / ワークフロー / 運用ルール" },
  { phase: "運用", body: "定例 / 改善実装 / 効果レポート" },
];

export default function ServicePage() {
  return (
    <SubPageShell>
      <PageHero
        label="SERVICE"
        title="AIを入れて終わりにしない、4つの支援領域。"
        description="課題整理 → 設計 → 実装 → 定着 まで一気通貫。最短2〜4週間、1業務単位の小さく始める導入から、Web/EC構築まで。"
      />

      <ContentSection>
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="支援領域"
          description="戦略レイヤーから実装・運用まで、必要な範囲だけを切り出して支援できます。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {serviceItems.map((s, idx) => (
            <article key={s.title} className="card grid gap-5 p-7 sm:grid-cols-[60px_1fr]">
              <span className="grid size-12 place-items-center rounded-xl bg-primary-soft font-kanit text-[15px] text-primary">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[16.5px] font-bold leading-[1.45] text-ink">{s.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.85] text-fg-mute">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection tone="soft">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="FIT FOR"
            title="こんな企業に向いています"
            description="どれか1つでも当てはまる場合は、ご相談いただく価値があります。"
          />
          <ul className="grid gap-3">
            {fitFor.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-xl border border-border bg-white px-5 py-4"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-block size-2 shrink-0 rounded-full bg-primary"
                />
                <span className="text-[13.5px] leading-[1.8] text-ink">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </ContentSection>

      <ContentSection tone="soft">
        <SectionHeading
          eyebrow="DELIVERABLES"
          title="フェーズごとの納品物"
          description="どの段階で何が手元に残るかを最初に握ってから進めます。"
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((d, idx) => (
            <article key={d.phase} className="card relative overflow-hidden p-6">
              <span className="font-kanit text-[40px] leading-none text-primary-soft">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-[15px] font-bold text-ink">{d.phase}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.85] text-fg-mute">{d.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/flow" className="btn-outline">導入の流れを見る</Link>
          <Link href="/faq" className="btn-outline">よくある質問</Link>
          <Link href="/use-cases" className="btn-outline">活用シーン例</Link>
        </div>
      </ContentSection>

      <CTABanner
        title="まずは現状の課題を整理するところから。"
        description="プラン決定の前に、無料の相談で全体像のすり合わせができます。"
      />
    </SubPageShell>
  );
}
