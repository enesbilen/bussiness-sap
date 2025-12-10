import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ServicesPreview from "@/components/home/ServicesPreview";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import LatestBlog from "@/components/home/LatestBlog";
import CTA from "@/components/home/CTA";

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

