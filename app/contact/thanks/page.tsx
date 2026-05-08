import Link from "next/link";
import {
  ContentSection,
  PageHero,
  SubPageShell,
} from "../../subpage-components";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "送信完了",
  description: "お問い合わせを受け付けました。",
  robots: { index: false, follow: false },
};

export default function ContactThanksPage() {
  return (
    <SubPageShell>
      <PageHero
        label="THANK YOU"
        title="お問い合わせありがとうございます。"
        description="ご記入いただいた内容を確認後、2営業日以内に担当者よりご連絡いたします。"
      />

      <ContentSection>
        <div className="mx-auto max-w-[640px]">
          <div className="card p-7 sm:p-9">
            <h2 className="text-lg font-bold text-ink">受付内容について</h2>
            <ul className="mt-5 grid gap-3 text-[13px] leading-[1.85] text-fg-mute">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                ご記入いただいたメールアドレス宛に、確認のメールが届きます (担当者から個別返信)
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                内容によっては Telegram / Slack 等での会話に切り替えのご案内をする場合があります
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                返信は基本2営業日以内。土日祝はお休みをいただいています
              </li>
            </ul>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-bg-soft p-6 text-[12.5px] leading-[1.85] text-fg-mute">
            <p>
              <span className="font-bold text-ink">返信が届かない場合:</span>{" "}
              迷惑メールフォルダのご確認、もしくは
              <a
                href="mailto:byakkokondo@gmail.com"
                className="font-bold text-primary hover:underline"
              >
                {" "}byakkokondo@gmail.com{" "}
              </a>
              まで直接ご連絡ください。
            </p>
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl border border-primary/30 bg-primary-soft/40 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
            <div>
              <p className="font-bold text-ink">サービス資料も併せてどうぞ</p>
              <p className="mt-1.5 text-[12.5px] leading-[1.85] text-fg-mute">
                対応領域・活用シーン・進め方をまとめた PDF をその場でご覧いただけます。
              </p>
            </div>
            <a
              href="/api/docs/knot-service"
              download="knot-service.pdf"
              className="btn-primary w-full justify-center sm:w-auto"
            >
              資料をダウンロード
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-outline">
              トップに戻る
            </Link>
            <Link href="/news" className="btn-outline">
              ブログを見る
            </Link>
          </div>
        </div>
      </ContentSection>
    </SubPageShell>
  );
}
