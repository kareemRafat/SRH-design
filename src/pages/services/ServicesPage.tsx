import { Link } from 'react-router-dom'
import { Seo } from '../../components/seo/Seo'
import { InnerSplit } from '../../components/ui/InnerSplit'
import { ServiceColumns } from '../../components/services/ServiceColumns'
import { SupportCardGrid } from '../../components/services/SupportCardGrid'
import { ServiceTypesSection } from '../../components/services/ServiceTypesSection'
import { PageHero } from '../../components/layout/PageHero'
import { Reveal } from '../../components/layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

const serviceKicker = 'mt-0 mb-[14px] text-[17px] text-[#252943] dark:text-slate-1'

export function ServicesPage() {
  const { t } = useLanguage()
  return (
    <>
      <Seo titleKey="seo.title.services" descriptionKey="seo.description" />
      <PageHero title={t('services.hero.title')} highlight={t('services.hero.highlight')} />

      <section className="inner-section">
        <InnerSplit
          image={{ src: '/assets/images/service-hallway-image.svg', alt: t('services.overview.imageAlt') }}
          copyClassName="company-copy"
          heading={
            <>
              <p className={`section-kicker ${serviceKicker}`}>{t('services.overview.kicker')}</p>
              <h2 className="section-title">
                {t('services.overview.title1')} <span>{t('services.overview.span')}</span>
              </h2>
            </>
          }
        >
          <p className="body-copy text-[var(--page-muted)] text-base leading-[1.9]">
            {t('services.overview.text')}
          </p>
          <ul>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <li key={index}>{t(`services.overview.list.${index}`)}</li>
            ))}
          </ul>
        </InnerSplit>
      </section>

      <section className="inner-section is-soft py-14 sm:py-20" aria-label={t('services.types.aria')}>
        <div className="site-shell">
          <Reveal>
            <p className={`section-kicker ${serviceKicker}`}>{t('services.types.kicker')}</p>
            <h2 className="section-title">
              {t('services.types.title1')} {t('services.types.span')}
            </h2>
          </Reveal>
          <ServiceTypesSection />
        </div>
      </section>

      <section className="service-columns" aria-label={t('services.columnsAria')}>
        <div className="site-shell">
          <ServiceColumns
            columns={[
              {
                title: t('services.col1.title'),
                items: [0, 1, 2, 3, 4].map((index) => t(`services.col1.${index}`)),
              },
              {
                title: t('services.col2.title'),
                items: [0, 1].map((index) => t(`services.col2.${index}`)),
              },
              {
                title: t('services.col3.title'),
                items: [0, 1, 2].map((index) => t(`services.col3.${index}`)),
              },
            ]}
          />
        </div>
      </section>

      <section className="inner-section service-split">
        <InnerSplit
          reverse
          image={{
            src: '/assets/images/service-technician-image.svg',
            alt: t('services.aftersales.imageAlt'),
          }}
          heading={
            <>
              <p className={`section-kicker ${serviceKicker}`}>{t('services.aftersales.kicker')}</p>
              <h2 className="section-title">
                {t('services.aftersales.title1')} <span>{t('services.aftersales.span')}</span>
              </h2>
            </>
          }
        >
          <p className="body-copy text-[var(--page-muted)] text-base leading-[1.9]">
            {t('services.aftersales.text')}
          </p>
        </InnerSplit>
      </section>

      <section className="inner-section is-soft maintenance-intro">
        <div className="site-shell">
          <Reveal>
            <p className={`section-kicker ${serviceKicker}`}>{t('services.maint.kicker')}</p>
            <h2 className="section-title">
              {t('services.maint.title1')} <span>{t('services.maint.span')}</span>
            </h2>
          </Reveal>
          <SupportCardGrid
            className="support-highlights"
            cards={[0, 1, 2].map((index) => ({
              title: t(`services.maint.${index}.title`),
              text: t(`services.maint.${index}.text`),
            }))}
          />
        </div>
      </section>

      <section className="inner-section modernization-intro">
        <div className="site-shell">
          <Reveal>
            <p className={`section-kicker ${serviceKicker}`}>{t('services.modern.kicker')}</p>
            <h2 className="section-title">
              {t('services.modern.title1')} <span>{t('services.modern.span')}</span>
            </h2>
            <p className="body-copy text-[var(--page-muted)] text-base leading-[1.9] max-w-2xl mt-4">
              {t('services.modern.intro')}
            </p>
          </Reveal>
          <SupportCardGrid
            className="support-highlights"
            cards={[0, 1, 2].map((index) => ({
              title: t(`services.modern.${index}.title`),
              text: t(`services.modern.${index}.text`),
            }))}
          />
        </div>
      </section>

      <section className="inner-section service-split">
        <InnerSplit
          image={{
            src: '/assets/images/maintenance-worker-1200.webp',
            alt: t('services.support.imageAlt'),
            width: 1200,
            height: 800,
          }}
          heading={
            <>
              <p className={`section-kicker ${serviceKicker}`}>{t('services.support.kicker')}</p>
              <h2 className="section-title">
                {t('services.support.title1')} <span>{t('services.support.span')}</span>
              </h2>
            </>
          }
        >
          <p className="body-copy text-[var(--page-muted)] text-base leading-[1.9]">
            {t('services.support.text')}
          </p>
        </InnerSplit>
        <div className="site-shell">
          <SupportCardGrid
            className="support-highlights"
            cards={[0, 1, 2].map((index) => ({
              title: t(`services.support.${index}.title`),
              text: t(`services.support.${index}.text`),
            }))}
          />
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-slate-0 dark:bg-slate-8">
        <div className="site-shell text-center">
          <Reveal>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-navy-4 hover:bg-navy-3 !text-white px-12 py-3.5 text-sm sm:text-base font-medium transition-colors"
            >
              {t('services.cta')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}