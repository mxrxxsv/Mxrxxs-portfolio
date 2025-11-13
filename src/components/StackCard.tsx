import React from 'react'

const logos: { name: string; svg: React.ReactNode }[] = [
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 841.9 595.3" aria-hidden width="28" height="28">
        <g fill="none" stroke="currentColor" strokeWidth="20">
          <ellipse cx="420" cy="297" rx="250" ry="80" transform="rotate(60 420 297)" />
          <ellipse cx="420" cy="297" rx="250" ry="80" transform="rotate(0 420 297)" />
          <ellipse cx="420" cy="297" rx="250" ry="80" transform="rotate(120 420 297)" />
          <circle cx="420" cy="297" r="35" fill="currentColor" />
        </g>
      </svg>
    )
  },
  {
    name: 'Tailwind',
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <path fill="currentColor" d="M2 12s3-2 6-2 6 2 6 2 3-2 6-2v6s-3 0-6 0-6-2-6-2-3 2-6 2z" />
      </svg>
    )
  },
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <g fill="none">
          <circle cx="6" cy="6" r="3" fill="#F24E1E" />
          <rect x="6" y="3" width="6" height="6" rx="3" fill="#A259FF" />
          <circle cx="6" cy="15" r="3" fill="#FF7262" />
          <rect x="6" y="12" width="6" height="6" rx="3" fill="#1ABCFE" transform="translate(0,0)" />
        </g>
      </svg>
    )
  },
  {
    name: 'Notion',
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none" strokeWidth="1.5" />
        <path d="M8 7v10l8-5z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: 'TypeScript',
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6" />
        <text x="12" y="16" fontSize="10" textAnchor="middle" fill="#fff">TS</text>
      </svg>
    )
  },
  {
    name: 'Vite',
    svg: (
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden>
        <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" fill="currentColor" />
      </svg>
    )
  }
]

export default function StackCard() {
  // Duplicate logos so the CSS marquee feels continuous
  const display = [...logos, ...logos]

  return (
    <div>
      <h3 className="font-medium">Tech Stack</h3>
      <div className="mt-3">
        <div className="stack-carousel" aria-hidden>
          <div className="stack-track">
            {display.map((l, i) => (
              <div key={`${l.name}-${i}`} className="stack-item" title={l.name} aria-label={l.name}>
                {l.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
