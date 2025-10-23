import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold aureon-text-gradient">
            AureonCapital
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Investir dans l&apos;intelligence du futur
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Découvrir nos investissements
            </Button>
            <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              Rejoindre le portefeuille
            </Button>
          </div>
          
          <Card className="glass-card p-8 max-w-md mx-auto mt-12">
            <h3 className="text-xl font-semibold mb-4">Configuration Test</h3>
            <div className="space-y-2 text-sm">
              <p>✅ Next.js 14+ with App Router</p>
              <p>✅ TailwindCSS with custom colors</p>
              <p>✅ ShadCN UI components</p>
              <p>✅ Framer Motion installed</p>
              <p>✅ TypeScript configured</p>
              <p>✅ ESLint configured</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
