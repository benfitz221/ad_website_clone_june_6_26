import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SECTION_HEADING = 'From Discovery Call to Running System.'
const SECTION_DESC = 'Three phases. You\'re involved at every step. Nothing ships without your team\'s sign-off.'

const STEPS = [
  {
    number: '01',
    title: 'Free Process Diagnostic',
    desc: 'You pick one critical process. We map it, find the leaks, and hand you a report. Zero cost, actionable output you keep regardless.',
    detail: 'Process mapping, bottleneck identification, written diagnostic report.',
  },
  {
    number: '02',
    title: 'Centralization Strategy & Roadmap',
    desc: 'A vendor-agnostic plan with change management built in from day one. Your team co-creates it, so nothing feels imposed from the outside.',
    detail: 'Vendor evaluation, phased roadmap, adoption planning, stakeholder alignment.',
  },
  {
    number: '03',
    title: 'Implementation & Adoption',
    desc: 'We build alongside your team. Measurable adoption metrics at every milestone. Designed for your team to own the system without us.',
    detail: 'Embedded implementation, team training, performance tracking, handoff.',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean)

      // Each card after the first: scale down background cards as next card arrives
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return

        gsap.to(card, {
          scale: 0.95,
          opacity: 0.6,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top bottom',
            end: 'top 30%',
            scrub: 0.5,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-28 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">Here's what happens</p>
          <h2 className="text-cream font-sans font-bold text-5xl md:text-6xl mb-4 [text-wrap:balance]">{SECTION_HEADING}</h2>
          <p className="text-cream/50 text-lg max-w-lg">{SECTION_DESC}</p>
        </div>

        {/* Stacking cards — sticky positioning with GSAP scale-down */}
        <div className="relative">
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="sticky origin-top mb-6 last:mb-0"
              style={{ top: `${96 + i * 24}px`, zIndex: i + 1 }}
            >
              <div className="group bg-charcoal border border-cream/10 hover:border-clay/40 rounded-2xl p-8 transition-colors duration-300 hover:bg-cream/[0.04]">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <span className="text-clay font-mono text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-cream font-sans font-bold text-2xl mb-3">{step.title}</h3>
                    <p className="text-cream/60 text-base leading-relaxed mb-4">{step.desc}</p>
                    <p className="text-cream/50 font-mono text-xs">{step.detail}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
