import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, AlertCircle, Clock, CheckCircle } from 'lucide-react'

const METRICS = [
  { label: 'Occupancy', value: '94.2%', change: '+2.1%', up: true },
  { label: 'Open Tickets', value: '47', change: '-12 wk', up: false },
  { label: 'NOI / Unit', value: '$847', change: '+$43', up: true },
]

const WORK_ORDERS = [
  { id: '#4821', unit: 'Bldg C · Unit 14', issue: 'HVAC filter replacement', priority: 'urgent', age: '3d' },
  { id: '#4820', unit: 'Bldg A · Unit 07', issue: 'Dishwasher not draining', priority: 'normal', age: '5d' },
  { id: '#4819', unit: 'Common Area', issue: 'Exterior lighting — Lot 2', priority: 'low', age: '8d' },
  { id: '#4818', unit: 'Bldg B · Unit 22', issue: 'Lease renewal follow-up', priority: 'normal', age: '9d' },
]

const PRIORITY_STYLES = {
  urgent: { dot: 'bg-red-400', label: 'URGENT' },
  normal: { dot: 'bg-clay', label: 'NORMAL' },
  low: { dot: 'bg-cream/30', label: 'LOW' },
}

// Simulated live update counter
let tickCount = 0

export default function OperationsDashboard() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      tickCount++
      setTick(tickCount)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const timestamp = new Date(Date.now() - tick * 0).toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
  })

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
            <span className="text-cream/30 text-xs uppercase tracking-widest">OPERATIONS CENTER</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cream/25 text-xs">{timestamp}</span>
          </div>
        </div>

        {/* Portfolio header row */}
        <div className="px-4 py-2 bg-charcoal/40 border-b border-cream/8 flex items-center justify-between">
          <span className="text-cream/30 text-xs">PORTFOLIO — 3 communities · 847 units</span>
          <span className="text-clay text-xs">● LIVE</span>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 border-b border-cream/10">
          {METRICS.map((m, i) => (
            <div
              key={i}
              className={`px-4 py-4 ${i < 2 ? 'border-r border-cream/10' : ''}`}
            >
              <div className="text-cream/30 text-xs uppercase tracking-wider mb-2">{m.label}</div>
              <div className="text-cream text-2xl font-bold mb-1">{m.value}</div>
              <div className={`flex items-center gap-1 text-xs ${m.up ? 'text-emerald-400' : 'text-clay'}`}>
                {m.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {m.change}
              </div>
            </div>
          ))}
        </div>

        {/* Work order queue */}
        <div>
          <div className="px-4 py-2 border-b border-cream/8 flex items-center justify-between bg-charcoal/20">
            <span className="text-cream/30 text-xs uppercase tracking-wider">MAINTENANCE QUEUE</span>
            <span className="text-cream/20 text-xs">{WORK_ORDERS.length} open</span>
          </div>
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
                  <span className="text-cream/20 text-xs">{wo.age}</span>
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

        {/* Footer row */}
        <div className="px-4 py-2 bg-charcoal/40 border-t border-cream/8 flex items-center justify-between">
          <span className="text-cream/20 text-xs">14 workflows automated · avg resolve 4.2 hrs</span>
          <span className="text-cream/20 text-xs">↑ NOI trend</span>
        </div>
      </div>
    </div>
  )
}
