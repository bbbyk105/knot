import type { Metadata } from "next";
import Link from "next/link";
import {
  ContentSection,
  PageHero,
  SubPageShell,
} from "../../subpage-components";

export const metadata: Metadata = {
  title: "送信完了",
  description: "資料ダウンロード申請を受け付けました。",
  robots: { index: false, follow: false },
};

export default function DownloadThanksPage() {
  return (
    <SubPageShell>
      <PageHero
        label="THANK YOU"
        title="お申し込みありがとうございます。"
        description="ご記入いただいた内容を確認後、担当者よりご連絡いたします。下記から資料 PDF をダウンロードいただけます。"
      />

      <ContentSection>
        <div className="mx-auto max-w-[720px]">
          <div className="card overflow-hidden">
            <div className="grid gap-2 border-b border-border bg-primary px-7 py-6 text-white sm:px-9">
              <p className="font-kanit text-[12px] tracking-[0.18em] text-white/85">
                READY TO DOWNLOAD
              </p>
              <h2 className="text-xl font-bold leading-tight">
                Knot サービス資料 (PDF)
              </h2>
              <p className="text-[12.5px] leading-[1.7] text-white/85">
                約20ページ / 想定読了時間 10分 / 最終更新 2026年
              </p>
            </div>
            <div className="grid gap-5 p-7 sm:p-9">
              <p className="text-[13.5px] leading-[1.85] text-fg-mute">
                ボタンから資料をダウンロードできます。資料の内容に関するご質問や、ご相談に進みたい場合はお気軽にご連絡ください。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/api/docs/knot-service"
                  download="knot-service.pdf"
                  className="btn-primary w-full justify-center sm:flex-1"
                >
                  資料をダウンロード
                </a>
                <Link
                  href="/contact"
                  className="btn-outline w-full justify-center sm:flex-1"
                >
                  30分の無料相談
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-bg-soft p-6 text-[12.5px] leading-[1.85] text-fg-mute">
            <p>
              <span className="font-bold text-ink">資料が届かない場合:</span>{" "}
              ご利用環境や迷惑メール対策の設定により、ご連絡が届かない場合がございます。返信がない場合は、
              <Link
                href="/contact"
                className="font-bold text-primary hover:underline"
              >
                お問い合わせ
              </Link>
              から再度ご連絡ください。
            </p>
            <p>
              <span className="font-bold text-ink">本資料の取り扱い:</span>{" "}
              本資料は、Knot のサービスをご検討中の法人・個人事業主の方向けに作成したものです。内容の無断転載・第三者への共有はお控えください。
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[13px] font-bold text-fg-mute transition-colors hover:text-primary"
            >
              トップに戻る
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M3 8h10" />
                <path d="M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </div>
      </ContentSection>
    </SubPageShell>
  );
}
