import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SentryInit from "@/components/SentryInit";
import "@/sentry.server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
});

export const metadata: Metadata = {
  title: {
    default: "EMSC – Estonian Motorsport Safety Crew",
    template: "%s | EMSC",
  },
  description: "EMSC pakub professionaalset ohutusteenust mootorispordi üritustele üle Eesti.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "EMSC – Estonian Motorsport Safety Crew",
    description: "Professionaalne ohutusteenus mootorispordi võistlustel ja üritustel.",
    type: "website",
    locale: "et_EE",
    siteName: "EMSC",
  },
  twitter: {
    card: "summary_large_image",
    title: "EMSC – Estonian Motorsport Safety Crew",
    description: "Professionaalne ohutusteenus mootorispordi võistlustel ja üritustel.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="et" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#sisu" className="skip-link">
          Liigu sisu juurde
        </a>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            const q = window.matchMedia('(prefers-color-scheme: dark)');
            const stored = localStorage.getItem('theme');
            const dark = stored ? stored === 'dark' : q.matches;
            if (dark) document.documentElement.classList.add('dark');
          `}
        </Script>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            defer
          />
        )}
        <Script id="org-jsonld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EMSC",
            url: siteUrl,
            sameAs: [],
            description: "Professionaalne ohutusteenus mootorispordi võistlustel ja üritustel.",
          })}
        </Script>
        <SentryInit />
        <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
