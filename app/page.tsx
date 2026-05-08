import type { CSSProperties } from "react";

import { FloatingCTA } from "./floating-cta";
import { LottiePlayer } from "./lottie";
import { ToolsCloud } from "./tools-marquee";
import { Brand, SiteHeader } from "./subpage-components";

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
    title: "文章作成・返信",
    desc: "メール、問い合わせ対応、提案文、SNS投稿などをAIで下書きします。",
    Icon: IconHeadset,
  },
  {
    title: "資料作成",
    desc: "議事録、報告書、営業資料、説明資料の作成を効率化します。",
    Icon: IconDocChart,
  },
  {
    title: "情報整理",
    desc: "メモ、顧客情報、社内資料、調査内容をわかりやすく整理します。",
    Icon: IconPuzzle,
  },
  {
    title: "定型作業の自動化",
    desc: "入力、転記、通知、集計などの繰り返し作業を自動化します。",
    Icon: IconGearAI,
  },
  {
    title: "Web・SNS運用",
    desc: "LP改善、投稿作成、導線設計、キャンペーン案づくりを支援します。",
    Icon: IconMegaphone,
  },
  {
    title: "業務フロー改善",
    desc: "今の作業の流れを見直し、AIを使いやすい形に整えます。",
    Icon: IconFlowChart,
  },
];

const steps = [
  {
    n: "1",
    title: "ヒアリング・課題整理",
    desc: "現状の業務とゴールを整理し、改善できる箇所を洗い出します。",
  },
  {
    n: "2",
    title: "ご提案・方針設計",
    desc: "効果が出やすい領域から、導入範囲とプランをご提案します。",
  },
  {
    n: "3",
    title: "構築・実装",
    desc: "ツール選定、初期設定、ワークフロー設計までを一気通貫で実装します。",
  },
  {
    n: "4",
    title: "導入・定着支援",
    desc: "現場で使い続けられる形に調整し、社内展開までサポートします。",
  },
  {
    n: "5",
    title: "保守運用",
    desc: "公開・導入後も継続的に運用サポートと改善を行います。",
  },
];

const reasons = [
  {
    title: "戦略から実装まで一人称で",
    desc: "営業・設計・実装を分業せず、最小チームで一気通貫。判断のスピードと現場感が両立します。",
    Icon: IconHandHeart,
  },
  {
    title: "流行りに乗らないAI選定",
    desc: "話題のツールではなく、現場で続けて使える定番を選定。導入後すぐに動く形にして渡します。",
    Icon: IconBulb,
  },
  {
    title: "業務に合わせて1から設計",
    desc: "テンプレ提案ではなく、業務フローを理解した上でツール構成・運用ルールを個別設計します。",
    Icon: IconPuzzle,
  },
  {
    title: "公開後も止まらない伴走",
    desc: "導入後も月額の運用支援で継続改善。属人化させず、現場で回り続ける状態まで持っていきます。",
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


function Hero() {
  return (
    <section className="relative bg-linear-to-b from-bg-tint to-white pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <h1 className="font-bold text-3xl sm:text-[40px] lg:text-5xl leading-tight tracking-[-0.015em] text-ink">
              毎日の手作業を、
              <br />
              <span className="text-primary">AIで仕組み</span>に変える。
            </h1>
            <p className="mt-7 text-[13.5px] sm:text-[15px] leading-[1.95] text-fg-mute max-w-[460px]">
              中小企業・個人事業主向けに、AI導入・業務自動化・Web / EC構築を一気通貫で支援。
              <br className="hidden sm:inline" />
              現場で本当に使える形まで一緒に作ります。初回30分の相談は無料です。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="/contact" className="btn-primary w-full sm:w-auto">
                30分の無料相談を予約
              </a>
              <a href="/download" className="btn-outline w-full sm:w-auto">
                サービス資料を見る
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
    <div className="relative mx-auto w-full max-w-[560px]">
      <div
        className="absolute inset-0 -z-10 rounded-[40px]"
        style={{
          background:
            "radial-gradient(circle at 22% 18%, rgba(18,170,132,0.18), transparent 38%), radial-gradient(circle at 78% 76%, rgba(88,206,176,0.20), transparent 42%), linear-gradient(135deg, rgba(255,255,255,0.80), rgba(227,247,241,0.90))",
        }}
      />
      <LottiePlayer
        src="/animations/hero-status.json"
        className="aspect-square w-full"
        ariaLabel="AIによる業務フロー自動化のイメージ"
      />
    </div>
  );
}

function ConcernSection() {
  return (
    <section id="problem" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-2xl sm:text-3xl leading-[1.4] tracking-[-0.01em]">
            こんな状況、放置していませんか？
          </h2>
          <p className="mt-3 text-[13px] text-fg-mute">
            ご相談時に、9割の方が口にする4つの「あるある」をまとめました。
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

function ServicesBlock() {
  return (
    <div id="service">
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="text-[26px] sm:text-[30px] font-bold leading-tight tracking-[-0.01em] text-ink">
          サービス内容
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.8] text-fg-mute">
          ヒアリング・設計・実装・定着まで一気通貫。AIを入れて終わりにせず、現場で動き続ける形まで一緒に作ります。
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="card card-hover flex flex-col items-center bg-white/95 p-7 text-center shadow-[0_2px_4px_rgba(15,23,42,0.04),0_18px_40px_-24px_rgba(15,23,42,0.18)]"
          >
            <span className="icon-square">
              <s.Icon size={26} />
            </span>
            <h3 className="mt-5 font-bold text-base leading-normal">{s.title}</h3>
            <p className="mt-3 text-[12.5px] leading-[1.85] text-fg-mute">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolsAndServices() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #f7faf8 18%, #f3f9f6 50%, #f7faf8 82%, #ffffff 100%), radial-gradient(circle at 50% 38%, rgba(18,170,132,0.08), transparent 60%)",
          backgroundBlendMode: "multiply",
        }}
      />
      <div className="relative">
        <div className="mx-auto max-w-[1080px] px-6 pt-20 pb-6 sm:px-10 sm:pt-24 sm:pb-8 lg:px-12">
          <ToolsCloud />
        </div>

        <div className="mx-auto max-w-[640px] px-6 sm:px-10 lg:px-12">
          <div className="flex items-center gap-4 text-center text-fg-mute">
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-border" />
            <p className="text-[12.5px] leading-[1.7]">
              これらのツールを組み合わせて、業務に合った支援を組み立てます。
            </p>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-border" />
          </div>
        </div>

        <div className="mx-auto max-w-[1180px] px-5 pb-20 pt-10 sm:px-7 sm:pb-24 sm:pt-12 lg:px-10">
          <ServicesBlock />
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  return (
    <section id="use-cases" className="relative bg-bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-2xl sm:text-3xl leading-[1.4] tracking-[-0.01em]">
            活用シーン例
          </h2>
          <p className="mt-3 text-[13px] text-fg-mute">
            難しいAI導入ではなく、日々の業務で使えるところから仕組み化します。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div key={u.title} className="card p-7 flex items-start gap-5">
              <span className="icon-square shrink-0">
                <u.Icon size={24} />
              </span>
              <div>
                <h3 className="font-bold text-[15px] leading-normal">{u.title}</h3>
                <p className="mt-2 text-[12.5px] leading-[1.85] text-fg-mute">
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
          <h2 className="font-bold text-2xl sm:text-3xl leading-[1.4] tracking-[-0.01em]">
            導入の流れ
          </h2>
          <p className="mt-3 text-[13px] text-fg-mute">
            ご相談から運用まで5ステップ。1業務単位なら、最短2〜4週間で導入できます。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-5 relative">
          {steps.map((s) => (
            <div key={s.n} className="card p-6 flex flex-col items-center text-center">
              <span className="grid size-10 place-items-center rounded-full border-2 border-primary text-primary font-kanit text-[15px] mb-4">
                {s.n}
              </span>
              <h3 className="font-bold text-[14.5px] leading-normal">{s.title}</h3>
              <p className="mt-2 text-xs leading-[1.85] text-fg-mute">
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
    <section className="relative bg-bg-soft py-20 sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-2xl sm:text-3xl leading-[1.4] tracking-[-0.01em]">
            ツール屋でもコンサル屋でもない理由
          </h2>
          <p className="mt-3 text-[13px] text-fg-mute">
            「導入して終わり」「資料だけ作って終わり」にしない、Knotの4つの違い。
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="card p-7 flex flex-col items-start">
              <span className="icon-square">
                <r.Icon size={24} />
              </span>
              <h3 className="mt-5 font-bold text-[15px] leading-normal">{r.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.85] text-fg-mute">
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
            <h2 className="font-bold text-2xl sm:text-3xl leading-[1.4] tracking-[-0.01em]">
              よくあるご質問
            </h2>
            <div className="mt-8">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    <span className="flex items-start gap-3">
                      <span className="text-primary font-kanit pt-px">Q.</span>
                      <span>{f.q}</span>
                    </span>
                  </summary>
                  <p className="faq-body">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card p-7 sm:p-9 bg-bg-soft border-0">
              <h3 className="font-bold text-lg leading-normal">
                まずはお気軽に
                <br />
                ご相談ください。
              </h3>
              <p className="mt-4 text-[13px] leading-[1.85] text-fg-mute">
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
      <div className="mx-auto max-w-[1180px] rounded-2xl bg-primary text-white px-6 sm:px-10 py-8 sm:py-9">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15">
              <IconDocBig size={28} />
            </span>
            <div>
              <p className="font-bold text-base sm:text-lg leading-[1.4]">
                AI、結局なにから始めるか。20分で読めます。
              </p>
              <p className="mt-1.5 text-[12.5px] leading-[1.7] text-white/80">
                対応領域・活用シーン・進め方を1つの資料に。社内検討にもお使いいただけます。
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-primary px-5 py-3 text-[13px] font-bold hover:bg-primary-soft transition-colors"
            >
              30分の無料相談を予約
            </a>
            <a
              href="/download"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 text-white px-5 py-3 text-[13px] font-bold hover:bg-white/10 transition-colors"
            >
              資料を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-bg-soft">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
          <div>
            <p className="font-kanit text-6xl sm:text-[80px] leading-none text-primary opacity-90">
              ABOUT
            </p>
            <h2 className="mt-2 font-bold text-2xl sm:text-3xl leading-[1.45] tracking-[-0.01em] text-ink">
              AIで、毎日の作業を
              <br />
              本当に減らす。
            </h2>
            <p className="mt-6 text-[13.5px] leading-[1.95] text-fg-mute max-w-[460px]">
              Knotは、AI導入・業務自動化・Web / EC構築を一気通貫で支援する小さなチームです。流行りのAIに乗るのではなく、現場で本当に使える形に整え、毎日の負担を確実に減らします。
            </p>
            <div className="mt-7">
              <a href="/about" className="btn-outline">
                会社情報を見る
                <IconArrow size={14} />
              </a>
            </div>
          </div>
          <div
            className="relative aspect-4/3 w-full overflow-hidden rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(18,170,132,0.10) 0%, rgba(88,206,176,0.14) 52%, rgba(255,255,255,0.86) 100%)",
            }}
          >
            <LottiePlayer
              src="/animations/about-dna.json"
              className="absolute inset-0"
              ariaLabel="信念と技術が結びつくイメージ"
            />
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
            <p className="font-kanit text-6xl sm:text-[80px] leading-none text-primary opacity-90">
              NEWS
            </p>
            <h2 className="mt-2 font-bold text-2xl sm:text-3xl leading-[1.45] tracking-[-0.01em] text-ink">
              お知らせ・ブログ
            </h2>
            <p className="mt-4 text-[13px] leading-[1.85] text-fg-mute">
              AI活用や業務改善に関する発信、登壇情報をまとめています。
            </p>
          </div>
          <div className="lg:col-span-9">
            <ul className="border-t border-border">
              {news.map((n) => (
                <li key={n.title}>
                  <a
                    href="/news"
                    className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 border-b border-border py-5 group hover:bg-bg-soft/50 transition-colors px-2"
                  >
                    <time className="text-[12.5px] text-fg-mute font-medium shrink-0 sm:w-[100px]">
                      {n.date}
                    </time>
                    <span className="rounded-full bg-primary-soft text-primary-text px-3 py-1 text-[11px] font-bold shrink-0 sm:w-20 text-center">
                      {n.cat}
                    </span>
                    <p className="text-[13.5px] sm:text-[14.5px] font-medium leading-[1.55] flex-1 group-hover:text-primary transition-colors">
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
    <footer className="border-t border-border bg-white px-5 sm:px-7 lg:px-10 pt-14 pb-[110px] md:pb-12">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3 flex flex-col gap-4">
            <Brand size="sm" />
            <p className="text-[12.5px] leading-[1.85] text-fg-mute max-w-[280px]">
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
                { l: "文章作成・返信", h: "/use-cases" },
                { l: "資料作成", h: "/use-cases" },
                { l: "情報整理", h: "/use-cases" },
                { l: "定型作業の自動化", h: "/use-cases" },
                { l: "Web・SNS運用", h: "/use-cases" },
                { l: "業務フロー改善", h: "/use-cases" },
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
              <ul className="flex flex-col gap-2.5 text-[12.5px] text-fg-mute">
                {col.items.map((it) => (
                  <li key={it.l}>
                    <a href={it.h} className="hover:text-primary transition-colors">
                      {it.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-fg-faint">
          <span>© 2026 Knot. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col" style={themeVars}>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ConcernSection />
        <ToolsAndServices />
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
