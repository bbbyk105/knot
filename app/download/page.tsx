import type { Metadata } from "next";
import {
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
  downloadContents,
} from "../subpage-components";
import { submitDownloadRequest } from "./actions";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "サービス資料ダウンロード",
  description:
    "Knotのサービス資料を無料ダウンロード。対応領域、活用シーン、進め方、料金レンジを1つの資料にまとめています。社内検討にもご活用ください。",
  alternates: { canonical: "/download" },
  openGraph: {
    title: "サービス資料ダウンロード｜Knot",
    description:
      "AI導入・業務自動化・Web/EC構築の対応領域と進め方をまとめた資料を無料配布中。",
    url: "/download",
  },
};

const inquiryTypes = [
  "AI導入相談",
  "業務自動化",
  "Web・EC構築",
  "その他",
];

function FieldLabel({
  label,
  required = true,
}: {
  label: string;
  required?: boolean;
}) {
  return (
    <span className="flex items-center gap-2 text-[13px] font-bold text-ink">
      {label}
      <span
        className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold ${
          required
            ? "bg-[#e35a1f] text-white"
            : "bg-bg-soft text-fg-mute"
        }`}
      >
        {required ? "必須" : "任意"}
      </span>
    </span>
  );
}

const inputClass =
  "w-full rounded-lg border border-border bg-bg-soft px-4 py-3 text-[14px] text-ink placeholder:text-fg-faint focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-soft transition";

export default function DownloadPage() {
  return (
    <SubPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "ホーム", path: "/" },
              { name: "資料ダウンロード", path: "/download" },
            ]),
          ),
        }}
      />
      <PageHero
        label="DOWNLOAD"
        title="AI、結局なにから始めるか。20分で読めます。"
        description="対応領域・活用シーン・進め方を1つの資料に。社内稟議や検討材料としてもお使いいただけます。"
      />

      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
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
                  <span className="grid size-10 place-items-center rounded-xl bg-primary-soft font-kanit text-[13px] text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-ink">{c.title}</h3>
                    <p className="mt-1.5 text-[12.5px] leading-[1.85] text-fg-mute">
                      {c.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-bg-soft p-5 text-[12.5px] leading-[1.85] text-fg-mute">
              <p className="font-bold text-ink">ご利用にあたって</p>
              <p className="mt-2">
                本資料は、Knotのサービスをご検討中の法人・個人事業主の方向けに作成したものです。同業他社様、情報収集目的でのダウンロードはご遠慮いただいております。内容の無断転載・共有も固くお断りしております。
              </p>
            </div>
          </div>

          <aside className="card p-7 sm:p-9">
            <p className="font-kanit text-[12px] tracking-[0.18em] text-primary">
              REQUEST
            </p>
            <h2 className="mt-3 text-xl font-bold text-ink">資料ダウンロード</h2>
            <p className="mt-3 text-[12.5px] leading-[1.85] text-fg-mute">
              下記フォームに必要事項をご記入の上、送信してください。送信完了画面から PDF をダウンロードいただけます。
            </p>

            <form
              action={submitDownloadRequest}
              className="mt-7 grid gap-5"
              noValidate
            >
              <input
                type="text"
                name="hp_url"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden
              />

              <label className="grid gap-2">
                <FieldLabel label="会社名" />
                <input
                  type="text"
                  name="company"
                  required
                  placeholder="株式会社○○ / 個人事業主の方は屋号"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <FieldLabel label="お名前" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="山田 太郎"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <FieldLabel label="メールアドレス" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@mail.com"
                  className={inputClass}
                />
              </label>

              <label className="grid gap-2">
                <FieldLabel label="電話番号" />
                <input
                  type="tel"
                  name="phone"
                  required
                  inputMode="numeric"
                  placeholder="09012345678"
                  className={inputClass}
                />
              </label>

              <fieldset className="grid gap-3">
                <FieldLabel label="お問い合わせの種類" />
                <div className="grid gap-2">
                  {inquiryTypes.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-[13px] text-ink transition hover:border-primary cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        required
                        className="size-4 accent-primary"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="grid gap-2">
                <FieldLabel label="お問い合わせ内容" />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="ご検討中の業務、現状の課題、想定スケジュールなどをご記入ください。"
                  className={`${inputClass} resize-y leading-[1.7]`}
                />
              </label>

              <button
                type="submit"
                className="btn-primary mt-2 w-full justify-center"
              >
                送信する
              </button>

              <p className="text-[11.5px] leading-[1.7] text-fg-faint">
                送信いただいた内容は、ご連絡・資料送付のためにのみ使用します。第三者に提供することはありません。
              </p>
            </form>
          </aside>
        </div>
      </ContentSection>
    </SubPageShell>
  );
}
