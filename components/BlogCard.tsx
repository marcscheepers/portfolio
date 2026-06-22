import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { BlogPostMeta } from '@/lib/mdx';

export default function BlogCard({ post, locale }: { post: BlogPostMeta; locale: string }) {
  const t = useTranslations('Blog');

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="block border border-border rounded-lg p-6 hover:border-accent transition-colors"
    >
      <p className="dateline mb-3">
        {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
        {' · '}
        {t('minutesRead', { minutes: post.readingMinutes })}
      </p>
      <h3 className="font-display text-xl mb-2">{post.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
    </Link>
  );
}
