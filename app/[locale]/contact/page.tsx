import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });
  return { title: t('title') };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations('Contact');

  return (
    <div className="max-w-prose mx-auto px-6 py-16">
      <h1 className="font-display text-3xl sm:text-4xl mb-4">{t('title')}</h1>
      <p className="text-text-secondary mb-10">{t('intro')}</p>

      <ContactForm />

      <p className="text-sm text-text-secondary mt-10">
        {t('directly')}{' '}
        <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
          {siteConfig.email}
        </a>
      </p>
    </div>
  );
}
