const BRAND = 'AGENT DONE'
const TAGLINE = 'We help you scale operations without scaling headcount.'
const COPYRIGHT_YEAR = new Date().getFullYear()

const COLUMNS = [
  {
    heading: 'Services',
    links: ['Operations Audit', 'AI Implementation', 'Change Management', 'Ongoing Advisory'],
  },
  {
    heading: 'Company',
    links: ['About', 'Case Studies', 'Blog', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/10 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-cream font-sans font-bold text-xl tracking-tight mb-3">{BRAND}</div>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">{TAGLINE}</p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-cream/30 font-mono text-xs">All systems operational</span>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-cream/30 font-mono text-xs uppercase tracking-widest mb-4">{col.heading}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-cream/50 hover:text-cream text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-mono">
            © {COPYRIGHT_YEAR} {BRAND}. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs font-mono">Made with intention.</p>
        </div>
      </div>
    </footer>
  )
}
