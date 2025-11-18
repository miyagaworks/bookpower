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
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&family=Shippori+Mincho+B1:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
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
