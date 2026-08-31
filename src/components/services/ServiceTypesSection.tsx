import { Link } from 'react-router-dom'
import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'
import { SERVICE_TYPES } from '../../data/services'

const TILE_SPANS = [
  'sm:col-span-2 lg:col-span-4',
  'lg:col-span-2',
  'lg:col-span-2',
  'sm:col-span-2 lg:col-span-4',
]

export function ServiceTypesSection() {
  const { t } = useLanguage()

  return (
    <div className="mt-10 grid grid-cols-1 gap-6 auto-rows-[300px] sm:grid-cols-2 sm:auto-rows-[300px] lg:grid-cols-6 lg:auto-rows-[340px]">
      {SERVICE_TYPES.map((service, index) => {
        const inner = (
          <>
            <img
              src={service.cardImage}
              alt={t(service.imageAltKey)}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#151930]/95 via-[#151930]/40 to-transparent"
              aria-hidden="true"
            />
            <span
              className="absolute top-4 end-5 font-heading text-6xl font-extrabold leading-none text-white/15 select-none"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span
                className="mb-3 block h-0.5 w-10 bg-gold-5 transition-all duration-300 group-hover:w-16"
                aria-hidden="true"
              />
              <h3 className="font-heading text-lg font-bold text-white">{t(service.titleKey)}</h3>
              <p className="mt-2 line-clamp-2 max-w-md text-sm leading-[1.7] text-slate-1.5 opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                {t(service.descriptionKey)}
              </p>
              {service.linkPath ? (
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-5 transition-colors group-hover:text-gold-4">
                  {t('common.readMore')}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14m0 0-6-6m6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              ) : null}
            </div>
          </>
        )

        const tileClass =
          'group relative block h-full overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl'

        return (
          <Reveal key={service.id} delay={index * 90} className={`h-full ${TILE_SPANS[index]}`}>
            {service.linkPath ? (
              <Link to={service.linkPath} aria-label={t(service.titleKey)} className={tileClass}>
                {inner}
              </Link>
            ) : (
              <article aria-label={t(service.titleKey)} className={tileClass}>
                {inner}
              </article>
            )}
          </Reveal>
        )
      })}
    </div>
  )
}
