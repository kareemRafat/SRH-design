import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'
import type { RevealVariant } from '../../hooks/useReveal'

function RevealColumn({
  className = '',
  variant = 'up',
  delay,
  children,
}: {
  className?: string
  variant?: RevealVariant
  delay?: number
  children: ReactNode
}) {
  const { ref, revealClass, style } = useReveal<HTMLDivElement>(variant, delay)
  return (
    <div ref={ref} className={`${revealClass} ${className}`} style={style}>
      {children}
    </div>
  )
}

type AccentImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  aspect?: string
  rounded?: string
  accent?: 'gold' | 'navy'
  accentPosition?: 'left' | 'right'
  boxSize?: 'lg' | 'md'
}

export function AccentImage({
  src,
  alt,
  width,
  height,
  aspect = 'aspect-[4/5]',
  rounded = 'rounded-2xl',
  accent = 'gold',
  accentPosition = 'left',
  boxSize = 'lg',
}: AccentImageProps) {
  const accentClass = accent === 'navy' ? 'bg-navy-3' : 'bg-gold-5'
  const accentPosClass = accentPosition === 'right' ? '-end-2 sm:-end-5' : '-start-2 sm:-start-5'
  const boxSizeClass = boxSize === 'md' ? 'w-[40%] h-[44%]' : 'w-[48%] h-[52%]'
  return (
    <>
      <div
        className={`absolute -bottom-[22px] ${accentPosClass} ${boxSizeClass} rounded-[20px] ${accentClass}`}
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={`relative ${rounded} shadow-xl w-full ${aspect} object-cover`}
      />
    </>
  )
}

type SplitSectionProps = {
  media?: ReactNode
  children: ReactNode
  reverse?: boolean
  mediaClassName?: string
  className?: string
  mediaVariant?: RevealVariant
  mediaDelay?: number
}

export function SplitSection({
  media,
  children,
  reverse = false,
  mediaClassName = '',
  className = '',
  mediaVariant = 'up',
  mediaDelay,
}: SplitSectionProps) {
  const mediaClass = `relative ${reverse ? 'order-1 lg:order-2' : ''} ${mediaClassName}`
  const textClass = reverse ? 'order-2 lg:order-1' : ''
  return (
    <div className={`grid lg:grid-cols-2 gap-14 items-center ${className}`}>
      {media ? (
        <RevealColumn className={mediaClass} variant={mediaVariant} delay={mediaDelay}>
          {media}
        </RevealColumn>
      ) : null}
      <RevealColumn className={textClass}>{children}</RevealColumn>
    </div>
  )
}

type ReorderSplitProps = {
  heading?: ReactNode
  media?: ReactNode
  copy?: ReactNode
  reverse?: boolean
  mediaClassName?: string
  headingClassName?: string
  copyClassName?: string
  className?: string
  mediaVariant?: RevealVariant
  mediaDelay?: number
}

export function ReorderSplit({
  heading,
  media,
  copy,
  reverse = false,
  mediaClassName = '',
  headingClassName = '',
  copyClassName = '',
  className = '',
  mediaVariant = 'up',
  mediaDelay,
}: ReorderSplitProps) {
  const headingClass = reverse
    ? 'order-1 lg:col-start-1 lg:row-start-1'
    : 'order-1 lg:col-start-2 lg:row-start-1'
  const mediaPosClass = reverse
    ? 'lg:col-start-2 lg:row-start-1'
    : 'lg:col-start-1 lg:row-start-1'
  const copyClass = reverse
    ? 'order-3 lg:col-start-1 lg:row-start-2'
    : 'order-3 lg:col-start-2 lg:row-start-2'
  return (
    <div className={`grid lg:grid-cols-2 gap-14 lg:items-center ${className}`}>
      {heading ? (
        <RevealColumn className={`${headingClass} ${headingClassName}`}>{heading}</RevealColumn>
      ) : null}
      {media ? (
        <RevealColumn
          className={`relative order-2 ${mediaPosClass} lg:row-span-2 lg:self-center ${mediaClassName}`}
          variant={mediaVariant}
          delay={mediaDelay}
        >
          {media}
        </RevealColumn>
      ) : null}
      {copy ? (
        <RevealColumn className={`${copyClass} ${copyClassName}`}>{copy}</RevealColumn>
      ) : null}
    </div>
  )
}
