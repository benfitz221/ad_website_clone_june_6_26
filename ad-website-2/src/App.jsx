import { lazy, Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CredibilityBand from './components/CredibilityBand'
import ClientTestimonial from './components/ClientTestimonial'
import Headwinds from './components/Headwinds'
import Solution from './components/Solution'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Proof from './components/Proof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

/* Route-level code splitting — these pages load on demand */
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Results = lazy(() => import('./components/Results'))
const Contact = lazy(() => import('./components/Contact'))
const Privacy = lazy(() => import('./components/Privacy'))
const Terms = lazy(() => import('./components/Terms'))

gsap.registerPlugin(ScrollTrigger)

/* ── Lenis smooth-scroll provider ── */
function LenisProvider({ children }) {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis

    // Sync Lenis with GSAP ticker for ScrollTrigger compatibility
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return children
}

/* ── Route transition config ──
   Per taste-skill: 500-700ms, blur layer, cubic-bezier(0.32,0.72,0,1),
   Y translation >= 16px */
const pageTransition = {
  duration: 0.55,
  ease: [0.32, 0.72, 0, 1],
}

/* ── Scroll to top on every route change ── */
function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
        transition={pageTransition}
      >
        <Suspense fallback={<div className="min-h-screen bg-charcoal" />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBand />
      <ClientTestimonial />
      <Headwinds />
      <Solution />
      <Philosophy />
      <Protocol />
      <Proof />
      <FinalCTA />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LenisProvider>
        <div className="bg-charcoal min-h-screen">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </LenisProvider>
    </BrowserRouter>
  )
}
