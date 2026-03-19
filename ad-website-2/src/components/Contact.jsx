import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight, Loader2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Google Apps Script endpoint ──
   Leave empty for demo mode (shows success state without POST).
   Replace with deployed web app URL once the script is live. */
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzPB17Z8g8HHolESuJjPT6mEDog2kAh-PRg3DE9MNE8weEdOhyRTVPvnAjpIfUOp3jvYw/exec'

/* ── Copy ── */
const EYEBROW = 'Get in Touch'
const HEADING = 'Start a Conversation.'
const SUBTEXT =
  'We respond within one business day. No obligation, no sales pitch — just a straightforward conversation about your operation.'

const EXPECT_ITEMS = [
  'A 30-minute call — you pick one process, we map it end to end',
  'Every point where time or money is leaking, identified',
  'Quick fixes for this quarter plus strategic recommendations',
  'A written diagnostic you keep — zero cost, no obligation',
]

const RESPONSE_DETAILS = [
  { label: 'Response Time', value: '< 1 Business Day' },
  { label: 'First Step', value: 'Discovery Call' },
  { label: 'Call Duration', value: '30 Minutes' },
  { label: 'Commitment', value: 'None Required' },
]

const SERVICE_OPTIONS = [
  'Custom Automation Roadmap',
  'Process Design Support',
  'Automation Solution Design',
  'Consultative Support Package',
  'Other',
]

const HEAR_OPTIONS = [
  'Select an option',
  'Google Search',
  'LinkedIn',
  'Referral',
  'Industry Event',
  'Other',
]

const TRUST_STATS = [
  { value: '< 1 Day', label: 'Response Time' },
  { value: '100%', label: 'Multi-Family Focus' },
  { value: 'No Pitch', label: 'Just Diagnosis' },
]

const INITIAL_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  services: [],
  hearAbout: '',
  message: '',
}

/* ── Validation ── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(form) {
  const errors = {}
  if (!form.firstName.trim()) errors.firstName = 'First name is required'
  if (!form.lastName.trim()) errors.lastName = 'Last name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!EMAIL_RE.test(form.email)) errors.email = 'Enter a valid email address'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

/* ── Component ── */
export default function Contact() {
  const heroRef = useRef(null)
  const formRef = useRef(null)
  const trustRef = useRef(null)

  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  /* ── Animations ── */
  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      // Hero entrance
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll('.anim'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.2,
          ease: 'power3.out',
        })
      }

      // Form section
      if (formRef.current) {
        gsap.from(formRef.current.querySelectorAll('.anim'), {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        })
      }

      // Trust strip
      if (trustRef.current) {
        gsap.from(trustRef.current.querySelectorAll('.anim'), {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trustRef.current,
            start: 'top 85%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  /* ── Form handlers ── */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (submitError) setSubmitError('')
  }

  const handleServiceToggle = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    setSubmitError('')

    // Demo mode: no endpoint configured
    if (!FORM_ENDPOINT) {
      await new Promise((r) => setTimeout(r, 1200))
      setSubmitting(false)
      setSubmitted(true)
      return
    }

    try {
      await fetch(FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          services: form.services.join(', '),
          hearAbout: form.hearAbout,
          message: form.message.trim(),
        }),
      })
      setSubmitted(true)
      setForm(INITIAL_FORM)
    } catch {
      setSubmitError('Could not reach the server. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  /* ── Field error helper ── */
  const fieldError = (name) =>
    errors[name] ? (
      <p className="text-red-400 text-xs font-mono mt-1">{errors[name]}</p>
    ) : null

  return (
    <div className="bg-charcoal">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-charcoal overflow-hidden"
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=2000&q=80"
            alt=""
            width={2000}
            height={1333}
            loading="eager"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-moss/30 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="anim flex items-center justify-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-clay" />
            <span className="text-clay font-mono text-xs uppercase tracking-widest">
              {EYEBROW}
            </span>
          </div>

          <h1 className="anim font-sans font-bold text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            {HEADING}
          </h1>

          <p className="anim text-cream/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {SUBTEXT}
          </p>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section
        ref={formRef}
        data-has-cta
        className="py-24 md:py-32 px-6 bg-moss"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left column */}
          <div className="anim lg:col-span-2 space-y-8">
            <div>
              <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">
                What to Expect
              </p>
              <ul className="space-y-4">
                {EXPECT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-clay mt-2 shrink-0" />
                    <span className="text-cream/70 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terminal panel */}
            <div className="bg-charcoal border border-cream/15 rounded-lg overflow-hidden">
              <div className="bg-charcoal border-b border-cream/10 px-4 py-2.5 flex items-center justify-between">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-cream/50 text-xs uppercase tracking-widest font-mono">
                  Response Details
                </span>
              </div>
              <div className="p-5 space-y-4">
                {RESPONSE_DETAILS.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center justify-between border-b border-cream/10 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">
                      {d.label}
                    </span>
                    <span className="text-cream font-mono text-sm font-bold">{d.value}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-cream/10 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-cream/40 font-mono text-xs">Accepting new clients from November, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Form card */}
          <div className="anim lg:col-span-3">
            <div className="bg-cream/5 border border-cream/10 rounded-2xl p-8">
              {submitted ? (
                /* ── Success state ── */
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-cream font-sans font-bold text-2xl mb-3">
                    Message Received
                  </h3>
                  <p className="text-cream/60 text-base leading-relaxed max-w-md mx-auto">
                    We will be in touch within one business day. Looking forward to learning about your operation.
                  </p>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate>
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-cream/60 font-mono text-xs uppercase tracking-wider mb-2">
                        First Name <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream text-sm font-mono placeholder:text-cream/30 focus:outline-none focus:border-clay/50 transition-colors"
                        placeholder="Jane"
                      />
                      {fieldError('firstName')}
                    </div>
                    <div>
                      <label className="block text-cream/60 font-mono text-xs uppercase tracking-wider mb-2">
                        Last Name <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream text-sm font-mono placeholder:text-cream/30 focus:outline-none focus:border-clay/50 transition-colors"
                        placeholder="Smith"
                      />
                      {fieldError('lastName')}
                    </div>
                  </div>

                  {/* Email + newsletter */}
                  <div className="mb-4">
                    <label className="block text-cream/60 font-mono text-xs uppercase tracking-wider mb-2">
                      Email <span className="text-clay">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream text-sm font-mono placeholder:text-cream/30 focus:outline-none focus:border-clay/50 transition-colors"
                      placeholder="jane@company.com"
                    />
                    {fieldError('email')}
                  </div>

                  {/* Phone */}
                  <div className="mb-6">
                    <label className="block text-cream/60 font-mono text-xs uppercase tracking-wider mb-2">
                      Phone <span className="text-cream/30">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream text-sm font-mono placeholder:text-cream/30 focus:outline-none focus:border-clay/50 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Service interest */}
                  <div className="mb-6">
                    <p className="text-cream/60 font-mono text-xs uppercase tracking-wider mb-3">
                      Service Interest
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICE_OPTIONS.map((service) => {
                        const active = form.services.includes(service)
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors border ${
                              active
                                ? 'bg-clay/20 border-clay/40 text-clay'
                                : 'bg-cream/5 border-cream/10 text-cream/50 hover:border-cream/20 hover:text-cream/70'
                            }`}
                          >
                            {service}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* How did you hear */}
                  <div className="mb-6">
                    <label className="block text-cream/60 font-mono text-xs uppercase tracking-wider mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="hearAbout"
                      value={form.hearAbout}
                      onChange={handleChange}
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream text-sm font-mono focus:outline-none focus:border-clay/50 transition-colors appearance-none"
                    >
                      {HEAR_OPTIONS.map((opt) => (
                        <option key={opt} value={opt === 'Select an option' ? '' : opt} className="bg-charcoal">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-cream/60 font-mono text-xs uppercase tracking-wider mb-2">
                      Message <span className="text-clay">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 text-cream text-sm font-mono placeholder:text-cream/30 focus:outline-none focus:border-clay/50 transition-colors resize-none"
                      placeholder="Tell us about your operation and what you are looking to solve..."
                    />
                    {fieldError('message')}
                  </div>

                  {/* Submit error */}
                  {submitError && (
                    <p className="text-red-400 text-sm font-mono mb-4">{submitError}</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-clay text-charcoal py-4 rounded-lg font-bold text-base font-mono uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section ref={trustRef} className="py-20 px-6 bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <div className="anim grid grid-cols-3 gap-6 mb-12">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="border-l border-clay/30 pl-6 text-left first:border-l-0 first:pl-0">
                <div className="text-clay font-sans font-bold text-2xl md:text-3xl mb-1">
                  {stat.value}
                </div>
                <div className="text-cream/50 font-mono text-xs uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="anim text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cream/40 hover:text-cream text-sm font-mono transition-colors"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
