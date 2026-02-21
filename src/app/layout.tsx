import type { Metadata } from "next";
import { Lora, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-roboto-mono",
});

const baseUrl = "https://oscrespo.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Oscar Crespo | Software Engineer",
    template: "%s | Oscar Crespo",
  },
  description: "Oscar Crespo is a staff engineer with a focus on building beautiful apps and the robust systems behind them.",
  keywords: ["Oscar Crespo", "Software Engineer", "Staff Engineer", "Mobile Development", "Web Development", "React Native", "TypeScript", "Node.js", "PostgreSQL"],
  authors: [{ name: "Oscar Crespo", url: baseUrl }],
  creator: "Oscar Crespo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Oscar Crespo",
    title: "Oscar Crespo | Software Engineer",
    description: "Software engineer with taste. Building beautiful apps and the robust systems behind them.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oscar Crespo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oscar Crespo | Software Engineer",
    description: "Software engineer with taste. Building functional and beautiful products.",
    images: ["/og-image.png"],
    creator: "@OsCrsspo",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon.png", sizes: "192x192" },
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${robotoMono.variable}`}>
      <head>
        <meta name="theme-color" content="#101011" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1910VM3S2Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1910VM3S2Y');
          `}
        </Script>
        <Script
          id={'person-schema'}
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Oscar Crespo",
              "url": "https://oscrespo.com",
              "jobTitle": "Staff Frontend Engineer",
              "description": "Staff Frontend Engineer with taste. Building beautiful apps and the robust systems behind them.",
              "sameAs": [
                "https://www.linkedin.com/in/oscarcrespoc/",
              ],
            }
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
