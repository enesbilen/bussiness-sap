import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "SAPport Bilişim Hizmetleri ile iletişime geçin. SAP-ABAP danışmanlık, Daisy portal ve dijital dönüşüm çözümleri hakkında bilgi almak için bizimle iletişime geçin. Ankara ofisimizi ziyaret edebilir veya telefon, e-posta ile ulaşabilirsiniz.",
  keywords: [
    "SAPport iletişim",
    "SAP danışmanlık iletişim",
    "Ankara SAP danışman",
    "SAP danışmanlık telefon",
    "SAPport adres",
    "SAP danışmanlık e-posta",
    "SAPport iletişim formu",
    "SAP danışmanlık ofis",
  ],
  openGraph: {
    title: "İletişim | SAPport - SAP-ABAP Danışmanlık",
    description: "SAPport Bilişim Hizmetleri ile iletişime geçin. SAP-ABAP danışmanlık, Daisy portal ve dijital dönüşüm çözümleri hakkında bilgi alın.",
    url: "https://sapport.com.tr/iletisim",
  },
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

