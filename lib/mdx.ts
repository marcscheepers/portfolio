import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export type BlogFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getBlogPostRaw(slug: string): { content: string; frontmatter: BlogFrontmatter } {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  return { content, frontmatter: data as BlogFrontmatter };
}

export function getAllBlogPostsMeta(): BlogPostMeta[] {
  const slugs = getAllBlogSlugs();
  const posts = slugs.map((slug) => {
    const { content, frontmatter } = getBlogPostRaw(slug);
    const stats = readingTime(content);
    return {
      slug,
      ...frontmatter,
      readingMinutes: Math.max(1, Math.ceil(stats.minutes))
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
