import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedStat from './AnimatedStat'

gsap.registerPlugin(ScrollTrigger)

export default function Proof() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.proof-anim'), {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.12,
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
    <section ref={sectionRef} className="py-28 px-6 bg-charcoal">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">Proof</p>
          <h2 className="proof-anim text-cream font-sans font-bold text-4xl md:text-5xl mb-4 [text-wrap:balance]">
            Built with OneWall. Proven Over Two Years.
          </h2>
        </div>

        {/* OneWall Case Study */}
        <div className="proof-anim border border-cream/10 rounded-lg overflow-hidden">
          {/* Terminal-header chrome */}
          <div className="border-b border-cream/10 bg-moss/30 px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <span className="text-cream/50 font-mono text-xs uppercase tracking-widest">Case Study</span>
            </div>
            <span className="text-cream/15 font-mono text-xs hidden md:block">OneWall Communities</span>
          </div>

          <div className="p-8">
            {/* Stat grid */}
            <div className="grid grid-cols-3 gap-px border border-cream/10 rounded overflow-hidden mb-8">
              <div className="bg-moss/40 px-4 py-4 text-center">
                <div className="text-clay font-mono font-bold text-2xl">
                  <AnimatedStat end={2} suffix=" yrs" className="text-clay font-mono font-bold text-2xl" />
                </div>
                <div className="text-cream/50 font-mono text-xs mt-1">Embedded</div>
              </div>
              <div className="bg-moss/40 px-4 py-4 text-center">
                <div className="text-clay font-mono font-bold text-2xl">
                  <AnimatedStat end={3} className="text-clay font-mono font-bold text-2xl" />
                </div>
                <div className="text-cream/50 font-mono text-xs mt-1">Departments</div>
              </div>
              <div className="bg-moss/40 px-4 py-4 text-center">
                <div className="text-clay font-mono font-bold text-2xl">
                  <AnimatedStat end={24} className="text-clay font-mono font-bold text-2xl" />
                </div>
                <div className="text-cream/50 font-mono text-xs mt-1">Deliverables in Q1 '26 Alone</div>
              </div>
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-cream/60 text-base leading-relaxed">
              <p>
                We started with OneWall Communities in early 2025 — one process, one department. Within months, we expanded across HR, Finance, and Operations, working alongside their teams daily.
              </p>
              <p>
                Later that year, we signed an NDA with Venn City, working as partners to OneWall across various critical business process improvements into 2026.
              </p>
              <p className="text-cream/80 font-medium">
                We're opening capacity for new accounts in November 2026. The discovery process starts now.
              </p>
            </div>

            {/* Link to full results */}
            <div className="mt-8 pt-6 border-t border-cream/10">
              <Link
                to="/results"
                className="inline-flex items-center gap-2 text-clay font-mono text-sm font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
              >
                See detailed results
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
