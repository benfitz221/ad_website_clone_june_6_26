import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const HEADING = 'Schedule Assessment'
const LABEL = 'Discovery Call'
const BUTTON_TEXT = 'Book Discovery Call'
const ACCENT_COLOR = '#DCAE1D'

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const NUM_ROWS = 5

function buildCalendar() {
  const days = []
  let date = 1
  for (let r = 0; r < NUM_ROWS; r++) {
    for (let c = 0; c < 7; c++) {
      if ((r === 0 && c < 3) || date > 31) {
        days.push(null)
      } else {
        days.push(date++)
      }
    }
  }
  return days
}

const CALENDAR = buildCalendar()

export default function AdaptiveRegimen() {
  const [selected, setSelected] = useState(12)
  const cursorRef = useRef(null)
  const gridRef = useRef(null)

  // Animate cursor to selected cell
  useEffect(() => {
    if (!gridRef.current || !cursorRef.current) return
    const cells = gridRef.current.querySelectorAll('[data-day]')
    const target = [...cells].find((el) => Number(el.dataset.day) === selected)
    if (!target) return
    const grid = gridRef.current.getBoundingClientRect()
    const cell = target.getBoundingClientRect()
    gsap.to(cursorRef.current, {
      x: cell.left - grid.left + cell.width / 2 - 14,
      y: cell.top - grid.top + cell.height / 2 - 14,
      duration: 0.45,
      ease: 'power2.inOut',
    })
  }, [selected])

  return (
    <div className="w-full max-w-xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-clay animate-pulse" />
        <span className="text-cream/40 font-mono text-xs uppercase tracking-widest">{LABEL}</span>
      </div>

      <div className="bg-charcoal border border-cream/10 rounded-xl p-4">
        <p className="text-cream font-sans font-semibold text-sm mb-4">{HEADING}</p>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((d, i) => (
            <div key={i} className="text-cream/30 font-mono text-xs text-center py-1">
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div ref={gridRef} className="relative grid grid-cols-7 gap-1">
          {/* Animated cursor */}
          <div
            ref={cursorRef}
            className="absolute pointer-events-none w-7 h-7 rounded-full border-2 transition-none"
            style={{ borderColor: ACCENT_COLOR, left: 0, top: 0 }}
          />

          {CALENDAR.map((day, i) => (
            <button
              key={i}
              data-day={day || undefined}
              onClick={() => day && setSelected(day)}
              disabled={!day}
              className={`relative z-10 text-xs font-mono rounded-full w-7 h-7 flex items-center justify-center transition-all ${
                day === selected
                  ? 'text-charcoal font-bold'
                  : day
                  ? 'text-cream/50 hover:text-cream'
                  : 'opacity-0 pointer-events-none'
              }`}
              style={day === selected ? { backgroundColor: ACCENT_COLOR } : {}}
            >
              {day}
            </button>
          ))}
        </div>

        <button
          className="mt-4 w-full py-2 rounded-lg text-xs font-mono font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: ACCENT_COLOR, color: '#142F40' }}
        >
          {BUTTON_TEXT}
        </button>
      </div>
    </div>
  )
}
