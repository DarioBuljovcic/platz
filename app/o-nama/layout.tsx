import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "O nama",
  description:
    "Upoznajte priču Platz Caffea — kafića u zaštićenoj secesijskoj zgradi na Trgu Republike u Subotici. Više od kafe, mesto za druženje i uživanje.",
  path: "/o-nama",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
