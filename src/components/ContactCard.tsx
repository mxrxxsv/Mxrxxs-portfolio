import { useState } from 'react'

export default function ContactCard() {
  const email = 'mariusjamess26@gmail.com'
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // fallback
      const el = document.createElement('textarea')
      el.value = email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div>
      <h3 className="font-medium">Have a project in mind?</h3>
      <p className="text-[var(--muted)] mt-2">Let's build something together.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={copy} className="btn btn-primary">
          {copied ? 'Copied!' : 'Copy email'}
        </button>
      </div>
    </div>
  )
}
