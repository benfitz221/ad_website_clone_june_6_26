import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import OperationsDashboard from './OperationsDashboard'
import MagneticWrap from './MagneticWrap'

const BG_IMAGE_WEBP = '/images/hero/hero-bg.webp'
const BG_IMAGE_JPG = '/images/hero/hero-bg.jpg'
const EYEBROW = 'Centralization Consulting for Mid-Sized Operators'
const HEADLINE_PART1 = 'Your Portfolio Outgrew Your Processes.'
const HEADLINE_PART2 = 'We Fix That.'
const SUBHEAD = 'We embed with B/C class management companies to centralize operations across people, processes, and technology — even if your team has been burned by consultants before.'
const CTA_PRIMARY = 'Book a Discovery Call'

export default function Hero() {
  const leftRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current.querySelectorAll('.anim'), {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.2,
        ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative h-screen flex flex-col md:flex-row bg-charcoal overflow-hidden">

      {/* ── LEFT PANEL ── */}
      <div
        ref={leftRef}
        className="relative z-10 flex flex-col justify-center w-full md:w-[46%] px-8 md:px-12 lg:px-16 pt-28 pb-16 md:border-r border-cream/10"
      >
        <div className="anim flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-clay" />
          <span className="text-clay font-mono text-xs uppercase tracking-widest">{EYEBROW}</span>
        </div>

        <h1 className="anim font-sans font-bold leading-none mb-6 text-cream text-5xl lg:text-6xl xl:text-7xl [text-wrap:balance]">
          {HEADLINE_PART1} <span className="text-clay">{HEADLINE_PART2}</span>
        </h1>

        <p className="anim text-cream/60 text-base lg:text-lg leading-relaxed mb-10 max-w-md">
          {SUBHEAD}
        </p>

        <div className="anim">
          <MagneticWrap>
            <Link to="/contact" className="inline-block bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
              {CTA_PRIMARY}
            </Link>
          </MagneticWrap>
        </div>

        {/* Portfolio scale strip */}
        <div className="anim mt-12 grid grid-cols-2 gap-px border border-cream/10 rounded overflow-hidden max-w-xs">
          {[
            { v: '3K–15K', l: 'Units We Serve' },
            { v: 'B/C', l: 'Class Focus' },
          ].map((s) => (
            <div key={s.l} className="bg-moss/40 px-4 py-3 text-center">
              <div className="text-clay font-mono font-bold text-base">{s.v}</div>
              <div className="text-cream/50 font-mono text-xs mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL: image + live dashboard overlay ── */}
      <div className="relative flex-1 flex items-center justify-center px-6 md:px-8 lg:px-12 py-12 md:py-0 bg-moss/15 overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet={BG_IMAGE_WEBP} type="image/webp" />
            <img
              ref={imgRef}
              src={BG_IMAGE_JPG}
              alt=""
              width={1920}
              height={1080}
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/20 to-charcoal/40" />
        </div>
        <div className="relative z-10 w-full max-w-lg">
          <OperationsDashboard />
        </div>
      </div>
    </section>
  )
}
