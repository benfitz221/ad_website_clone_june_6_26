import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Building2,
  Users,
  Target,
  GitBranch,
  Layers,
  BarChart3,
  FileText,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  MapPin,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Hero ── */
const HERO_EYEBROW = 'Client Results'
const HERO_HEADING_1 = '12 Months. One Operator.'
const HERO_HEADING_2 = 'Measurable Change.'
const HERO_SUB =
  'We partnered with OneWall Communities on a year-long retainer to centralize operations, build custom tools, and design a scalable operating model for a growing multi-family portfolio.'

const HERO_STATS = [
  { value: '12 mo', label: 'Retainer engagement' },
  { value: '24', label: 'Deliverables shipped' },
  { value: '5', label: 'Capability areas' },
]

/* ── Client Overview ── */
const CLIENT_EYEBROW = 'The Client'
const CLIENT_HEADING = 'OneWall Communities.'
const CLIENT_DESC =
  'OneWall Communities is a multi-family operator based in Stamford, Connecticut, managing residential communities across the Northeast. During our engagement, they scaled from 20 properties toward a target portfolio of 25\u201330 communities \u2014 consolidating their technology stack, centralizing operations, and building the organizational framework to support that growth.'
const CLIENT_CHALLENGE_HEADING = 'The Challenge'
const CLIENT_CHALLENGE =
  'Processes that worked at 8 properties were no longer suitable. Hiring was inconsistent across communities. Lease renewals ran on manual effort. Reporting was fragmented \u2014 and every new acquisition was at risk of compounding the problem.'

const ENGAGEMENT_DETAILS = [
  { label: 'Industry', value: 'Multi-Family Property Mgmt' },
  { label: 'Portfolio', value: '8 \u2192 18+ Communities' },
  { label: 'Duration', value: '12-Month Retainer' },
  { label: 'Scope', value: 'HR, Operations, Technology' },
  { label: 'Method', value: 'Hub & Spoke Centralization' },
]

/* ── Hub & Spoke ── */
const HUB_EYEBROW = 'Operating Model Design'
const HUB_HEADING = 'Hub & Spoke Centralization.'
const HUB_SUB =
  'We designed a target operating model based on hub and spoke principles \u2014 centralizing strategic and support functions at the group level while preserving local autonomy where residents experience the brand.'

const HUB_TIERS = [
  {
    title: 'Group Strategic Functions',
    icon: Target,
    desc: 'Centralized decision-making for portfolio-wide strategy, compliance, and governance.',
    items: [
      'Business Development',
      'Asset Management',
      'Compliance & Risk',
      'Executive Leadership',
      'Operations Management',
      'Quality Assurance',
    ],
  },
  {
    title: 'Local Community Functions',
    icon: Building2,
    desc: 'The core value chain \u2014 where residents interact with the brand and on-site teams operate daily.',
    items: [
      'Leasing & Marketing Ops',
      'Maintenance & Capital Projects',
      'Resident Services & Engagement',
    ],
  },
  {
    title: 'Group Support Functions',
    icon: Layers,
    desc: 'Shared services that eliminate duplication and enforce consistent standards across all communities.',
    items: ['IT & Systems', 'Finance', 'People & HR', 'Change & Transformation', 'Legal'],
  },
]

const MATURITY_LEVELS = [
  { level: 1, label: 'Initial', desc: 'Ad hoc processes, reactive management' },
  { level: 2, label: 'Developing', desc: 'Some structure, inconsistent execution' },
  { level: 3, label: 'Integrated', desc: 'Standardized processes, measured outcomes' },
  { level: 4, label: 'Optimizing', desc: 'Data-driven improvement, proactive management' },
  { level: 5, label: 'Transforming', desc: 'AI-assisted, continuously evolving operations' },
]

/* ── Q1 Deliverables ── */
const Q1_EYEBROW = 'Q1 Review Highlights'
const Q1_HEADING = '24 Deliverables. Five Themes.'
const Q1_SUB =
  'In the first quarter alone, we shipped 24 deliverables across five interconnected capability areas \u2014 each building toward the centralized operating model.'

const Q1_THEMES = [
  {
    title: 'Capability Development',
    count: 5,
    icon: TrendingUp,
    items: [
      'Standard SOP template for all communities',
      'Hub & Spoke target state operating model',
      'HR capability assessment methodology',
      'As-is HR capability assessment',
      'Business function capability template',
    ],
  },
  {
    title: 'HR Capability',
    count: 7,
    icon: Users,
    items: [
      'HR process priority framework',
      'Current hiring process definition',
      'Improvement ideas register',
      'Candidate evaluation tool v2',
      'RAG platform analysis',
      'Custom RAG solution build',
      'Annual performance review tool',
    ],
  },
  {
    title: 'Renewals Process',
    count: 4,
    icon: FileText,
    items: [
      'Current renewals process map',
      'Renewals improvements register',
      'Ideal renewals process design',
      'Communication automation pilot',
    ],
  },
  {
    title: 'Community Transitions',
    count: 6,
    icon: GitBranch,
    items: [
      'As-is transition process documentation',
      'Onboarding timeline guide',
      'Data collection templates',
      'Property transition scripts',
      'Document repository definition',
      'Monday.com transition template',
    ],
  },
  {
    title: 'Community Reporting',
    count: 2,
    icon: BarChart3,
    items: [
      'Reporting solution phase 1',
      'Data diagnostic tool',
    ],
  },
]

/* ── Hiring Tool ── */
const HIRING_EYEBROW = 'Custom Tool: Hiring Platform'
const HIRING_HEADING = 'Hiring That Captures Data.'
const HIRING_SUB =
  'We built a centralized hiring platform that captures role-specific evaluation forms for every manager across the company. Every interview, every assessment, every decision \u2014 in one place, ready for analytics on what makes a great OneWall hire per position.'

const HIRING_PHASES = [
  {
    number: '01',
    title: 'Requisition',
    desc: 'Managers submit structured requisition forms. HR reviews, approves, and assigns a talent acquisition specialist. New hire documentation flows into the system automatically.',
  },
  {
    number: '02',
    title: 'Sourcing',
    desc: 'Job postings distribute across platforms. Applications are tracked centrally, candidates screened against role-specific criteria, and status updated in real time.',
  },
  {
    number: '03',
    title: 'Interview',
    desc: 'Structured interviews with role-dependent evaluation forms. Both interviewers complete independent assessments. All scores captured for data-driven candidate comparison.',
  },
  {
    number: '04',
    title: 'Offer',
    desc: 'Top candidates identified through data. Background checks, references, contract preparation, and offer management handled through a single coordinated workflow.',
  },
  {
    number: '05',
    title: 'Onboarding',
    desc: 'Hiring data feeds analytics that identify patterns in successful hires per position. Rejected candidates archived for future opportunities across the portfolio.',
  },
]

/* ── Component ── */
export default function Results() {
  const heroRef = useRef(null)
  const clientRef = useRef(null)
  const hubRef = useRef(null)
  const q1Ref = useRef(null)
  const hiringRef = useRef(null)
  const hubCardsRef = useRef([])
  const q1CardsRef = useRef([])
  const hiringCardsRef = useRef([])
  const [expandedTheme, setExpandedTheme] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    hubCardsRef.current = []
    q1CardsRef.current = []
    hiringCardsRef.current = []

    const ctx = gsap.context(() => {
      // Hero entrance
      if (heroRef.current) {
        gsap.from(heroRef.current.querySelectorAll('.anim'), {
          y: 40, opacity: 0, duration: 0.8, stagger: 0.12, delay: 0.2,
          ease: 'power3.out',
        })
      }

      // Client section
      if (clientRef.current) {
        gsap.from(clientRef.current.querySelectorAll('.anim'), {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: clientRef.current, start: 'top 80%' },
        })
      }

      // Hub & Spoke section
      if (hubRef.current) {
        gsap.from(hubRef.current.querySelectorAll('.anim'), {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: hubRef.current, start: 'top 80%' },
        })
      }
      HUB_TIERS.forEach((_, i) => {
        if (!hubCardsRef.current[i]) return
        gsap.from(hubCardsRef.current[i], {
          opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: hubCardsRef.current[i], start: 'top 85%' },
        })
      })

      // Q1 section
      if (q1Ref.current) {
        gsap.from(q1Ref.current.querySelectorAll('.anim'), {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: q1Ref.current, start: 'top 80%' },
        })
      }
      Q1_THEMES.forEach((_, i) => {
        if (!q1CardsRef.current[i]) return
        gsap.from(q1CardsRef.current[i], {
          opacity: 0, y: 40, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: q1CardsRef.current[i], start: 'top 85%' },
        })
      })

      // Hiring section
      if (hiringRef.current) {
        gsap.from(hiringRef.current.querySelectorAll('.anim'), {
          y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: hiringRef.current, start: 'top 80%' },
        })
      }
      HIRING_PHASES.forEach((_, i) => {
        if (!hiringCardsRef.current[i]) return
        gsap.from(hiringCardsRef.current[i], {
          opacity: 0, y: 50, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: hiringCardsRef.current[i], start: 'top 85%' },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-charcoal">

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-charcoal overflow-hidden"
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758304481488-c323378f89ed?w=2000&q=80"
            alt=""
            width={2000}
            height={1333}
            loading="eager"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sage/10 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="anim flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-clay" />
            <span className="text-clay font-mono text-xs uppercase tracking-widest">
              {HERO_EYEBROW}
            </span>
          </div>

          <h1 className="anim font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-3xl">
            <span className="text-cream block mb-2">{HERO_HEADING_1}</span>
            <span className="text-clay block">{HERO_HEADING_2}</span>
          </h1>

          <p className="anim text-sage text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            {HERO_SUB}
          </p>

          <div className="anim grid grid-cols-1 sm:grid-cols-3 gap-px border border-sage/30 rounded overflow-hidden max-w-xl">
            {HERO_STATS.map((d) => (
              <div
                key={d.label}
                className="bg-sage/10 px-4 py-3 text-center sm:text-center text-left flex sm:block items-center gap-3"
              >
                <div className="text-clay font-mono font-bold text-base md:text-lg shrink-0">
                  {d.value}
                </div>
                <div className="text-sage font-mono text-xs mt-0 sm:mt-0.5">{d.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT OVERVIEW ── */}
      <section ref={clientRef} className="py-24 md:py-32 px-6 bg-sage/10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
                {CLIENT_EYEBROW}
              </p>
              <h2 className="anim text-cream font-sans font-bold text-4xl md:text-5xl mb-3">
                {CLIENT_HEADING}
              </h2>
              <div className="anim flex items-center gap-2 mb-8">
                <MapPin className="w-4 h-4 text-sage" />
                <span className="text-sage font-mono text-sm">Stamford, Connecticut</span>
              </div>
              <p className="anim text-cream/70 text-base leading-relaxed mb-8">
                {CLIENT_DESC}
              </p>
              <div>
                <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-3">
                  {CLIENT_CHALLENGE_HEADING}
                </p>
                <p className="anim text-sage text-base leading-relaxed">{CLIENT_CHALLENGE}</p>
              </div>
            </div>

            {/* Engagement details panel */}
            <div className="anim">
              <div className="bg-charcoal border border-sage/20 rounded-lg overflow-hidden">
                <div className="border-b border-sage/20 px-5 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-clay/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-sage text-xs uppercase tracking-widest font-mono">
                    Engagement Summary
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  {ENGAGEMENT_DETAILS.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between border-b border-sage/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sage font-mono text-xs uppercase tracking-wider">
                        {d.label}
                      </span>
                      <span className="text-cream font-mono text-sm font-bold">{d.value}</span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-sage/10 mt-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sage/70 font-mono text-xs">Engagement ongoing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HUB & SPOKE MODEL ── */}
      <section ref={hubRef} className="py-24 md:py-32 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
            {HUB_EYEBROW}
          </p>
          <h2 className="anim text-cream font-sans font-bold text-4xl md:text-5xl mb-6">
            {HUB_HEADING}
          </h2>
          <p className="anim text-sage text-lg max-w-2xl mb-16 leading-relaxed">{HUB_SUB}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {HUB_TIERS.map((tier, i) => {
              const Icon = tier.icon
              return (
                <div
                  key={tier.title}
                  ref={(el) => (hubCardsRef.current[i] = el)}
                  className="group bg-sage/5 border border-sage/15 hover:border-clay/30 rounded-2xl p-8 transition-all duration-300 hover:bg-sage/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-clay/10 border border-clay/20 flex items-center justify-center mb-5 group-hover:bg-clay/20 transition-colors">
                    <Icon className="w-5 h-5 text-clay" />
                  </div>
                  <h3 className="text-cream font-sans font-bold text-xl mb-2">{tier.title}</h3>
                  <p className="text-sage text-sm leading-relaxed mb-6">{tier.desc}</p>
                  <ul className="space-y-2">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                        <span className="text-cream/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Capability maturity scale */}
          <div className="anim">
            <p className="text-sage font-mono text-xs uppercase tracking-widest mb-6 text-center">
              Capability Maturity Framework
            </p>
            <div className="grid grid-cols-5 gap-px border border-sage/15 rounded-lg overflow-hidden">
              {MATURITY_LEVELS.map((m) => (
                <div key={m.level} className="bg-sage/5 p-4 text-center">
                  <div className="text-clay font-mono font-bold text-lg mb-1">{m.level}</div>
                  <div className="text-cream font-mono text-xs font-bold mb-2">{m.label}</div>
                  <div className="text-sage/80 text-xs leading-relaxed hidden md:block">
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sage/70 text-xs font-mono text-center mt-4">
              Each business function scored 1&ndash;5. Assessment drives targeted improvement
              roadmaps.
            </p>
          </div>
        </div>
      </section>

      {/* ── Q1 DELIVERABLES ── */}
      <section ref={q1Ref} className="py-24 md:py-32 px-6 bg-sage/10">
        <div className="max-w-5xl mx-auto">
          <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
            {Q1_EYEBROW}
          </p>
          <h2 className="anim text-cream font-sans font-bold text-4xl md:text-5xl mb-6">
            {Q1_HEADING}
          </h2>
          <p className="anim text-sage text-lg max-w-2xl mb-16 leading-relaxed">{Q1_SUB}</p>

          <div className="space-y-4">
            {Q1_THEMES.map((theme, i) => {
              const Icon = theme.icon
              const isExpanded = expandedTheme === i
              return (
                <div key={theme.title} ref={(el) => (q1CardsRef.current[i] = el)}>
                  <button
                    onClick={() => setExpandedTheme(isExpanded ? null : i)}
                    className="w-full group bg-charcoal border border-sage/15 hover:border-clay/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-sage/5 text-left"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-10 h-10 rounded-lg bg-clay/10 border border-clay/20 flex items-center justify-center shrink-0 group-hover:bg-clay/20 transition-colors">
                          <Icon className="w-5 h-5 text-clay" />
                        </div>
                        <div>
                          <h3 className="text-cream font-sans font-bold text-lg md:text-xl">
                            {theme.title}
                          </h3>
                          <span className="text-sage font-mono text-xs">
                            {theme.count} deliverables
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="hidden sm:block text-clay font-mono text-2xl font-bold opacity-40 group-hover:opacity-80 transition-opacity">
                          {String(theme.count).padStart(2, '0')}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-sage" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-sage" />
                        )}
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="mt-2 bg-charcoal border border-sage/10 rounded-xl p-6 md:p-8 ml-0 md:ml-16">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {theme.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-clay mt-2 shrink-0" />
                            <span className="text-cream/70 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Summary strip */}
          <div className="anim mt-12 grid grid-cols-3 gap-px border border-sage/20 rounded overflow-hidden max-w-md mx-auto">
            <div className="bg-charcoal px-4 py-3 text-center">
              <div className="text-clay font-mono font-bold text-xl">24</div>
              <div className="text-sage font-mono text-xs mt-0.5">Total Items</div>
            </div>
            <div className="bg-charcoal px-4 py-3 text-center">
              <div className="text-clay font-mono font-bold text-xl">5</div>
              <div className="text-sage font-mono text-xs mt-0.5">Themes</div>
            </div>
            <div className="bg-charcoal px-4 py-3 text-center">
              <div className="text-clay font-mono font-bold text-xl">Q1</div>
              <div className="text-sage font-mono text-xs mt-0.5">Single Quarter</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIRING TOOL ── */}
      <section ref={hiringRef} className="py-24 md:py-32 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
                {HIRING_EYEBROW}
              </p>
              <h2 className="anim text-cream font-sans font-bold text-4xl md:text-5xl leading-tight mb-6">
                {HIRING_HEADING}
              </h2>
              <p className="anim text-sage text-base md:text-lg leading-relaxed">
                {HIRING_SUB}
              </p>
            </div>

            {/* Platform impact panel */}
            <div className="anim">
              <div className="bg-sage/5 border border-sage/15 rounded-lg overflow-hidden">
                <div className="border-b border-sage/15 px-5 py-3 flex items-center justify-between">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-clay/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  </div>
                  <span className="text-sage text-xs uppercase tracking-widest font-mono">
                    Platform Impact
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sage font-mono text-xs">Evaluation forms</span>
                      <span className="text-cream font-mono text-xs font-bold">Role-specific</span>
                    </div>
                    <div className="w-full bg-sage/10 rounded-full h-1.5">
                      <div className="bg-clay/70 h-1.5 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sage font-mono text-xs">Data capture</span>
                      <span className="text-cream font-mono text-xs font-bold">All managers</span>
                    </div>
                    <div className="w-full bg-sage/10 rounded-full h-1.5">
                      <div
                        className="bg-emerald-400/60 h-1.5 rounded-full"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sage font-mono text-xs">Analytics readiness</span>
                      <span className="text-cream font-mono text-xs font-bold">Per position</span>
                    </div>
                    <div className="w-full bg-sage/10 rounded-full h-1.5">
                      <div className="bg-clay/50 h-1.5 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="pt-3 border-t border-sage/10 mt-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-sage/70 font-mono text-xs">
                        Hiring pipeline centralized
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process phases */}
          <div className="space-y-4">
            {HIRING_PHASES.map((phase, i) => (
              <div
                key={phase.number}
                ref={(el) => (hiringCardsRef.current[i] = el)}
                className="group bg-sage/5 border border-sage/15 hover:border-clay/40 rounded-2xl p-8 transition-all duration-300 hover:bg-sage/10"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <span className="text-clay font-mono text-4xl font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                      {phase.number}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-cream font-sans font-bold text-2xl mb-3">{phase.title}</h3>
                    <p className="text-cream/70 text-base leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-has-cta className="py-28 px-6 bg-sage/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-6">Your Turn</p>
          <h2 className="text-cream font-sans font-bold text-4xl md:text-5xl leading-tight mb-6">
            Ready for Results Like These?
          </h2>
          <p className="text-sage text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a 30-minute discovery call. We will audit your biggest operational bottleneck and
            show you what a centralized, AI-assisted operating model could look like for your
            portfolio.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Book a Discovery Call
          </Link>
          <p className="text-sage/70 text-sm mt-4 font-mono">No pitch. Just diagnosis.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sage/60 hover:text-cream text-sm font-mono mt-8 transition-colors"
          >
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
