import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STAT_TEXT = '70% of centralization-related hiccups come from onsite team member resistance, not technology limitations.'
const CITATION = 'Jacob Kosior, "Centralization Change Management 101," EliseAI, 2025'

export default function CredibilityBand() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.cb-anim'), {
        y: 20, opacity: 0, duration: 0.7, stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-0 bg-charcoal border-b border-cream/10">
      {/* Terminal-header chrome */}
      <div className="border-b border-cream/10 bg-moss/30 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
            <div className="w-2 h-2 rounded-full bg-green-500/60" />
          </div>
          <span className="text-cream/50 font-mono text-xs uppercase tracking-widest">Industry Signal</span>
        </div>
        <span className="text-cream/15 font-mono text-xs hidden md:block">third-party research</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 text-center">
        <p className="cb-anim text-cream font-sans text-2xl md:text-3xl font-bold leading-snug mb-4">
          &ldquo;{STAT_TEXT}&rdquo;
        </p>
        <p className="cb-anim text-cream/40 font-mono text-xs">
          {CITATION}
        </p>
      </div>

      {/* Proof strip */}
      <div className="border-t border-cream/10 bg-moss/20">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-center gap-6 md:gap-10 flex-wrap">
          <span className="cb-anim flex items-center gap-2 text-cream/80 font-mono text-xs uppercase tracking-wider">
            {/* OneWall icon mark — angular "1" shape */}
            <svg className="h-3.5 w-auto shrink-0" viewBox="5 7 87 146" fill="none" aria-hidden="true">
              <polygon fill="#BA0D2E" points="92,7.2 91.9,7.3 62.9,7.3 34,30.1 63.1,30.1 63.1,129.8 92,106.9" />
              <polygon fill="currentColor" opacity="0.7" points="5,53.1 5,152.8 5,152.7 34.1,152.7 63,129.9 33.9,129.9 33.9,30.3" />
            </svg>
            OneWall Communities
          </span>
          <span className="cb-anim text-cream/15 hidden md:inline">|</span>
          <span className="cb-anim text-clay font-mono text-xs font-bold">2-Year Engagement</span>
          <span className="cb-anim text-cream/15 hidden md:inline">|</span>
          <span className="cb-anim text-cream/50 font-mono text-xs">3 Departments Served</span>
        </div>
      </div>
    </section>
  )
}
