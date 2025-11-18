import type { Metadata } from "next";
import "./globals.css";
import { SITE_INFO } from "@/lib/constants";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: `${SITE_INFO.title} | ${SITE_INFO.subtitle}`,
  description: SITE_INFO.description,
  keywords: ["出版", "著力", "経営者", "Kindle", "セルフ出版", "ビジネス書", "権威性"],
  authors: [{ name: SITE_INFO.companyName }],
  openGraph: {
    title: `${SITE_INFO.title} | ${SITE_INFO.subtitle}`,
    description: SITE_INFO.description,
    url: SITE_INFO.url,
    siteName: SITE_INFO.title,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${SITE_INFO.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_INFO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.title} | ${SITE_INFO.subtitle}`,
    description: SITE_INFO.description,
    images: [`${SITE_INFO.url}/og-image.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700;900&display=swap"
          rel="stylesheet"
          media="print"
        />
        <style>{`
          @font-face {
            font-family: 'Noto Serif JP';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/notoserifjp/v28/xn77YHs72GKoTvER4Gn3b5eMZBaPRkgfU8fEwb0.woff2) format('woff2');
            unicode-range: U+4E00-9FFF, U+3040-309F, U+30A0-30FF;
          }
          @font-face {
            font-family: 'Noto Serif JP';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/notoserifjp/v28/xn77YHs72GKoTvER4Gn3b5eMZBaPRmAfU8fEwb0.woff2) format('woff2');
            unicode-range: U+4E00-9FFF, U+3040-309F, U+30A0-30FF;
          }
        `}</style>
      </head>
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
