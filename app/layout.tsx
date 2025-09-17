import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "下剋上キャリア | 今より稼げる仕事へ",
  description: "下剋上キャリアで理想の転職を実現。年収UP・未経験OK・完全無料の転職支援サービス。あなたに合った高収入求人を無料でご紹介。",
  keywords: "下剋上キャリア,転職,未経験,年収UP,無料,転職エージェント",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "下剋上キャリア | 今より稼げる仕事へ",
    description: "下剋上キャリアで理想の転職を実現。あなたに合った高収入求人を無料でご紹介",
    type: "website",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "下剋上キャリア",
  "url": "https://gekokujo-career.vercel.app",
  "description": "下剋上キャリア - 未経験特化の転職支援サービス",
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "転職サービスの料金はかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "完全無料でご利用いただけます。転職成功まで一切費用はかかりません。"
      }
    },
    {
      "@type": "Question",
      "name": "学歴は関係ありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "学歴不問の求人を多数ご用意しています。中卒・高卒の方も多数転職に成功されています。"
      }
    },
    {
      "@type": "Question",
      "name": "ブラック企業ではないか心配です",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "厳選した優良企業のみをご紹介。労働条件を事前にしっかり確認し、安心して働ける環境を提供します。"
      }
    },
    {
      "@type": "Question",
      "name": "フリーター歴が長くても大丈夫ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "フリーターから正社員への転職実績多数。あなたの経験を活かせる企業をご紹介します。"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-W2C5D59D');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Zen+Kaku+Gothic+New:wght@700;900&display=swap" rel="stylesheet" />
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2C5D59D"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
