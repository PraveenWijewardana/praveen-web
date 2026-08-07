import type { MetadataRoute } from "next";
import { site, hero } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${site.url}/assets/og.jpg`,
        `${site.url}/opengraph-image.png`,
        `${site.url}${hero.portrait}`,
      ],
    },
  ];
}
