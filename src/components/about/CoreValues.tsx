import { AccentImage, ReorderSplit } from '../ui/SplitSection'
import { useLanguage } from '../../hooks/useLanguage'

const VALUES = [1, 2, 3, 4, 5, 6] as const

export function CoreValues() {
  const { t } = useLanguage()
  return (
    <section className="py-20 sm:py-28 bg-slate-0 dark:bg-slate-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReorderSplit
          reverse
          heading={
            <>
              <p className="text-gold-6 font-medium mb-2">{t('values.kicker')}</p>
              <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white mb-5">
                {t('values.title1')}
                <br />
                {t('values.title2')}
              </h2>
            </>
          }
          media={
            <AccentImage
              src="/assets/images/about-cabin.webp"
              alt={t('company.imageAlt')}
              width={736}
              height={736}
              aspect="aspect-[4/5]"
              accent="navy"
              accentPosition="right"
            />
          }
          copy={
            <>
              <p className="text-slate-5 dark:text-slate-2 leading-relaxed max-w-xl text-sm sm:text-base">
                {t('values.intro')}
              </p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-6 max-w-xl">
                {VALUES.map((n) => (
                  <li key={n} className="flex gap-3">
                    <span
                      className="flex items-center justify-center w-7 h-7 rounded-lg bg-gold-5/15 text-gold-6 dark:text-gold-3 font-heading font-bold text-xs shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      {n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-4 dark:text-white mb-1 leading-snug">
                        {t(`values.${n}.title`)}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-4 dark:text-slate-2 leading-relaxed">
                        {t(`values.${n}.desc`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          }
        />
      </div>
    </section>
  )
}
