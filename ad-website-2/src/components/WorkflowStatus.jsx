import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WORKFLOWS = [
  { name: 'Maintenance Dispatch',     status: 'automated',  detail: '↓ 2.1 hrs / ticket' },
  { name: 'Work Order Routing',       status: 'automated',  detail: '↓ 14 tickets / wk' },
  { name: 'Vendor Invoice Review',    status: 'automated',  detail: '↓ $3,100 / mo' },
  { name: 'Lease Renewal Outreach',   status: 'processing', detail: '— in progress' },
  { name: 'Resident Communications',  status: 'manual',     detail: '12 hrs / wk opportunity' },
  { name: 'Portfolio Reporting',      status: 'manual',     detail: '6 hrs / wk opportunity' },
]

const AUTOMATED_COUNT = WORKFLOWS.filter((w) => w.status === 'automated').length
const TOTAL = WORKFLOWS.length
const PCT = Math.round((AUTOMATED_COUNT / TOTAL) * 100)

const STATUS_CONFIG = {
  automated:  { dot: 'bg-emerald-400', label: 'AUTO',       labelClass: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/8' },
  processing: { dot: 'bg-clay animate-pulse', label: 'IN PROGRESS', labelClass: 'text-clay border-clay/30 bg-clay/8' },
  manual:     { dot: 'bg-cream/20',   label: 'MANUAL',      labelClass: 'text-cream/30 border-cream/15 bg-cream/5' },
}

const LABEL = 'Workflow Automation'

export default function WorkflowStatus() {
  const barRef = useRef(null)
  const sectionRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        onEnter: () => {
          setAnimated(true)
          if (barRef.current) {
            gsap.from(barRef.current, {
              scaleX: 0,
              transformOrigin: 'left center',
              duration: 1.2,
              ease: 'power2.out',
              delay: 0.3,
            })
          }
        },
        once: true,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="w-full font-mono">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
        <span className="text-cream/40 text-xs uppercase tracking-widest">{LABEL}</span>
      </div>

      {/* Workflow rows */}
      <div className="border border-cream/10 rounded-lg overflow-hidden">
        {WORKFLOWS.map((wf, i) => {
          const s = STATUS_CONFIG[wf.status]
          return (
            <div
              key={i}
              className={`flex items-center justify-between px-3 py-2.5 gap-2 ${
                i < WORKFLOWS.length - 1 ? 'border-b border-cream/5' : ''
              } ${wf.status === 'manual' ? 'opacity-50' : ''}`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
                <span className={`text-xs truncate ${wf.status === 'manual' ? 'text-cream/40' : 'text-cream/70'}`}>
                  {wf.name}
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`text-xs hidden sm:inline ${wf.status === 'manual' ? 'text-cream/25' : 'text-cream/35'}`}>
                  {wf.detail}
                </span>
                <span className={`text-xs px-1.5 py-0.5 rounded border font-mono ${s.labelClass}`}>
                  {s.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-cream/30 text-xs">{AUTOMATED_COUNT} of {TOTAL} workflows automated</span>
          <span className="text-clay text-xs font-bold">{PCT}%</span>
        </div>
        <div className="h-1.5 bg-cream/8 rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-clay rounded-full"
            style={{ width: `${PCT}%` }}
          />
        </div>
      </div>
    </div>
  )
}
