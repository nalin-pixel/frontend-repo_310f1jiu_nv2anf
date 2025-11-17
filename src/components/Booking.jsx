import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function Booking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('Discovery Call')
  const [notes, setNotes] = useState('')
  const [date, setDate] = useState(null)
  const [status, setStatus] = useState({ type: 'idle' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!date) {
      setStatus({ type: 'error', message: 'Please select a date and time.' })
      return
    }
    setStatus({ type: 'loading' })

    const payload = {
      name,
      email,
      service,
      date: date.toISOString(),
      notes,
    }

    try {
      const res = await fetch(`${baseUrl}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to book')
      setStatus({ type: 'success', message: 'Appointment booked! Check your email for confirmation.' })
      setName(''); setEmail(''); setNotes(''); setDate(null)
    } catch (err) {
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">Book an Appointment</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} required className="w-full rounded-md border border-zinc-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Email</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full rounded-md border border-zinc-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Service</label>
              <select value={service} onChange={e=>setService(e.target.value)} className="w-full rounded-md border border-zinc-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2">
                <option>Discovery Call</option>
                <option>UI/UX + Frontend</option>
                <option>Backend & API</option>
                <option>AI & Automation</option>
                <option>Full‑stack Build</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Date & Time</label>
              <div className="rounded-md border border-zinc-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2">
                <DatePicker
                  selected={date}
                  onChange={setDate}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="bg-transparent outline-none w-full"
                  placeholderText="Select date and time"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-700 dark:text-zinc-300 mb-1">Notes</label>
            <textarea value={notes} onChange={e=>setNotes(e.target.value)} rows={4} className="w-full rounded-md border border-zinc-900/10 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2" placeholder="Tell us about your project..." />
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-6 py-3 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:opacity-90">Book Now</button>
            {status.type === 'loading' && <p className="text-zinc-600 dark:text-zinc-300">Booking...</p>}
            {status.type === 'success' && <p className="text-emerald-600">{status.message}</p>}
            {status.type === 'error' && <p className="text-red-600">{status.message}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
