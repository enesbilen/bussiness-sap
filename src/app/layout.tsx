import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Clash Grotesk - Başlıklar için
const clashGrotesk = localFont({
  src: [
    {
      path: "./fonts/clash_grotesk/ClashGrotesk-Extralight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/clash_grotesk/ClashGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/clash_grotesk/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/clash_grotesk/ClashGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/clash_grotesk/ClashGrotesk-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/clash_grotesk/ClashGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Clash Grotesk", "Clash Grotesk Placeholder", "sans-serif"],
});

// Instrument Sans - Paragraflar ve body text için
const instrumentSans = localFont({
  src: [
    {
      path: "./fonts/instrument_sans/InstrumentSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/instrument_sans/InstrumentSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/instrument_sans/InstrumentSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/instrument_sans/InstrumentSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["Instrument Sans", "Instrument Sans Placeholder", "sans-serif"],
});

export const metadata: Metadata = {
  title: {
    default: "SAPport - SAP-ABAP Danışmanlık & Kurumsal Portal Çözümleri",
    template: "%s | SAPport",
  },
  description: "SAPport ile SAP-ABAP danışmanlık hizmetleri ve Daisy kurumsal portal çözümüyle işletmenizin dijital dönüşümünü başlatın. SAP entegrasyonu, ABAP geliştirme ve kurumsal portal çözümleri.",
  keywords: [
    "SAP danışmanlık",
    "SAP-ABAP",
    "Daisy portal",
    "SAP entegrasyonu",
    "kurumsal portal",
    "SAP HR",
    "SAP FI/CO",
    "SAP MM/SD",
    "dijital dönüşüm",
    "SAP danışman",
    "ABAP geliştirme",
    "SAP çözümleri",
    "Türkiye SAP",
    "Ankara SAP",
  ],
  authors: [{ name: "SAPport Bilişim Hizmetleri" }],
  creator: "SAPport Bilişim Hizmetleri",
  publisher: "SAPport Bilişim Hizmetleri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sapport.com.tr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://sapport.com.tr",
    siteName: "SAPport",
    title: "SAPport - SAP-ABAP Danışmanlık & Kurumsal Portal Çözümleri",
    description: "SAPport ile SAP-ABAP danışmanlık hizmetleri ve Daisy kurumsal portal çözümüyle işletmenizin dijital dönüşümünü başlatın.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAPport - SAP-ABAP Danışmanlık & Kurumsal Portal Çözümleri",
    description: "SAPport ile SAP-ABAP danışmanlık hizmetleri ve Daisy kurumsal portal çözümüyle işletmenizin dijital dönüşümünü başlatın.",
  },
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
  icons: {
    icon: [
      { url: "/sap-images/logo/logo-main.svg", type: "image/svg+xml" },
      { url: "/sap-images/logo/logo-main.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/sap-images/logo/logo-main.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: "/sap-images/logo/logo-main.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${clashGrotesk.variable} ${instrumentSans.variable}`}>
      {/* Light background with subtle grid pattern optional */}
        <body className="antialiased bg-background text-foreground font-body selection:bg-[#00AFFF] selection:text-white">
        {/* Grid Background */}
        <div className="fixed inset-0 z-[-1] bg-grid-pattern bg-grid-pattern opacity-[0.4] pointer-events-none" />

        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        {/* Footer hidden for now as we focus on Hero/Header */}
        <Footer /> 
      </body>
    </html>
  );
}
