import type { SkillGroup, Testimonial } from '@/content/cv';

export function SkillTags({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {groups.map((group) => (
        <div key={group.category}>
          <p className="dateline mb-3">{group.category}</p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 rounded-full border border-border text-text-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="border border-border rounded-lg p-6">
      <blockquote className="font-display text-lg leading-relaxed mb-4">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="text-sm text-text-secondary">
        <span className="text-text font-medium">{testimonial.name}</span> — {testimonial.title}
      </figcaption>
    </figure>
  );
}
