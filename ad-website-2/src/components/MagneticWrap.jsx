import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

/**
 * Wraps any child element with magnetic cursor-pull and spring-based
 * press feedback. Uses useMotionValue + useSpring exclusively —
 * never useState — to keep updates off the React render cycle.
 *
 * Spring config per taste-skill: stiffness 100, damping 20
 * for a premium, weighty feel.
 */
const springConfig = { stiffness: 100, damping: 20 }

export default function MagneticWrap({
  children,
  className = '',
  intensity = 0.15,
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * intensity)
    y.set((e.clientY - cy) * intensity)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}
