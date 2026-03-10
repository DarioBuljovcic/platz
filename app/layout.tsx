import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

export const metadata: Metadata = {
  title: "Platz | The Everyday Place to Pause",
  description: "Mesto gde se može pronaći najbolja kafa u Subotici. Od jutarnjeg espressa do večernjeg pića sa prijateljima, Platz je tvoje svakodnevno mesto za predah, druženje i punjenje baterija.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="rs" className="scroll-smooth">
      <body className={`${displayFont.variable} ${textFont.variable} font-sans text-brown bg-beige`}>
        <Header />
        <div className="w-full">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
