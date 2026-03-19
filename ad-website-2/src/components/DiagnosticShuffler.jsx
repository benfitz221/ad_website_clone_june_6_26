import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'

const METRICS = [
  { label: 'Open Maintenance Tickets', value: '47', trend: 'down', change: '-12', unit: 'this week' },
  { label: 'Avg. Resolution Time', value: '4.2 hrs', trend: 'down', change: '-1.1 hr', unit: 'to close' },
  { label: 'Portfolio Occupancy', value: '94.2%', trend: 'up', change: '+2.1%', unit: 'across units' },
  { label: 'NOI per Unit', value: '$847', trend: 'up', change: '+$43', unit: 'monthly avg' },
  { label: 'Work Order Backlog', value: '23 days', trend: 'down', change: '-7 days', unit: 'avg resolve' },
]

const LABEL = 'Operations Dashboard'

function TrendIcon({ trend }) {
  if (trend === 'up') return <TrendingUp size={14} className="text-emerald-400" />
  if (trend === 'down') return <TrendingDown size={14} className="text-red-400" />
  return <Minus size={14} className="text-cream/40" />
}

export default function DiagnosticShuffler() {
  const [order, setOrder] = useState(METRICS.map((_, i) => i))

  useEffect(() => {
    const id = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev]
        const first = next.shift()
        next.push(first)
        return next
      })
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full max-w-xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
        <span className="text-cream/40 font-mono text-xs uppercase tracking-widest">{LABEL}</span>
      </div>
      <div className="relative h-52 overflow-hidden">
        {order.map((idx, pos) => {
          const metric = METRICS[idx]
          const opacity = Math.max(0, 1 - pos * 0.22)
          const scale = Math.max(0.84, 1 - pos * 0.04)
          const translateY = pos * 44
          return (
            <div
              key={idx}
              className="absolute left-0 right-0 bg-charcoal border border-cream/10 rounded-xl px-4 py-3 transition-all duration-700"
              style={{ transform: `translateY(${translateY}px) scale(${scale})`, opacity, zIndex: METRICS.length - pos }}
            >
              <div className="flex items-center justify-between">
                <span className="text-cream/50 text-xs font-mono">{metric.label}</span>
                <div className="flex items-center gap-1">
                  <TrendIcon trend={metric.trend} />
                  <span className="text-cream/40 text-xs font-mono">{metric.change}</span>
                </div>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-cream font-sans font-bold text-xl">{metric.value}</span>
                <span className="text-cream/50 text-xs">{metric.unit}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
