import { MainLayout } from "@/components/layout/main-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { VisionSection } from "@/components/sections/vision-section";
import { InvestmentDomainsSection } from "@/components/sections/investment-domains-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { GlassCard } from "@/components/ui/card";
import { createTypography } from "@/lib/glass-effects";

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

      {/* Design System Test Card - Temporary for development */}
      <section className="py-16 bg-background/30">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8 max-w-4xl mx-auto">
            <h3 className={createTypography("h4", "mb-6 text-aureon-gold text-center")}>
              Layout & Navigation Test
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Navigation Status */}
              <div className="space-y-4">
                <h4 className={createTypography("h5", "text-aureon-blue mb-3")}>Navigation Features</h4>
                <div className="space-y-2 text-left text-sm">
                  <p>✅ Fixed header with glass morphism</p>
                  <p>✅ Responsive mobile menu</p>
                  <p>✅ Smooth scroll navigation</p>
                  <p>✅ Framer Motion animations</p>
                  <p>✅ Mobile hamburger menu</p>
                  <p>✅ Slide-out panel</p>
                </div>
              </div>
              
              {/* Layout Status */}
              <div className="space-y-4">
                <h4 className={createTypography("h5", "text-aureon-blue mb-3")}>Layout Structure</h4>
                <div className="space-y-2 text-left text-sm">
                  <p>✅ Root layout with providers</p>
                  <p>✅ Framer Motion provider</p>
                  <p>✅ Enhanced global styles</p>
                  <p>✅ CSS reset implementation</p>
                  <p>✅ Footer with golden accents</p>
                  <p>✅ Social media links</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </MainLayout>
  );
}
