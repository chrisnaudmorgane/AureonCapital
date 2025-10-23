import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { VisionSection } from "@/components/sections/vision-section";
import { InvestmentDomainsSection } from "@/components/sections/investment-domains-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Investment Domains Section */}
      <InvestmentDomainsSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Contact Section */}
      <ContactSection />


    </MainLayout>
  );
}
