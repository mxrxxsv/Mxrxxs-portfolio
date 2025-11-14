type Props = {
  title: string
  titleCard?: string
  description?: string
}

export default function ProjectCard({ title, titleCard, description }: Props) {
  const labelId = titleCard ? `proj-${titleCard.replace(/\s+/g, '-').toLowerCase()}` : undefined

  return (
    <article className="project-card" aria-labelledby={labelId}>
      <div className="project-hero">
        <img
          src={`${title}`}
          sizes="(max-width: 1024px) 100vw, 33vw"
          loading="lazy"
          decoding="async"
          alt={title}
          className="project-img"
        />
        {titleCard && (
          <div className="project-title-overlay">
            <h3 id={labelId} className="project-overlay-title">{titleCard}</h3>
          </div>
        )}
      </div>
      <div className="project-meta">
        {!titleCard && <h4 className="font-medium">{title}</h4>}
        {description && <p className="project-desc">{description}</p>}
      </div>
      {/* footer removed by request - clean, minimal card */}
    </article>
  )
}
 