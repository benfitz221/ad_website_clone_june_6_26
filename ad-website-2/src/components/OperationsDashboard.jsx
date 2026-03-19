import { useState, useEffect, useRef, useCallback } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const METRICS = [
  { label: 'Process Efficiency', value: '87%', change: '+14%', up: true },
  { label: 'Open Tasks', value: '23', change: '-31 wk', up: false },
  { label: 'NOI / Unit', value: '$847', change: '+$43', up: true },
]

// ── View 1: Centralization Queue ──
const WORK_ORDERS = [
  { id: '#4821', unit: 'Maintenance', issue: 'Vendor approval workflow — centralized', priority: 'urgent', age: '3d' },
  { id: '#4820', unit: 'Leasing', issue: 'Application review — standardized', priority: 'normal', age: '5d' },
  { id: '#4819', unit: 'Finance', issue: 'Invoice routing — automated', priority: 'low', age: '8d' },
  { id: '#4818', unit: 'HR', issue: 'Onboarding checklist — rolled out', priority: 'normal', age: '9d' },
]

const PRIORITY_STYLES = {
  urgent: { dot: 'bg-red-400', label: 'URGENT' },
  normal: { dot: 'bg-clay', label: 'NORMAL' },
  low: { dot: 'bg-cream/30', label: 'LOW' },
}

// ── View 2: Adoption Tracker ──
const LEASING_ITEMS = [
  { unit: 'Property Mgrs', event: 'New maintenance SOP — training complete', date: 'Mar 22', status: 'confirmed' },
  { unit: 'Leasing Team', event: 'Centralized app review — rollout', date: 'Mar 18', status: 'pending' },
  { unit: 'Accounting', event: 'AP automation — pilot phase', date: 'Mar 16', status: 'pending' },
  { unit: 'Regional Ops', event: 'Dashboard access — onboarding', date: 'Apr 01', status: 'notice' },
]

const LEASING_STATUS = {
  pending: { dot: 'bg-clay', label: 'IN PROGRESS', labelClass: 'text-clay border-clay/30 bg-clay/10' },
  confirmed: { dot: 'bg-emerald-400', label: 'ADOPTED', labelClass: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' },
  notice: { dot: 'bg-red-400', label: 'BLOCKED', labelClass: 'text-red-400 border-red-400/30 bg-red-400/10' },
}

// ── View 3: Centralization Impact ──
const FINANCIAL_ITEMS = [
  { category: 'Per-Unit Cost', detail: 'Monthly operating expense per door', amount: '$312', change: '-11.4%', up: false },
  { category: 'Process Cycle Time', detail: 'Avg days from request to resolution', amount: '2.1 days', change: '-38%', up: false },
  { category: 'Team Capacity', detail: 'Tasks handled per FTE vs. baseline', amount: '+26%', change: '+26%', up: true },
  { category: 'Net Operating Income', detail: 'Portfolio-wide trailing 12 months', amount: '$718,600', change: '+5.7%', up: true },
]

const VIEW_LABELS = ['CENTRALIZATION QUEUE', 'ADOPTION TRACKER', 'IMPACT METRICS']

export default function OperationsDashboard() {
  const [activeView, setActiveView] = useState(0)
  const [timestamp, setTimestamp] = useState(() =>
    new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
  )
  const timestampRef = useRef(null)

  // Single interval: update timestamp every 4s, rotate view every 5th tick (20s)
  useEffect(() => {
    let count = 0
    const id = setInterval(() => {
      count++
      setTimestamp(
        new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
      )
      if (count % 5 === 0) {
        setActiveView((v) => (v + 1) % 3)
      }
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full font-mono">
      {/* Window chrome */}
      <div className="bg-moss border border-cream/15 rounded-lg overflow-hidden shadow-2xl">

        {/* Title bar */}
        <div className="bg-moss/90 border-b border-cream/10 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
            <span className="text-cream/50 text-xs uppercase tracking-widest">CENTRALIZATION OPS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cream/40 text-xs">{timestamp}</span>
          </div>
        </div>

        {/* Portfolio header row */}
        <div className="px-4 py-2 bg-charcoal/40 border-b border-cream/8 flex items-center justify-between">
          <span className="text-cream/50 text-xs">PORTFOLIO — 12 properties · 4,200 units</span>
          <span className="text-clay text-xs">● LIVE</span>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 border-b border-cream/10">
          {METRICS.map((m, i) => (
            <div
              key={i}
              className={`px-4 py-4 ${i < 2 ? 'border-r border-cream/10' : ''}`}
            >
              <div className="text-cream/50 text-xs uppercase tracking-wider mb-2">{m.label}</div>
              <div className="text-cream text-2xl font-bold mb-1">{m.value}</div>
              <div className={`flex items-center gap-1 text-xs ${m.up ? 'text-emerald-400' : 'text-clay'}`}>
                {m.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {m.change}
              </div>
            </div>
          ))}
        </div>

        {/* Rotating content area */}
        <div>
          <div className="px-4 py-2 border-b border-cream/8 flex items-center justify-between bg-charcoal/20">
            <span className="text-cream/50 text-xs uppercase tracking-wider">{VIEW_LABELS[activeView]}</span>
            <span className="text-cream/40 text-xs">
              {activeView === 0 && `${WORK_ORDERS.length} open`}
              {activeView === 1 && `${LEASING_ITEMS.length} events`}
              {activeView === 2 && 'monthly'}
            </span>
          </div>

          {/* View content with fade transition */}
          <div className="relative min-h-[192px]">
            {/* View 1: Maintenance Queue */}
            <div className={`transition-opacity duration-500 ${activeView === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              {WORK_ORDERS.map((wo, i) => {
                const p = PRIORITY_STYLES[wo.priority]
                return (
                  <div
                    key={i}
                    className={`px-4 py-3 flex items-center gap-3 ${
                      i < WORK_ORDERS.length - 1 ? 'border-b border-cream/5' : ''
                    } hover:bg-cream/3 transition-colors`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-cream/50 text-xs">{wo.id}</span>
                        <span className="text-cream/20 text-xs">·</span>
                        <span className="text-cream/40 text-xs truncate">{wo.unit}</span>
                      </div>
                      <div className="text-cream/70 text-xs truncate">{wo.issue}</div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-cream/40 text-xs">{wo.age}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded border ${
                        wo.priority === 'urgent'
                          ? 'text-red-400 border-red-400/30 bg-red-400/10'
                          : wo.priority === 'normal'
                          ? 'text-clay border-clay/30 bg-clay/10'
                          : 'text-cream/30 border-cream/10'
                      }`}>
                        {p.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* View 2: Leasing Pipeline */}
            <div className={`transition-opacity duration-500 ${activeView === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              {LEASING_ITEMS.map((item, i) => {
                const s = LEASING_STATUS[item.status]
                return (
                  <div
                    key={i}
                    className={`px-4 py-3 flex items-center gap-3 ${
                      i < LEASING_ITEMS.length - 1 ? 'border-b border-cream/5' : ''
                    } hover:bg-cream/3 transition-colors`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.dot}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-cream/50 text-xs">{item.unit}</span>
                      </div>
                      <div className="text-cream/70 text-xs truncate">{item.event}</div>
                    </div>
                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-cream/40 text-xs">{item.date}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded border ${s.labelClass}`}>
                        {s.label}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* View 3: Impact Metrics */}
            <div className={`transition-opacity duration-500 ${activeView === 2 ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'}`}>
              {FINANCIAL_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className={`px-4 py-3 flex items-center gap-3 ${
                    i < FINANCIAL_ITEMS.length - 1 ? 'border-b border-cream/5' : ''
                  } hover:bg-cream/3 transition-colors`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.up ? 'bg-emerald-400' : 'bg-clay'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-cream/50 text-xs">{item.category}</span>
                    </div>
                    <div className="text-cream/70 text-xs truncate">{item.detail}</div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-cream font-bold text-xs">{item.amount}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded border ${
                      item.up
                        ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10'
                        : 'text-clay border-clay/30 bg-clay/10'
                    }`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer row with dot indicators */}
        <div className="px-4 py-2 bg-charcoal/40 border-t border-cream/8 flex items-center justify-between">
          <span className="text-cream/40 text-xs">9 processes centralized · 3 departments active</span>
          <div className="flex items-center gap-1.5">
            {VIEW_LABELS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveView(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === activeView ? 'bg-clay' : 'bg-cream/20 hover:bg-cream/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
