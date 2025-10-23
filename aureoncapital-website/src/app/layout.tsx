import type { Metadata } from "next";
import "./globals.css";
import { inter, satoshi } from "@/lib/fonts";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "AureonCapital - Investir dans l'intelligence du futur",
  description: "AureonCapital, filiale d'investissement d'Aureon AI Group, investit dans l'avenir de l'intelligence artificielle et des technologies innovantes.",
  keywords: "AureonCapital, investissement, intelligence artificielle, IA, FinTech, SaaS, automatisation",
  authors: [{ name: "Aureon AI Group" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${satoshi.variable} font-sans antialiased min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
