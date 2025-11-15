const socials: { name: string; href: string }[] = [
    { name: 'Twitter', href: 'https://x.com/mxrxxsx' },
    { name: 'GitHub', href: 'https://github.com/mxrxxsv' },
    { name: 'Instagram', href: 'https://www.instagram.com/mxrxxs_x/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/james-marius-santos-584707279' },
    { name: 'Facebook', href: 'https://www.facebook.com/jamesmarius.26/' },
    { name: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mariusjamess26@gmail.com' }
]

function Icon({ name }: { name: string }) {
    const common = { width: 28, height: 28, fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }
    switch (name) {
        case 'Twitter':
            return (
                <svg {...common} viewBox="0 0 24 24" aria-hidden>
                    <path d="M23 4.5c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.7-2.5.9C19 3 17.7 2.5 16.3 2.5c-2 0-3.5 1.7-3.5 3.8 0 .3 0 .6.1.9C9.6 7 6.5 5.6 4.6 3.3c-.3.6-.5 1.3-.5 2 0 1.3.7 2.5 1.8 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.6 3 4-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.2 3 2.2-1.1.9-2.5 1.4-4 1.4-.3 0-.6 0-.9-.1 1.4.9 3.1 1.4 4.9 1.4 5.9 0 9.2-5 9.2-9.4v-.4c.7-.5 1.3-1.1 1.8-1.8-.7.3-1.5.5-2.3.6z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'GitHub':
            return (
                <svg {...common} viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1 1.6.8 1.6.8.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.7-.3-5.6-1.4-5.6-6 0-1.3.5-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.4 0 0 .9-.3 3 .1a10.3 10.3 0 015.5 0c2.1-.4 3-.1 3-.1.6 1.8.2 3.1.1 3.4.7.9 1.1 1.9 1.1 3.2 0 4.6-2.9 5.6-5.7 5.9.4.4.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0012 .5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'Instagram':
            return (
                <svg {...common} viewBox="0 0 24 24" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <path d="M16 11.4a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.5 6.5h.01" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'LinkedIn':
            return (
                <svg {...common} viewBox="0 0 24 24" aria-hidden>
                    <path d="M4.98 3.5C3.88 3.5 3 4.4 3 5.5s.88 2 1.98 2S7 6.6 7 5.5 6.08 3.5 4.98 3.5zM3.5 8.5H6.5V20.5H3.5zM9.5 8.5H12.3v1.6h.1c.4-.8 1.6-1.6 3.3-1.6 3.5 0 4.2 2.3 4.2 5.3V20.5H18.3v-5.5c0-1.3 0-3-1.8-3-1.8 0-2 1.4-2 2.9V20.5H9.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'Facebook':
            return (
                <svg {...common} viewBox="0 0 24 24" aria-hidden>
                    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07C1.86 17 5.92 21 10.66 21v-6.62H8.12V12.1h2.54V9.8c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.47h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.75l-.44 2.28h-2.31V21c4.74 0 8.8-4 8.8-8.93z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case 'Email':
            return (
                <svg {...common} viewBox="0 0 24 24" aria-hidden>
                    <path d="M3 7.5l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                </svg>
            )
        default:
            return null
    }
}

export default function SocialLinks() {
    return (
        <div className="social-links" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <style>{`
                /* social tile variables (fall back to sensible values) */
                :root { --social-border: rgba(255,255,255,0.06); --social-border-hover: rgba(255,255,255,0.14); }
                @media (prefers-color-scheme: light) {
                    :root { --social-border: rgba(15,23,42,0.20); --social-border-hover: rgba(15,23,42,0.28); }
                }

                .social-title { font-size: 0.95rem; margin: 0 0 6px 0; color: var(--muted-text, #94a3b8); }
                .social-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; justify-items: center; }
                /* Larger social tiles so icons are more prominent */
                .social-btn { display: inline-flex; align-items: center; justify-content: center; width: 72px; height: 72px; border-radius: 14px; background: transparent; color: inherit; text-decoration: none; border: 1px solid var(--social-border); box-shadow: none; transition: transform .14s ease, border-color .14s ease; }
                .social-btn:focus { outline: 2px solid rgba(0,0,0,0.06); outline-offset: 4px; }
                .social-btn:hover { transform: translateY(-4px); border-color: var(--social-border-hover); }
                /* Ensure borders are visible in explicit light mode (when html does not have .dark) */
                html:not(.dark) .social-btn {
                    border-color: rgba(15,23,42,0.22) !important;
                    background: rgba(15,23,42,0.02);
                }
                html:not(.dark) .social-btn:hover {
                    border-color: rgba(15,23,42,0.36) !important;
                }
                                .social-btn svg { width: 28px; height: 28px; }
                                /* make icons even larger on wide screens */
                                @media (min-width: 1024px) {
                                    .social-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
                                    .social-btn { width: 80px; height: 80px; }
                                    .social-btn svg { width: 32px; height: 32px; }
                                }
            `}</style>

            <div className="social-grid" aria-label="social links">
                {socials.map((s) => (
                    <a
                        key={s.name}
                        href={s.href}
                        aria-label={s.name}
                        className="social-btn"
                        rel="noopener noreferrer"
                        target="_blank" 
                    >
                        <Icon name={s.name} />
                    </a>
                ))}
            </div>
        </div>
    )
}
