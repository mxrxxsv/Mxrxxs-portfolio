import { useState } from 'react'

export default function SubscribeCard() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="h-full transform transition-transform hover:scale-105">
      <h3 className="font-medium">Get tips & guides</h3>
      <p className="text-[var(--muted)] mt-2">Get tips & guides straight to your inbox</p>
      <form onSubmit={submit} className="mt-3 flex gap-2">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@domain.com"
          className="input-text flex-1"
        />
        <button className="btn btn-primary">Subscribe</button>
      </form>
      {subscribed && <p className="mt-2 text-sm text-[var(--muted)]">Thanks! Check your inbox.</p>}
    </div>
  )
}
