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
  title: "Aerisap | SAP Clone",
  description: "The operating system for business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${clashGrotesk.variable} ${instrumentSans.variable}`}>
      {/* Light background with subtle grid pattern optional */}
      <body className="antialiased bg-background text-foreground font-body selection:bg-brand-green selection:text-black">
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
