"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/service", label: "サービス" },
  { href: "/use-cases", label: "活用シーン" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/about", label: "会社情報" },
  { href: "/news", label: "ブログ" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-lg border border-[var(--border)] bg-white text-[var(--fg)] hover:bg-[var(--bg-soft)] transition-colors lg:hidden"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden
        >
          {open ? (
            <path d="M4 4l8 8M12 4l-8 8" />
          ) : (
            <>
              <path d="M2.5 5h11M2.5 11h11" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 top-[64px] z-20 lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="メニュー外を閉じる"
            className="absolute inset-0 bg-[rgba(15,23,42,0.4)] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav className="relative bg-white border-b border-[var(--border)] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)]">
            <ul className="flex flex-col px-5 py-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 text-[15px] font-bold text-[var(--fg)] border-b border-[var(--border)] last:border-b-0 hover:text-[var(--primary)] transition-colors"
                  >
                    {l.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[var(--fg-faint)]"
                      aria-hidden
                    >
                      <path d="M3 8h10" />
                      <path d="M9 4l4 4-4 4" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-3 p-5 border-t border-[var(--border)]">
              <a
                href="/download"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-3 py-3 text-[13px] font-bold text-white"
              >
                資料DL
              </a>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border-strong)] bg-white px-3 py-3 text-[13px] font-bold text-[var(--fg)]"
              >
                お問い合わせ
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
