import { Link } from 'react-router-dom'

const BRAND = 'AGENT DONE'
const TAGLINE = 'We help you scale operations without scaling headcount.'
const COPYRIGHT_YEAR = new Date().getFullYear()

const COLUMNS = [
  {
    heading: 'Services',
    links: [
      { label: 'Service Pillars', to: '/services#service-pillars' },
      { label: 'Free Process Diagnostic', to: '/services#free-process-diagnostic' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Case Studies', to: '/results' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/10 pt-16 pb-16 md:pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-cream font-sans font-bold text-xl tracking-tight mb-3 block hover:opacity-90 transition-opacity">
              {BRAND}
            </Link>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">{TAGLINE}</p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-cream/40 font-mono text-xs">All systems operational</span>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-cream/50 font-mono text-xs uppercase tracking-widest mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link to={link.to} className="text-cream/50 hover:text-cream text-sm transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-cream/50 hover:text-cream text-sm transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs font-mono">
            {BRAND}&trade; {COPYRIGHT_YEAR}. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs font-mono">On A Mission To Be Generous</p>
        </div>
      </div>
    </footer>
  )
}
