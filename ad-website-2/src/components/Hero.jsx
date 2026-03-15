import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import OperationsDashboard from './OperationsDashboard'

// Falls back to Unsplash if local image not present
const BG_IMAGE = '/images/hero/hero-bg.jpg'
const BG_FALLBACK = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2000&q=80'

const EYEBROW = 'Multi-Family × AI × Change Management'
const HEADLINE_LINE1 = 'Scale Operations.'
const HEADLINE_LINE2 = 'Not Headcount.'
const SUBHEAD = 'AI-powered consulting for property management firms growing faster than their processes can keep up.'
const CTA_PRIMARY = 'Book a Discovery Call'
const CTA_SECONDARY = 'See the process'

export default function Hero() {
  const leftRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current.querySelectorAll('.anim'), {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.2,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row bg-charcoal overflow-hidden">

      {/* ── LEFT PANEL ── */}
      <div
        ref={leftRef}
        className="relative z-10 flex flex-col justify-center w-full md:w-[46%] px-8 md:px-12 lg:px-16 pt-28 pb-16 md:border-r border-cream/10"
      >
        <div className="anim flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-clay" />
          <span className="text-clay font-mono text-xs uppercase tracking-widest">{EYEBROW}</span>
        </div>

        <h1 className="anim font-sans font-bold leading-none mb-6">
          <span className="block text-cream text-5xl lg:text-6xl xl:text-7xl mb-1">{HEADLINE_LINE1}</span>
          <span className="block text-clay text-5xl lg:text-6xl xl:text-7xl">{HEADLINE_LINE2}</span>
        </h1>

        <p className="anim text-cream/50 text-base lg:text-lg leading-relaxed mb-10 max-w-sm">
          {SUBHEAD}
        </p>

        <div className="anim flex flex-col sm:flex-row gap-3">
          <button className="bg-clay text-charcoal px-6 py-3 rounded text-sm font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            {CTA_PRIMARY}
          </button>
          <button className="text-cream/40 hover:text-cream text-sm font-mono uppercase tracking-wider underline underline-offset-4 transition-colors">
            {CTA_SECONDARY} →
          </button>
        </div>

        {/* Portfolio scale strip */}
        <div className="anim mt-12 grid grid-cols-3 gap-px border border-cream/10 rounded overflow-hidden">
          {[
            { v: '2–10K', l: 'Units Served' },
            { v: 'B/C', l: 'Class Focus' },
            { v: '30 days', l: 'To Results' },
          ].map((s) => (
            <div key={s.l} className="bg-moss/40 px-4 py-3 text-center">
              <div className="text-clay font-mono font-bold text-base">{s.v}</div>
              <div className="text-cream/30 font-mono text-xs mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL: live dashboard ── */}
      <div className="relative flex-1 flex items-center justify-center px-6 md:px-8 lg:px-12 py-12 md:py-0 bg-moss/15 overflow-hidden">
        <div className="absolute inset-0">
          <img
            ref={imgRef}
            src={BG_IMAGE}
            alt=""
            className="w-full h-full object-cover opacity-8"
            onError={(e) => { e.target.src = BG_FALLBACK }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal md:from-transparent via-charcoal/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-lg">
          <OperationsDashboard />
        </div>
      </div>
    </section>
  )
}
