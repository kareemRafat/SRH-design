import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

const PARTNER_LOGOS = [
  '/assets/images/partners/partner-1.png',
  '/assets/images/partners/partner-2.png',
  '/assets/images/partners/partner-3.png',
  '/assets/images/partners/partner-4.png',
  '/assets/images/partners/partner-5.png',
  '/assets/images/partners/partner-6.png',
  '/assets/images/partners/partner-7.png',
  '/assets/images/partners/partner-8.png',
  '/assets/images/partners/partner-9.png',
  '/assets/images/partners/partner-10.png',
]

export function PartnersStrip() {
  const { t } = useLanguage()
  if (PARTNER_LOGOS.length === 0) return null

  const renderTrack = (rowKey: string, accessible: boolean) => (
    <>
      {PARTNER_LOGOS.map((src) => (
        <li
          key={`${rowKey}-${src}`}
          className="partner-card flex items-center justify-center rounded-2xl bg-white dark:bg-white border border-slate-0.5 dark:border-slate-6 h-20 sm:h-32 w-36 sm:w-52 px-3 sm:px-4 flex-none"
        >
          <img
            loading="lazy"
            decoding="async"
            src={src}
            alt={accessible ? t('partners.title1') : ''}
            className="partner-logo max-h-full max-w-full object-contain"
          />
        </li>
      ))}
      {PARTNER_LOGOS.map((src) => (
        <li
          key={`${rowKey}-${src}-dup`}
          aria-hidden="true"
          className="partner-card flex items-center justify-center rounded-2xl bg-white dark:bg-white border border-slate-0.5 dark:border-slate-6 h-20 sm:h-32 w-36 sm:w-52 px-3 sm:px-4 flex-none"
        >
          <img
            loading="lazy"
            decoding="async"
            src={src}
            alt=""
            className="partner-logo max-h-full max-w-full object-contain"
          />
        </li>
      ))}
    </>
  )

  return (
    <section className="py-16 sm:py-20 bg-[linear-gradient(94.02deg,#151930_1.61%,#3F4670_99.49%)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <p className="text-gold-3 font-medium mb-2">{t('partners.kicker')}</p>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl text-white mb-5">
            {t('partners.title1')}
            <br />
            {t('partners.title2')}
          </h2>
        </Reveal>
        <Reveal className="space-y-4 sm:space-y-5">
          <div className="partner-strip">
            <ul className="partner-track">{renderTrack('row1', true)}</ul>
          </div>
          <div className="partner-strip">
            <ul className="partner-track is-reverse">{renderTrack('row2', false)}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
