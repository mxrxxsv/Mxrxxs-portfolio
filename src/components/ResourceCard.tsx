export default function ResourceCard() {
  return (
    <div className="h-full transform transition-transform hover:scale-105">
      <h3 className="font-medium">Resources</h3>
      <p className="mt-2 text-[var(--muted)]">Resources to speed your workflow</p>
      <ul className="mt-3 space-y-2">
        <li>
          <a href="#" className="inline-flex items-center gap-2 text-[var(--accent)]">Design Tokens <span>↗</span></a>
        </li>
        <li>
          <a href="#" className="inline-flex items-center gap-2 text-[var(--accent)]">Component Kit <span>↗</span></a>
        </li>
      </ul>
    </div>
  )
}
