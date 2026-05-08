import Link from "next/link";
import { ContentSection, PageHero, SubPageShell } from "../subpage-components";

export default function ContactPage() {
  return (
    <SubPageShell>
      <PageHero
        label="CONTACT"
        title="まずは現状をお聞かせください。"
        description="初回30分の相談は無料。AI導入・業務自動化・Web / EC制作の進め方を一緒に整理します。営業色なしの相談窓口です。"
      />
      <ContentSection>
        <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="card p-7">
            <h2 className="text-lg font-bold text-ink">相談できること</h2>
            <ul className="mt-5 grid gap-3 text-[13px] leading-[1.8] text-fg-mute">
              <li>どの業務からAI化すべきか相談したい</li>
              <li>手作業や属人化している業務を整理したい</li>
              <li>WebサイトやECの改善も含めて相談したい</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="text-lg font-bold text-ink">お問い合わせフォーム</h2>
            <p className="mt-4 text-[13px] leading-[1.85] text-fg-mute">
              現時点ではフォーム設置前の仮ページです。フォーム実装後、ここから送信できるようにします。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/download" className="btn-primary">
                資料を見る
              </Link>
              <Link href="/faq" className="btn-outline">
                よくある質問を見る
              </Link>
            </div>
          </div>
        </div>
      </ContentSection>
    </SubPageShell>
  );
}
