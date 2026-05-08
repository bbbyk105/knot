"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DOWNLOAD_COOKIE = "knot_download_authorized";
const DOWNLOAD_COOKIE_MAX_AGE = 60 * 60 * 24; // 24h

const REQUIRED_FIELDS = [
  "company",
  "name",
  "email",
  "phone",
  "inquiryType",
  "message",
] as const;

type Field = (typeof REQUIRED_FIELDS)[number];

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitDownloadRequest(formData: FormData) {
  if (clean(formData.get("hp_url"))) {
    redirect("/download/thanks");
  }

  const data = Object.fromEntries(
    REQUIRED_FIELDS.map((key) => [key, clean(formData.get(key))]),
  ) as Record<Field, string>;

  for (const key of REQUIRED_FIELDS) {
    if (!data[key]) {
      throw new Error(`必須項目が未入力です: ${key}`);
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error("メールアドレスの形式が正しくありません。");
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const text = [
    "*📄 資料ダウンロード申請*",
    "",
    `*会社名*: ${data.company}`,
    `*お名前*: ${data.name}`,
    `*メール*: ${data.email}`,
    `*電話*: ${data.phone}`,
    `*種類*: ${data.inquiryType}`,
    "",
    "*内容*:",
    data.message,
  ].join("\n");

  if (token && chatId) {
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "Markdown",
          }),
          cache: "no-store",
        },
      );
      if (!res.ok) {
        console.error("Telegram API non-200:", res.status, await res.text());
      }
    } catch (err) {
      console.error("Telegram notification failed:", err);
    }
  } else {
    console.warn(
      "TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID 未設定のため、通知はスキップしました。",
    );
    console.log("Download form submission:\n" + text);
  }

  const cookieStore = await cookies();
  cookieStore.set(DOWNLOAD_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: DOWNLOAD_COOKIE_MAX_AGE,
    path: "/",
  });

  redirect("/download/thanks");
}
