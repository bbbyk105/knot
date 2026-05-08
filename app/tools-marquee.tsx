"use client";

import type { ComponentType } from "react";
import OpenAI from "@lobehub/icons/es/OpenAI";
import Claude from "@lobehub/icons/es/Claude";
import Gemini from "@lobehub/icons/es/Gemini";
import N8n from "@lobehub/icons/es/N8n";
import Notion from "@lobehub/icons/es/Notion";
import Cursor from "@lobehub/icons/es/Cursor";
import GithubCopilot from "@lobehub/icons/es/GithubCopilot";
import Perplexity from "@lobehub/icons/es/Perplexity";
import Mistral from "@lobehub/icons/es/Mistral";
import DeepSeek from "@lobehub/icons/es/DeepSeek";
import Vercel from "@lobehub/icons/es/Vercel";
import Meta from "@lobehub/icons/es/Meta";

type AvatarLike = ComponentType<{ size?: number }>;

type Brand = {
  name: string;
  Avatar: AvatarLike;
};

const brands: Brand[] = [
  { name: "ChatGPT", Avatar: OpenAI.Avatar as AvatarLike },
  { name: "Claude", Avatar: Claude.Avatar as AvatarLike },
  { name: "Gemini", Avatar: Gemini.Avatar as AvatarLike },
  { name: "n8n", Avatar: N8n.Avatar as AvatarLike },
  { name: "Notion", Avatar: Notion.Avatar as AvatarLike },
  { name: "Cursor", Avatar: Cursor.Avatar as AvatarLike },
  { name: "GitHub Copilot", Avatar: GithubCopilot.Avatar as AvatarLike },
  { name: "Perplexity", Avatar: Perplexity.Avatar as AvatarLike },
  { name: "Mistral", Avatar: Mistral.Avatar as AvatarLike },
  { name: "DeepSeek", Avatar: DeepSeek.Avatar as AvatarLike },
  { name: "Vercel", Avatar: Vercel.Avatar as AvatarLike },
  { name: "Meta AI", Avatar: Meta.Avatar as AvatarLike },
];

export function ToolsMarquee() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="font-bold text-[22px] sm:text-[26px] leading-[1.4]">
            活用ツール
          </h2>
          <p className="mt-3 text-[13px] text-[var(--fg-mute)]">
            各ツールを組み合わせ、目的や業務に最適なソリューションをご提供します。
          </p>
        </div>
      </div>

      <div className="mt-10 relative group">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max">
            {[...brands, ...brands].map((b, i) => {
              const Avatar = b.Avatar;
              return (
                <div
                  key={`${b.name}-${i}`}
                  className="flex flex-col items-center gap-3 shrink-0 w-32 px-3"
                >
                  <span className="grid size-14 place-items-center rounded-2xl bg-white border border-[var(--border)] shadow-[0_4px_14px_-8px_rgba(15,23,42,0.12)]">
                    <Avatar size={36} />
                  </span>
                  <span className="text-[12.5px] font-medium whitespace-nowrap">
                    {b.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
