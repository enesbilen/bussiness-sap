import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aerisap | SAP & ABAP Danışmanlık",
  description:
    "Kurumsal SAP çözümleri. S/4HANA migration, ABAP geliştirme ve Fiori uygulamaları.",
  keywords: [
    "SAP",
    "ABAP",
    "S/4HANA",
    "Fiori",
    "SAP danışmanlık",
    "SAP migration",
  ],
  authors: [{ name: "Aerisap" }],
  openGraph: {
    title: "Aerisap | SAP & ABAP Danışmanlık",
    description: "Kurumsal SAP çözümleri ve danışmanlık hizmetleri.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={spaceGrotesk.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
