import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { productCategories, products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, priority: 1 },
    { url: `${base}/brands`, priority: 0.8 },
    { url: `${base}/terms`, priority: 0.2 },
    { url: `${base}/privacy`, priority: 0.2 },
  ];

  const categoryPages: MetadataRoute.Sitemap = productCategories.map((c) => ({
    url: `${base}/products/${c.slug}`,
    priority: 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.category}/${p.slug}`,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...productPages];
}
