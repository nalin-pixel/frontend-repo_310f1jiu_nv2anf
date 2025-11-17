import ServicesGrid from '../components/Services'

export default function ServicesPage(){
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">What We Do</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl">From sleek frontends to resilient backends and AI integrations, we design and ship software that delights users and scales with demand.</p>
      </div>
      <ServicesGrid />
    </div>
  )
}
