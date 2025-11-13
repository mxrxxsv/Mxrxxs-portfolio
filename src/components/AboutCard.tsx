export default function AboutCard() {
  return (
    <div className="h-full transform transition-transform hover:scale-105">
      <h3 className="text-lg font-medium">About</h3>
      <p className="mt-3 text-[var(--muted)]">Passionate about crafting accessible, performant apps. I enjoy solving problems and refining product experiences.</p>
      <div className="mt-4">
        <button className="btn btn-ghost">Learn more →</button>
      </div>
    </div>
  )
}
