import type { Project } from '@/content/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.url ? 'a' : 'div';
  const wrapperProps = project.url
    ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="block border border-border rounded-lg p-6 hover:border-accent transition-colors h-full"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="dateline">{project.category}</span>
        <span className="dateline">{project.year}</span>
      </div>
      <h3 className="font-display text-xl mb-2">{project.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
    </Wrapper>
  );
}
