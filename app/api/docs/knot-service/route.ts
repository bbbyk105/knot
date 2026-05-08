import { cookies } from "next/headers";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const DOWNLOAD_COOKIE = "knot_download_authorized";

export async function GET() {
  const cookieStore = await cookies();
  const auth = cookieStore.get(DOWNLOAD_COOKIE);

  if (!auth || auth.value !== "1") {
    return new Response(
      "資料のダウンロードにはフォームの送信が必要です。/download からお手続きください。",
      {
        status: 403,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      },
    );
  }

  try {
    const filePath = path.join(process.cwd(), "private/knot-service.pdf");
    const data = await readFile(filePath);
    return new Response(new Uint8Array(data), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="knot-service.pdf"',
        "Cache-Control": "private, no-store",
      },
    });
  } catch (err) {
    console.error("PDF read failed:", err);
    return new Response(
      "資料ファイルが見つかりません。準備でき次第、改めてご案内いたします。",
      {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      },
    );
  }
}
