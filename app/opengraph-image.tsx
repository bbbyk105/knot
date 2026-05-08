import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Knot｜中小企業のためのAI導入・業務自動化パートナー";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
            "linear-gradient(135deg, #e8f7f2 0%, #f4f8f6 50%, #ffffff 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Knot" width={140} height={140} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 700,
              color: "#0f172a",
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
            }}
          >
            <div style={{ display: "flex" }}>毎日の手作業を、</div>
            <div style={{ display: "flex" }}>
              <span style={{ color: "#12aa84" }}>AIで仕組み</span>に変える。
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#475569",
              lineHeight: 1.5,
            }}
          >
            中小企業・個人事業主向け｜AI導入・業務自動化・Web / EC構築
          </div>
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
          <div style={{ display: "flex" }}>knotjapan.com</div>
          <div style={{ display: "flex" }}>初回30分の相談は無料</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
