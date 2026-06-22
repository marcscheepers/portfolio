'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n';

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(target: Locale) {
    const segments = pathname.split('/');
    segments[1] = target;
    router.push(segments.join('/'));
  }

  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="text-text-secondary mx-1">/</span>}
          <button
            onClick={() => switchTo(l)}
            className={
              l === locale
                ? 'text-text font-semibold uppercase'
                : 'text-text-secondary hover:text-text uppercase transition-colors'
            }
            aria-current={l === locale}
          >
            {l}
          </button>
        </span>
      ))}
    </div>
  );
}
