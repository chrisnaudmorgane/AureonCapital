import { ReactNode } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { ResponsiveIndicator } from '@/components/dev/responsive-indicator';
import { ResponsiveTestSuite } from '@/components/dev/responsive-test-suite';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
      <ResponsiveIndicator />
      <ResponsiveTestSuite />
    </div>
  );
}