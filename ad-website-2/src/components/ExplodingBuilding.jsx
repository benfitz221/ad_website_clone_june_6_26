import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ExplodingBuilding() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    let ctx

    const onLoaded = () => {
      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${window.innerHeight * 2}`,
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            video.currentTime = self.progress * video.duration
          },
        })
      })
    }

    if (video.readyState >= 1) {
      onLoaded()
    } else {
      video.addEventListener('loadedmetadata', onLoaded, { once: true })
    }

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded)
      if (ctx) ctx.revert()
    }
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-charcoal overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/exploding-building.mp4" type="video/mp4" />
      </video>
    </section>
  )
}
