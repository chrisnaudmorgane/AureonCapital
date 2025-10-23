import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/card";
import { GlassInput } from "@/components/ui/input";
import { createTypography, createGlassEffect, createAnimation } from "@/lib/glass-effects";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className={createTypography("h1", "aureon-text-gradient")}>
            AureonCapital
          </h1>
          <p className={createTypography("bodyLarge", "text-muted-foreground max-w-2xl mx-auto")}>
            Investir dans l&apos;intelligence du futur
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="gold">
              Découvrir nos investissements
            </Button>
            <Button size="lg" variant="outline-blue">
              Rejoindre le portefeuille
            </Button>
          </div>
          
          {/* Design System Test Card */}
          <GlassCard className="p-8 max-w-2xl mx-auto mt-12">
            <h3 className={createTypography("h4", "mb-6 text-aureon-gold")}>
              Design System & Typography Test
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Typography Examples */}
              <div className="space-y-4">
                <h4 className={createTypography("h5", "text-aureon-blue mb-3")}>Typography</h4>
                <div className="space-y-2 text-left">
                  <p className={createTypography("h6")}>Heading 6 - Satoshi Medium</p>
                  <p className={createTypography("body")}>Body text - Inter Regular</p>
                  <p className={createTypography("bodySmall", "text-muted-foreground")}>Small text - Inter Regular</p>
                  <p className={createTypography("body", "aureon-text-gradient")}>Gradient text effect</p>
                </div>
              </div>
              
              {/* Button Variants */}
              <div className="space-y-4">
                <h4 className={createTypography("h5", "text-aureon-blue mb-3")}>Button Variants</h4>
                <div className="space-y-2">
                  <Button variant="gold" size="sm" className="w-full">Gold Button</Button>
                  <Button variant="glass" size="sm" className="w-full">Glass Button</Button>
                  <Button variant="glass-gold" size="sm" className="w-full">Glass Gold</Button>
                  <Button variant="outline-gold" size="sm" className="w-full">Outline Gold</Button>
                </div>
              </div>
            </div>
            
            {/* Input Examples */}
            <div className="mt-6 space-y-4">
              <h4 className={createTypography("h5", "text-aureon-blue")}>Glass Input Components</h4>
              <div className="space-y-3">
                <GlassInput placeholder="Nom complet" />
                <GlassInput type="email" placeholder="Email" />
                <GlassInput placeholder="Message" />
              </div>
            </div>
            
            {/* Status Checklist */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <h4 className={createTypography("h5", "text-aureon-gold mb-4")}>Implementation Status</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-left">
                <p>✅ Satoshi & Inter fonts configured</p>
                <p>✅ Design tokens system</p>
                <p>✅ AureonCapital color palette</p>
                <p>✅ Glass morphism effects</p>
                <p>✅ Custom button variants</p>
                <p>✅ Glass input components</p>
                <p>✅ Typography utilities</p>
                <p>✅ Animation system ready</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </main>
    </div>
  );
}
