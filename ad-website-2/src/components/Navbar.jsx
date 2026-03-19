import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import MagneticWrap from './MagneticWrap'

const BRAND = 'AGENT DONE'
const CTA_TEXT = 'Book a Discovery Call'
const STATUS_TEXT = '2 active engagements'

/* Maps nav labels to their targets.
   'About' routes to /about; everything else anchors to homepage sections. */
const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Results', to: '/results' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Handle anchor clicks: scroll on homepage, navigate home + scroll on other pages */
  const handleAnchorClick = (anchor, closeMenu) => (e) => {
    if (closeMenu) closeMenu()

    if (isHome) {
      // Already on homepage — let the browser handle the anchor scroll
      return
    }

    // On a subpage — navigate to home, then scroll after mount
    e.preventDefault()
    navigate('/')
    // Wait for homepage to mount before scrolling to the section
    requestAnimationFrame(() => {
      setTimeout(() => {
        const id = anchor.replace('#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    })
  }

  /* Render a single nav link — either a router Link or an anchor */
  const renderNavLink = (item, className, closeMenu) => {
    if (item.to) {
      return (
        <Link
          key={item.label}
          to={item.to}
          onClick={closeMenu}
          className={className}
        >
          {item.label}
        </Link>
      )
    }

    return (
      <a
        key={item.label}
        href={item.anchor}
        onClick={handleAnchorClick(item.anchor, closeMenu)}
        className={className}
      >
        {item.label}
      </a>
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/98 backdrop-blur-md border-b border-cream/10'
          : 'bg-charcoal/95 backdrop-blur-sm border-b border-cream/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">

        {/* Left: brand + live status badge */}
        <div className="flex items-center gap-4 shrink-0">
          <Link to="/" className="text-cream font-sans font-bold text-base tracking-tight hover:opacity-90 transition-opacity">
            {BRAND}
          </Link>
          <div className="hidden lg:flex items-center gap-1.5 bg-moss/60 border border-cream/10 px-2.5 py-1 rounded">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cream/40 font-mono text-xs">{STATUS_TEXT}</span>
          </div>
        </div>

        {/* Center: app-tab style nav */}
        <div className="hidden md:flex items-stretch border border-cream/15 rounded overflow-hidden">
          {NAV_ITEMS.map((item) =>
            renderNavLink(
              item,
              `px-4 py-2 text-cream/70 hover:text-cream hover:bg-cream/5 text-xs font-mono uppercase tracking-widest transition-colors border-r border-cream/15 last:border-r-0${
                item.to && location.pathname === item.to ? ' bg-cream/5 text-cream' : ''
              }`,
            )
          )}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block shrink-0">
          <MagneticWrap>
            <Link
              to="/contact"
              className="inline-block bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              {CTA_TEXT}
            </Link>
          </MagneticWrap>
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
          {NAV_ITEMS.map((item) =>
            renderNavLink(
              item,
              'block text-cream/80 hover:text-cream py-3 text-xs font-mono uppercase tracking-widest border-b border-cream/10 transition-colors',
              () => setMenuOpen(false),
            )
          )}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 w-full bg-clay text-charcoal py-3 rounded text-xs font-mono font-bold uppercase tracking-wider text-center"
          >
            {CTA_TEXT}
          </Link>
        </div>
      )}
    </nav>
  )
}
