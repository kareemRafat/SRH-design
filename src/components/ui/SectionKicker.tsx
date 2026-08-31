import type { ReactNode } from 'react'

type SectionKickerProps = {
  kicker: string
  title: ReactNode
  tone?: 'light' | 'dark'
  kickerClassName?: string
  titleClassName?: string
}

export function SectionKicker({
  kicker,
  title,
  tone = 'light',
  kickerClassName = '',
  titleClassName = '',
}: SectionKickerProps) {
  const kickerClass =
    tone === 'dark'
      ? 'text-gold-3 font-medium tracking-wide mb-3'
      : 'text-gold-6 font-medium mb-2'
  const titleClass =
    tone === 'dark'
      ? 'font-heading font-bold text-5xl sm:text-6xl text-white mb-5'
      : 'font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white mb-5'

  return (
    <>
      <p className={`${kickerClass} ${kickerClassName}`}>{kicker}</p>
      <h2 className={`${titleClass} ${titleClassName}`}>{title}</h2>
    </>
  )
}
