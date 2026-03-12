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
  metadataBase: new URL("https://platz-blue.vercel.app"),
  title: "Platz Caffe | Kafić u Subotici",
  description: "Platz je tvoje svakodnevno mesto za predah u srcu Subotice. Kvalitetna kafa, kokteli i prijatna atmosfera na Trgu republike.",
  keywords: ["kafić Subotica", "kafa Subotica", "kokteli Subotica", "Platz Caffe", "cafe Subotica", "coffee Subotica"],
  openGraph: {
    title: "Platz Caffe | Kafić u Subotici",
    description: "Opuštena kafe kultura u Subotici.",
    url: "https://platz-blue.vercel.app",
    siteName: "Platz Caffe",
    locale: "sr_RS",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Platz Caffe",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Trg Cara Jovana Nenada 9",
    "addressLocality": "Subotica",
    "postalCode": "24000",
    "addressCountry": "RS"
  },
  "openingHours": "Mo-Su 07:00-23:00",
  "url": "https://platz-blue.vercel.app",
  "telephone": "+381 63 8024696",
  // "image": "https://platz-blue.vercel.app/og-image.jpg",
  "servesCuisine": "Coffee, Cocktails",
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
