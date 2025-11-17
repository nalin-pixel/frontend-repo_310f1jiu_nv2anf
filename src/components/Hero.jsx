import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-black/80 dark:via-black/60 dark:to-black pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-40">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white"
          >
            Futuristic Programming Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-6 text-lg sm:text-xl leading-8 text-zinc-700 dark:text-zinc-300"
          >
            We build high‑performance web, mobile, and AI software with premium UX. From prototypes to production, MyCode ships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="/book" className="px-6 py-3 rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg hover:opacity-90">Book a Call</a>
            <a href="/portfolio" className="px-6 py-3 rounded-md border border-zinc-900/10 dark:border-white/10 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-white/10">View Portfolio</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
