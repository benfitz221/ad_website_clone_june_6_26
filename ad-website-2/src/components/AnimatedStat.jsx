import { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'

/**
 * Scroll-triggered animated counter.
 * Renders a static placeholder until the element enters the viewport,
 * then counts up to the target value with easing.
 */
export default function AnimatedStat({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className = '',
}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={end}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={duration}
          useEasing
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  )
}
