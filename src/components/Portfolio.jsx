import { useEffect, useMemo, useState } from 'react'

const demoProjects = [
  { title: 'AI Analytics Dashboard', description: 'Realtime analytics with RAG summarization.', type: 'ai', tags: ['Next.js', 'OpenAI', 'RAG'] },
  { title: 'Fintech API Platform', description: 'Scalable API gateway with usage plans.', type: 'backend', tags: ['FastAPI', 'MongoDB', 'Redis'] },
  { title: 'Motion Website', description: 'Immersive 3D hero with Spline and motion.', type: 'web', tags: ['React', 'Spline', 'Framer'] },
  { title: 'Ops Automation', description: 'Event‑driven pipelines and observability.', type: 'devops', tags: ['K8s', 'Argo', 'Grafana'] },
]

export default function Portfolio({ compact = false }) {
  const [active, setActive] = useState('all')
  const baseUrl = import.meta.env.VITE_BACKEND_URL
  const [projects, setProjects] = useState(demoProjects)

  useEffect(() => {
    const fetchProjects = async () => {
      if (!baseUrl) return
      try {
        const res = await fetch(`${baseUrl}/api/projects`)
        if (res.ok) {
          const data = await res.json()
          if (Array.isArray(data) && data.length) setProjects(data)
        }
      } catch {}
    }
    fetchProjects()
  }, [baseUrl])

  const filtered = useMemo(() => {
    if (active === 'all') return projects
    return projects.filter(p => p.type === active)
  }, [active, projects])

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI' },
    { id: 'backend', label: 'Backend' },
    { id: 'devops', label: 'DevOps' },
  ]

  return (
    <section className={compact ? '' : 'py-20'}>
      <div className="mx-auto max-w-7xl px-6">
        {!compact && (
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Portfolio</h2>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300 max-w-2xl">Selected work demonstrating performance, polish, and reliability.</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)} className={`px-4 py-2 rounded-full border text-sm transition ${active === t.id ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' : 'border-zinc-900/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10'}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div key={i} className="group rounded-xl border border-zinc-900/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur hover:shadow-xl transition">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-zinc-900/10 dark:border-white/10 mb-4" />
              <h3 className="font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(p.tags || []).map((t, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-md text-xs bg-zinc-900/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
