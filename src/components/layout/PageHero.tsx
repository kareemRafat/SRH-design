import type { CSSProperties } from 'react'

type SupportProps = {
  label: string
  number: string
  href?: string
}

type PageHeroProps = {
  title: string
  highlight?: string
  support?: SupportProps
}

export function PageHero({ title, highlight, support }: PageHeroProps) {
  const line = (i: number): CSSProperties => ({ '--i': i } as CSSProperties)
  return (
    <section
      className={`page-hero ${support ? 'page-hero-support' : ''}`}
      aria-labelledby="page-title"
    >
      <div className="site-shell page-hero-content">
        {support ? (
          <>
            <h1 id="page-title" className="hero-line" style={line(0)}>
              {title}
            </h1>
            <p className="hero-line support-label" style={line(1)}>
              {support.label}
            </p>
            <p className="hero-line support-number" style={line(2)}>
              <a href={support.href ?? `tel:${support.number.replace(/\s/g, '')}`}>{support.number}</a>
            </p>
          </>
        ) : (
          <h1 id="page-title" className="hero-line" style={line(0)}>
            {title} {highlight ? <span>{highlight}</span> : null}
          </h1>
        )}
      </div>
    </section>
  )
}