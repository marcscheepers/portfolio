import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ExternalLink } from 'lucide-react';
import { mediaItems } from '@/content/media';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Media' });
  return { title: t('title') };
}

export default async function MediaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MediaContent locale={locale} />;
}

function MediaContent({ locale }: { locale: string }) {
  const t = useTranslations('Media');

  const grouped = mediaItems.reduce<Record<string, typeof mediaItems>>((acc, item) => {
    const year = new Date(item.date).getFullYear().toString();
    acc[year] = acc[year] ? [...acc[year], item] : [item];
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-prose mx-auto px-6 py-16">
      <h1 className="font-display text-3xl sm:text-4xl mb-4">{t('title')}</h1>
      <p className="text-text-secondary mb-12">{t('intro')}</p>

      {years.map((year) => (
        <div key={year} className="mb-12">
          <p className="dateline mb-6">{year}</p>
          <div className="space-y-6">
            {grouped[year].map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-l-2 border-border hover:border-accent pl-5 transition-colors"
              >
                <p className="text-sm text-text-secondary mb-1">{item.source}</p>
                <h3 className="font-display text-lg mb-1 flex items-center gap-2">
                  {item.title}
                  <ExternalLink size={14} className="text-text-secondary" />
                </h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
