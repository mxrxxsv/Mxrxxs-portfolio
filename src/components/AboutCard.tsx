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
      <p className="mt-3 text-[var(--muted)]">Experienced in data entry and information management, ensuring accuracy and efficiency. Passionate about using technology and analytics to improve productivity, streamline operations, and deliver effective digital solutions.</p>

      <div className="mt-4">
        <a href={resumePath} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ textDecoration: 'none' }}>View CV</a>
      </div>
    </div>
  )
}
