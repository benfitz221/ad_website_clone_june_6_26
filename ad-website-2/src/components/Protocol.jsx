import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SECTION_HEADING = 'The Process.'
const SECTION_DESC = 'Three phases from operational chaos to a system that runs itself.'

const STEPS = [
  {
    number: '01',
    title: 'Operations Audit',
    desc: 'We analyze your workflows end-to-end — maintenance, leasing, vendor management, resident comms — and identify exactly where time and money are leaking.',
    detail: 'Stakeholder interviews, process mapping, bottleneck analysis.',
  },
  {
    number: '02',
    title: 'AI Workflow Design',
    desc: 'We build a custom AI architecture for your operation: automations, centralized dashboards, and escalation systems designed around your team structure.',
    detail: 'Tooling selection, integration design, change management plan.',
  },
  {
    number: '03',
    title: 'Deploy & Adopt',
    desc: 'We implement alongside your team, train for full adoption, and stay engaged until the system runs without us. Results are measurable within 30 days.',
    detail: 'Hands-on implementation, team training, performance tracking.',
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      STEPS.forEach((_, i) => {
        if (!cardsRef.current[i]) return
        gsap.from(cardsRef.current[i], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[i],
            start: 'top 85%',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-28 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">How it works</p>
          <h2 className="text-cream font-sans font-bold text-5xl md:text-6xl mb-4">{SECTION_HEADING}</h2>
          <p className="text-cream/50 text-lg max-w-lg">{SECTION_DESC}</p>
        </div>

        <div className="space-y-6" ref={pinRef}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group bg-cream/5 border border-cream/10 hover:border-clay/40 rounded-2xl p-8 transition-all duration-300 hover:bg-cream/8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <span className="text-clay font-mono text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-cream font-sans font-bold text-2xl mb-3">{step.title}</h3>
                  <p className="text-cream/60 text-base leading-relaxed mb-4">{step.desc}</p>
                  <p className="text-cream/30 font-mono text-xs">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
