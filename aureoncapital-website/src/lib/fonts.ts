import { Inter } from "next/font/google";

// Inter font from Google Fonts
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Satoshi font (using system fonts as fallback until actual font files are added)
// TODO: Replace with actual Satoshi font files from https://www.fontshare.com/fonts/satoshi
export const satoshi = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});