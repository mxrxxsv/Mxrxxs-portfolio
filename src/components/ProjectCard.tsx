type Props = {
  title: string
  titleCard?: string
  description?: string
}

export default function ProjectCard({ title, titleCard, description }: Props) {
  return (
    <div className="project-card">
      <div className="project-hero">
        <img src={`${title}`} alt={title} className="project-img" />
      </div>
      <div className="mt-3">
        <h4 className="font-medium">{titleCard}</h4>
        <p className="text-[var(--muted)] text-sm mt-1">{description}</p>
      </div>
    </div>
  )
}
 