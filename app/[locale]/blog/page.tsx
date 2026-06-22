import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import BlogCard from '@/components/BlogCard';
import { getAllBlogPostsMeta } from '@/lib/mdx';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });
  return { title: t('title') };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BlogContent locale={locale} />;
}

function BlogContent({ locale }: { locale: string }) {
  const t = useTranslations('Blog');
  const posts = getAllBlogPostsMeta();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="font-display text-3xl sm:text-4xl mb-4">{t('title')}</h1>
      <p className="text-text-secondary max-w-xl mb-12">{t('intro')}</p>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} locale={locale} />
        ))}
      </div>
    </div>
  );
}
