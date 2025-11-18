import resume from './../assets/Resume_JamesMariusSantos.pdf'

type AboutCardProps = {
  /** Path or URL to the resume PDF that will be opened in a new tab. E.g. '/resume.pdf' */
  defaultResume?: string
}

export default function AboutCard({ defaultResume }: AboutCardProps) {
  const resumePath = defaultResume ?? resume

  return (
    <div className="h-full transform transition-transform hover:scale-105">
      <h3 className="text-lg font-medium">About</h3>
      <p className="mt-3 text-[var(--muted)]">Passionate and detail-oriented developer specializing in database systems, AI-driven analytics, and modern web development. Skilled in crafting intuitive UI/UX and building secure data driven applications. Continuously learning and adapting.</p>

      <div className="mt-4">
        <a href={resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost cv-btn">View CV -</a>
      </div>
    </div>
  )
}
