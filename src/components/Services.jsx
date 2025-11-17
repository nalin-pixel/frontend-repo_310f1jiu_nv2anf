import { CodeBracketIcon, CpuChipIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Web Applications',
    desc: 'Next‑gen, scalable web apps with React, Node, and cloud‑native architectures.',
    icon: CodeBracketIcon,
  },
  {
    title: 'AI & Automation',
    desc: 'Integrate AI, agents, and automation to supercharge your workflows and products.',
    icon: CpuChipIcon,
  },
  {
    title: 'Mobile & Cross‑Platform',
    desc: 'High‑quality mobile apps with React Native and modern tooling.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'DevOps & Cloud',
    desc: 'CI/CD, observability, and cloud infrastructure that scales with your business.',
    icon: WrenchScrewdriverIcon,
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Services</h2>
          <p className="mt-3 text-zinc-700 dark:text-zinc-300 max-w-2xl">Expert engineering from concept to launch. We partner with founders and teams to build premium products.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-zinc-900/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur hover:shadow-xl transition">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white grid place-items-center shadow-md">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
