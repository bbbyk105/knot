import Image from "next/image";
import { getCategoryBadgeStyle } from "@/lib/microcms";

// title からハッシュで色味・角度を決定して、記事ごとに違う背景になるようにする
function hashToInt(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

const palettes: Array<{
  from: string;
  via: string;
  to: string;
  accent: string;
}> = [
  { from: "#e3f7f1", via: "#f4f8f6", to: "#ffffff", accent: "rgba(18,170,132,0.18)" },
  { from: "#f4f8f6", via: "#e8f7f2", to: "#ffffff", accent: "rgba(18,170,132,0.14)" },
  { from: "#e8f7f2", via: "#f3f9f6", to: "#fbfdfc", accent: "rgba(8,114,90,0.12)" },
  { from: "#f7faf8", via: "#e3f7f1", to: "#ffffff", accent: "rgba(46,166,123,0.14)" },
  { from: "#f0faf6", via: "#e8f7f2", to: "#f7faf8", accent: "rgba(18,170,132,0.20)" },
];

type Size = "card" | "hero";

export function NewsThumbnailFallback({
  title,
  category,
  size = "card",
  className,
}: {
  title: string;
  category?: string;
  size?: Size;
  className?: string;
}) {
  const seed = hashToInt(title);
  const palette = palettes[seed % palettes.length];
  const angle = (seed % 60) + 110; // 110〜170度の範囲で diagonal
  const titleClamp =
    size === "hero" ? "line-clamp-3 text-[20px] sm:text-[26px]" : "line-clamp-3 text-[15px] sm:text-base";
  const badge = getCategoryBadgeStyle(category);

  return (
    <div
      aria-hidden
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden p-6 sm:p-7 ${
        className ?? ""
      }`}
      style={{
        background: `linear-gradient(${angle}deg, ${palette.from} 0%, ${palette.via} 55%, ${palette.to} 100%)`,
      }}
    >
      {/* 装飾円 (ブランドカラー) */}
      <span
        className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full"
        style={{ background: palette.accent }}
      />
      <span
        className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full"
        style={{ background: palette.accent, opacity: 0.6 }}
      />
      {/* グリッドの薄いパターン */}
      <span
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.4) 1px, transparent 1px), linear-gradient(to right, rgba(15,23,42,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 上部: ロゴ + カテゴリ */}
      <div className="relative flex items-start justify-between gap-3">
        <span className="inline-flex items-center">
          <Image
            src="/images/logo.png"
            alt="Knot"
            width={1254}
            height={1254}
            className={`${size === "hero" ? "h-12 sm:h-14" : "h-10"} w-auto`}
          />
        </span>
        {category ? (
          <span className={`rounded-full ${badge.bg} ${badge.text} ${badge.ring} px-2.5 py-1 text-[10.5px] font-bold backdrop-blur`}>
            {category}
          </span>
        ) : null}
      </div>

      {/* 中央: タイトル */}
      <p
        className={`relative font-bold leading-[1.5] tracking-[-0.005em] text-ink ${titleClamp}`}
      >
        {title}
      </p>

      {/* 下部: 飾り線 */}
      <div className="relative flex items-center gap-3">
        <span className="h-px flex-1 bg-ink/15" />
        <span className="font-kanit text-[10px] tracking-[0.18em] text-fg-mute">
          knot-japan
        </span>
      </div>
    </div>
  );
}
