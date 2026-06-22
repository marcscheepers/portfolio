'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1)
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-prose">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          {t('name')}
        </label>
        <input
          id="name"
          {...register('name')}
          className="w-full border border-border bg-bg rounded-md px-3 py-2 text-sm"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{t('nameRequired')}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          {t('email')}
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full border border-border bg-bg rounded-md px-3 py-2 text-sm"
        />
        {errors.email && <p className="text-sm text-red-500 mt-1">{t('emailInvalid')}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          {t('subject')}
        </label>
        <input
          id="subject"
          {...register('subject')}
          className="w-full border border-border bg-bg rounded-md px-3 py-2 text-sm"
        />
        {errors.subject && <p className="text-sm text-red-500 mt-1">{t('subjectRequired')}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          {t('message')}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full border border-border bg-bg rounded-md px-3 py-2 text-sm"
        />
        {errors.message && <p className="text-sm text-red-500 mt-1">{t('messageRequired')}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-accent text-bg px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>

      {status === 'success' && <p className="text-sm text-accent">{t('success')}</p>}
      {status === 'error' && <p className="text-sm text-red-500">{t('error')}</p>}
    </form>
  );
}
