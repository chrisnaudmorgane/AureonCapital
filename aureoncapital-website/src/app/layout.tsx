import type { Metadata } from "next";
import "./globals.css";
import { inter, satoshi } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "AureonCapital - Investir dans l'intelligence du futur",
  description: "AureonCapital, filiale d'investissement d'Aureon AI Group, investit dans l'avenir de l'intelligence artificielle et des technologies innovantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${inter.variable} ${satoshi.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
