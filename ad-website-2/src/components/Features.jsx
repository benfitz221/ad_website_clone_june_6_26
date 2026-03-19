import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DiagnosticShuffler from './DiagnosticShuffler'
import TelemetryTypewriter from './TelemetryTypewriter'
import WorkflowStatus from './WorkflowStatus'

gsap.registerPlugin(ScrollTrigger)

/* ── Inline SVG icons that draw on scroll via stroke-dashoffset ──
   Per taste-skill amendment: animated SVG line drawings instead of Lottie */
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

/* Gauge arc — Operations Dashboard */
const GaugeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10" />
    <path d="M12 12l4-6" />
  </svg>
)

/* Network node — AI Workflow Engine */
const NetworkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="12" r="2" />
    <circle cx="6" cy="18" r="2" />
    <line x1="8" y1="6" x2="16" y2="12" />
    <line x1="8" y1="18" x2="16" y2="12" />
  </svg>
)

/* Flow arrow — Workflow Automation */
const FlowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <polyline points="4,12 10,12 14,6 20,6" />
    <polyline points="17,3 20,6 17,9" />
  </svg>
)

export default function Features() {
  return (
    <section id="about" className="py-0 bg-charcoal border-b border-cream/10">
      {/* Section title bar */}
      <div className="border-b border-cream/10 bg-moss/30 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-cream/50 font-mono text-xs uppercase tracking-widest">Diagnostic Suite</span>
          <span className="text-cream/15 font-mono text-xs">·</span>
          <span className="text-cream/40 font-mono text-xs">3 modules active</span>
        </div>
        <span className="text-cream/15 font-mono text-xs hidden md:block">agent-done · ops platform v2</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-cream font-sans font-bold text-3xl md:text-4xl mb-2">
            Your Operation, Instrumented.
          </h2>
          <p className="text-cream/60 font-mono text-sm max-w-xl">
            Three data layers your property management firm likely does not have — but should.
          </p>
        </div>

        {/* 3-panel dashboard grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-cream/10 rounded-lg overflow-hidden bg-cream/10">

          {/* Panel 1 — Ops Metrics */}
          <div className="bg-charcoal p-0 flex flex-col">
            <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
              <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">Operations Metrics</span>
              <DrawIcon className="text-clay">
                <GaugeIcon />
              </DrawIcon>
            </div>
            <div className="p-5 flex-1">
              <p className="text-cream/50 font-mono text-xs mb-5 leading-relaxed">
                Live portfolio health — maintenance velocity, occupancy, unit economics — updated continuously as your workflows produce data.
              </p>
              <DiagnosticShuffler />
            </div>
          </div>

          {/* Panel 2 — AI Engine */}
          <div className="bg-charcoal p-0 flex flex-col">
            <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
              <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">AI Workflow Engine</span>
              <DrawIcon className="text-emerald-400">
                <NetworkIcon />
              </DrawIcon>
            </div>
            <div className="p-5 flex-1">
              <p className="text-cream/50 font-mono text-xs mb-5 leading-relaxed">
                Automated dispatching, escalation routing, and vendor management — running in the background while your team handles what needs judgment.
              </p>
              <TelemetryTypewriter />
            </div>
          </div>

          {/* Panel 3 — Workflow Automation Status */}
          <div className="bg-charcoal p-0 flex flex-col">
            <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
              <span className="text-cream/50 font-mono text-xs uppercase tracking-wider">Workflow Automation</span>
              <DrawIcon className="text-clay">
                <FlowIcon />
              </DrawIcon>
            </div>
            <div className="p-5 flex-1">
              <p className="text-cream/50 font-mono text-xs mb-5 leading-relaxed">
                Which of your operational processes are still running on manual effort — and what they cost in time and leakage.
              </p>
              <WorkflowStatus />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
