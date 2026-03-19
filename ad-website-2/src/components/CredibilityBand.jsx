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
          <span className="cb-anim text-cream/15 hidden md:inline">|</span>
          <span className="cb-anim flex items-baseline gap-0.5 text-cream/80 font-mono text-xs tracking-wider">
            {/* Venn.city wordmark */}
            <svg className="h-3 w-auto shrink-0 relative top-px" viewBox="0 -2 503 136" fill="currentColor" aria-hidden="true">
              <path d="M101.536 3.68555L65.404 98.4838L29.1816 3.68555H0L49.2206 126.341H80.9941L129.957 3.68555H101.536Z" />
              <path d="M184.284 0.49939C148.23 0.49939 123.252 26.5892 123.252 65.0143C123.252 103.439 149.248 129.529 185.961 129.529C204.491 129.529 221.422 125.078 236.355 112.252L223.021 93.2074C212.873 101.259 199.874 106.123 187.56 106.123C170.203 106.123 154.69 96.8976 151.092 74.9109H241.642C241.9 71.8013 242.145 68.3691 242.145 64.924C242.145 26.5892 218.585 0.49939 184.297 0.49939H184.284ZM151.337 54.5242C154.187 36.5761 164.748 24.3183 183.781 24.3183C200.803 24.3183 211.957 35.4794 214.884 54.5242H151.337Z" />
              <path d="M319.117 0.498458C306.544 0.498458 291.366 4.18871 281.476 18.7046V3.6855H254.899V126.251H281.734V58.291C281.734 37.3236 296.15 25.9044 313.43 25.9044C330.696 25.9044 341.941 37.401 341.941 58.0329V126.238H368.776V49.2201C368.943 20.5239 348.324 0.472656 319.142 0.472656L319.117 0.498458Z" />
              <path d="M453.341 0.498458C440.768 0.498458 425.59 4.18871 415.7 18.7046V3.6855H389.123V126.251H415.958V58.291C415.958 37.3236 430.374 25.9044 447.654 25.9044C464.92 25.9044 476.165 37.401 476.165 58.0329V126.238H503V49.2201C503.09 20.5239 482.458 0.472656 453.366 0.472656L453.341 0.498458Z" />
            </svg>
            <span className="normal-case font-sans font-semibold" style={{ letterSpacing: '0.02em' }}>.city</span>
          </span>
        </div>
      </div>
    </section>
  )
}
