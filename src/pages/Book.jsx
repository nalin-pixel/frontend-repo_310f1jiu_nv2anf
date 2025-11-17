import Booking from '../components/Booking'

export default function BookPage(){
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">Book a Consultation</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl">Choose a time that works for you. We’ll discuss goals, scope, and timelines.</p>
      </div>
      <Booking />
    </div>
  )
}
