'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Eye, ThumbsUp, Heart, MessageCircle, ExternalLink } from 'lucide-react';
import type { LinkedInPost } from '@/content/linkedin-posts';

const CHAR_LIMIT = 220;

export default function LinkedInPostCard({ post, locale }: { post: LinkedInPost; locale: string }) {
  const t = useTranslations('LinkedIn');
  const [expanded, setExpanded] = useState(false);

  const isLong = post.text.length > CHAR_LIMIT;
  const displayText = expanded || !isLong ? post.text : `${post.text.slice(0, CHAR_LIMIT)}…`;

  return (
    <article className="border border-border rounded-lg p-6">
      <p className="dateline mb-3">
        {new Date(post.date).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <p className="text-text whitespace-pre-line leading-relaxed mb-2">{displayText}</p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-accent text-sm font-medium hover:underline mb-4"
        >
          {expanded ? t('readLess') : t('readMore')}
        </button>
      )}

      <div className="flex items-center justify-between border-t border-border pt-4 mt-4 flex-wrap gap-3">
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <span className="flex items-center gap-1.5" title={t('views')}>
            <Eye size={15} /> {post.views.toLocaleString(locale)}
          </span>
          <span className="flex items-center gap-1.5" title={t('likes')}>
            <ThumbsUp size={15} /> {post.likes.toLocaleString(locale)}
          </span>
          <span className="flex items-center gap-1.5" title={t('reactions')}>
            <Heart size={15} /> {post.reactions.toLocaleString(locale)}
          </span>
          <span className="flex items-center gap-1.5" title={t('comments')}>
            <MessageCircle size={15} /> {post.comments.toLocaleString(locale)}
          </span>
        </div>

        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-accent hover:underline"
        >
          {t('viewOnLinkedIn')} <ExternalLink size={14} />
        </a>
      </div>
    </article>
  );
}
