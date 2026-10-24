'use client'

import { CheckCircle2, Loader2 } from 'lucide-react'
import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID

const fieldClass =
  'w-full rounded-xl border border-ink/20 bg-white/60 px-4 py-3 text-base text-ink placeholder:text-ink/45 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/20'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!formId) {
      setStatus('error')
      setError('The contact form is not configured yet. Please email me directly.')
      return
    }
    setStatus('sending')
    setError('')
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong while sending. Please try again or email me directly.')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center gap-4 rounded-2xl bg-sand p-8 text-ink md:p-10">
        <CheckCircle2 className="size-10" aria-hidden="true" />
        <h3 className="font-display text-4xl uppercase">Message sent</h3>
        <p className="text-base leading-relaxed">Thank you for reaching out. I will get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-semibold uppercase tracking-wider underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl bg-sand p-6 text-ink md:p-10">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
          Name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" maxLength={100} className={fieldClass} placeholder="Your name" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" maxLength={200} className={fieldClass} placeholder="you@example.com" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} maxLength={3000} className={`${fieldClass} resize-y`} placeholder="Tell me about your brand or project" />
      </div>
      {status === 'error' && (
        <p role="alert" className="text-sm font-medium text-red-800">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-opacity hover:opacity-90 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {status === 'sending' && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {status === 'sending' ? 'Sending' : 'Send Message'}
      </button>
    </form>
  )
}
