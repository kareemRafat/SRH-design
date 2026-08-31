import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

const ITEMS = ['hcis', 'cr', 'vat', 'chamber', 'civilDefence'] as const

export function Credentials() {
  const { t, lang } = useLanguage()
  return (
    <section className="py-16 sm:py-20 bg-slate-0 dark:bg-slate-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <p className="text-gold-6 font-medium mb-2">{t('licenses.kicker')}</p>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white leading-tight">
            {t('licenses.title1')}
            <br />
            {t('licenses.title2')}
          </h2>
          <p className="text-slate-4 dark:text-slate-2 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
            {t('licenses.desc')}
          </p>
        </Reveal>
        <Reveal>
          <ul className="grid sm:grid-cols-2 gap-4">
            {ITEMS.map((item) => (
              <li
                key={item}
                className={`rounded-xl bg-white/60 dark:bg-slate-7/60 backdrop-blur px-5 py-5 ${item === 'civilDefence' ? 'sm:col-span-2' : ''}`}
              >
                <p className="text-xs font-medium text-gold-5 dark:text-gold-3 mb-1">
                  {t(`licenses.${item}.name`)}
                </p>
                <p className="font-heading font-bold text-xl text-navy-4 dark:text-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                  {t(`licenses.${item}.value`)}
                </p>
                <p className="text-xs text-slate-4 dark:text-slate-3 mt-2">
                  {t(`licenses.${item}.meta`)}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
