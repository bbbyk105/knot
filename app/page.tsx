import type { CSSProperties } from "react";
import Link from "next/link";

import { FloatingCTA } from "./floating-cta";
import { MobileMenu } from "./mobile-menu";
import { ToolsMarquee } from "./tools-marquee";

const themeVars = {
  "--bg-soft": "#f4f8f6",
  "--bg-tint": "#e8f7f2",
  "--primary": "#12aa84",
  "--primary-hover": "#0e8f70",
  "--primary-soft": "#e3f7f1",
  "--primary-text": "#08725a",
} as CSSProperties;

/* ---------- Icons ---------- */

type IconProps = { size?: number; className?: string };

const iconBase = (size = 28) => ({
  width: size,
  height: size,
  viewBox: "0 0 28 28",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

function IconClock({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <circle cx="14" cy="14" r="9" />
      <path d="M14 9v5l3 2" />
    </svg>
  );
}

function IconUsersAlt({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <circle cx="11" cy="10" r="3.2" />
      <path d="M5 22a6 6 0 0112 0" />
      <circle cx="20" cy="11" r="2.5" />
      <path d="M18 22a4 4 0 014-4" />
    </svg>
  );
}

function IconDocChart({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M7 4h9l4 4v15a1 1 0 01-1 1H7a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path d="M16 4v4h4" />
      <path d="M9 18v-2M12 18v-4M15 18v-6" />
    </svg>
  );
}

function IconRocket({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M14 4c4 0 8 4 8 8 0 2-1 4-2 5l-3 1-5-5 1-3c1-1 3-6 1-6z" />
      <path d="M9 14l-3 1-1 4 4-1 1-3" />
      <circle cx="16" cy="12" r="1.2" />
    </svg>
  );
}

function IconConsulting({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2h-7l-4 3v-3H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
      <path d="M14 9.5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
    </svg>
  );
}

function IconFlowChart({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <rect x="3" y="4" width="6" height="6" rx="1" />
      <rect x="19" y="4" width="6" height="6" rx="1" />
      <rect x="11" y="18" width="6" height="6" rx="1" />
      <path d="M9 7h2.5a2 2 0 012 2v2" />
      <path d="M19 7h-2.5a2 2 0 00-2 2v2" />
      <path d="M14 14v4" />
    </svg>
  );
}

function IconGearAI({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M14 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
      <circle cx="14" cy="17" r="3.5" />
      <path d="M14 11.5v2M14 20.5v2M9.5 17h-2M20.5 17h-2M11 14l-1.4-1.4M18.4 21.4L17 20M11 20l-1.4 1.4M18.4 12.6L17 14" />
    </svg>
  );
}

function IconGraduation({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M3 11l11-5 11 5-11 5z" />
      <path d="M8 13v5c0 1 3 2 6 2s6-1 6-2v-5" />
      <path d="M22 12v6" />
    </svg>
  );
}

function IconMegaphone({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M3 11v3a2 2 0 002 2h2l4 4V6L7 10H5a2 2 0 00-2 2z" />
      <path d="M16 9a5 5 0 010 8" />
      <path d="M19 6a9 9 0 010 14" />
    </svg>
  );
}

function IconHeadset({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M5 16v-3a9 9 0 0118 0v3" />
      <rect x="3" y="16" width="5" height="6" rx="1.5" />
      <rect x="20" y="16" width="5" height="6" rx="1.5" />
      <path d="M20 22a3 3 0 01-3 3h-2" />
    </svg>
  );
}

function IconUsersBig({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <circle cx="9" cy="10" r="3.5" />
      <path d="M3 22a6 6 0 0112 0" />
      <circle cx="19" cy="9" r="3" />
      <path d="M16 22a5 5 0 0110 0" />
    </svg>
  );
}

function IconCalculator({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <rect x="6" y="3" width="16" height="22" rx="2" />
      <rect x="9" y="6" width="10" height="4" rx="1" />
      <circle cx="11" cy="14" r="0.8" fill="currentColor" />
      <circle cx="14" cy="14" r="0.8" fill="currentColor" />
      <circle cx="17" cy="14" r="0.8" fill="currentColor" />
      <circle cx="11" cy="18" r="0.8" fill="currentColor" />
      <circle cx="14" cy="18" r="0.8" fill="currentColor" />
      <circle cx="17" cy="18" r="0.8" fill="currentColor" />
    </svg>
  );
}

function IconShield({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M14 3l8 3v7c0 5-4 9-8 11-4-2-8-6-8-11V6z" />
      <path d="M10 13l3 3 5-5" />
    </svg>
  );
}

function IconChartLine({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M4 21V5" />
      <path d="M4 21h18" />
      <path d="M8 17l4-5 3 3 5-7" />
      <path d="M17 8h3v3" />
    </svg>
  );
}

function IconHandHeart({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M5 14l4-2 5 2 5-1 4 2v3l-9 4-9-4z" />
      <path d="M14 12c-2-2-4-1-4 1 0 2 4 4 4 4s4-2 4-4c0-2-2-3-4-1z" />
    </svg>
  );
}

function IconBulb({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M14 4a7 7 0 014 12.5V19h-8v-2.5A7 7 0 0114 4z" />
      <path d="M11 22h6" />
      <path d="M12 25h4" />
    </svg>
  );
}

function IconPuzzle({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M5 5h6v3a2 2 0 104 0V5h6v6h-3a2 2 0 100 4h3v6h-6v-3a2 2 0 10-4 0v3H5v-6h3a2 2 0 100-4H5z" />
    </svg>
  );
}

function IconHandshake({ size, className }: IconProps) {
  return (
    <svg {...iconBase(size)} className={className}>
      <path d="M3 12l4-4 5 1 4-2 5 2 4 3" />
      <path d="M14 13l-2 2 2 2 2-2 3 2 2-2-2-2" />
      <path d="M3 12l3 6 4 1 2-2" />
    </svg>
  );
}

function IconArrow({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
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
  );
}

function IconDocBig({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 4h11l5 5v18a1 1 0 01-1 1H9a1 1 0 01-1-1V5a1 1 0 011-1z" />
      <path d="M20 4v5h5" />
      <path d="M12 14h12M12 18h12M12 22h8" />
    </svg>
  );
}

/* ---------- Data ---------- */

const concerns = [
  {
    title: "日々の作業に追われ、\n本来の業務に集中する時間がない。",
    Icon: IconClock,
  },
  {
    title: "人手不足や属人化が進み、\n業務が非効率になっている。",
    Icon: IconUsersAlt,
  },
  {
    title: "データはあるが活用できず、\n意思決定に時間がかかっている。",
    Icon: IconDocChart,
  },
  {
    title: "新しい取り組みをしたいが、\n何から始めていいかわからない。",
    Icon: IconRocket,
  },
];

const services = [
  {
    title: "AI活用コンサルティング",
    desc: "業務課題の特定からAI活用の戦略立案まで、一貫して支援します。",
    Icon: IconConsulting,
  },
  {
    title: "業務プロセスの可視化",
    desc: "ムリ・ムダを洗い出し、業務フローの最適化をサポートします。",
    Icon: IconFlowChart,
  },
  {
    title: "AI導入・運用支援",
    desc: "ツールの選定から導入・運用まで伴走し、定着を支援します。",
    Icon: IconGearAI,
  },
  {
    title: "人材育成・研修",
    desc: "AIリテラシー向上のための研修やワークショップを提供します。",
    Icon: IconGraduation,
  },
];

const useCases = [
  {
    title: "営業・マーケティング",
    desc: "リード獲得やスコアリング、レポート作成を自動化。",
    Icon: IconMegaphone,
  },
  {
    title: "カスタマーサポート",
    desc: "問い合わせ対応の効率化やナレッジ活用を支援。",
    Icon: IconHeadset,
  },
  {
    title: "人事・採用",
    desc: "書類選考や日程調整の自動化で工数を削減。",
    Icon: IconUsersBig,
  },
  {
    title: "経理・財務",
    desc: "請求書処理やデータ集計を自動化し、ミスを削減。",
    Icon: IconCalculator,
  },
  {
    title: "情報システム",
    desc: "社内問い合わせ対応や運用管理の効率化を実現。",
    Icon: IconShield,
  },
  {
    title: "経営・企画",
    desc: "データ分析による意思決定のスピードと精度を向上。",
    Icon: IconChartLine,
  },
];

const steps = [
  {
    n: "1",
    title: "ヒアリング・課題整理",
    desc: "現状の課題やご要望を丁寧にお伺いします。",
  },
  {
    n: "2",
    title: "ご提案・方針設計",
    desc: "最適な活用方法とプランをご提案します。",
  },
  {
    n: "3",
    title: "導入・環境構築",
    desc: "企業ニーズに合わせて初期設定を行います。",
  },
  {
    n: "4",
    title: "運用・定着支援",
    desc: "運用サポートと改善提案で定着を支援します。",
  },
  {
    n: "5",
    title: "効果測定・改善",
    desc: "効果を可視化し、継続的に改善します。",
  },
];

const reasons = [
  {
    title: "現場に寄り添う支援",
    desc: "現場の声を大切にし、実行可能な解決策をともに考えます。",
    Icon: IconHandHeart,
  },
  {
    title: "実践的な知見とノウハウ",
    desc: "豊富な導入経験をもとに、成果につながる方法をご提案します。",
    Icon: IconBulb,
  },
  {
    title: "柔軟にオーダーメイド",
    desc: "業種や課題に合わせた最適なソリューションを設計します。",
    Icon: IconPuzzle,
  },
  {
    title: "伴走するサポート体制",
    desc: "導入後も継続的に伴走し、成果最大化まで支援します。",
    Icon: IconHandshake,
  },
];

const faqs = [
  {
    q: "どのような企業が対象ですか？",
    a: "個人事業主から中小企業まで、業種を問わずご相談いただいています。「これからAIを活用したい」段階の方が多いです。",
  },
  {
    q: "どのくらいの期間で導入できますか？",
    a: "ご依頼内容によりますが、業務自動化は2〜4週間、LP制作は3週間前後、Webサイトは6週間前後が目安です。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "AI導入のご相談は無料、業務自動化は月額制、Web / EC制作は単発でのご提示と分けてご案内しています。資料に料金レンジをまとめています。",
  },
  {
    q: "社内にAIの知識がなくても大丈夫ですか？",
    a: "もちろんです。専門用語を抜きにして「いま困っていること」から一緒に整理しますので、知識がない段階のご相談から大歓迎です。",
  },
  {
    q: "相談や見積もりは無料ですか？",
    a: "初回30分のご相談、お見積もりまでは無料でご対応しています。お気軽にお問い合わせください。",
  },
];

const news = [
  { date: "2026.04.22", cat: "発信", title: "Claude Code × n8nで、受託の見積もり工数を半分にした話を公開しました" },
  { date: "2026.04.08", cat: "メディア", title: "中小企業向けAI活用メディアに「現場で動くAI導入の進め方」を寄稿しました" },
  { date: "2026.03.27", cat: "セミナー", title: "n8n勉強会で「業務自動化の実装パターン3選」について登壇しました" },
];

/* ---------- Layout ---------- */

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
      <span className="font-bold text-[18px] tracking-[-0.005em] text-[var(--ink)]">
        Knot
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="flex h-[64px] items-center justify-between gap-4">
          <Brand />
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { href: "/service", label: "サービス" },
              { href: "/use-cases", label: "活用シーン" },
              { href: "/flow", label: "導入の流れ" },
              { href: "/faq", label: "よくある質問" },
              { href: "/about", label: "会社情報" },
              { href: "/news", label: "ブログ" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-[var(--fg)] hover:text-[var(--primary)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="/download" className="hidden md:inline-flex btn-primary text-[12.5px] py-2.5 px-4">
              資料ダウンロードする
            </a>
            <a href="/contact" className="hidden md:inline-flex btn-outline text-[12.5px] py-2.5 px-4">
              お問い合わせ
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-linear-to-b from-[var(--bg-tint)] to-white pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <h1 className="font-bold text-[30px] sm:text-[40px] lg:text-[48px] leading-[1.25] tracking-[-0.015em] text-[var(--ink)]">
              AIで<span className="text-[var(--primary)]">時間</span>をつくり、
              <br />
              本来に集中できる毎日へ。
            </h1>
            <p className="mt-7 text-[13.5px] sm:text-[15px] leading-[1.95] text-[var(--fg-mute)] max-w-[460px]">
              私たちは、AIと業務プロセスの最適化により
              <br className="hidden sm:inline" />
              日々のルーティンワークから解放される未来を支援します。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/download" className="btn-primary">
                資料をダウンロードする
              </a>
              <a href="/contact" className="btn-outline">
                まずは相談してみる
              </a>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square" aria-hidden>
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(circle at 22% 18%, rgba(18,170,132,0.18), transparent 34%), radial-gradient(circle at 78% 76%, rgba(88,206,176,0.20), transparent 38%), linear-gradient(135deg, rgba(255,255,255,0.80), rgba(227,247,241,0.90))",
        }}
      />

      <div className="absolute left-[7%] top-[9%] w-[78%] rounded-2xl bg-white border border-[var(--border)] shadow-[0_28px_70px_-24px_rgba(15,23,42,0.22)] overflow-hidden">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-[var(--primary-soft)] text-[var(--primary)]">
              <IconGearAI size={17} />
            </span>
            <span className="font-kanit text-[13px] text-[var(--ink)]">AI FLOW</span>
          </div>
          <span className="rounded-full bg-[var(--primary)] px-3 py-1 text-[10px] font-bold text-white">
            LIVE
          </span>
        </div>

        <div className="grid gap-4 p-5">
          <div className="grid grid-cols-[1fr_auto] items-end gap-4">
            <div>
              <p className="text-[11px] font-bold text-[var(--fg-mute)]">作業時間の削減見込み</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="font-kanit text-[42px] leading-none text-[var(--ink)]">42</span>
                <span className="pb-1.5 text-[13px] font-bold text-[var(--primary)]">hours / mo</span>
              </div>
            </div>
            <div className="grid size-20 place-items-center rounded-full border-[10px] border-[var(--primary)] border-r-[var(--primary-soft)] border-b-[var(--primary-soft)] rotate-45">
              <span className="-rotate-45 font-kanit text-[15px] text-[var(--primary)]">78%</span>
            </div>
          </div>

          <div className="grid gap-2.5">
            {[
              ["問い合わせ", "回答案を自動生成", "92%"],
              ["見積もり", "必要項目を整理", "68%"],
              ["レポート", "週次集計を作成", "84%"],
            ].map(([label, desc, value]) => (
              <div
                key={label}
                className="grid grid-cols-[76px_1fr_44px] items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2.5"
              >
                <span className="text-[11px] font-bold text-[var(--ink)]">{label}</span>
                <span className="h-2 rounded-full bg-white overflow-hidden">
                  <span
                    className="block h-full rounded-full bg-[var(--primary)]"
                    style={{ width: value }}
                  />
                </span>
                <span className="font-kanit text-[12px] text-[var(--primary)]">{value}</span>
                <span className="col-start-2 col-span-2 -mt-1 text-[10.5px] font-medium text-[var(--fg-mute)]">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-[3%] top-[30%] w-[150px] rounded-2xl border border-[var(--border)] bg-white px-4 py-4 shadow-[0_22px_48px_-22px_rgba(15,23,42,0.28)] float-y">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-full bg-[var(--primary)] text-white">
            <IconBulb size={18} />
          </span>
          <div>
            <p className="font-kanit text-[12px] leading-none text-[var(--ink)]">AI IDEA</p>
            <p className="mt-1 text-[10px] font-bold text-[var(--fg-mute)]">次の改善候補</p>
          </div>
        </div>
        <div className="mt-3 grid gap-1.5">
          <span className="h-2 w-full rounded-full bg-[var(--primary-soft)]" />
          <span className="h-2 w-[74%] rounded-full bg-[var(--primary-soft)]" />
        </div>
      </div>

      <div
        className="absolute left-[3%] bottom-[12%] w-[168px] rounded-2xl bg-[var(--ink)] px-4 py-4 text-white shadow-[0_24px_54px_-24px_rgba(15,23,42,0.45)]"
        style={{ animation: "float-y 6s ease-in-out 0.5s infinite" }}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-white/12">
            <IconFlowChart size={18} />
          </span>
          <span className="rounded-full bg-[var(--primary)] px-2.5 py-1 text-[10px] font-bold">
            AUTO
          </span>
        </div>
        <p className="mt-3 text-[12px] font-bold leading-snug">手作業をワークフロー化</p>
        <div className="mt-3 flex items-center gap-1.5">
          <span className="h-1.5 flex-1 rounded-full bg-white/25" />
          <span className="h-1.5 flex-1 rounded-full bg-white/45" />
          <span className="h-1.5 flex-1 rounded-full bg-[var(--primary)]" />
        </div>
      </div>

      <span className="absolute right-[19%] bottom-[9%] size-3 rounded-full bg-[var(--primary)] pulse-soft" />
      <span className="absolute left-[39%] bottom-[5%] size-2 rounded-full bg-[#8edfc9]" />
      <span className="absolute right-[8%] bottom-[18%] size-2.5 rounded-full bg-[#c7f0e5]" />
    </div>
  );
}

function ConcernSection() {
  return (
    <section id="problem" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-[24px] sm:text-[30px] leading-[1.4] tracking-[-0.01em]">
            こんなお悩みはありませんか？
          </h2>
          <p className="mt-3 text-[13px] text-[var(--fg-mute)]">
            多くの中小企業・個人事業主の方が同じ課題を抱えています。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {concerns.map((c) => (
            <div
              key={c.title}
              className="card card-hover p-7 flex flex-col items-center text-center"
            >
              <span className="icon-circle">
                <c.Icon size={26} />
              </span>
              <p className="mt-5 font-bold text-[14.5px] leading-[1.7] whitespace-pre-line">
                {c.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="service" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-[24px] sm:text-[30px] leading-[1.4] tracking-[-0.01em]">
            サービス内容
          </h2>
          <p className="mt-3 text-[13px] text-[var(--fg-mute)]">
            AIの力と仕組み化で、業務の生産性向上を支援します。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="card card-hover p-7 flex flex-col items-center text-center">
              <span className="icon-square">
                <s.Icon size={26} />
              </span>
              <h3 className="mt-5 font-bold text-[16px] leading-[1.5]">{s.title}</h3>
              <p className="mt-3 text-[12.5px] leading-[1.85] text-[var(--fg-mute)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="use-cases" className="relative bg-[var(--bg-soft)] py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-[24px] sm:text-[30px] leading-[1.4] tracking-[-0.01em]">
            活用シーン例
          </h2>
          <p className="mt-3 text-[13px] text-[var(--fg-mute)]">
            さまざまな業務・部門でAIを活用し、成果を生み出します。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div key={u.title} className="card p-7 flex items-start gap-5">
              <span className="icon-square shrink-0">
                <u.Icon size={24} />
              </span>
              <div>
                <h3 className="font-bold text-[15px] leading-[1.5]">{u.title}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.85] text-[var(--fg-mute)]">
                  {u.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section id="flow" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-[24px] sm:text-[30px] leading-[1.4] tracking-[-0.01em]">
            導入の流れ
          </h2>
          <p className="mt-3 text-[13px] text-[var(--fg-mute)]">
            最短距離で成果につなげるための、シンプルな5ステップ。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 relative">
          {steps.map((s) => (
            <div key={s.n} className="card p-6 flex flex-col items-center text-center">
              <span className="grid size-10 place-items-center rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-kanit text-[15px] mb-4">
                {s.n}
              </span>
              <h3 className="font-bold text-[14.5px] leading-[1.5]">{s.title}</h3>
              <p className="mt-2 text-[12px] leading-[1.85] text-[var(--fg-mute)]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonsSection() {
  return (
    <section className="relative bg-[var(--bg-soft)] py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-[24px] sm:text-[30px] leading-[1.4] tracking-[-0.01em]">
            私たちが選ばれる理由
          </h2>
          <p className="mt-3 text-[13px] text-[var(--fg-mute)]">
            多くのお客様に信頼いただける、4つの強みがあります。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="card p-7 flex flex-col items-start">
              <span className="icon-square">
                <r.Icon size={24} />
              </span>
              <h3 className="mt-5 font-bold text-[15px] leading-[1.5]">{r.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.85] text-[var(--fg-mute)]">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-bold text-[24px] sm:text-[30px] leading-[1.4] tracking-[-0.01em]">
              よくあるご質問
            </h2>
            <div className="mt-8">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    <span className="flex items-start gap-3">
                      <span className="text-[var(--primary)] font-kanit pt-px">Q.</span>
                      <span>{f.q}</span>
                    </span>
                  </summary>
                  <p className="faq-body">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-7 sm:p-9 bg-[var(--bg-soft)] border-0">
              <h3 className="font-bold text-[18px] leading-[1.5]">
                まずはお気軽に
                <br />
                ご相談ください。
              </h3>
              <p className="mt-4 text-[13px] leading-[1.85] text-[var(--fg-mute)]">
                課題の整理からご提案まで、
                <br />
                丁寧にサポートします。
              </p>
              <div className="mt-6">
                <a href="/download" className="btn-primary text-[13px]">
                  資料をダウンロードする
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="relative px-5 sm:px-7 lg:px-10 pb-10">
      <div className="mx-auto max-w-[1180px] rounded-2xl bg-[var(--primary)] text-white px-6 sm:px-10 py-8 sm:py-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15">
              <IconDocBig size={28} />
            </span>
            <div>
              <p className="font-bold text-[16px] sm:text-[18px] leading-[1.4]">
                サービス資料で、AI活用の全体像をご紹介します。
              </p>
              <p className="mt-1.5 text-[12.5px] leading-[1.7] text-white/80">
                導入事例や活用シーン、料金プランなどをまとめてご覧いただけます。
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="/download"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-[var(--primary)] px-5 py-3 text-[13px] font-bold hover:bg-[var(--primary-soft)] transition-colors"
            >
              資料をダウンロードする
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 text-white px-5 py-3 text-[13px] font-bold hover:bg-white/10 transition-colors"
            >
              まずは相談してみる
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <p className="font-kanit text-[60px] sm:text-[80px] leading-none text-[var(--primary)] opacity-90">
              ABOUT
            </p>
            <h2 className="mt-2 font-bold text-[24px] sm:text-[30px] leading-[1.45] tracking-[-0.01em] text-[var(--ink)]">
              信念を技術で支え、
              <br />
              未来の当たり前をつくる。
            </h2>
            <p className="mt-6 text-[13.5px] leading-[1.95] text-[var(--fg-mute)] max-w-[460px]">
              AIの力で、人と組織がもっと創造的に働ける社会へ。
              私たちは、テクノロジーと人の力をつなぎ、持続可能な成長を支援していきます。
            </p>
            <div className="mt-7">
              <a href="/about" className="btn-outline">
                会社情報を見る
                <IconArrow size={14} />
              </a>
            </div>
          </div>
          <div
            className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(18,170,132,0.10) 0%, rgba(88,206,176,0.14) 52%, rgba(255,255,255,0.86) 100%)",
            }}
          >
            <div className="absolute left-[8%] top-[10%] w-[55%] h-[80%] rounded-2xl bg-white border border-[var(--border)] shadow-[0_24px_50px_-20px_rgba(15,23,42,0.16)]">
              <div className="p-5 grid gap-3">
                <div className="h-3 w-2/3 rounded bg-[var(--primary-soft)]" />
                <div className="h-3 w-1/2 rounded bg-[var(--bg-soft)]" />
                <div className="h-3 w-3/4 rounded bg-[var(--bg-soft)]" />
                <div className="mt-4 h-24 rounded-xl bg-linear-to-br from-[var(--primary-soft)] to-white" />
              </div>
            </div>
            <div className="absolute right-[6%] bottom-[8%] w-[40%] aspect-square rounded-2xl bg-white border border-[var(--border)] shadow-[0_24px_50px_-20px_rgba(15,23,42,0.16)] grid place-items-center">
              <div className="size-[60%] rounded-full border-[10px] border-[var(--primary)] border-r-transparent rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-3">
            <p className="font-kanit text-[60px] sm:text-[80px] leading-none text-[var(--primary)] opacity-90">
              NEWS
            </p>
            <h2 className="mt-2 font-bold text-[24px] sm:text-[30px] leading-[1.45] tracking-[-0.01em] text-[var(--ink)]">
              お知らせ・ブログ
            </h2>
            <p className="mt-4 text-[13px] leading-[1.85] text-[var(--fg-mute)]">
              AI活用や業務改善に関する発信、登壇情報をまとめています。
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="border-t border-[var(--border)]">
              {news.map((n) => (
                <li key={n.title}>
                  <a
                    href="/news"
                    className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 border-b border-[var(--border)] py-5 group hover:bg-[var(--bg-soft)]/50 transition-colors px-2"
                  >
                    <time className="text-[12.5px] text-[var(--fg-mute)] font-medium shrink-0 sm:w-[100px]">
                      {n.date}
                    </time>
                    <span className="rounded-full bg-[var(--primary-soft)] text-[var(--primary-text)] px-3 py-1 text-[11px] font-bold shrink-0 sm:w-[80px] text-center">
                      {n.cat}
                    </span>
                    <p className="text-[13.5px] sm:text-[14.5px] font-medium leading-[1.55] flex-1 group-hover:text-[var(--primary)] transition-colors">
                      {n.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-end">
              <a href="/news" className="btn-outline">
                ニュース一覧を見る
                <IconArrow size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white px-5 sm:px-7 lg:px-10 pt-14 pb-[110px] md:pb-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3 flex flex-col gap-4">
            <Brand />
            <p className="text-[12.5px] leading-[1.85] text-[var(--fg-mute)] max-w-[280px]">
              AI導入・業務自動化・Web / EC構築を一気通貫で支援するパートナー。中小企業・個人事業主向け。
            </p>
          </div>
          {[
            {
              h: "サービス",
              items: [
                { l: "AI活用コンサルティング", h: "/service" },
                { l: "業務プロセスの可視化", h: "/service" },
                { l: "AI導入・運用支援", h: "/service" },
                { l: "人材育成・研修", h: "/service" },
              ],
            },
            {
              h: "活用シーン",
              items: [
                { l: "営業・マーケティング", h: "/use-cases" },
                { l: "カスタマーサポート", h: "/use-cases" },
                { l: "人事・採用", h: "/use-cases" },
                { l: "経理・財務", h: "/use-cases" },
                { l: "情報システム", h: "/use-cases" },
                { l: "経営・企画", h: "/use-cases" },
              ],
            },
            {
              h: "会社情報",
              items: [
                { l: "会社概要", h: "/about" },
                { l: "ブログ", h: "/news" },
                { l: "お問い合わせ", h: "/contact" },
              ],
            },
            {
              h: "サポート",
              items: [
                { l: "よくある質問", h: "/faq" },
                { l: "お問い合わせ", h: "/contact" },
                { l: "プライバシーポリシー", h: "#" },
              ],
            },
          ].map((col) => (
            <div key={col.h} className="md:col-span-2 lg:col-span-2">
              <p className="font-bold text-[13px] mb-4">{col.h}</p>
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-[var(--fg-mute)]">
                {col.items.map((it) => (
                  <li key={it.l}>
                    <a href={it.h} className="hover:text-[var(--primary)] transition-colors">
                      {it.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-[var(--border)] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-[12px] text-[var(--fg-faint)]">
          <span>© 2026 Knot. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col" style={themeVars}>
      <Header />
      <main className="flex-1">
        <Hero />
        <ConcernSection />
        <ToolsMarquee />
        <ServicesSection />
        <UseCasesSection />
        <FlowSection />
        <ReasonsSection />
        <FaqSection />
        <CTABanner />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
