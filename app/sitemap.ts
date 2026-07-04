import type { MetadataRoute } from "next";
import {
  menuCategorySlugs,
  siteConfig,
  staticRoutes,
} from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const menuCategories = menuCategorySlugs.map((slug) => ({
    url: `${siteConfig.url}/menu?cat=${slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...pages, ...menuCategories];
}
