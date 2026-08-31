import { Link } from 'react-router-dom'
import { AccentImage, ReorderSplit } from '../ui/SplitSection'
import { useLanguage } from '../../hooks/useLanguage'

export function VisionSection() {
  const { t } = useLanguage()
  return (
    <section id="vision" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReorderSplit
          heading={
            <>
              <p className="text-slate-5 dark:text-slate-2 font-medium mb-2 leading-snug">
                {t('home.vision.kicker1')}
                <br />
                {t('home.vision.kicker2')}
              </p>
              <h2 className="font-heading font-bold text-6xl sm:text-7xl text-navy-4 dark:text-white mb-5">
                {t('home.vision.title1')}
                {t('home.vision.title2') ? <><br />{t('home.vision.title2')}</> : null}
              </h2>
            </>
          }
          media={
            <AccentImage
              src="/assets/images/future-3-800.webp"
              alt={t('home.vision.imageAlt')}
              width={960}
              height={671}
              aspect="aspect-[470/409]"
              accent="navy"
              boxSize="md"
            />
          }
          mediaVariant="right"
          copy={
            <>
              <p className="text-slate-5 dark:text-slate-2 leading-relaxed mb-8 max-w-lg text-justify">
                {t('home.vision.text')}
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