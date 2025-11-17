import PortfolioGrid from '../components/Portfolio'

export default function PortfolioPage(){
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">Work & Case Studies</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl">Browse selected work. Filter by type to find relevant examples.</p>
      </div>
      <PortfolioGrid />
    </div>
  )
}
