import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

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
  { title: "営業・マーケティング", desc: "提案資料、リード整理、商談メモ、レポート作成を効率化します。" },
  { title: "カスタマーサポート", desc: "問い合わせ分類、回答案作成、ナレッジ整備を支援します。" },
  { title: "人事・採用", desc: "応募者対応、日程調整、求人文面の改善に活用できます。" },
  { title: "経理・財務", desc: "請求書処理、集計、月次レポートの作成負担を減らします。" },
  { title: "情報システム", desc: "社内問い合わせ、手順書整備、運用業務の標準化に役立ちます。" },
  { title: "経営・企画", desc: "データ整理や意思決定資料の作成をスピードアップします。" },
];

export const flowItems = [
  {
    title: "ヒアリング・課題整理",
    desc: "現状の業務、困っていること、目標を整理します。",
    duration: "1〜2週間",
  },
  {
    title: "ご提案・方針設計",
    desc: "効果が出やすい領域から、導入範囲と進め方を決めます。",
    duration: "1〜2週間",
  },
  {
    title: "導入・環境構築",
    desc: "ツール設定、業務フロー、利用ルールを整備します。",
    duration: "2〜4週間",
  },
  {
    title: "運用・定着支援",
    desc: "使いながら改善し、現場で続く形に調整します。",
    duration: "1〜3ヶ月",
  },
  {
    title: "効果測定・改善",
    desc: "削減時間や成果を確認し、次の改善につなげます。",
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

export const newsItems = [
  {
    date: "2026.04.22",
    cat: "発信",
    title: "Claude Code x n8nで、受託の見積もり工数を半分にした話を公開しました",
    excerpt: "受託案件で必ず発生する見積もり作業を、AIエージェントとワークフロー連携で半自動化した実装ログ。",
  },
  {
    date: "2026.04.08",
    cat: "メディア",
    title: "中小企業向けAI活用メディアに現場で動くAI導入の進め方を寄稿しました",
    excerpt: "ツール導入で終わらせない、現場が継続的に使える状態まで持っていくための実践的なステップを解説。",
  },
  {
    date: "2026.03.27",
    cat: "セミナー",
    title: "n8n勉強会で業務自動化の実装パターン3選について登壇しました",
    excerpt: "中小企業の現場で実際に使われている、汎用的に効く3つの自動化テンプレートを公開。",
  },
  {
    date: "2026.03.05",
    cat: "発信",
    title: "属人化した業務をAIで標準化するときの落とし穴",
    excerpt: "属人化の解消だけを目的にすると逆効果になりがち。本質を捉えるための観点を整理。",
  },
  {
    date: "2026.02.18",
    cat: "事例",
    title: "問い合わせ対応の一次返信を自動化し、応答時間を1/4にした事例",
    excerpt: "ナレッジを整理しながらAIで一次返信を生成。担当者の判断に集中できる体制へ。",
  },
];

export const newsCategories = ["すべて", "発信", "メディア", "セミナー", "事例"];

export const members = [
  {
    name: "Byakko Kondo",
    nameJa: "近藤 白虎",
    role: "Engineer / 代表",
    photo: "/images/member-byakko-kondo.png",
    bio: "AIエージェントと業務フローの設計が専門。現場の手触りを大事に、すぐ動かせる仕組みづくりを得意とする。",
    skills: ["Claude / Anthropic API", "n8n / Workflow", "Next.js / Supabase"],
  },
  {
    name: "Shogo Kikuchi",
    nameJa: "菊地 翔吾",
    role: "Engineer",
    photo: "/images/member-shogo-kikuchi.png",
    bio: "Webアプリと業務システムの実装担当。要件のすり合わせから運用まで、地に足のついた開発を進める。",
    skills: ["Next.js / TypeScript", "Backend / DB", "DevOps / Deploy"],
  },
];

export const milestones = [
  { year: "2024", body: "Knotとして活動開始。AI導入相談・PoC支援を中心に受託を開始。" },
  { year: "2025", body: "業務自動化の運用支援メニューを正式リリース。月額伴走モデルを確立。" },
  { year: "2026", body: "Web / EC構築・LP制作とAI支援を統合し、一気通貫の支援体制へ。" },
];

export const companyInfo = [
  ["屋号", "Knot"],
  ["所在地", "東京都"],
  ["事業内容", "AI導入・業務自動化支援 / Web・EC構築 / 集客運用支援"],
  ["対応エリア", "オンライン中心、全国・海外対応"],
  ["連絡先", "byakkokondo@gmail.com"],
];

export const pricingTiers = [
  {
    name: "Spotプラン",
    price: "¥150,000〜",
    unit: "/ 1案件",
    desc: "業務の整理〜小さな自動化まで、1案件単位で完結させたい方向け。",
    features: ["業務ヒアリング", "1業務の自動化実装", "運用マニュアル納品"],
    highlight: false,
  },
  {
    name: "伴走プラン",
    price: "¥80,000〜",
    unit: "/ 月",
    desc: "現場の改善を継続的に進めたいチーム向け。月額で伴走します。",
    features: ["月2回の定例", "改善実装と運用調整", "Slack/メールでの随時相談"],
    highlight: true,
  },
  {
    name: "構築プラン",
    price: "¥500,000〜",
    unit: "/ プロジェクト",
    desc: "Webサイト・LP・ECなど、まとまった構築案件向け。",
    features: ["要件定義〜実装", "公開後3ヶ月の保守", "計測/改善設計込み"],
    highlight: false,
  },
];

export const industries = [
  { name: "製造・物流", desc: "発注・在庫・出荷帳票の自動化、属人化した手順の標準化。" },
  { name: "医療・介護", desc: "問い合わせ一次対応、書類作成、シフト調整の効率化。" },
  { name: "士業・専門サービス", desc: "資料作成、面談メモ整理、知識検索の高速化。" },
  { name: "EC・小売", desc: "商品説明文、カスタマー対応、在庫連携の効率化。" },
  { name: "教育・研修", desc: "教材作成、進捗フォロー、保護者連絡の半自動化。" },
  { name: "不動産・建設", desc: "図面・書類整理、見積もり作成、現場連絡の標準化。" },
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
  { title: "サービス全体像", desc: "Knotが対応している領域と、得意な進め方をまとめています。" },
  { title: "活用シーン例", desc: "部門別・業界別のAI活用例と、想定される効果を紹介します。" },
  { title: "導入までの流れ", desc: "初回相談から運用まで、各ステップでやることを整理しています。" },
  { title: "料金プランの目安", desc: "Spot / 伴走 / 構築プランのレンジと、選び方の指針を掲載。" },
  { title: "よくある質問", desc: "ご相談前に多くいただく質問と、その回答をまとめています。" },
];

function Brand() {
  return (
    <Link href="/" aria-label="Knot" className="inline-flex items-center gap-2.5 select-none">
      <svg width="26" height="26" viewBox="0 0 28 28" aria-hidden>
        <path
          d="M6 21V7L22 21V7"
          stroke="#12aa84"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="font-bold text-[18px] text-[var(--ink)]">Knot</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="flex h-[64px] items-center justify-between gap-4">
          <Brand />
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/download" className="hidden sm:inline-flex btn-primary text-[12.5px] py-2.5 px-4">
              資料ダウンロードする
            </Link>
            <Link href="/contact" className="inline-flex btn-outline text-[12.5px] py-2.5 px-4">
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-white px-5 sm:px-7 lg:px-10 py-10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Brand />
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12.5px] text-[var(--fg-mute)]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--primary)]">
              {link.label}
            </Link>
          ))}
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
    <section className="bg-linear-to-b from-[var(--bg-tint)] to-white px-5 py-16 sm:px-7 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-kanit text-[13px] tracking-[0.18em] text-[var(--primary)]">{label}</p>
        <h1 className="mt-4 max-w-[720px] text-[30px] font-bold leading-[1.35] text-[var(--ink)] sm:text-[40px]">
          {title}
        </h1>
        <p className="mt-5 max-w-[640px] text-[14px] leading-[1.9] text-[var(--fg-mute)] sm:text-[15px]">
          {description}
        </p>
      </div>
    </section>
  );
}

export function CardsGrid({ items }: { items: Array<{ title: string; desc: string }> }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="card p-7">
          <h2 className="text-[16px] font-bold leading-[1.5] text-[var(--ink)]">{item.title}</h2>
          <p className="mt-3 text-[13px] leading-[1.85] text-[var(--fg-mute)]">{item.desc}</p>
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
  const bg = tone === "soft" ? "bg-[var(--bg-soft)]" : "";
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
        <p className="font-kanit text-[12px] tracking-[0.18em] text-[var(--primary)]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-[22px] font-bold leading-[1.4] text-[var(--ink)] sm:text-[28px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[13.5px] leading-[1.9] text-[var(--fg-mute)]">{description}</p>
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
      <div className="relative aspect-square w-full bg-[var(--bg-soft)]">
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
        <p className="font-kanit text-[12px] tracking-[0.16em] text-[var(--primary)]">{role}</p>
        <h3 className="mt-2 text-[20px] font-bold leading-[1.3] text-[var(--ink)]">{name}</h3>
        <p className="mt-1 text-[12.5px] text-[var(--fg-mute)]">{nameJa}</p>
        <p className="mt-4 text-[13px] leading-[1.85] text-[var(--fg-mute)]">{bio}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {skills.map((s) => (
            <li
              key={s}
              className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-[11.5px] font-medium text-[var(--fg)]"
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
      <div className="mx-auto max-w-[1180px] rounded-2xl bg-[var(--primary)] px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-[20px] font-bold leading-[1.45] sm:text-[24px]">{title}</h2>
            <p className="mt-3 text-[13px] leading-[1.85] text-white/85 sm:text-[14px]">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-[13px] font-bold text-[var(--primary)] transition-colors hover:bg-[var(--primary-soft)]"
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
