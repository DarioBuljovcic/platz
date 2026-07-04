import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";
import {
  defaultMetadata,
  getLocalBusinessJsonLd,
  getWebSiteJsonLd,
} from "./lib/seo";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const textFont = Outfit({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <body className={`${displayFont.variable} ${textFont.variable} font-sans text-brown bg-green-accent`}>
        <JsonLd data={[getLocalBusinessJsonLd(), getWebSiteJsonLd()]} />
        <Header />
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
