"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/service", label: "サービス" },
  { href: "/use-cases", label: "活用シーン" },
  { href: "/flow", label: "導入の流れ" },
  { href: "/faq", label: "よくある質問" },
  { href: "/about", label: "会社情報" },
  { href: "/news", label: "ブログ" },
];

export function NavDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="メニューを開く"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="grid size-10 place-items-center rounded-lg border border-border bg-white text-fg hover:bg-bg-soft transition-colors"
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
          <path d="M2.5 5h11M2.5 11h11" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="flex min-h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5 sm:px-7 lg:px-10">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              aria-label="Knot AI"
              className="inline-flex select-none"
            >
              <Image
                src="/images/logo.png"
                alt="Knot AI"
                width={1254}
                height={1254}
                priority
                className="h-10 w-auto sm:h-11"
              />
            </Link>
            <button
              type="button"
              aria-label="メニューを閉じる"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-lg border border-border bg-white text-fg hover:bg-bg-soft transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="mx-auto flex max-w-[720px] flex-col px-5 py-10 sm:px-7 sm:py-14">
              {links.map((l, i) => (
                <li
                  key={l.href}
                  className="border-b border-border last:border-b-0"
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-primary"
                  >
                    <span className="flex items-baseline gap-4 sm:gap-5">
                      <span className="font-kanit text-xs tracking-[0.16em] text-fg-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl font-bold leading-tight text-ink sm:text-[26px]">
                        {l.label}
                      </span>
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                      className="text-fg-faint transition-all group-hover:translate-x-1 group-hover:text-primary"
                    >
                      <path d="M3 8h10" />
                      <path d="M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-border bg-bg-soft px-5 py-6 sm:px-7 sm:py-8">
            <div className="mx-auto flex max-w-[720px] flex-col gap-3 sm:flex-row">
              <Link
                href="/download"
                onClick={() => setOpen(false)}
                className="btn-primary w-full sm:flex-1"
              >
                資料をダウンロードする
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-outline w-full sm:flex-1"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const MobileMenu = NavDrawer;
