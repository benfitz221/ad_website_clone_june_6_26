import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticWrap from './MagneticWrap'

gsap.registerPlugin(ScrollTrigger)

const DELIVERABLES = [
  'A map of your chosen process, end to end',
  'Every point where time or money is leaking',
  'Quick fixes you can implement this quarter',
  'Strategic recommendations for the long term',
]

export default function FinalCTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.cta-anim'), {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1,
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
    <section ref={sectionRef} data-has-cta className="py-28 px-6 bg-moss">
      <div className="max-w-xl mx-auto text-center">
        <p className="cta-anim text-clay font-mono text-xs uppercase tracking-widest mb-6">
          Get Started
        </p>

        <h2 className="cta-anim text-cream font-sans font-bold text-4xl md:text-5xl mb-6 [text-wrap:balance]">
          See What's Leaking Before You Spend a Dollar.
        </h2>

        <p className="cta-anim text-cream/50 text-base mb-10">
          Takes 30 minutes. Costs nothing. Gives you something concrete to show your partners.
        </p>

        {/* Deliverables card — terminal chrome to match site language */}
        <div className="cta-anim border border-cream/10 rounded-lg overflow-hidden mb-10 text-left">
          <div className="border-b border-cream/10 bg-charcoal/40 px-5 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-cream/40 font-mono text-xs uppercase tracking-widest">What you walk away with</span>
          </div>
          <div className="px-6 py-5 space-y-3">
            {DELIVERABLES.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="text-clay mt-0.5 shrink-0 font-mono text-xs">&#x2192;</span>
                <span className="text-cream/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-anim mb-5">
          <MagneticWrap>
            <Link
              to="/contact"
              className="inline-block bg-clay text-charcoal px-8 py-3 rounded text-sm font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call
            </Link>
          </MagneticWrap>
        </div>

        <p className="cta-anim text-cream/40 font-mono text-xs">
          No pitch deck. No obligation. Just a conversation about your operation.
        </p>
      </div>
    </section>
  )
}
