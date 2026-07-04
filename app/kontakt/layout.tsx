import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Adresa, radno vreme i kontakt podaci za Platz Caffe u Subotici. Trg Cara Jovana Nenada 9, ulaz sa Trga Republike 10.",
  path: "/kontakt",
});

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
