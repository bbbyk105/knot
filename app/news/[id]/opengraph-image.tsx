import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fetchNewsItem, getCategoryName } from "@/lib/microcms";

export const alt = "Knotブログ記事";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await fetchNewsItem(id);
  const title = item?.title ?? "Knot ブログ";
  const category = getCategoryName(item?.category) ?? "BLOG";

  const logo = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${Buffer.from(logo).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #e3f7f1 0%, #f4f8f6 55%, #ffffff 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Knot" width={120} height={120} />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              color: "#08725a",
              background: "#ffffffcc",
              padding: "10px 20px",
              borderRadius: 999,
              letterSpacing: "0.05em",
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: title.length > 40 ? 48 : 56,
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#08725a",
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          <div style={{ display: "flex" }}>knotjapan.com / NEWS</div>
          <div style={{ display: "flex" }}>Knot ブログ</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
