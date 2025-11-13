type Props = {
  title: string
}

export default function ProjectCard({ title }: Props) {
  return (
    <div className="project-card">
      <div className="project-hero">
        <img src={`https://picsum.photos/seed/${title.replace(/\s+/g,'')}/800/520`} alt={title} className="project-img" />
      </div>
      <div className="mt-3">
        <h4 className="font-medium">{title}</h4>
        <p className="text-[var(--muted)] text-sm mt-1">A short description and mockup of the project.</p>
      </div>
    </div>
  )
}
