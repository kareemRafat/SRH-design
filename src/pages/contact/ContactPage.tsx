import { ContactForm } from '../../components/ui/ContactForm'
import { FaqAccordion } from '../../components/faq/FaqAccordion'
import { MapEmbed } from '../../components/ui/MapEmbed'
import { PageHero } from '../../components/layout/PageHero'
import { Seo } from '../../components/seo/Seo'
import { useLanguage } from '../../hooks/useLanguage'

const CONTACT_LINES = [
  { labelKey: 'contactPage.salesLabel', number: '00966571608000', href: 'tel:+966571608000' },
  { labelKey: 'contactPage.tollfreeLabel', number: '8001240604', href: 'tel:8001240604' },
  { labelKey: 'contactPage.landlineLabel', number: '0125395117', href: 'tel:+966125395117' },
] as const

export function ContactPage() {
  const { t, lang } = useLanguage()
  return (
    <>
      <Seo titleKey="seo.title.contact" descriptionKey="seo.description" />
      <PageHero
        title={t('contactPage.hero.title')}
        support={{
          label: t('contactPage.hero.supportLabel'),
          number: '966571608000',
          href: 'tel:+966571608000',
        }}
      />

      <section className="inner-section is-soft" aria-labelledby="contact-faq-title">
        <div className="site-shell">
          <h2 id="contact-faq-title" className="contact-heading">
            {t('faq.hero.title')}{' '}
            {t('faq.hero.highlight') ? <span>{t('faq.hero.highlight')}</span> : null}
          </h2>
          <FaqAccordion />
        </div>
      </section>

      <section className="inner-section contact-section" aria-labelledby="contact-form-title">
        <div className="site-shell">
          <h2 id="contact-form-title" className="contact-heading">
            {t('contactPage.contact.title1')} <span>{t('contactPage.contact.span')}</span>
          </h2>
          <div className="contact-info">
            {CONTACT_LINES.map((line) => (
              <a key={line.href} href={line.href} className="contact-info-item">
                <span className="contact-info-label">{t(line.labelKey)}</span>
                <span className="contact-info-value" dir={lang === 'ar' ? 'rtl' : 'ltr'}>{line.number}</span>
              </a>
            ))}
            <p className="contact-info-item contact-info-address">
              <span className="contact-info-label">{t('contactPage.addressLabel')}</span>
              <span className="contact-info-value">{t('contactPage.address')}</span>
            </p>
          </div>
          <div className="contact-grid">
            <ContactForm variant="page" />
            <figure className="contact-office">
              <img
                loading="lazy"
                decoding="async"
                src="/assets/images/contact-office-image.svg"
                alt={t('contactPage.officeAlt')}
              />
            </figure>
          </div>

          <MapEmbed variant="page" />
        </div>
      </section>
    </>
  )
}
