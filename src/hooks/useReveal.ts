import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export type RevealVariant = 'up' | 'left' | 'right' | 'zoom'

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  variant: RevealVariant = 'up',
  delay?: number,
) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      const id = window.requestAnimationFrame(() => setVisible(true))
      return () => window.cancelAnimationFrame(id)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const variantClass = variant === 'up' ? '' : `reveal-${variant}`
  const revealClass = `reveal ${variantClass} ${visible ? 'is-visible' : ''}`
  const style: CSSProperties | undefined = delay !== undefined ? { transitionDelay: `${delay}ms` } : undefined

  return { ref, revealClass, style }
}