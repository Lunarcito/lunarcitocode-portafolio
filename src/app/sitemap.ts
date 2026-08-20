import type { MetadataRoute } from "next";

const siteUrl = "https://main.d10sbmir8ourmp.amplifyapp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
