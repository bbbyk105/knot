import type { ComponentType } from "react";
import Image from "next/image";
import OpenAI from "@lobehub/icons/es/OpenAI";
import Claude from "@lobehub/icons/es/Claude";
import Gemini from "@lobehub/icons/es/Gemini";
import N8n from "@lobehub/icons/es/N8n";
import Notion from "@lobehub/icons/es/Notion";
import Cursor from "@lobehub/icons/es/Cursor";
import Vercel from "@lobehub/icons/es/Vercel";
import Meta from "@lobehub/icons/es/Meta";

type AvatarLike = ComponentType<{ size?: number }>;

type Brand =
  | { name: string; Avatar: AvatarLike }
  | { name: string; iconUrl: string };

const row1Brands: Brand[] = [
  { name: "ChatGPT", Avatar: OpenAI.Avatar as AvatarLike },
  { name: "Claude", Avatar: Claude.Avatar as AvatarLike },
  { name: "Gemini", Avatar: Gemini.Avatar as AvatarLike },
  { name: "Meta", Avatar: Meta.Avatar as AvatarLike },
  { name: "Cursor", Avatar: Cursor.Avatar as AvatarLike },
  { name: "n8n", Avatar: N8n.Avatar as AvatarLike },
  { name: "Notion", Avatar: Notion.Avatar as AvatarLike },
  { name: "Vercel", Avatar: Vercel.Avatar as AvatarLike },
];

const row2Brands: Brand[] = [
  {
    name: "Excel",
    iconUrl: "https://api.iconify.design/vscode-icons/file-type-excel.svg",
  },
  {
    name: "Word",
    iconUrl: "https://api.iconify.design/vscode-icons/file-type-word.svg",
  },
  {
    name: "PowerPoint",
    iconUrl: "https://api.iconify.design/vscode-icons/file-type-powerpoint.svg",
  },
  {
    name: "Shopify",
    iconUrl: "https://api.iconify.design/logos/shopify.svg",
  },
  {
    name: "Stripe",
    iconUrl: "https://api.iconify.design/logos/stripe.svg",
  },
  {
    name: "Slack",
    iconUrl: "https://api.iconify.design/logos/slack-icon.svg",
  },
  {
    name: "Telegram",
    iconUrl: "https://api.iconify.design/logos/telegram.svg",
  },
  {
    name: "LINE",
    iconUrl: "https://api.iconify.design/simple-icons/line.svg?color=%2300C300",
  },
];

function BrandTile({
  brand,
  isDuplicate,
}: {
  brand: Brand;
  isDuplicate?: boolean;
}) {
  return (
    <div
      className={`flex w-[96px] shrink-0 flex-col items-center gap-3 ${
        isDuplicate ? "marquee-dup" : ""
      }`}
      aria-hidden={isDuplicate || undefined}
    >
      <span className="grid size-12 place-items-center rounded-2xl border border-black/8 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_12px_-8px_rgba(15,23,42,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20">
        {"Avatar" in brand ? (
          <brand.Avatar size={26} />
        ) : (
          <Image
            src={brand.iconUrl}
            alt={brand.name}
            width={24}
            height={24}
            unoptimized
            className="size-6 object-contain"
          />
        )}
      </span>
      <span className="text-[12px] font-medium text-[#3a3a3a]">{brand.name}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: Brand[];
  reverse?: boolean;
}) {
  const sequence = [...items, ...items];
  return (
    <div className="group relative w-full min-w-0">
      <div className="marquee-mask w-full min-w-0 overflow-hidden">
        <div
          className={`marquee-track flex w-max gap-7 sm:gap-9 ${
            reverse ? "marquee-reverse" : ""
          }`}
        >
          {sequence.map((b, i) => (
            <BrandTile
              key={`${b.name}-${i}`}
              brand={b}
              isDuplicate={i >= items.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ToolsCloud() {
  return (
    <div>
      <div className="mx-auto max-w-[640px] text-center">
        <h2 className="text-[26px] sm:text-[30px] font-bold leading-tight tracking-[-0.01em] text-ink">
          活用ツール
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[14px] leading-[1.8] text-fg-mute">
          AI・自動化・業務ツールを組み合わせ、目的に合わせた仕組みを設計します。
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-6 sm:gap-8">
        <MarqueeRow items={row1Brands} />
        <MarqueeRow items={row2Brands} reverse />
      </div>
    </div>
  );
}
