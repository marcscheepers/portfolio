import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Download } from 'lucide-react';
import Timeline from '@/components/Timeline';
import { SkillTags, TestimonialCard } from '@/components/CvBlocks';
import { experience, education, skillGroups, testimonials } from '@/content/cv';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'CV' });
  return { title: t('title') };
}

export default async function CvPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CvContent />;
}

function CvContent() {
  const t = useTranslations('CV');

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 relative">
      <a
        href="/cv.pdf"
        download
        className="fixed sm:absolute top-20 sm:top-16 right-6 z-40 flex items-center gap-2 bg-accent text-bg px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
      >
        <Download size={16} />
        {t('downloadCv')}
      </a>

      <h1 className="font-display text-3xl sm:text-4xl mb-16">{t('title')}</h1>

      <section className="mb-16">
        <h2 className="dateline mb-8">{t('experience')}</h2>
        <Timeline entries={experience} />
      </section>

      <section className="mb-16">
        <h2 className="dateline mb-8">{t('education')}</h2>
        <Timeline entries={education} />
      </section>

      <section className="mb-16">
        <h2 className="dateline mb-8">{t('skills')}</h2>
        <SkillTags groups={skillGroups} />
      </section>

      <section>
        <h2 className="dateline mb-8">{t('testimonials')}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}
