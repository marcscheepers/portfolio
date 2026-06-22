'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X, Linkedin } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { siteConfig } from '@/lib/config';

export default function Navbar({ locale }: { locale: string }) {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/cv`, label: t('cv') },
    { href: `/${locale}/projects`, label: t('projects') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/linkedin`, label: t('linkedin') },
    { href: `/${locale}/media`, label: t('media') },
    { href: `/${locale}/contact`, label: t('contact') }
  ];

  function isActive(href: string) {
    return pathname === href;
  }

  return (
    <header className="border-b border-border sticky top-0 z-50 bg-bg/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="font-display text-lg font-medium">
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? 'text-text font-medium border-b border-accent pb-1'
                  : 'text-text-secondary hover:text-text transition-colors pb-1'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profiel"
            className="p-2 rounded-full hover:bg-bg-secondary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Sluit menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={isActive(link.href) ? 'text-text font-medium' : 'text-text-secondary'}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <a href={siteConfig.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profiel">
              <Linkedin size={18} />
            </a>
            <LanguageSwitcher locale={locale} />
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
