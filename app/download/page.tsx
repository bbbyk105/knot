import Link from "next/link";
import {
  CTABanner,
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
  downloadContents,
} from "../subpage-components";

export default function DownloadPage() {
  return (
    <SubPageShell>
      <PageHero
        label="DOWNLOAD"
        title="サービス資料ダウンロード"
        description="導入事例、活用シーン、料金レンジ、進め方の概要を1つの資料にまとめています。社内検討にもお使いいただけます。"
      />

      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="CONTENTS"
              title="資料の内容"
              description="営業・経営層・現場のいずれの立場から見ても、検討に必要な情報がそろう構成です。"
            />
            <ul className="mt-10 grid gap-3">
              {downloadContents.map((c, idx) => (
                <li
                  key={c.title}
                  className="card grid gap-3 p-5 sm:grid-cols-[44px_1fr] sm:items-start sm:gap-5"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-[var(--primary-soft)] font-kanit text-[13px] text-[var(--primary)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-[var(--ink)]">{c.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-[1.85] text-[var(--fg-mute)]">{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <aside className="card sticky top-24 p-7 sm:p-9">
            <p className="font-kanit text-[12px] tracking-[0.18em] text-[var(--primary)]">REQUEST</p>
            <h2 className="mt-3 text-[20px] font-bold text-[var(--ink)]">資料をリクエストする</h2>
            <p className="mt-4 text-[13px] leading-[1.85] text-[var(--fg-mute)]">
              現時点ではフォーム実装前の仮ページです。お問い合わせ経由でご連絡いただけましたら、最新の資料PDFをお送りします。
            </p>
            <dl className="mt-7 grid gap-4 text-[12.5px]">
              <div className="flex justify-between gap-4 border-b border-[var(--border)] pb-3">
                <dt className="text-[var(--fg-mute)]">ファイル形式</dt>
                <dd className="font-bold text-[var(--ink)]">PDF</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--border)] pb-3">
                <dt className="text-[var(--fg-mute)]">ページ数</dt>
                <dd className="font-bold text-[var(--ink)]">約20ページ</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--fg-mute)]">想定読了時間</dt>
                <dd className="font-bold text-[var(--ink)]">10分</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/contact" className="btn-primary w-full justify-center">
                資料リクエスト（お問い合わせ）
              </Link>
              <Link href="/service" className="btn-outline w-full justify-center">
                先にサービスを見る
              </Link>
            </div>
          </aside>
        </div>
      </ContentSection>

      <CTABanner
        title="資料を見る前に直接話したい場合は、無料相談からどうぞ。"
        description="現状の課題感に合わせて、必要な部分だけお話しできます。"
      />
    </SubPageShell>
  );
}
