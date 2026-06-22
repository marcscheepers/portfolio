import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import { ArrowLeft } from 'lucide-react';
import { getAllBlogSlugs, getBlogPostRaw } from '@/lib/mdx';

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  try {
    const { frontmatter } = getBlogPostRaw(slug);
    return { title: frontmatter.title, description: frontmatter.excerpt };
  } catch {
    return {};
  }
}

const mdxComponents = {
  h2: (props: any) => <h2 className="font-display text-2xl mt-10 mb-4" {...props} />,
  h3: (props: any) => <h3 className="font-display text-xl mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-5 text-text" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-accent pl-4 italic text-text-secondary my-6" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-bg-secondary px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-bg-secondary rounded-lg p-4 overflow-x-auto my-6 text-sm" {...props} />
  ),
  ul: (props: any) => <ul className="list-disc pl-6 mb-5 space-y-1" {...props} />
};

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  let raw: string;
  let frontmatter: { title: string; date: string; excerpt: string };

  try {
    const data = getBlogPostRaw(slug);
    raw = data.content;
    frontmatter = data.frontmatter;
  } catch {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'Blog' });
  const stats = readingTime(raw!);

  const { content } = await compileMDX<{ title: string }>({
    source: raw!,
    components: mdxComponents,
    options: { parseFrontmatter: false }
  });

  return (
    <article className="max-w-prose mx-auto px-6 py-16">
      <Link
        href={`/${locale}/blog`}
        className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text mb-10 transition-colors"
      >
        <ArrowLeft size={14} /> {t('backToBlog')}
      </Link>

      <p className="dateline mb-4">
        {new Date(frontmatter!.date).toLocaleDateString(locale, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
        {' · '}
        {t('minutesRead', { minutes: Math.max(1, Math.ceil(stats.minutes)) })}
      </p>

      <h1 className="font-display text-3xl sm:text-4xl mb-10 leading-tight">{frontmatter!.title}</h1>

      <div>{content}</div>
    </article>
  );
}
