import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "AERISAP Yazılım ve Danışmanlık A.Ş., 2017'de kurulan ve 2019'dan bu yana anonim şirket olarak faaliyet gösteren Ankara merkezli SAP danışmanlık firması. SAP A.G tarafından geliştirme ortağı olarak tanınan AERISAP, QNB eFinans iş birliğiyle 150'den fazla firmada kullanılan çözümler üretmektedir.",
  openGraph: {
    title: "Hakkımızda | AERISAP",
    description:
      "2017'den beri SAP kurulum, geliştirme ve entegrasyon hizmetleri sunan AERISAP. SAP geliştirme ortağı ve QNB eFinans iş ortağı.",
    url: "https://aerisap.com/hakkimizda",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

