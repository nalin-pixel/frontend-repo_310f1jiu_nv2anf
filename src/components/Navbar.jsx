import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-700/30 dark:border-zinc-100/10 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-white/5 transition"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
        : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-white/10'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-zinc-900/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg">
              <CodeBracketIcon className="h-5 w-5" />
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">MyCode</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
            <NavLink to="/book" className={navLinkClass}>Book</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a href="#contact-cta" className="px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow hover:opacity-90">Get a Quote</a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-white/10" onClick={() => setOpen(!open)}>
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-900/10 dark:border-white/10 bg-white/60 dark:bg-black/30 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/portfolio" className={navLinkClass} onClick={() => setOpen(false)}>Portfolio</NavLink>
            <NavLink to="/book" className={navLinkClass} onClick={() => setOpen(false)}>Book</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
            <div className="pt-2"><ThemeToggle /></div>
          </div>
        </div>
      )}
    </header>
  )
}
