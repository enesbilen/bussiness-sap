import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ServicesPreview from "@/components/home/ServicesPreview";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import LatestBlog from "@/components/home/LatestBlog";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description:
    "AERISAP Yazılım & Danışmanlık A.Ş. - SAP uygulama geliştirme, danışmanlık ve e-Çözümler. E-Fatura, E-İrsaliye, E-Arşiv, E-Defter paket çözümleri. 150'den fazla firmada kullanılan güvenilir çözümler.",
  openGraph: {
    title: "AERISAP | SAP Uygulamaları & Danışmanlık",
    description:
      "Şirketinizi geleceğe taşıyacak e-Çözümler ve SAP uygulamaları. 150'den fazla firmada kullanılan çözümler.",
    url: "https://aerisap.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <LatestBlog />
      <CTA />
    </>
  );
}

