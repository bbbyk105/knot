import type { Metadata } from "next";
import Link from "next/link";
import {
  CTABanner,
  ContentSection,
  PageHero,
  SectionHeading,
  SubPageShell,
  faqItems,
} from "../subpage-components";
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript } from "@/lib/jsonld";

const categoryOrder = ["サービス全般", "期間", "料金", "導入後"];

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "Knotへのご相談前に多くいただく、費用感・期間・運用・セキュリティについての質問とその回答をまとめました。",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "よくあるご質問｜Knot",
    description: "AI導入のご相談前に確認したい、頻出10問の回答をまとめました。",
    url: "/faq",
  },
};

export default function FaqPage() {
  const grouped = categoryOrder.map((cat) => ({
    cat,
    items: faqItems.filter((f) => f.cat === cat),
  }));

  return (
    <SubPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(
            breadcrumbJsonLd([
              { name: "ホーム", path: "/" },
              { name: "よくある質問", path: "/faq" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdScript(faqJsonLd(faqItems.map((f) => ({ q: f.q, a: f.a })))),
        }}
      />
      <PageHero
        label="FAQ"
        title="ご相談前に、よくいただく質問。"
        description="費用感・期間・導入後の運用まで、相談時の頻出10問をまとめました。ここに無い質問はお問い合わせから直接どうぞ。"
      />

      <ContentSection>
        <div className="mx-auto grid max-w-[920px] gap-12">
          {grouped.map((g) => (
            <section key={g.cat}>
              <SectionHeading eyebrow={g.cat.toUpperCase()} title={g.cat} />
              <div className="mt-6">
                {g.items.map((item) => (
                  <details key={item.q} className="faq-item">
                    <summary>
                      <span className="flex items-start gap-3">
                        <span className="font-kanit text-primary">Q.</span>
                        <span>{item.q}</span>
                      </span>
                    </summary>
                    <p className="faq-body">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </ContentSection>

      <ContentSection tone="soft">
        <div className="mx-auto max-w-[820px] text-center">
          <SectionHeading
            eyebrow="STILL HAVE QUESTIONS"
            title="ここに無いご質問は、直接お問い合わせください。"
            description="お電話よりもチャットやメール中心のやり取りで、現状を整理しながらご返答します。"
            align="center"
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">お問い合わせ</Link>
            <Link href="/download" className="btn-outline">資料を見る</Link>
          </div>
        </div>
      </ContentSection>

      <CTABanner />
    </SubPageShell>
  );
}
