"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const DOWNLOAD_COOKIE = "knot_download_authorized";
const DOWNLOAD_COOKIE_MAX_AGE = 60 * 60 * 24; // 24h

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactRequest(formData: FormData) {
  if (clean(formData.get("hp_url"))) {
    redirect("/contact/thanks");
  }

  const data = {
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    message: clean(formData.get("message")),
    company: clean(formData.get("company")),
    phone: clean(formData.get("phone")),
    inquiryType: clean(formData.get("inquiryType")),
  };

  if (!data.name || !data.email || !data.message) {
    throw new Error("お名前・メールアドレス・ご相談内容は必須です。");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    throw new Error("メールアドレスの形式が正しくありません。");
  }

  const lines = [
    "*💬 お問い合わせ*",
    "",
    `*お名前*: ${data.name}`,
    data.company ? `*会社名*: ${data.company}` : null,
    `*メール*: ${data.email}`,
    data.phone ? `*電話*: ${data.phone}` : null,
    data.inquiryType ? `*種類*: ${data.inquiryType}` : null,
    "",
    "*ご相談内容*:",
    data.message,
  ].filter((line): line is string => line !== null);

  const text = lines.join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

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
    console.log("Contact form submission:\n" + text);
  }

  const cookieStore = await cookies();
  cookieStore.set(DOWNLOAD_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: DOWNLOAD_COOKIE_MAX_AGE,
    path: "/",
  });

  redirect("/contact/thanks");
}
