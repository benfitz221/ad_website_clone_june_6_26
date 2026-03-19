import { useState, useEffect, useRef } from 'react'

const MESSAGES = [
  'Analyzing work order patterns...',
  'Identifying bottleneck in maintenance dispatch...',
  'Centralizing vendor communication channels...',
  'Building automated escalation workflow...',
  'Mapping resident onboarding touchpoints...',
  'Generating operations health report...',
]

const LABEL = 'AI Workflow Engine'
const STAT_LABEL_1 = 'Active Units'
const STAT_VALUE_1 = '1,200'
const STAT_LABEL_2 = 'Workflows Automated'
const STAT_VALUE_2 = '14'

export default function TelemetryTypewriter() {
  const [displayText, setDisplayText] = useState('')
  const [msgIndex, setMsgIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = MESSAGES[msgIndex]

    const tick = () => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
          timeoutRef.current = setTimeout(tick, 40)
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.slice(0, displayText.length - 1))
          timeoutRef.current = setTimeout(tick, 20)
        } else {
          setIsDeleting(false)
          setMsgIndex((i) => (i + 1) % MESSAGES.length)
        }
      }
    }

    timeoutRef.current = setTimeout(tick, 80)
    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, msgIndex])

  return (
    <div className="w-full max-w-xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-cream/40 font-mono text-xs uppercase tracking-widest">{LABEL}</span>
      </div>

      {/* Terminal window */}
      <div className="bg-moss/80 border border-cream/10 rounded-xl overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-cream/10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          <span className="ml-2 text-cream/40 text-xs font-mono">telemetry.log</span>
        </div>
        <div className="p-4 min-h-[80px]">
          <div className="flex items-start gap-2">
            <span className="text-clay font-mono text-xs mt-0.5 shrink-0">›</span>
            <span className="text-cream/80 font-mono text-sm leading-relaxed">
              {displayText}
              <span className="inline-block w-1.5 h-4 bg-clay/80 ml-0.5 animate-pulse" />
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="bg-charcoal border border-cream/10 rounded-lg p-3">
          <div className="text-cream/40 text-xs font-mono mb-1">{STAT_LABEL_1}</div>
          <div className="text-cream font-bold text-lg">{STAT_VALUE_1}</div>
        </div>
        <div className="bg-charcoal border border-cream/10 rounded-lg p-3">
          <div className="text-cream/40 text-xs font-mono mb-1">{STAT_LABEL_2}</div>
          <div className="text-cream font-bold text-lg">{STAT_VALUE_2}</div>
        </div>
      </div>
    </div>
  )
}
