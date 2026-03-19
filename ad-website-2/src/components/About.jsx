import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Shield, Lightbulb, Users } from 'lucide-react'
import AnimatedStat from './AnimatedStat'
import MagneticWrap from './MagneticWrap'

gsap.registerPlugin(ScrollTrigger)

/* ── Copy ── */
const EYEBROW = 'About Agent Done'
const MISSION =
  'We help our clients enjoy their businesses by finding the tech that suits them best.'
const MISSION_SUB =
  'Not the flashiest platform. Not the biggest vendor. The right fit for your operation, your team, and your goals.'

const TEAM = [
  {
    name: 'Benjamin Fitzgerald',
    title: 'Founder & Client Delivery Lead',
    photo: '/images/about/benjamin-fitzgerald-new-2.webp',
    bio: 'Former IT transformation lead across multi-family portfolios ranging from 2K to 10K units. Ben builds the operational playbooks that turn fragmented workflows into centralized, AI-assisted systems.',
    imgStyle: { filter: 'saturate(0.78) brightness(1.02) hue-rotate(-10deg)' },
  },
  {
    name: 'Polina Kolonitskaya',
    title: 'Delivery Partner, Lead Analyst',
    photo: '/images/about/Polina_new-1.webp',
    bio: 'Data and process analyst who maps every bottleneck before recommending a single tool. Polina ensures each engagement is grounded in measurable outcomes, not assumptions.',
  },
  {
    name: 'Nikita Zhitnikov',
    title: 'Delivery Partner, Lead Analyst',
    photo: '/images/about/Nikita_new-1.webp',
    bio: 'Integration specialist focused on connecting property management platforms, accounting systems, and communication tools into a single operational layer.',
  },
]

const DIFFERENTIATORS = [
  {
    stat: 25, suffix: '+', label: 'Years combined in IT consulting & automation', isNumber: true,
  },
  {
    stat: 'Neutral', label: 'Vendor-agnostic recommendations', isNumber: false,
  },
  {
    stat: 100, suffix: '%', label: 'Focus on multi-family operations', isNumber: true,
  },
]

const APART_TEXT =
  'At Agent Done, we specialize in practical solutions, tailored for the multi-family industry. With a combined 25+ years in IT consulting & automation, our team is able to identify opportunities and anticipate pitfalls to ensure your investments in tech deliver maximum return.'

const VALUES = [
  {
    icon: Shield,
    title: 'Trust & Integrity',
    desc: 'We value trust and integrity. We earn trust by doing what we say and saying what we mean. No upsells, no hidden agendas.',
  },
  {
    icon: Users,
    title: 'Client-First',
    desc: 'We always serve in our client\u2019s best interest \u2014 even when it means recommending against a project.',
  },
  {
    icon: Lightbulb,
    title: 'Complex Made Simple',
    desc: 'We commit to making the complex feel simple. Every deliverable is something your team can run without us.',
  },
]

/* ── Component ── */
export default function About() {
  const heroRef = useRef(null)
  const teamRef = useRef(null)
  const apartRef = useRef(null)
  const valuesRef = useRef(null)
  const cardsRef = useRef([])
  const valueCardsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)

    // Reset ref arrays to avoid stale entries across re-renders
    cardsRef.current = []
    valueCardsRef.current = []

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

      // Team cards
      TEAM.forEach((_, i) => {
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

      // Apart section
      if (apartRef.current) {
        gsap.from(apartRef.current.querySelectorAll('.anim'), {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: apartRef.current,
            start: 'top 80%',
          },
        })
      }

      // Values
      VALUES.forEach((_, i) => {
        if (!valueCardsRef.current[i]) return
        gsap.from(valueCardsRef.current[i], {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valueCardsRef.current[i],
            start: 'top 85%',
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="bg-charcoal">
      {/* ── HERO / MISSION ── */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 bg-charcoal overflow-hidden"
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1702047094974-a3475a6e37f5?w=2000&q=80"
            alt=""
            width={2000}
            height={1333}
            loading="eager"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>

        {/* Subtle gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-moss/30 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="anim flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-clay" />
            <span className="text-clay font-mono text-xs uppercase tracking-widest">
              {EYEBROW}
            </span>
          </div>

          <h1 className="anim font-sans font-bold text-cream text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-3xl">
            {MISSION}
          </h1>

          <p className="anim text-cream/50 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            {MISSION_SUB}
          </p>

          {/* Differentiator strip */}
          <div className="anim grid grid-cols-1 sm:grid-cols-3 gap-px border border-cream/10 rounded overflow-hidden max-w-xl">
            {DIFFERENTIATORS.map((d) => (
              <div key={d.label} className="bg-moss/40 px-4 py-3 text-center sm:text-center text-left flex sm:block items-center gap-3">
                <div className="text-clay font-mono font-bold text-base md:text-lg shrink-0">
                  {d.isNumber ? (
                    <AnimatedStat end={d.stat} suffix={d.suffix || ''} duration={2} />
                  ) : (
                    d.stat
                  )}
                </div>
                <div className="text-cream/50 font-mono text-xs mt-0 sm:mt-0.5">
                  {d.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section ref={teamRef} className="py-24 md:py-32 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">
            The Team
          </p>
          <h2 className="text-cream font-sans font-bold text-4xl md:text-5xl mb-6">
            People Behind the Process.
          </h2>
          <p className="text-cream/50 text-lg max-w-lg mb-16">
            A small, senior team. No layers. Every engagement is led by the people who do the work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                ref={(el) => (cardsRef.current[i] = el)}
                className="group bg-cream/5 border border-cream/10 rounded-2xl overflow-hidden hover:border-clay/30 transition-all duration-300 hover:bg-cream/8"
              >
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden bg-moss/30">
                  <img
                    src={member.photo}
                    alt={member.name}
                    width={400}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-[1.03]"
                    style={member.imgStyle}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-cream font-sans font-bold text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="text-clay font-mono text-xs uppercase tracking-wider mb-4">
                    {member.title}
                  </p>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART ── */}
      <section ref={apartRef} className="py-24 md:py-32 px-6 bg-moss">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="anim text-clay font-mono text-xs uppercase tracking-widest mb-4">
                What Sets Us Apart
              </p>
              <h2 className="anim text-cream font-sans font-bold text-4xl md:text-5xl leading-tight mb-6">
                Practical Over Flashy.
              </h2>
              <p className="anim text-cream/60 text-base md:text-lg leading-relaxed">
                {APART_TEXT}
              </p>
            </div>

            <div className="anim space-y-4">
              {[
                'Tired of vendors whose recommendations align with their sales goals?',
                'Our neutral stance ensures your actual challenges \u2014 not quotas or rigid roadmaps \u2014 drive every solution.',
                'We stay until the system runs without us. That\u2019s the whole point.',
              ].map((line, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-cream/5 border border-cream/10 rounded-xl px-5 py-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-clay mt-2 shrink-0" />
                  <p className="text-cream/70 text-sm leading-relaxed">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section ref={valuesRef} className="py-24 md:py-32 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-clay font-mono text-xs uppercase tracking-widest mb-4">
              Our Core Values
            </p>
            <h2 className="text-cream font-sans font-bold text-4xl md:text-5xl mb-4">
              How We Operate.
            </h2>
            <p className="text-cream/50 text-lg max-w-lg mx-auto">
              Three principles that shape every engagement, every recommendation, every deliverable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  ref={(el) => (valueCardsRef.current[i] = el)}
                  className="group bg-cream/5 border border-cream/10 hover:border-clay/40 rounded-2xl p-8 transition-all duration-300 hover:bg-cream/8"
                >
                  <div className="w-10 h-10 rounded-lg bg-clay/10 border border-clay/20 flex items-center justify-center mb-6 group-hover:bg-clay/20 transition-colors">
                    <Icon className="w-5 h-5 text-clay" />
                  </div>
                  <h3 className="text-cream font-sans font-bold text-xl mb-3">
                    {value.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section data-has-cta className="py-28 px-6 bg-moss">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-clay font-mono text-xs uppercase tracking-widest mb-6">
            Work With Us
          </p>
          <h2 className="text-cream font-sans font-bold text-4xl md:text-5xl leading-tight mb-6">
            Let&apos;s Find What Fits.
          </h2>
          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Book a 30-minute discovery call. We will walk through your current
            operation, identify the biggest bottleneck, and map what AI can change
            in 30 days.
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
            No pitch. Just diagnosis.
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
