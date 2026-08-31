import { Reveal } from '../layout/Reveal'
import { ContactForm } from '../ui/ContactForm'
import { BranchMapTabs } from '../ui/BranchMapTabs'
import { useLanguage } from '../../hooks/useLanguage'

export function ContactSection() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12">
          <p className="text-gold-6 font-medium mb-2">{t('home.contact.kicker')}</p>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white">
            {t('home.contact.title1')}
            {t('home.contact.title2') ? <><br />{t('home.contact.title2')}</> : null}
          </h2>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <ContactForm variant="home" />
          </Reveal>
          <Reveal className="flex flex-col">
            <BranchMapTabs />
          </Reveal>
        </div>
      </div>
    </section>
  )
}