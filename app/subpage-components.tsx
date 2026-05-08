import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavDrawer } from "./mobile-menu";

export const themeVars = {
  "--bg-soft": "#f4f8f6",
  "--bg-tint": "#e8f7f2",
  "--primary": "#12aa84",
  "--primary-hover": "#0e8f70",
  "--primary-soft": "#e3f7f1",
  "--primary-text": "#08725a",
} as CSSProperties;

export const navLinks = [
  { href: "/service", label: "サービス" },
  { href: "/use-cases", label: "活用シーン" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/about", label: "会社情報" },
  { href: "/news", label: "ブログ" },
];

export const serviceItems = [
  {
    title: "AI活用コンサルティング",
    desc: "業務課題の整理から、AI活用の優先順位づけ、導入方針の設計まで支援します。",
  },
  {
    title: "業務プロセスの可視化",
    desc: "現場の作業を棚卸しし、ムリ・ムダ・属人化している工程を見える形にします。",
  },
  {
    title: "AI導入・運用支援",
    desc: "ツール選定、初期設定、運用ルールづくりまで伴走し、現場に定着させます。",
  },
  {
    title: "人材育成・研修",
    desc: "AIを日常業務で使える状態にするため、実務に沿った研修を設計します。",
  },
];

export const useCaseItems = [
  {
    title: "文章作成・返信",
    desc: "メール、問い合わせ対応、提案文、SNS投稿などをAIで下書きします。",
  },
  {
    title: "資料作成",
    desc: "議事録、報告書、営業資料、説明資料の作成を効率化します。",
  },
  {
    title: "情報整理",
    desc: "メモ、顧客情報、社内資料、調査内容をわかりやすく整理します。",
  },
  {
    title: "定型作業の自動化",
    desc: "入力、転記、通知、集計などの繰り返し作業を自動化します。",
  },
  {
    title: "Web・SNS運用",
    desc: "LP改善、投稿作成、導線設計、キャンペーン案づくりを支援します。",
  },
  {
    title: "業務フロー改善",
    desc: "今の作業の流れを見直し、AIを使いやすい形に整えます。",
  },
];

export const flowItems = [
  {
    title: "ヒアリング・課題整理",
    desc: "現状の業務とゴールを整理し、改善できる箇所を洗い出します。",
    duration: "1〜2週間",
  },
  {
    title: "ご提案・方針設計",
    desc: "効果が出やすい領域から、導入範囲とプランをご提案します。",
    duration: "1〜2週間",
  },
  {
    title: "構築・実装",
    desc: "ツール選定、初期設定、ワークフロー設計までを一気通貫で実装します。",
    duration: "2〜4週間",
  },
  {
    title: "導入・定着支援",
    desc: "現場で使い続けられる形に調整し、社内展開までサポートします。",
    duration: "1〜3ヶ月",
  },
  {
    title: "保守運用",
    desc: "公開・導入後も継続的に運用サポートと改善を行います。",
    duration: "継続",
  },
];

export const faqItems = [
  {
    cat: "サービス全般",
    q: "どのような企業が対象ですか？",
    a: "個人事業主から中小企業まで、業種を問わずご相談いただけます。これからAIを活用したい段階でも問題ありません。",
  },
  {
    cat: "サービス全般",
    q: "社内にAIの知識がなくても大丈夫ですか？",
    a: "大丈夫です。専門用語よりも、現場で何に困っているかを起点に進めます。",
  },
  {
    cat: "サービス全般",
    q: "対応エリアは決まっていますか？",
    a: "オンライン中心のため全国・海外からのご相談に対応しています。必要に応じて関東圏は対面でも伺います。",
  },
  {
    cat: "期間",
    q: "どのくらいの期間で導入できますか？",
    a: "内容によりますが、業務自動化は2〜4週間、LP制作は3週間前後、Webサイトは6週間前後が目安です。",
  },
  {
    cat: "期間",
    q: "短期間だけのスポット契約はできますか？",
    a: "可能です。1案件ベースのスポット支援と、月額の伴走支援の2パターンをご用意しています。",
  },
  {
    cat: "料金",
    q: "料金はどのくらいかかりますか？",
    a: "AI導入のご相談は無料です。具体的な料金は業務範囲に応じて個別にご提示します。",
  },
  {
    cat: "料金",
    q: "相談や見積もりは無料ですか？",
    a: "初回30分のご相談、お見積もりまでは無料で対応しています。",
  },
  {
    cat: "料金",
    q: "支払い方法は何が選べますか？",
    a: "請求書払い（銀行振込）に対応しています。月額契約の場合は月末締め翌月末払いが標準です。",
  },
  {
    cat: "導入後",
    q: "導入後のサポートはありますか？",
    a: "月額の運用サポートプランで、現場の問い合わせ対応・改善提案・ツール調整まで伴走します。",
  },
  {
    cat: "導入後",
    q: "セキュリティ面が心配です。",
    a: "業務データの取り扱いについては、NDA締結・社内で扱う範囲の事前合意・ログ管理方針の共有まで含めて進めます。",
  },
];

export const members = [
  {
    name: "Byakko Kondo",
    nameJa: "近藤 白虎",
    role: "Engineer / 代表",
    photo: "/images/member-byakko-kondo.png",
    bio: "AI・自動化・Web/ECを軸に、企業から個人事業主までの業務をリデザインするエンジニア。Claude Code・n8n・OpenClaw・Shopifyを駆使し、戦略設計から実装・運用までを一気通貫で担う。流行りに乗ったAIではなく、現場で本当に使えるAI活用を信条に、毎日の作業負担を確実に減らす仕組みづくりを続けている。",
    skills: ["Claude Code / AI Agent", "n8n / OpenClaw", "Shopify / Next.js"],
  },
  {
    name: "Shogo Kikuchi",
    nameJa: "菊地 翔吾",
    role: "Engineer",
    photo: "/images/member-shogo-kikuchi.png",
    bio: "株式会社メルカリにてPMとしてプロダクトの企画・改善を主導。ByteDanceではTikTok Shopのポリシー設計・ガバナンス領域に携わり、グローバルECにおける運用基準づくりを実践。事業戦略・プロダクト・ルール設計まで横断的に捉える視点で、Knotの上流工程をリードする。",
    skills: [
      "Product Strategy",
      "Policy / Governance",
      "Global EC / Cross-border",
    ],
  },
];

export const milestones = [
  {
    year: "2026",
    body: "Knotとして活動開始。AI導入・業務自動化・Web / EC構築まで一気通貫で支援する体制を立ち上げ。",
  },
];

export const companyInfo = [
  ["屋号", "Knot"],
  ["所在地", "東京都"],
  ["事業内容", "AI導入・業務自動化支援 / Web・EC構築 / 集客運用支援"],
  ["対応エリア", "オンライン中心、全国・海外対応"],
  ["連絡先", "byakkokondo@gmail.com"],
];

export const industries = [
  {
    name: "製造・物流",
    desc: "発注・在庫・出荷帳票の自動化、属人化した手順の標準化。",
  },
  {
    name: "医療・介護",
    desc: "問い合わせ一次対応、書類作成、シフト調整の効率化。",
  },
  {
    name: "士業・専門サービス",
    desc: "資料作成、面談メモ整理、知識検索の高速化。",
  },
  { name: "EC・小売", desc: "商品説明文、カスタマー対応、在庫連携の効率化。" },
  {
    name: "教育・研修",
    desc: "教材作成、進捗フォロー、保護者連絡の半自動化。",
  },
  {
    name: "不動産・建設",
    desc: "図面・書類整理、見積もり作成、現場連絡の標準化。",
  },
];

export const beforeAfter = [
  {
    title: "問い合わせ対応",
    before: "1件あたり平均15分",
    after: "AI下書き + 担当確認で4分",
    impact: "応答時間を約1/4に短縮",
  },
  {
    title: "見積もり作成",
    before: "営業が手作業で2時間",
    after: "テンプレ + AIで30分",
    impact: "1件あたり1.5時間削減",
  },
  {
    title: "週次レポート",
    before: "手集計に半日",
    after: "ワークフロー化で15分",
    impact: "工数を9割削減",
  },
];

export const downloadContents = [
  {
    title: "サービス全体像",
    desc: "Knotが対応している領域と、得意な進め方をまとめています。",
  },
  {
    title: "活用シーン例",
    desc: "部門別・業界別のAI活用例と、想定される効果を紹介します。",
  },
  {
    title: "導入までの流れ",
    desc: "初回相談から運用まで、各ステップでやることを整理しています。",
  },
  {
    title: "ご相談から導入までの流れ",
    desc: "初回相談から提案・実装・運用までの進め方を整理しています。",
  },
  {
    title: "よくある質問",
    desc: "ご相談前に多くいただく質問と、その回答をまとめています。",
  },
];

export function Brand({ size = "md" }: { size?: "sm" | "md" }) {
  const heightClass = size === "sm" ? "h-11 sm:h-12" : "h-13 sm:h-14";
  return (
    <Link href="/" aria-label="Knot AI" className="inline-flex select-none">
      <Image
        src="/images/logo.png"
        alt="Knot AI"
        width={1254}
        height={1254}
        priority
        className={`${heightClass} w-auto`}
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-4">
          <Brand />
          <NavDrawer />
        </div>
      </div>
    </header>
  );
}

const footerLinkColumns: Array<{
  heading: string;
  items: Array<{ label: string; href: string }>;
}> = [
  {
    heading: "サービス",
    items: [
      { label: "AI活用コンサルティング", href: "/service" },
      { label: "業務プロセスの可視化", href: "/service" },
      { label: "AI導入・運用支援", href: "/service" },
      { label: "人材育成・研修", href: "/service" },
    ],
  },
  {
    heading: "活用シーン",
    items: [
      { label: "文章作成・返信", href: "/use-cases" },
      { label: "資料作成", href: "/use-cases" },
      { label: "情報整理", href: "/use-cases" },
      { label: "定型作業の自動化", href: "/use-cases" },
      { label: "Web・SNS運用", href: "/use-cases" },
      { label: "業務フロー改善", href: "/use-cases" },
    ],
  },
  {
    heading: "会社情報",
    items: [
      { label: "会社概要", href: "/about" },
      { label: "ブログ", href: "/news" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
  {
    heading: "サポート",
    items: [
      { label: "よくある質問", href: "/faq" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "プライバシーポリシー", href: "#" },
    ],
  },
];

export function SiteFooter({
  extraBottomPadding = false,
}: {
  extraBottomPadding?: boolean;
} = {}) {
  return (
    <footer
      className={`border-t border-border bg-white px-5 pt-14 sm:px-7 lg:px-10 ${
        extraBottomPadding ? "pb-[110px] md:pb-12" : "pb-12"
      }`}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="flex flex-col gap-4 md:col-span-3">
            <Brand size="sm" />
            <p className="max-w-[280px] text-[12.5px] leading-[1.85] text-fg-mute">
              AI導入・業務自動化・Web / EC構築を一気通貫で支援するパートナー。中小企業・個人事業主向け。
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex w-fit items-center gap-2 text-[12.5px] font-bold text-primary transition-all hover:gap-3"
            >
              30分の無料相談を予約
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M3 8h10" />
                <path d="M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
          {footerLinkColumns.map((col) => (
            <div key={col.heading} className="md:col-span-2 lg:col-span-2">
              <p className="mb-4 text-[13px] font-bold text-ink">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-fg-mute">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      className="transition-colors hover:text-primary"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Knot. All Rights Reserved.</span>
          <span className="flex flex-wrap items-center gap-3">
            <Link href="/about" className="hover:text-fg">
              会社概要
            </Link>
            <span
              aria-hidden
              className="size-1 rounded-full bg-border-strong"
            />
            <Link href="#" className="hover:text-fg">
              プライバシーポリシー
            </Link>
            <span
              aria-hidden
              className="size-1 rounded-full bg-border-strong"
            />
            <a
              href="mailto:byakkokondo@gmail.com"
              className="hover:text-fg"
            >
              byakkokondo@gmail.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function SubPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col" style={themeVars}>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-linear-to-b from-bg-tint to-white px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-kanit text-[13px] tracking-[0.18em] text-primary">
          {label}
        </p>
        <h1 className="mt-4 max-w-[720px] text-3xl font-bold leading-[1.35] text-ink sm:text-[40px]">
          {title}
        </h1>
        <p className="mt-5 max-w-[640px] text-sm leading-[1.9] text-fg-mute sm:text-[15px]">
          {description}
        </p>
      </div>
    </section>
  );
}

export function CardsGrid({
  items,
}: {
  items: Array<{ title: string; desc: string }>;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="card p-7">
          <h2 className="text-base font-bold leading-normal text-ink">
            {item.title}
          </h2>
          <p className="mt-3 text-[13px] leading-[1.85] text-fg-mute">
            {item.desc}
          </p>
        </article>
      ))}
    </div>
  );
}

export function ContentSection({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "soft";
}) {
  const bg = tone === "soft" ? "bg-bg-soft" : "";
  return (
    <section className={`px-5 py-16 sm:px-7 sm:py-20 lg:px-10 ${bg}`}>
      <div className="mx-auto max-w-[1180px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-[720px] ${a}`}>
      {eyebrow ? (
        <p className="font-kanit text-xs tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-[22px] font-bold leading-[1.4] text-ink sm:text-[28px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[13.5px] leading-[1.9] text-fg-mute">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MemberCard({
  name,
  nameJa,
  role,
  photo,
  bio,
  skills,
}: {
  name: string;
  nameJa: string;
  role: string;
  photo: string;
  bio: string;
  skills: string[];
}) {
  return (
    <article className="card overflow-hidden">
      <div className="relative aspect-square w-full bg-bg-soft">
        <Image
          src={photo}
          alt={`${name} のポートレート`}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-7">
        <p className="font-kanit text-xs tracking-[0.16em] text-primary">
          {role}
        </p>
        <h3 className="mt-2 text-xl font-bold leading-[1.3] text-ink">
          {name}
        </h3>
        <p className="mt-1 text-[12.5px] text-fg-mute">{nameJa}</p>
        <p className="mt-4 text-[13px] leading-[1.85] text-fg-mute">{bio}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-full bg-bg-soft px-3 py-1 text-[11.5px] font-medium text-fg"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function CTABanner({
  title = "まずは30分の無料相談から。",
  description = "現状の課題整理から、AI導入の進め方までお話しします。",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-5 pb-20 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1180px] rounded-2xl bg-primary px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold leading-[1.45] sm:text-2xl">
              {title}
            </h2>
            <p className="mt-3 text-[13px] leading-[1.85] text-white/85 sm:text-sm">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-[13px] font-bold text-primary transition-colors hover:bg-primary-soft"
            >
              相談してみる
            </Link>
            <Link
              href="/download"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-white/10"
            >
              資料を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
