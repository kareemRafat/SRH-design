import type { FormEvent } from 'react'
import { useToast } from '../../hooks/useToast'
import { useLanguage } from '../../hooks/useLanguage'

type ContactFormProps = {
  variant?: 'home' | 'page'
}

const fieldClass =
  'w-full rounded-lg border border-slate-1.5 dark:border-slate-6 bg-slate-0 dark:bg-slate-7 px-4 py-3 text-sm text-navy-6 dark:text-white placeholder:text-slate-4 focus:outline-none focus:ring-2 focus:ring-gold-5'

export function ContactForm({ variant = 'page' }: ContactFormProps) {
  const { showToast } = useToast()
  const { t } = useLanguage()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    showToast(t('form.toast'))
    form.reset()
  }

  if (variant === 'home') {
    return (
      <form id="contact-form" className="space-y-4 bg-white dark:bg-slate-8 rounded-2xl p-6 sm:p-8 shadow-sm" noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="sr-only">{t('form.nameLabel')}</label>
          <input id="name" name="name" type="text" required placeholder={t('form.namePlaceholder')} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">{t('form.emailLabel')}</label>
          <input id="email" name="email" type="email" required placeholder={t('form.emailPlaceholder')} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="title" className="sr-only">{t('form.titleLabel')}</label>
          <input id="title" name="title" type="text" placeholder={t('form.titlePlaceholder')} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">{t('form.messageLabel')}</label>
          <textarea id="message" name="message" rows={4} required placeholder={t('form.messagePlaceholder')} className={`${fieldClass} resize-none`}></textarea>
        </div>
        <button type="submit" className="inline-flex items-center rounded-full bg-navy-4 hover:bg-navy-3 active:bg-[#d18e2e] text-white px-11 py-3 text-sm font-medium transition-colors">
          {t('form.send')}
        </button>
      </form>
    )
  }

  return (
    <form id="contact-form" className="contact-form grid gap-4" noValidate onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="contact-name">{t('form.fullNameLabel')}</label>
      <input id="contact-name" name="name" type="text" placeholder={t('form.fullNamePlaceholder')} autoComplete="name" required />
      <label className="sr-only" htmlFor="contact-email">{t('form.emailAddressLabel')}</label>
      <input id="contact-email" name="email" type="email" placeholder={t('form.emailAddressPlaceholder')} autoComplete="email" required />
      <label className="sr-only" htmlFor="contact-phone">{t('form.phoneLabel')}</label>
      <input id="contact-phone" name="phone" type="tel" placeholder={t('form.phonePlaceholder')} autoComplete="tel" />
      <label className="sr-only" htmlFor="contact-project-type">{t('form.projectTypeLabel')}</label>
      <select id="contact-project-type" name="projectType" defaultValue="">
        <option value="" disabled>
          {t('form.projectTypeLabel')}
        </option>
        <option value="new-install">{t('form.projectType.newInstall')}</option>
        <option value="escalators">{t('form.projectType.escalators')}</option>
        <option value="maintenance">{t('form.projectType.maintenance')}</option>
        <option value="modernization">{t('form.projectType.modernization')}</option>
        <option value="other">{t('form.projectType.other')}</option>
      </select>
      <label className="sr-only" htmlFor="contact-units">{t('form.unitsLabel')}</label>
      <input id="contact-units" name="units" type="number" min={1} placeholder={t('form.unitsPlaceholder')} />
      <label className="sr-only" htmlFor="contact-location">{t('form.locationLabel')}</label>
      <input id="contact-location" name="location" type="text" placeholder={t('form.locationPlaceholder')} autoComplete="off" />
      <label className="sr-only" htmlFor="contact-message">{t('form.message')}</label>
      <textarea id="contact-message" name="message" placeholder={t('form.writeMessage')} required></textarea>
      <button
        className="primary-button min-w-[176px] justify-self-start cursor-pointer rounded-full border-0 bg-[#4a507f] active:bg-[#d18e2e] px-[46px] py-[14px] text-white"
        type="submit"
      >
        {t('form.sendMessage')}
      </button>
    </form>
  )
}