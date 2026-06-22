import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Linkedin } from 'lucide-react';
import LinkedInPostCard from '@/components/LinkedInPostCard';
import { linkedInPosts } from '@/content/linkedin-posts';
import { siteConfig } from '@/lib/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'LinkedIn' });
  return { title: t('title') };
}

export default async function LinkedInPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <LinkedInContent locale={locale} />;
}

function LinkedInContent({ locale }: { locale: string }) {
  const t = useTranslations('LinkedIn');

  return (
    <div className="max-w-prose mx-auto px-6 py-16">
      <h1 className="font-display text-3xl sm:text-4xl mb-4">{t('title')}</h1>
      <p className="text-text-secondary mb-8">{t('intro')}</p>

      <a
        href={siteConfig.linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-accent text-bg px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity mb-12"
      >
        <Linkedin size={16} />
        {t('followCta')}
      </a>

      <div className="space-y-6">
        {linkedInPosts.map((post, i) => (
          <LinkedInPostCard key={i} post={post} locale={locale} />
        ))}
      </div>
    </div>
  );
}
