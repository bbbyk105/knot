"use client";

import { useState } from "react";

export function FloatingCTA() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <>
      {/* Desktop floating card */}
      <div className="fixed bottom-6 right-6 z-40 hidden w-[280px] lg:block">
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.18)]">
          <button
            type="button"
            aria-label="閉じる"
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 grid size-7 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--fg-mute)] hover:text-[var(--fg)] hover:bg-[var(--bg-soft)] transition-colors z-10"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M3 3l6 6M9 3l-6 6" />
            </svg>
          </button>
          <a href="/contact" className="relative flex flex-col gap-3 px-5 py-5 group">
            <span className="text-[14px] font-bold leading-snug text-[var(--ink)]">
              AI、何から始める？
            </span>
            <span className="text-[12px] text-[var(--fg-mute)] leading-[1.55]">
              初回30分の無料相談から、お気軽にどうぞ。
            </span>
            <span className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-bold text-[var(--primary)] group-hover:gap-2.5 transition-all">
              無料で相談する
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
            </span>
          </a>
        </div>
      </div>

      {/* Mobile / tablet bottom sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
        <div className="flex items-stretch gap-2 border-t border-[var(--border)] bg-white/95 backdrop-blur-xl px-3 py-3">
          <a
            href="/download"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] bg-white px-3 py-3 text-[13px] font-bold text-[var(--fg)]"
          >
            資料DL
          </a>
          <a
            href="/contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-3 py-3 text-[13px] font-bold text-white"
          >
            お問い合わせ
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
          </a>
        </div>
      </div>
    </>
  );
}
