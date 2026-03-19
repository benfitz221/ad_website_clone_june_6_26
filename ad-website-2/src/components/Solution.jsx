import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── Inline SVG icons for visual cues ── */
const EmbedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="M12 16v-4M12 8h.01" />
    <path d="M8 12h8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const RoadmapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M3 12h18M3 18h18" />
    <path d="M7 6v12M17 6v12" />
  </svg>
)

const HandoffIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const CARDS = [
  {
    title: 'We work inside your operation, not above it.',
    body: 'Two years embedded with OneWall Communities taught us what fly-in consultants never learn: how your maintenance team actually triages at 7 a.m., how your leasing staff really handles renewals, where the workarounds live. We operate from inside your workflows, not from a conference room.',
    Icon: EmbedIcon,
    iconColor: 'text-clay',
  },
  {
    title: 'Your roadmap, not our product catalog.',
    body: 'We don\u2019t sell software. We evaluate your options, recommend what fits, and build the implementation plan around your team\u2019s capacity. If the right tool is a spreadsheet, we\u2019ll say so.',
    Icon: RoadmapIcon,
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Built so you don\u2019t need us to sustain it.',
    body: 'Every engagement is designed to leave. We train your people, document the systems, and hand over the keys. No back-end licensing fees. No dependency by design.',
    Icon: HandoffIcon,
    iconColor: 'text-clay',
  },
]

export default function Solution() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.sol-card'), {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 px-6 bg-charcoal overflow-hidden">
      {/* Subtle background gradient for visual depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-moss/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-clay/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">Our approach</p>
          <h2 className="text-cream font-sans font-bold text-4xl md:text-5xl mb-4 [text-wrap:balance]">
            Centralization That Starts with Your People, Not Your Software.
          </h2>
          <p className="text-cream/50 text-lg max-w-lg">
            70% of centralization failures are people problems.{' '}
            <span className="whitespace-nowrap">We start there.</span>
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="sol-card group border border-cream/10 rounded-lg p-8 hover:border-clay/40 transition-colors duration-300 hover:bg-cream/[0.04]"
            >
              <div className="flex items-start gap-4">
                <span className={`${card.iconColor} mt-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity`}>
                  <card.Icon />
                </span>
                <div>
                  <h3 className="text-cream font-sans font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-cream/60 text-base leading-relaxed">{card.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
