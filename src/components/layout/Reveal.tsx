import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import type { RevealVariant } from '../../hooks/useReveal'

type RevealProps = {
  children: ReactNode
  className?: string
  variant?: RevealVariant
  delay?: number
}

export function Reveal({ children, className = '', variant = 'up', delay }: RevealProps) {
  const { ref, revealClass, style } = useReveal<HTMLDivElement>(variant, delay)
  return (
    <div ref={ref} className={`${revealClass} ${className}`} style={style}>
      {children}
    </div>
  )
}