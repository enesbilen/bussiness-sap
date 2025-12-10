import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aerisap | SAP & ABAP Danışmanlık | 15+ Yıllık Deneyim",
  description:
    "Aerisap, 15 yılı aşkın SAP ve ABAP deneyimi ile kurumsal çözümler sunan önde gelen danışmanlık firması. S/4HANA, Fiori, ABAP geliştirme ve migration hizmetleri.",
  keywords: [
    "SAP",
    "ABAP",
    "S/4HANA",
    "Fiori",
    "SAP danışmanlık",
    "SAP migration",
    "SAP geliştirme",
  ],
  authors: [{ name: "Aerisap" }],
  openGraph: {
    title: "Aerisap | SAP & ABAP Danışmanlık",
    description:
      "15 yılı aşkın SAP ve ABAP deneyimi ile kurumsal çözümler sunan önde gelen danışmanlık firması.",
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
    <html lang="tr" className={inter.variable}>
      <body className="font-['Inter'] antialiased bg-slate-50 text-slate-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

