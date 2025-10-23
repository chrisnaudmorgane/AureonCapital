import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/card";
import { GlassInput } from "@/components/ui/input";
import { createTypography } from "@/lib/glass-effects";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center space-y-8">
            <h1 className={createTypography("h1", "aureon-text-gradient")}>
              Investir dans l&apos;intelligence du futur
            </h1>
            <p className={createTypography("bodyLarge", "text-muted-foreground max-w-2xl mx-auto")}>
              AureonCapital, filiale d&apos;investissement d&apos;Aureon AI Group, investit dans l&apos;avenir de l&apos;intelligence artificielle et des technologies innovantes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="gold">
                Découvrir nos investissements
              </Button>
              <Button size="lg" variant="outline-blue">
                Rejoindre le portefeuille
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections for future implementation */}
      <section id="vision" className="min-h-screen flex items-center justify-center bg-background/50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className={createTypography("h2", "aureon-text-gradient mb-8")}>Notre Vision</h2>
          <p className={createTypography("bodyLarge", "text-muted-foreground")}>
            Section Vision - À implémenter dans les prochaines tâches
          </p>
        </div>
      </section>

      <section id="investments" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className={createTypography("h2", "aureon-text-gradient mb-8")}>Domaines d&apos;Investissement</h2>
          <p className={createTypography("bodyLarge", "text-muted-foreground")}>
            Section Investissements - À implémenter dans les prochaines tâches
          </p>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen flex items-center justify-center bg-background/50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className={createTypography("h2", "aureon-text-gradient mb-8")}>Projets Soutenus</h2>
          <p className={createTypography("bodyLarge", "text-muted-foreground")}>
            Section Portfolio - À implémenter dans les prochaines tâches
          </p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className={createTypography("h2", "aureon-text-gradient mb-8")}>Contact</h2>
          <p className={createTypography("bodyLarge", "text-muted-foreground")}>
            Section Contact - À implémenter dans les prochaines tâches
          </p>
        </div>
      </section>

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
