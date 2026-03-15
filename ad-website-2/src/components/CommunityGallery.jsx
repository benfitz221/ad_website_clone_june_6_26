import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// Local image paths — drop files into public/images/communities/
// Components fall back to Unsplash if local files are missing
const COMMUNITIES = [
  {
    image: '/images/communities/community-01.jpg',
    fallback: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    label: 'Sample Portfolio',
    location: 'Southeast Region',
    units: '312 units',
    stat: '38% reduction in maintenance backlog',
    statLabel: 'Result after 30 days',
  },
  {
    image: '/images/communities/community-02.jpg',
    fallback: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    label: 'Sample Portfolio',
    location: 'Midwest Region',
    units: '628 units',
    stat: '$1.1M recovered in leakage costs',
    statLabel: 'Result after 6 months',
  },
  {
    image: '/images/communities/community-03.jpg',
    fallback: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    label: 'Sample Portfolio',
    location: 'Southwest Region',
    units: '1,047 units',
    stat: '2.1 hrs avg work order resolution',
    statLabel: 'Down from 6.4 hrs',
  },
]

export default function CommunityGallery() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          opacity: 0, y: 40, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 88%' },
          delay: i * 0.1,
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="results" className="py-24 px-6 bg-moss/30">
      <div className="max-w-7xl mx-auto">

        {/* Section header — dashboard panel style */}
        <div className="border border-cream/10 rounded-lg overflow-hidden mb-10">
          <div className="bg-moss/60 border-b border-cream/10 px-6 py-3 flex items-center justify-between">
            <span className="text-cream/30 font-mono text-xs uppercase tracking-widest">Community Portfolio</span>
            <span className="text-cream/20 font-mono text-xs">B/C CLASS · 2,000+ UNITS UNDER MANAGEMENT</span>
          </div>
          <div className="px-6 py-5 bg-charcoal/40">
            <h2 className="text-cream font-sans font-bold text-3xl md:text-4xl mb-2">
              Operations, Transformed.
            </h2>
            <p className="text-cream/40 text-base max-w-xl">
              What measurable change looks like across portfolio-scale property management.
            </p>
          </div>
        </div>

        {/* Community cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMMUNITIES.map((c, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="relative overflow-hidden rounded-lg border border-cream/10 group"
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={c.image}
                  alt={c.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = c.fallback }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 p-6 flex flex-col justify-between min-h-[280px]">
                {/* Top: location badge */}
                <div className="flex items-center gap-1.5 bg-charcoal/60 border border-cream/10 rounded px-2.5 py-1.5 w-fit">
                  <MapPin size={10} className="text-clay" />
                  <span className="text-cream/60 font-mono text-xs">{c.location}</span>
                </div>

                {/* Bottom: stats */}
                <div>
                  <div className="font-mono text-xs text-cream/30 uppercase tracking-widest mb-1">{c.units}</div>
                  <div className="text-clay font-sans font-bold text-xl leading-tight mb-1">{c.stat}</div>
                  <div className="text-cream/40 font-mono text-xs">{c.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-cream/20 font-mono text-xs mt-6 text-center">
          Replace placeholder images — see public/images/communities/README.md
        </p>
      </div>
    </section>
  )
}
