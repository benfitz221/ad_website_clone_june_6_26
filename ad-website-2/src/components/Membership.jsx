import { Link } from 'react-router-dom'
import AnimatedStat from './AnimatedStat'
import MagneticWrap from './MagneticWrap'

export default function Membership() {
  return (
    <section id="contact" className="py-28 px-6 bg-moss">
      <div className="max-w-4xl mx-auto text-center">
        {/* Stats — animated counters */}
        <div className="grid grid-cols-3 gap-6 mb-20">
          <div className="border-l border-clay/30 pl-6 text-left first:border-l-0 first:pl-0">
            <div className="text-clay font-sans font-bold text-3xl md:text-4xl mb-1">
              <AnimatedStat end={15} suffix="+" duration={2} />
            </div>
            <div className="text-cream/50 font-mono text-xs uppercase tracking-wide">Properties transformed</div>
          </div>
          <div className="border-l border-clay/30 pl-6 text-left">
            <div className="text-clay font-sans font-bold text-3xl md:text-4xl mb-1">
              <AnimatedStat end={2.3} prefix="$" suffix="M" decimals={1} duration={2} />
            </div>
            <div className="text-cream/50 font-mono text-xs uppercase tracking-wide">Recovered operational costs</div>
          </div>
          <div className="border-l border-clay/30 pl-6 text-left">
            <div className="text-clay font-sans font-bold text-3xl md:text-4xl mb-1">
              <AnimatedStat end={30} duration={2} /> <span className="text-2xl">days</span>
            </div>
            <div className="text-cream/50 font-mono text-xs uppercase tracking-wide">Average time to results</div>
          </div>
        </div>

        <p className="text-clay font-mono text-xs uppercase tracking-widest mb-6">Get Started</p>
        <h2 className="text-cream font-sans font-bold text-4xl md:text-6xl leading-tight mb-6">
          Ready to Run a Leaner Operation?
        </h2>
        <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a 30-minute discovery call. We will map your biggest operational bottleneck and show you
          what AI can change in 30 days.
        </p>
        <MagneticWrap>
          <Link to="/contact" className="inline-block bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            Book a Discovery Call
          </Link>
        </MagneticWrap>
        <p className="text-cream/50 text-sm mt-4 font-mono">No pitch. Just diagnosis.</p>
      </div>
    </section>
  )
}
