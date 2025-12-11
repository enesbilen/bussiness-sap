import { Metadata } from "next";
import { Hero } from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { LearnSection } from "@/components/landing/LearnSection";
import { AboutSAPSection } from "@/components/landing/AboutSAPSection";
import { CompanyTestimonials } from "@/components/landing/CompanyTestimonials";
import { ContactSection } from "@/components/landing/ContactSection";
import { PreFooterCTA } from "@/components/landing/PreFooterCTA";

export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: "SAPport ile SAP-ABAP danışmanlık hizmetleri ve Daisy kurumsal portal çözümüyle işletmenizin dijital dönüşümünü başlatın. SAP bilmeyen çalışanlarınız bile kolayca işlemlerini yapabilsin.",
  keywords: [
    "SAP danışmanlık",
    "SAP-ABAP",
    "Daisy portal",
    "SAP entegrasyonu",
    "kurumsal portal",
    "dijital dönüşüm",
    "SAP çözümleri",
    "Türkiye SAP",
    "Ankara SAP danışmanlık",
  ],
  openGraph: {
    title: "SAPport - SAP-ABAP Danışmanlık & Kurumsal Portal Çözümleri",
    description: "SAPport ile SAP-ABAP danışmanlık hizmetleri ve Daisy kurumsal portal çözümüyle işletmenizin dijital dönüşümünü başlatın.",
    url: "https://sapport.com.tr",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 sm:gap-24 overflow-x-hidden">
      <Hero />
      <AboutSAPSection />
      <LearnSection />
      <FeaturesSection />
      <CompanyTestimonials />
      <ContactSection />
      <PreFooterCTA />
    </div>
  );
}
