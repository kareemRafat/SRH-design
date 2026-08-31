import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'

const MIN_VISIBLE = 500
const FADE_OUT = 250
const SCROLL_TOLERANCE = 1
const MAX_VISIBLE = 1000

export function PageSpinner() {
  const { pathname, hash } = useLocation()
  const { t } = useLanguage()
  const prevPathname = useRef(pathname)
  const mounted = useRef(false)
  const timers = useRef<number[]>([])
  const scrolled = useRef(false)
  const minElapsed = useRef(false)
  const finished = useRef(false)
  const [state, setState] = useState<'hidden' | 'showing' | 'hiding'>('hidden')

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      prevPathname.current = pathname
      return
    }

    if (prevPathname.current === pathname) return
    prevPathname.current = pathname

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []

    const waitForScroll = !hash

    timers.current.push(
      window.setTimeout(() => {
        scrolled.current = false
        minElapsed.current = false
        finished.current = false
        setState('showing')

        const finishIfReady = () => {
          if (finished.current) return
          const scrollDone = !waitForScroll || scrolled.current
          if (!(minElapsed.current && scrollDone)) return
          finished.current = true
          setState('hiding')
          timers.current.push(
            window.setTimeout(() => setState('hidden'), FADE_OUT)
          )
        }

        const interval = window.setInterval(() => {
          if (finished.current) {
            window.clearInterval(interval)
            return
          }
          if (window.scrollY <= SCROLL_TOLERANCE) {
            scrolled.current = true
            finishIfReady()
          }
        }, 80)
        timers.current.push(interval)
        timers.current.push(
          window.setTimeout(() => {
            minElapsed.current = true
            finishIfReady()
          }, MIN_VISIBLE)
        )
        timers.current.push(
          window.setTimeout(() => {
            if (!finished.current) {
              finished.current = true
              setState('hiding')
              timers.current.push(
                window.setTimeout(() => setState('hidden'), FADE_OUT)
              )
            }
          }, MAX_VISIBLE)
        )
      }, 0)
    )
  }, [pathname, hash])

  useEffect(
    () => () => {
      timers.current.forEach((t) => window.clearTimeout(t))
    },
    []
  )

  if (state === 'hidden') return null

  return (
    <div
      className={`page-spinner ${state === 'showing' ? 'is-visible' : 'is-hiding'}`}
      role="status"
      aria-label={t('spinner.loading')}
    >
      <img
        src="/assets/images/SRH-logo-optimized.webp"
        alt=""
        aria-hidden="true"
        className="page-spinner__logo"
      />
      <span className="page-spinner__ring" aria-hidden="true" />
      <span className="sr-only">{t('spinner.loading')}</span>
    </div>
  )
}
