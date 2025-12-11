import { Hero } from "@/components/landing/Hero";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { LearnSection } from "@/components/landing/LearnSection";
import { AboutSAPSection } from "@/components/landing/AboutSAPSection";
import { CompanyTestimonials } from "@/components/landing/CompanyTestimonials";
import { ContactSection } from "@/components/landing/ContactSection";
import { PreFooterCTA } from "@/components/landing/PreFooterCTA";

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
