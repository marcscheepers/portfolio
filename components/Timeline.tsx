import type { TimelineEntry } from '@/content/cv';

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="space-y-8">
      {entries.map((entry, i) => (
        <div key={i} className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-8">
          <p className="dateline pt-1">{entry.period}</p>
          <div className="border-l border-border pl-6 pb-2">
            <h3 className="font-display text-lg">{entry.title}</h3>
            <p className="text-accent text-sm mb-2">{entry.organization}</p>
            <p className="text-text-secondary text-sm leading-relaxed">{entry.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
