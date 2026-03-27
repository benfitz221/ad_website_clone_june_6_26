import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticWrap from './MagneticWrap'
import {
  ArrowRight,
  Search,
  Users,
  Cpu,
  BarChart3,
  Bot,
  TrendingUp,
  GitBranch,
  Building2,
  RefreshCw,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Section 1: Hero ── */
const HERO_EYEBROW = 'Services'
const HERO_HEADING = "Your Team Shouldn\u2019t Have to Figure Out Centralization Alone."
const HERO_SUB =
  "We embed with mid-sized multifamily operators to centralize operations across people, processes, and technology\u200A\u2014\u200Adesigned so your team owns the result without us."

const HERO_STATS = [
  { value: '3K\u201310K', label: 'Units our clients manage', isNumber: false },
  { value: 'People-First', label: 'Technology adoption methodology', isNumber: false },
  { value: 'Zero', label: 'Back-end licensing or hosting fees', isNumber: false },
]

/* ── Section 2: The Operational Gap ── */
const GAP_EYEBROW = 'The Reality'
const GAP_HEADING = "You Know What to Change. You Don\u2019t Have the Bandwidth to Change It."
const GAP_BODY_1 =
  "Your portfolio grew faster than your processes. The systems that worked at 1,500 units break down at 4,000. Every new property adds friction your team absorbs manually\u200A\u2014\u200Aand every unfilled maintenance position makes it worse."
const GAP_BODY_2 =
  "You need the operational infrastructure of a firm twice your size. But you can\u2019t justify the headcount, and the last consultant left you with recommendations that never got implemented."

/* ── Section 4: Three Service Pillars ── */
const PILLARS_EYEBROW = 'What We Deliver'
const PILLARS_HEADING = 'Three Capabilities. One Goal: Your Team Runs It Without Us.'
const PILLARS_SUB =
  'Everything we build is designed for handover. No hosting fees. No dependency by design.'

const SERVICE_PILLARS = [
  {
    title: 'Centralization Strategy',
    tag: 'Portfolio Outgrowing Operations',
    icon: TrendingUp,
    desc: "A step-by-step framework for centralizing how work gets done across your properties. We map your current state, design your target operating model, and build a vendor-agnostic roadmap your team can execute\u200A\u2014\u200Awith or without us.",
    items: [
      'Centralization strategy framework and roadmap',
      'Target-state operating model aligned to your growth targets',
      'Hub-and-spoke transition planning with phased milestones',
      'Vendor evaluation and technology assessment',
    ],
  },
  {
    title: 'Custom AI & Automation',
    tag: 'Manual Processes Eating Margins',
    icon: Cpu,
    desc: "Fast, professional tools built for the gaps your existing systems don\u2019t cover. We use our SCOUT diagnostic tools to capture your team\u2019s real workflows, then design and hand over solutions they\u2019ll actually use\u200A\u2014\u200Abecause they helped define what was needed.",
    items: [
      'Custom workflow automation (renewals, KPI reporting, maintenance routing)',
      "AI tools designed around your team\u2019s actual processes",
      "Application development with full handover\u200A\u2014\u200Ano back-end fees",
      'SCOUT-powered requirements capture and process diagnostics',
    ],
  },
  {
    title: 'Change Adoption',
    tag: "Investments That Don\u2019t Stick",
    icon: Users,
    desc: "The difference between a tool your team uses daily and one collecting dust. We map every role and workflow affected before deployment, co-create training with your people, and stay until adoption is real\u200A\u2014\u200Anot documented.",
    items: [
      'Change impact analysis before any tool is deployed',
      'Co-created training programs built around your actual workflows',
      'Internal communications strategy to build ground-up support',
      'Sustained adoption support until the system runs independently',
    ],
  },
]

/* ── Section 5: Free Process Diagnostic ── */
const DIAG_EYEBROW = 'Start Here'
const DIAG_HEADING = 'Free Process Diagnostic. No Strings.'
const DIAG_SUB =
  "Before any engagement, we diagnose one high-friction process at no cost. You walk away with a written report of where time and money are leaking\u200A\u2014\u200Awhether you hire us or not."

const DIAG_STEPS = [
  {
    number: '01',
    title: 'Pick a Process',
    desc: "Choose the workflow that costs your team the most time, money, or frustration\u200A\u2014\u200Aproperty onboarding, resident renewals, maintenance coordination, or anything in between.",
    icon: Search,
  },
  {
    number: '02',
    title: 'Guided Discovery',
    desc: "Our analysts use SCOUT, our proprietary diagnostic tools, to capture your current state. Structured, fast, and zero disruption to your on-site teams.",
    icon: Bot,
  },
  {
    number: '03',
    title: 'Executive Debrief',
    desc: 'You receive a written report: quick fixes you can implement this quarter, strategic recommendations for the long term, and estimated impact. Yours to keep regardless.',
    icon: BarChart3,
  },
]

/* ── Section 6: What Comes After ── */
const PHASES_EYEBROW = 'Beyond the Diagnostic'
const PHASES_HEADING = "If We\u2019re a Match, Here\u2019s What Happens Next."
const PHASES_BODY =
  'Following discovery, we offer medium to long-term partnerships focused on measurable growth and efficiency targets fueled by a clear strategy for centralization.'

const PHASES = [
  {
    label: 'Phase 1',
    title: 'Strategy & Roadmap',
    icon: GitBranch,
    desc: 'Vendor-agnostic centralization plan with change management built in from day one. Your team co-creates it.',
  },
  {
    label: 'Phase 2',
    title: 'Build & Implement',
    icon: Building2,
    desc: "Embedded with your team. Custom tools, process automation, and training delivered alongside your staff\u200A\u2014\u200Anot handed off from a distance.",
  },
  {
    label: 'Phase 3',
    title: 'Adopt & Transfer',
    icon: RefreshCw,
    desc: "Measurable adoption at every milestone. Knowledge transfer and documentation so your team owns the system. We leave when you\u2019re ready.",
  },
]

/* ── Section 7: Bottom CTA ── */
const CTA_EYEBROW = 'Get Started'
const CTA_HEADING = 'Start with One Process. See What Changes.'
const CTA_SUB =
  "Book a 30-minute discovery call. We\u2019ll identify the right process to diagnose and show you what\u2019s possible\u200A\u2014\u200Abefore you spend a dollar."
const CTA_RISK = 'No pitch deck. No obligation. Just a conversation about your operation.'

/* ── Component ── */
export default function Services() {
  const { hash } = useLocation()
  const heroRef = useRef(null)
  const gapRef = useRef(null)
  const pillarsRef = useRef(null)
  const diagRef = useRef(null)
  const phasesRef = useRef(null)
  const diagCardsRef = useRef([])
  const pillarCardsRef = useRef([])

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    window.scrollTo(0, 0)

    diagCardsRef.current = []
    pillarCardsRef.current = []

    const ctx = gsap.context(() => {
      // Hero entrance
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll('.anim'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          delay: 0.2,
          ease: 'power3.out',
        })
      }

      // Gap section
      if (gapRef.current) {
        gsap.from(gapRef.current.querySelectorAll('.anim'), {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gapRef.current,
            start: 'top 80%',
          },
        })
      }

      // Pillars section header
      if (pillarsRef.current) {
        gsap.from(pillarsRef.current.querySelectorAll('.anim'), {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pillarsRef.current,
            start: 'top 80%',
          },
        })
      }

      // Pillar cards
      SERVICE_PILLARS.forEach((_, i) => {
        if (!pillarCardsRef.current[i]) return
        gsap.from(pillarCardsRef.current[i], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pillarCardsRef.current[i],
            start: 'top 85%',
          },
        })
      })

      // Diagnostic step cards
      DIAG_STEPS.forEach((_, i) => {
        if (!diagCardsRef.current[i]) return
        gsap.from(diagCardsRef.current[i], {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: diagCardsRef.current[i],
            start: 'top 85%',
          },
        })
      })

      // Phases section
      if (phasesRef.current) {
        gsap.from(phasesRef.current.querySelectorAll('.anim'), {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: phasesRef.current,
            start: 'top 80%',
          },
        })
      }
    })

    return () => ctx.revert()
  }, [hash])

  return (
    <div className="bg-charcoal">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-charcoal overflow-hidden"
      >
        {/* Background photo + overlays */}
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/services/hero-bg.webp" type="image/webp" />
            <img
              src="/images/services/hero-bg.jpg"
              alt=""
              width={1920}
              height={1080}
              loading="eager"
              className="w-full h-full object-cover opacity-15"
            />
          </picture>
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-moss/30 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="anim flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-clay" />
            <span className="text-clay font-mono text-xs uppercase tracking-widest">
              {HERO_EYEBROW}
            </span>
          </div>

          <h1 className="anim font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-3xl text-cream">
            {HERO_HEADING}
          </h1>

          <p className="anim text-cream/50 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            {HERO_SUB}
          </p>

          <div className="anim grid grid-cols-1 sm:grid-cols-3 gap-px border border-cream/10 rounded overflow-hidden max-w-xl">
            {HERO_STATS.map((d) => (
              <div key={d.label} className="bg-moss/40 px-4 py-3 text-center sm:text-center text-left flex sm:block items-center gap-3">
                <div className="text-clay font-mono font-bold text-base md:text-lg shrink-0">
                  {d.value}
                </div>
                <div className="text-cream/50 font-mono text-xs mt-0 sm:mt-0.5">
                  {d.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE OPERATIONAL GAP ── */}
      <section ref={gapRef} className="relative py-24 md:py-32 px-6 bg-charcoal border-t border-cream/10 overflow-hidden">
        {/* Subtle apartment-windows-at-night background */}
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/services/gap-bg.webp" type="image/webp" />
            <img
              src="/images/services/gap-bg.jpg"
              alt=""
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-full object-cover opacity-10"
            />
          </picture>
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
            {GAP_EYEBROW}
          </p>
          <h2 className="anim text-cream font-sans font-bold text-3xl md:text-4xl leading-tight mb-10">
            {GAP_HEADING}
          </h2>
          <p className="anim text-cream/60 text-base md:text-lg leading-relaxed mb-6">
            {GAP_BODY_1}
          </p>
          <p className="anim text-cream/60 text-base md:text-lg leading-relaxed">
            {GAP_BODY_2}
          </p>
        </div>
      </section>

      {/* ── THREE SERVICE PILLARS ── */}
      <section id="service-pillars" ref={pillarsRef} className="py-24 md:py-32 px-6 bg-moss">
        <div className="max-w-5xl mx-auto">
          <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
            {PILLARS_EYEBROW}
          </p>
          <h2 className="anim text-cream font-sans font-bold text-4xl md:text-5xl mb-6">
            {PILLARS_HEADING}
          </h2>
          <p className="anim text-cream/60 text-lg max-w-2xl mb-16 leading-relaxed">
            {PILLARS_SUB}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  ref={(el) => (pillarCardsRef.current[i] = el)}
                  className="group bg-cream/5 border border-cream/10 hover:border-clay/30 rounded-2xl p-8 transition-all duration-300 hover:bg-cream/8"
                >
                  <div className="w-10 h-10 rounded-lg bg-clay/10 border border-clay/20 flex items-center justify-center mb-5 group-hover:bg-clay/20 transition-colors">
                    <Icon className="w-5 h-5 text-clay" />
                  </div>
                  <h3 className="text-cream font-sans font-bold text-xl mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-clay/80 font-mono text-xs uppercase tracking-wider mb-4">
                    {pillar.tag}
                  </p>
                  <p className="text-cream/50 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                  <ul className="space-y-3">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-clay mt-2 shrink-0" />
                        <span className="text-cream/60 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FREE PROCESS DIAGNOSTIC ── */}
      <section id="free-process-diagnostic" ref={diagRef} className="py-24 md:py-32 px-6 bg-moss border-t border-cream/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">
            {DIAG_EYEBROW}
          </p>
          <h2 className="text-cream font-sans font-bold text-4xl md:text-5xl mb-6">
            {DIAG_HEADING}
          </h2>
          <p className="text-cream/60 text-lg max-w-2xl mb-16 leading-relaxed">
            {DIAG_SUB}
          </p>

          <div className="space-y-6">
            {DIAG_STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  ref={(el) => (diagCardsRef.current[i] = el)}
                  className="group bg-cream/5 border border-cream/10 hover:border-clay/40 rounded-2xl p-8 transition-all duration-300 hover:bg-cream/8"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0 flex items-center gap-4">
                      <span className="text-clay font-mono text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-clay/10 border border-clay/20 flex items-center justify-center group-hover:bg-clay/20 transition-colors md:hidden">
                        <Icon className="w-5 h-5 text-clay" />
                      </div>
                    </div>
                    <div className="hidden md:flex w-10 h-10 rounded-lg bg-clay/10 border border-clay/20 items-center justify-center shrink-0 group-hover:bg-clay/20 transition-colors">
                      <Icon className="w-5 h-5 text-clay" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-cream font-sans font-bold text-2xl mb-3">{step.title}</h3>
                      <p className="text-cream/60 text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <MagneticWrap>
              <Link
                to="/contact"
                className="inline-block bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Book Your Free Diagnostic
              </Link>
            </MagneticWrap>
            <p className="text-cream/50 text-sm mt-4 font-mono">
              No commitment. No pitch deck. Just a clear picture of what&rsquo;s leaking.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT COMES AFTER ── */}
      <section ref={phasesRef} className="py-24 md:py-32 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
            {PHASES_EYEBROW}
          </p>
          <h2 className="anim text-cream font-sans font-bold text-3xl md:text-4xl leading-tight mb-6">
            {PHASES_HEADING}
          </h2>
          <p className="anim text-cream/60 text-base md:text-lg max-w-2xl leading-relaxed mb-16">
            {PHASES_BODY}
          </p>

          <div className="anim grid grid-cols-1 md:grid-cols-3 gap-px border border-cream/10 rounded-2xl overflow-hidden">
            {PHASES.map((phase) => {
              const Icon = phase.icon
              return (
                <div key={phase.label} className="bg-cream/5 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-clay/10 border border-clay/20 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-clay" />
                    </div>
                    <span className="text-clay font-mono text-xs font-bold uppercase tracking-wider">
                      {phase.label}
                    </span>
                  </div>
                  <h3 className="text-cream font-sans font-bold text-lg mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-has-cta className="relative py-28 px-6 bg-moss overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source srcSet="/images/services/cta-bg.webp" type="image/webp" />
            <img
              src="/images/services/cta-bg.jpg"
              alt=""
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-full object-cover opacity-20"
            />
          </picture>
          <div className="absolute inset-0 bg-moss/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-6">
            {CTA_EYEBROW}
          </p>
          <h2 className="text-cream font-sans font-bold text-4xl md:text-5xl leading-tight mb-6">
            {CTA_HEADING}
          </h2>
          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {CTA_SUB}
          </p>
          <MagneticWrap>
            <Link
              to="/contact"
              className="inline-block bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Book a Discovery Call
            </Link>
          </MagneticWrap>
          <p className="text-cream/50 text-sm mt-4 font-mono">
            {CTA_RISK}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cream/40 hover:text-cream text-sm font-mono mt-8 transition-colors"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
