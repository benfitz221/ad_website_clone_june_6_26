const STATS = [
  { value: '15+', label: 'Properties transformed' },
  { value: '$2.3M', label: 'Recovered operational costs' },
  { value: '30 days', label: 'Average time to results' },
]

export default function Membership() {
  return (
    <section id="results" className="py-28 px-6 bg-moss">
      <div className="max-w-4xl mx-auto text-center">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div key={i} className="border-l border-clay/30 pl-6 text-left first:border-l-0 first:pl-0">
              <div className="text-clay font-sans font-bold text-3xl md:text-4xl mb-1">{stat.value}</div>
              <div className="text-cream/50 font-mono text-xs uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="text-clay font-mono text-xs uppercase tracking-widest mb-6">Get Started</p>
        <h2 className="text-cream font-sans font-bold text-4xl md:text-6xl leading-tight mb-6">
          Ready to Run a Leaner Operation?
        </h2>
        <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a 30-minute discovery call. We will map your biggest operational bottleneck and show you
          what AI can change in 90 days.
        </p>
        <button className="bg-clay text-charcoal px-10 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity">
          Book a Discovery Call
        </button>
        <p className="text-cream/30 text-sm mt-4 font-mono">No pitch. Just diagnosis.</p>
      </div>
    </section>
  )
}
