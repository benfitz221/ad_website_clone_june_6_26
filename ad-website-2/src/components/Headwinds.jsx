import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Inline SVG icons that draw on scroll via stroke-dashoffset ── */
function DrawIcon({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const paths = ref.current?.querySelectorAll('path, circle, polyline, line')
    if (!paths?.length) return

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        const length = path.getTotalLength?.() || 40
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  )
}

const CostIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
)

const ScaleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M3 21h18M3 7l9-4 9 4M4 7v10M20 7v10M8 7v10M16 7v10M12 7v10" />
  </svg>
)

const PeopleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
    <circle cx="17" cy="9" r="2" />
    <path d="M21 21v-1.5a3 3 0 00-3-3h-.5" />
  </svg>
)

const PANELS = [
  {
    header: 'Cost Pressure',
    metric: '~9%/yr',
    metricLabel: 'expense growth',
    body: 'Insurance up 75% since 2019. Tariffs adding $3K per unit turn. Every line item on your operating statement is moving in the wrong direction — and rent growth can\u2019t keep up.',
    Icon: CostIcon,
    iconColor: 'text-clay',
  },
  {
    header: 'Infrastructure Gap',
    metric: '3K\u201315K',
    metricLabel: 'units — no man\u2019s land',
    body: 'Too big to run on instinct. Too small to staff like an institution. Your processes were designed for a smaller portfolio, and every new property adds friction the old way can\u2019t absorb.',
    Icon: ScaleIcon,
    iconColor: 'text-emerald-400',
  },
  {
    header: 'People Shortage',
    metric: '92%',
    metricLabel: 'can\u2019t find qualified workers',
    body: 'Of firms can\u2019t find qualified workers. Every unfilled maintenance tech costs you in deferred work orders, resident churn, and regional manager burnout.',
    Icon: PeopleIcon,
    iconColor: 'text-clay',
  },
]

export default function Headwinds() {
  return (
    <section className="py-0 bg-charcoal border-b border-cream/10">
      {/* Terminal-header chrome */}
      <div className="border-b border-cream/10 bg-moss/30 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-cream/50 font-mono text-xs uppercase tracking-widest">Headwinds</span>
          <span className="text-cream/15 font-mono text-xs">&middot;</span>
          <span className="text-cream/40 font-mono text-xs">3 pressure points</span>
        </div>
        <span className="text-cream/15 font-mono text-xs hidden md:block">industry data</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-cream font-sans font-bold text-3xl md:text-4xl mb-2 [text-wrap:balance]">
            The Math Is Getting Harder Every Quarter.
          </h2>
          <p className="text-cream/60 font-mono text-sm max-w-xl">
            Mid-sized operators face pressure from every direction. Here are three you can&rsquo;t spreadsheet your way out of.
          </p>
        </div>

        {/* 3-panel dashboard grid — reuses Features.jsx pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-cream/10 rounded-lg overflow-hidden bg-cream/10">
          {PANELS.map((panel) => (
            <div key={panel.header} className="bg-charcoal p-0 flex flex-col">
              <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
                <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">{panel.header}</span>
                <DrawIcon className={panel.iconColor}>
                  <panel.Icon />
                </DrawIcon>
              </div>
              <div className="p-5 flex-1">
                <div className="mb-5">
                  <div className="text-clay font-mono text-3xl font-bold">{panel.metric}</div>
                  <div className="text-cream/40 font-mono text-xs mt-1">{panel.metricLabel}</div>
                </div>
                <p className="text-cream/50 font-mono text-xs leading-relaxed">
                  {panel.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
