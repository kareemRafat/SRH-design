import { useEffect, useRef, useState } from 'react'

type CountUpOptions = {
  duration?: number
}

export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  target: number,
  { duration = 1200 }: CountUpOptions = {},
) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [value, setValue] = useState(() => (prefersReducedMotion ? target : 0))

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion) return

    let raf = 0
    let start: number | null = null

    const animate = (time: number) => {
      if (start === null) start = time
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }

    const run = () => {
      cancelAnimationFrame(raf)
      start = null
      raf = requestAnimationFrame(animate)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return () => cancelAnimationFrame(raf)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, duration, prefersReducedMotion])

  return { ref, value }
}