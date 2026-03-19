import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MagneticWrap from './MagneticWrap'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      const pastHero = scrollY > heroHeight

      // Hide when any section with its own CTA is in view
      const ctaSections = document.querySelectorAll('#contact, [data-has-cta]')
      let ctaInView = false
      ctaSections.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          ctaInView = true
        }
      })

      // Also hide near the footer so it doesn't overlap copyright
      const footer = document.querySelector('footer')
      if (footer) {
        const rect = footer.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          ctaInView = true
        }
      }

      setVisible(pastHero && !ctaInView)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  const handleClick = () => {
    navigate('/contact')
  }

  return (
    <div
      className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <MagneticWrap>
        <button
          onClick={handleClick}
          className="bg-clay text-charcoal px-5 py-2 rounded text-xs font-mono font-bold uppercase tracking-wider shadow-lg hover:opacity-90 transition-opacity"
        >
          Book a Discovery Call
        </button>
      </MagneticWrap>
    </div>
  )
}
