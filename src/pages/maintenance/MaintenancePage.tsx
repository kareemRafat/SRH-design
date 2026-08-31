import { InnerSplit } from '../../components/ui/InnerSplit'
import { Seo } from '../../components/seo/Seo'
import { ServiceColumns } from '../../components/services/ServiceColumns'
import { SupportCardGrid } from '../../components/services/SupportCardGrid'
import { PageHero } from '../../components/layout/PageHero'
import { useLanguage } from '../../hooks/useLanguage'

const maintenanceKicker = 'mt-0 mb-[14px] text-[17px] text-[#252943] dark:text-slate-1'

export function MaintenancePage() {
  const { t } = useLanguage()
  return (
    <>
      <Seo titleKey="seo.title.maintenance" descriptionKey="seo.description" />
      <PageHero title={t('maintenance.hero.title')} highlight={t('maintenance.hero.highlight')} />

      <section className="service-columns maintenance-services" aria-label={t('maintenance.columnsAria')}>
        <div className="site-shell">
          <ServiceColumns
            columns={[
              {
                title: t('maintenance.col1.title'),
                items: [0, 1, 2, 3, 4].map((index) => t(`maintenance.col1.${index}`)),
              },
              {
                title: t('maintenance.col2.title'),
                items: [0, 1].map((index) => t(`maintenance.col2.${index}`)),
              },
              {
                title: t('maintenance.col3.title'),
                items: [0, 1, 2].map((index) => t(`maintenance.col3.${index}`)),
              },
            ]}
          />
        </div>
      </section>

      <section className="inner-section service-split maintenance-overview">
        <InnerSplit
          reverse
          image={{
            src: '/assets/images/service-technician-image.svg',
            alt: t('maintenance.overview.imageAlt'),
          }}
          copyClassName="maintenance-copy"
        >
          <p className={`section-kicker ${maintenanceKicker}`}>{t('maintenance.overview.kicker')}</p>
          <h2 className="section-title">
            {t('maintenance.overview.title1')} <span>{t('maintenance.overview.span')}</span>
          </h2>
          <p className="body-copy text-[var(--page-muted)] text-base leading-[1.9]">
            {t('maintenance.overview.text')}
          </p>
        </InnerSplit>
      </section>

      <section className="inner-section is-soft maintenance-contracts">
        <div className="site-shell">
          <h2 className="section-title">
            {t('maintenance.contracts.title1')} <span>{t('maintenance.contracts.span')}</span>
          </h2>
          <p className="maintenance-lead">
            {t('maintenance.contracts.lead')}
          </p>
          <SupportCardGrid
            className="support-highlights"
            cards={[0, 1, 2].map((index) => ({
              title: t(`maintenance.contracts.${index}.title`),
              text: t(`maintenance.contracts.${index}.text`),
            }))}
          />
        </div>
      </section>

      <section className="inner-section service-split maintenance-support">
        <InnerSplit
          image={{
            src: '/assets/images/maintenance-worker-1200.webp',
            alt: t('maintenance.support.imageAlt'),
            width: 1200,
            height: 800,
          }}
          copyClassName="maintenance-copy"
        >
          <p className={`section-kicker ${maintenanceKicker}`}>{t('maintenance.support.kicker')}</p>
          <h2 className="section-title">
            {t('maintenance.support.title1')} <span className="support-word">{t('maintenance.support.span')}</span>
            <span className="support-subtitle">{t('maintenance.support.subtitle')}</span>
          </h2>
          <p className="support-note">
            {t('maintenance.support.note')}
          </p>
        </InnerSplit>
        <div className="site-shell">
          <SupportCardGrid
            className="support-highlights"
            cards={[0, 1, 2].map((index) => ({
              title: t(`maintenance.support.${index}.title`),
              text: t(`maintenance.support.${index}.text`),
            }))}
          />
        </div>
      </section>
    </>
  )
}