import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Navbar />
      <main>{children}</main>
      <footer className="py-12 border-t border-zinc-900/10 dark:border-white/10 mt-20">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} MyCode. All rights reserved.</p>
          <a href="/book" className="px-4 py-2 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-sm font-semibold">Start a Project</a>
        </div>
      </footer>
    </div>
  )
}
