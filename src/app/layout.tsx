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

export const metadata: Metadata = {
  title: "Os Crespo",
  description: "Oscar Crespo personal website",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicon.png", sizes: "192x192" },
  },
  manifest: "/manifest.json",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
