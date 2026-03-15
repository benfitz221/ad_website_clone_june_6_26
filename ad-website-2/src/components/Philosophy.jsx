import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Falls back to Unsplash if local image not present — drop file at public/images/philosophy/philosophy-bg.jpg
const BG_IMAGE = '/images/philosophy/philosophy-bg.jpg'
const BG_FALLBACK = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=2000&q=80'

const OLD_WAY_LABEL = 'The Old Way'
const OLD_WAY_TEXT = 'Hire more coordinators. Add more spreadsheets. Hope nothing falls through the cracks.'

const NEW_WAY_LABEL = 'The New Way'
const NEW_WAY_TEXT = 'Map your workflows. Deploy AI. Watch your team focus on what actually moves the needle.'

export default function Philosophy() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const oldRef = useRef(null)
  const newRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Old way reveal
      const oldWords = oldRef.current.querySelectorAll('.word')
      gsap.from(oldWords, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: oldRef.current,
          start: 'top 80%',
        },
      })

      // New way reveal
      const newWords = newRef.current.querySelectorAll('.word')
      gsap.from(newWords, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: newRef.current,
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const splitWords = (text) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.35em]">
        {word}
      </span>
    ))

  return (
    <section ref={sectionRef} className="relative py-40 overflow-hidden bg-charcoal">
      {/* Parallax background */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={bgRef} className="absolute inset-[-20%]">
          <img
            src={BG_IMAGE}
            alt=""
            className="w-full h-full object-cover opacity-10"
            onError={(e) => { e.target.src = BG_FALLBACK }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Old way */}
          <div ref={oldRef}>
            <p className="text-cream/30 font-mono text-xs uppercase tracking-widest mb-6">
              {OLD_WAY_LABEL}
            </p>
            <p className="text-cream/40 font-sans text-3xl md:text-4xl font-light leading-tight line-through decoration-cream/20">
              {splitWords(OLD_WAY_TEXT)}
            </p>
          </div>

          {/* New way */}
          <div ref={newRef}>
            <p className="text-clay font-mono text-xs uppercase tracking-widest mb-6">
              {NEW_WAY_LABEL}
            </p>
            <p className="text-cream font-sans text-3xl md:text-4xl font-bold leading-tight">
              {splitWords(NEW_WAY_TEXT)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
