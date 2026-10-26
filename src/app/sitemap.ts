import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/connect", "/work", "/journal", "/about"].map((path) => ({
    url: `${site.url}${path}`,
  }));
}
