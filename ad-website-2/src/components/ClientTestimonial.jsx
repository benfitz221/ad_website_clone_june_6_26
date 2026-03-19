import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ── PLACEHOLDER — pending Ron Kutas approval ── */
const QUOTE_TEXT =
  "We\u2019d been through consultants who disappear after the binder handoff. Agent Done embedded with our team for two years\u200A\u2014\u200Athey learned how we actually operate and built systems our people use every day."
const QUOTE_ATTR_NAME = 'Ron Kutas'
const QUOTE_ATTR_TITLE = 'CEO, OneWall Communities'

export default function ClientTestimonial() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll('.ct-anim'), {
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
      <div className="max-w-3xl mx-auto px-6 py-14">
        <div className="ct-anim flex flex-col items-center text-center">
          {/* Quote */}
          <p className="text-cream/90 font-sans text-xl md:text-2xl font-medium leading-relaxed mb-6 [text-wrap:balance]">
            &ldquo;{QUOTE_TEXT}&rdquo;
          </p>

          {/* Attribution */}
          <div className="flex items-center gap-3">
            {/* OneWall icon mark */}
            <svg className="h-4 w-auto shrink-0" viewBox="5 7 87 146" fill="none" aria-hidden="true">
              <polygon fill="#BA0D2E" points="92,7.2 91.9,7.3 62.9,7.3 34,30.1 63.1,30.1 63.1,129.8 92,106.9" />
              <polygon fill="#D1E3DB" opacity="0.5" points="5,53.1 5,152.8 5,152.7 34.1,152.7 63,129.9 33.9,129.9 33.9,30.3" />
            </svg>
            <div className="text-left">
              <span className="text-cream/70 font-mono text-xs font-bold">{QUOTE_ATTR_NAME}</span>
              <span className="text-cream/30 font-mono text-xs">{' '}&mdash; {QUOTE_ATTR_TITLE}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
