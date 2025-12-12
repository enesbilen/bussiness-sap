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
  metadataBase: new URL("https://aerisap.com"),
  title: {
    default: "AERISAP | SAP Uygulamaları & Danışmanlık | e-Çözümler",
    template: "%s | AERISAP",
  },
  description:
    "AERISAP Yazılım & Danışmanlık A.Ş., 2017'den beri SAP kurulum, geliştirme ve entegrasyon hizmetleri sunan Ankara merkezli danışmanlık firması. E-Fatura, E-İrsaliye, E-Arşiv, E-Defter paket çözümleri. QNB eFinans iş birliğiyle 150'den fazla firmada kullanılan çözümler.",
  keywords: [
    "SAP",
    "ABAP",
    "SAP danışmanlık",
    "SAP uygulama geliştirme",
    "E-Fatura",
    "E-İrsaliye",
    "E-Arşiv",
    "E-Defter",
    "QNB eFinans",
    "SAP geliştirme ortağı",
    "Ankara SAP danışmanlık",
    "SAP entegrasyon",
    "SAP kurulum",
  ],
  authors: [{ name: "AERISAP Yazılım & Danışmanlık A.Ş." }],
  creator: "AERISAP Yazılım & Danışmanlık A.Ş.",
  publisher: "AERISAP Yazılım & Danışmanlık A.Ş.",
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
    icon: "/aerisaplogo.png",
    shortcut: "/aerisaplogo.png",
    apple: "/aerisaplogo.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://aerisap.com",
    siteName: "AERISAP",
    title: "AERISAP | SAP Uygulamaları & Danışmanlık",
    description:
      "Şirketinizi geleceğe taşıyacak e-Çözümler ve SAP uygulamaları. 150'den fazla firmada kullanılan çözümler.",
    images: [
      {
        url: "/aerisaplogo.png",
        width: 1200,
        height: 630,
        alt: "AERISAP Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AERISAP | SAP Uygulamaları & Danışmanlık",
    description:
      "Şirketinizi geleceğe taşıyacak e-Çözümler ve SAP uygulamaları. 150'den fazla firmada kullanılan çözümler.",
    images: ["/aerisaplogo.png"],
  },
  alternates: {
    canonical: "https://aerisap.com",
  },
  verification: {
    // Google Search Console ve diğer doğrulama kodları buraya eklenebilir
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

