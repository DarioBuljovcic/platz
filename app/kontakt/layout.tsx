import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Platz Caffe",
  description:
    "Adresa, radno vreme i kontakt podaci za Platz Caffe u Subotici. Trg Cara Jovana Nenada 9.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
