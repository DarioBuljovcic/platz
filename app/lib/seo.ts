import type { Metadata } from "next";

export const siteConfig = {
  name: "Platz Caffe",
  shortName: "Platz",
  tagline: "Kafić u Subotici",
  description:
    "Platz je tvoje svakodnevno mesto za predah u srcu Subotice. Kvalitetna kafa, kokteli i prijatna atmosfera u centru grada.",
  url: "https://caffeplatz.rs",
  locale: "sr_RS",
  language: "sr-RS",
  ogImage: "/og-image.jpg",
  email: "caffeplatz@gmail.com",
  phone: "+381638024696",
  address: {
    street: "Trg Cara Jovana Nenada 9",
    locality: "Subotica",
    postalCode: "24000",
    country: "RS",
    entrance: "Ulaz sa Trga Republike 10",
  },
  social: {
    instagram: "https://www.instagram.com/caffeplatz/",
    facebook: "https://www.facebook.com/people/Platz-Caffe/61577870382643/",
  },
  geo: {
    latitude: 46.1007043,
    longitude: 19.6640792,
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      hours: "07:00-23:00",
    },
    { days: ["Friday", "Saturday"], hours: "07:00-00:00" },
  ],
  keywords: [
    "kafić Subotica",
    "kafa Subotica",
    "kokteli Subotica",
    "Platz Caffe",
    "cafe Subotica",
    "coffee Subotica",
    "kafić centar Subotica",
    "Trg Republike kafić",
    "caffeplatz.rs",
  ],
  themeColor: "#263D2F",
  backgroundColor: "#263D2F",
} as const;

export const staticRoutes = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/menu", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/o-nama", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/kontakt", changeFrequency: "monthly" as const, priority: 0.8 },
  {
    path: "/politika-privatnosti",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
  {
    path: "/uslovi-koriscenja",
    changeFrequency: "yearly" as const,
    priority: 0.3,
  },
];

export const menuCategorySlugs = [
  "kafe-i-topli-napici",
  "bezalkoholni-napici",
  "alkoholna-pica",
  "kokteli",
] as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  image,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path || "/";
  const url =
    canonicalPath === "/"
      ? siteConfig.url
      : `${siteConfig.url}${canonicalPath}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} u Subotici`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: { index: false, follow: true },
    }),
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "food",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      [siteConfig.language]: siteConfig.url,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} u Subotici`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/Logo.webp",
  },
  other: {
    "geo.region": "RS-VO",
    "geo.placename": "Subotica",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "$$",
    servesCuisine: "Coffee, Cocktails",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHours.map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.days,
      opens: entry.hours.split("-")[0],
      closes: entry.hours.split("-")[1],
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/Logo.webp`,
    },
  };
}
