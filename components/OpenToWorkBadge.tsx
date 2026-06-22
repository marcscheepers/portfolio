import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/config';

export default function OpenToWorkBadge() {
  const t = useTranslations('Home');

  if (!siteConfig.openToWork) return null;

  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wide px-3 py-1 rounded-full border border-accent text-accent">
      <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
      {t('openToWork')}
    </span>
  );
}
