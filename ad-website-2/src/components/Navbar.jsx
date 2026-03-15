import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['About', 'Process', 'Results', 'Contact']
const BRAND = 'AGENT DONE'
const CTA_TEXT = 'Book a Discovery Call'
const STATUS_TEXT = '2 active engagements'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/98 backdrop-blur-md border-b border-cream/10'
          : 'bg-charcoal/80 backdrop-blur-sm border-b border-cream/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">

        {/* Left: brand + live status badge */}
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-cream font-sans font-bold text-base tracking-tight">{BRAND}</span>
          <div className="hidden lg:flex items-center gap-1.5 bg-moss/60 border border-cream/10 px-2.5 py-1 rounded">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cream/40 font-mono text-xs">{STATUS_TEXT}</span>
          </div>
        </div>

        {/* Center: app-tab style nav */}
        <div className="hidden md:flex items-stretch border border-cream/10 rounded overflow-hidden">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-cream/50 hover:text-cream hover:bg-cream/5 text-xs font-mono uppercase tracking-widest transition-colors border-r border-cream/10 last:border-r-0"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block shrink-0">
          <button className="bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
            {CTA_TEXT}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-cream p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal/98 border-t border-cream/10 px-6 py-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-cream/60 hover:text-cream py-3 text-xs font-mono uppercase tracking-widest border-b border-cream/10 transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="mt-4 w-full bg-clay text-charcoal py-3 rounded text-xs font-mono font-bold uppercase tracking-wider">
            {CTA_TEXT}
          </button>
        </div>
      )}
    </nav>
  )
}
