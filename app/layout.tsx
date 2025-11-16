import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeworkai.com"),
  title: {
    default: "Primework AI – Automations. Websites. Growth.",
    template: "%s • Primework AI",
  },
  description:
    "Primework AI builds automation systems, websites, and workflows that save time and grow revenue. Book a 15-min audit today.",
  keywords: [
    "AI automations",
    "AI workflows",
    "automation agency",
    "website design",
    "AI for small business",
    "Primework AI",
  ],
  openGraph: {
    title: "Primework AI – Automations. Websites. Growth.",
    description:
      "We build automation systems and websites that save time and increase revenue. Book a 15-min audit.",
    url: "https://primeworkai.com",
    siteName: "Primework AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Primework AI – Automations & Websites",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Primework AI – Automations & Websites",
    description:
      "Automation systems + modern websites for business owners.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-ink`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
