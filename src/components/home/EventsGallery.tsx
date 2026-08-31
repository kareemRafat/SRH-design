import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

type EventItem = {
  src: string
  titleKey: string
  yearKey: string
  descKey: string
}

// TODO(assets): crop event photos from profile PDFs (EN pp.2–7 / AR pp.4–7) → public/assets/images/events/*.webp
const EVENTS: EventItem[] = [
  { src: '/assets/images/events/riyadh-2024.webp', titleKey: 'events.e1.title', yearKey: 'events.e1.year', descKey: 'events.e1.desc' },
  { src: '/assets/images/events/jeddah-2023.webp', titleKey: 'events.e2.title', yearKey: 'events.e2.year', descKey: 'events.e2.desc' },
  { src: '/assets/images/events/jeddah-2025.webp', titleKey: 'events.e3.title', yearKey: 'events.e3.year', descKey: 'events.e3.desc' },
]

export function EventsGallery() {
  const { t } = useLanguage()
  if (EVENTS.length === 0) return null
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <p className="text-gold-6 font-medium mb-2">{t('events.kicker')}</p>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white">
            {t('events.title1')}
            {t('events.title2') ? <> {t('events.title2')}</> : null}
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {EVENTS.map((item) => (
            <Reveal key={item.src}>
              <article className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-7 shadow-sm border border-slate-0.5 dark:border-slate-6">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    loading="lazy"
                    decoding="async"
                    src={item.src}
                    width={800}
                    height={600}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <h3 className="font-heading font-bold text-xl text-navy-4 dark:text-white">
                      {t(item.titleKey)}
                    </h3>
                    <span className="rounded-full bg-gold-5/15 text-gold-6 dark:text-gold-3 text-xs font-semibold px-3 py-1 whitespace-nowrap">
                      {t(item.yearKey)}
                    </span>
                  </div>
                  <p className="text-sm text-slate-4 dark:text-slate-2 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
