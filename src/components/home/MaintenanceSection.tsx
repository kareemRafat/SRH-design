import { Link } from 'react-router-dom'
import { AccentImage, ReorderSplit } from '../ui/SplitSection'
import { useLanguage } from '../../hooks/useLanguage'

export function MaintenanceSection() {
  const { t } = useLanguage()
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReorderSplit
          heading={
            <>
              <p className="text-slate-5 dark:text-slate-2 font-medium mb-2 leading-snug">
                {t('home.maintenance.kicker')}
                <br />
                {t('home.maintenance.kicker2')}
              </p>
              <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white mb-5">
                {t('home.maintenance.title1')}
                {t('home.maintenance.title2') ? <><br />{t('home.maintenance.title2')}</> : null}
              </h2>
            </>
          }
          media={
            <AccentImage
              src="/assets/images/maintenance-worker-1200.webp"
              alt={t('home.maintenance.imageAlt')}
              width={1200}
              height={800}
              aspect="aspect-[496/430]"
              rounded="rounded-[20px]"
              accent="navy"
              boxSize="md"
            />
          }
          mediaVariant="left"
          copy={
            <>
              <p className="text-slate-5 dark:text-slate-2 leading-relaxed mb-8 max-w-lg text-justify">
                {t('home.maintenance.text')}
              </p>
              <Link
                to="/maintenance"
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