import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  const t = useTranslations('Footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-text-secondary">
        <p className="dateline">
          {siteConfig.name} — {year}
        </p>
        <p>{t('rights')}</p>
      </div>
    </footer>
  );
}
