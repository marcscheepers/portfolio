import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import OpenToWorkBadge from '@/components/OpenToWorkBadge';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import { siteConfig } from '@/lib/config';
import { projects } from '@/content/projects';
import { getAllBlogPostsMeta } from '@/lib/mdx';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });
  return {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeContent locale={locale} />;
}

function HomeContent({ locale }: { locale: string }) {
  const t = useTranslations('Home');
  const featured = projects.slice(0, 3);
  const posts = getAllBlogPostsMeta().slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6">
      <section className="py-20 sm:py-28">
        <p className="dateline mb-4">Utrecht, NL</p>
        <div className="mb-4">
          <OpenToWorkBadge />
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-medium leading-[1.1] mb-6 max-w-2xl">
          {siteConfig.name}
        </h1>
        <p className="text-lg text-text-secondary max-w-xl mb-8">{siteConfig.description}</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${locale}/projects`}
            className="bg-accent text-bg px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {t('ctaProjects')}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="border border-border px-5 py-2.5 rounded-md text-sm font-medium hover:border-accent transition-colors"
          >
            {t('ctaContact')}
          </Link>
        </div>
      </section>

      <section className="py-16 border-t border-border">
        <h2 className="dateline mb-8">{t('featuredProjects')}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section className="py-16 border-t border-border">
          <h2 className="dateline mb-8">{t('latestPosts')}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        </section>
      )}

      <section className="py-16 border-t border-border">
        <p className="text-text-secondary max-w-xl mb-4">{t('aboutTeaser')}</p>
        <Link href={`/${locale}/cv`} className="text-accent text-sm font-medium hover:underline">
          {t('aboutLink')} →
        </Link>
      </section>
    </div>
  );
}
