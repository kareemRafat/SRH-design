import { Link } from 'react-router-dom'
import { AccentImage, ReorderSplit } from '../ui/SplitSection'
import { useLanguage } from '../../hooks/useLanguage'

export function AboutOverview() {
  const { t } = useLanguage()
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute -top-6 start-4 sm:start-10 w-28 h-28 text-slate-1 dark:text-slate-7 bg-dots" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReorderSplit
          heading={
            <>
              <p className="text-gold-6 font-medium mb-2">{t('home.about.kicker')}</p>
              <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white mb-5">
                {t('home.about.title1')}
                {t('home.about.title2') ? <><br />{t('home.about.title2')}</> : null}
              </h2>
            </>
          }
          media={
            <AccentImage
              src="/assets/images/about-cabin.webp"
              alt={t('home.about.imageAlt')}
              width={736}
              height={736}
              aspect="aspect-[5/4]"
              accent="navy"
              boxSize="md"
            />
          }
          mediaVariant="left"
          copy={
            <>
              <p className="text-slate-5 dark:text-slate-2 leading-relaxed mb-8 max-w-lg">
                {t('home.about.text')}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-navy-4 dark:border-white/40 text-navy-4 dark:text-white px-10 py-2.5 text-sm font-medium hover:bg-navy-4 hover:text-white dark:hover:bg-white dark:hover:text-navy-6 transition-colors"
              >
                {t('common.more')}
              </Link>
            </>
          }
        />
      </div>
    </section>
  )
}