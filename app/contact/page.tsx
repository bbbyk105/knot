import type { Metadata } from "next";
import {
  ContentSection,
  PageHero,
  SubPageShell,
} from "../subpage-components";
import { submitContactRequest } from "./actions";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "お問い合わせ・無料相談",
  description:
    "AI導入・業務自動化・Web/EC構築のご相談はこちらから。初回30分の相談は無料、現状の整理からお見積もりまでご対応します。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "お問い合わせ｜Knot",
    description:
      "初回30分の相談は無料。AI導入・業務自動化のご相談はお気軽にどうぞ。",
    url: "/contact",
  },
};

const inquiryTypes = [
  "AI導入相談",
  "業務自動化",
  "Web・EC構築",
  "研修・ワークショップ",
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

export default function ContactPage() {
  return (
    <SubPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "ホーム", path: "/" },
              { name: "お問い合わせ", path: "/contact" },
            ]),
          ),
        }}
      />
      <PageHero
        label="CONTACT"
        title="まずは現状をお聞かせください。"
        description="初回30分の相談は無料。AI導入・業務自動化・Web / EC制作の進め方を一緒に整理します。営業色なしの相談窓口です。"
      />

      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-14">
          <div>
            <h2 className="text-xl font-bold text-ink">相談できること</h2>
            <ul className="mt-5 grid gap-3 text-[13px] leading-[1.85] text-fg-mute">
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                どの業務からAI化すべきか整理したい
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                手作業や属人化している業務を見直したい
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                WebサイトやECの改善を含めて相談したい
              </li>
              <li className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary"
                />
                生成AIの社内研修や勉強会を依頼したい
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-bg-soft p-5 text-[12.5px] leading-[1.85] text-fg-mute">
              <p className="font-bold text-ink">対応の流れ</p>
              <p className="mt-2">
                送信いただいた内容を確認後、2営業日以内にご連絡いたします。お急ぎの場合や、迷惑メール設定で返信が届かない場合は、件名「Knot
                お問い合わせ」で
                <a
                  href="mailto:byakkokondo@gmail.com"
                  className="font-bold text-primary hover:underline"
                >
                  {" "}byakkokondo@gmail.com{" "}
                </a>
                まで直接ご連絡ください。
              </p>
            </div>
          </div>

          <aside className="card p-7 sm:p-9">
            <p className="font-kanit text-[12px] tracking-[0.18em] text-primary">
              CONTACT FORM
            </p>
            <h2 className="mt-3 text-xl font-bold text-ink">お問い合わせ</h2>
            <p className="mt-3 text-[12.5px] leading-[1.85] text-fg-mute">
              お名前・メールアドレス・ご相談内容のみ必須です。匿名やニックネームでもお気軽にどうぞ。
            </p>

            <form
              action={submitContactRequest}
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
                <FieldLabel label="会社名 / 屋号" required={false} />
                <input
                  type="text"
                  name="company"
                  placeholder="株式会社○○ / 個人事業主可"
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
                <FieldLabel label="電話番号" required={false} />
                <input
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  placeholder="09012345678"
                  className={inputClass}
                />
              </label>

              <fieldset className="grid gap-3">
                <FieldLabel label="ご相談の種類" required={false} />
                <div className="grid gap-2">
                  {inquiryTypes.map((type) => (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 text-[13px] text-ink transition hover:border-primary"
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type}
                        className="size-4 accent-primary"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="grid gap-2">
                <FieldLabel label="ご相談内容" />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="現状の業務、お困りごと、想定スケジュールなどを自由にご記入ください。"
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
                送信いただいた内容は、ご連絡・お問い合わせ対応のためにのみ使用します。第三者に提供することはありません。
              </p>
            </form>
          </aside>
        </div>
      </ContentSection>
    </SubPageShell>
  );
}
