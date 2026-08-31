import { useEffect, useRef, useState } from 'react'
import { TESTIMONIALS } from '../../data/testimonials'
import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

const AUTOPLAY_MS = 5000
const SWIPE_THRESHOLD = 50

export function Testimonials() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const dragStartX = useRef<number | null>(null)
  const dragDelta = useRef(0)

  const count = TESTIMONIALS.length
  const goNext = () => setActive((current) => (current + 1) % count)
  const goPrev = () => setActive((current) => (current - 1 + count) % count)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, count])

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = event.clientX
    dragDelta.current = 0
    setDragOffset(0)
    setIsDragging(true)
    setPaused(true)
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return
    let dx = event.clientX - dragStartX.current
    if (active === 0 && dx > 0) dx *= 0.4
    if (active === count - 1 && dx < 0) dx *= 0.4
    dragDelta.current = dx
    setDragOffset(dx)
  }

  const onPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return
    const dx = dragDelta.current
    dragStartX.current = null
    setIsDragging(false)
    setDragOffset(0)
    if (event.type === 'pointercancel' || Math.abs(dx) < SWIPE_THRESHOLD) {
      setPaused(false)
      return
    }
    const normalized = lang === 'ar' ? -dx : dx
    if (normalized < 0) goNext()
    else goPrev()
    setPaused(false)
  }

  const baseTransform = lang === 'ar' ? active * 100 : -active * 100
  const trackTransform = isDragging
    ? `translateX(calc(${baseTransform}% + ${dragOffset}px))`
    : `translateX(${baseTransform}%)`

  return (
    <section id="values" className="relative py-20 sm:py-28 bg-navy-6 dark:bg-navy-8 overflow-hidden">
      <img
        loading="lazy"
        decoding="async"
        src="/assets/images/testimonials-bg.webp"
        width="1684"
        height="920"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-gold-3 font-medium mb-2">{t('testimonials.kicker')}</p>
          <h2 className="font-heading font-bold text-white mb-12">
            <span className="block text-5xl sm:text-6xl leading-[1.02]">{t('testimonials.head1')}</span>
            <span className="block text-3xl sm:text-4xl text-white/85 mt-2">{t('testimonials.head2')}</span>
          </h2>
        </Reveal>
        <Reveal>
          <div className="relative bg-white/10 backdrop-blur border border-white/10 rounded-2xl pt-12 pb-8 px-8 sm:pt-14 sm:pb-10 sm:px-10 min-h-[19rem] sm:min-h-[17rem]">
            <span
              className="quote-mark absolute top-14 sm:top-16 end-8 text-6xl font-heading font-bold text-gold-5/80"
              aria-hidden="true"
            >
              &rdquo;
            </span>
            <div
              className={`testimonial-viewport rounded-xl select-none cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
              aria-roledescription="carousel"
              aria-live="off"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerEnd}
              onPointerCancel={onPointerEnd}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => {
                if (!isDragging) setPaused(false)
              }}
            >
              <div
                className="flex testimonial-track"
                style={{ transform: trackTransform, transition: isDragging ? 'none' : undefined }}
              >
                {TESTIMONIALS.map((testimonial, index) => {
                  const name = t(`testimonials.${testimonial.key}.name`)
                  const initials = name
                    .split(' ')
                    .filter(Boolean)
                    .map((w: string) => w[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()
                  return (
                    <div
                      key={testimonial.key}
                      className="relative w-full shrink-0"
                      aria-hidden={index !== active}
                    >
                      <div
                        className="absolute -top-20 sm:-top-22 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gold-5/90 flex items-center justify-center text-navy-6 font-heading font-bold text-lg"
                        aria-hidden="true"
                      >
                        {initials}
                      </div>
                      <p className="text-center font-heading font-semibold text-white mb-4">
                        {name}
                      </p>
                      <p className="text-slate-1/90 leading-relaxed text-center max-w-xl mx-auto mt-10">
                        {t(`testimonials.${testimonial.key}.quote`)}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              type="button"
              className="testimonial-arrow start-2 sm:start-3"
              aria-label={t('testimonials.prevAria')}
              onClick={goPrev}
            >
              <svg
                className="testimonial-chevron"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              type="button"
              className="testimonial-arrow end-2 sm:end-3"
              aria-label={t('testimonials.nextAria')}
              onClick={goNext}
            >
              <svg
                className="testimonial-chevron"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label={t('testimonials.aria')}>
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.key}
                  type="button"
                  role="tab"
                  aria-label={t('testimonials.showAria', { n: index + 1 })}
                  aria-selected={index === active}
                  onClick={() => setActive(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${index === active ? 'bg-gold-5' : 'bg-white/30'}`}
                ></button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}