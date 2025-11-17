import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState({ type: 'idle' })
  const baseUrl = import.meta.env.VITE_BACKEND_URL

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !subject || !message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' })
      return
    }

    setStatus({ type: 'loading' })
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus({ type: 'success', message: 'Message sent! We will get back soon.' })
      setName(''); setEmail(''); setSubject(''); setMessage('')
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <section className="py-20" id="contact-cta">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">Contact Us</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} required className="w-full rounded-md border border-zinc-900/10 dark:border:white/10 bg-white/70 dark:bg-white/5 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full rounded-md border border-zinc-900/10 dark:border:white/10 bg-white/70 dark:bg-white/5 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Subject</label>
            <input value={subject} onChange={e=>setSubject(e.target.value)} required className="w-full rounded-md border border-zinc-900/10 dark:border:white/10 bg-white/70 dark:bg-white/5 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Message</label>
            <textarea rows={5} value={message} onChange={e=>setMessage(e.target.value)} required className="w-full rounded-md border border-zinc-900/10 dark:border:white/10 bg-white/70 dark:bg-white/5 px-3 py-2" />
          </div>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-6 py-3 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:opacity-90">Send Message</button>
            {status.type === 'loading' && <p className="text-zinc-600 dark:text-zinc-300">Sending...</p>}
            {status.type === 'success' && <p className="text-emerald-600">{status.message}</p>}
            {status.type === 'error' && <p className="text-red-600">{status.message}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
