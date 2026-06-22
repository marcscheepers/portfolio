import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { getAllBlogSlugs } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/cv', '/projects', '/blog', '/linkedin', '/media', '/contact'];
  const slugs = getAllBlogSlugs();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    for (const route of routes) {
      entries.push({ url: `${siteConfig.url}/${locale}${route}` });
    }
    for (const slug of slugs) {
      entries.push({ url: `${siteConfig.url}/${locale}/blog/${slug}` });
    }
  }

  return entries;
}
