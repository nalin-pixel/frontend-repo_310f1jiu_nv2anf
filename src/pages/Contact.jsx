import ContactForm from '../components/Contact'

export default function ContactPage(){
  return (
    <div className="pt-10">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-6">Let’s Talk</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-3xl">Tell us about your project and how we can help. We respond within one business day.</p>
      </div>
      <ContactForm />
    </div>
  )
}
