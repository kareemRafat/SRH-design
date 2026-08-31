import { Link } from 'react-router-dom'
import { AGENTS } from '../../data/agents'
import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

export function AgentsPreview() {
  const { t } = useLanguage()
  return (
    <section className="py-20 sm:py-28 bg-slate-0/60 dark:bg-slate-8/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
          <div className="lg:w-1/3 shrink-0">
            <p className="text-gold-6 font-medium mb-2">{t('agents.preview.kicker')}</p>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white mb-5">
              {t('agents.preview.title1')}
              {t('agents.preview.title2') ? <><br />{t('agents.preview.title2')}</> : null}
            </h2>
            <Link
              to="/agents"
              className="inline-flex items-center rounded-full border border-navy-4 dark:border-white/40 text-navy-4 dark:text-white px-10 py-2.5 text-sm font-medium hover:bg-navy-4 hover:text-white dark:hover:bg-white dark:hover:text-navy-6 transition-colors"
            >
              {t('agents.preview.details')}
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 flex-1">
            {AGENTS.map((agent, index) => (
              <Reveal
                key={agent.name}
                delay={index * 90}
                className="bg-white rounded-2xl aspect-square flex items-center justify-center shadow-sm p-4 sm:p-6"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={agent.logo}
                  alt={t(`agents.${agent.key}.logoAlt`)}
                  className="h-full w-full object-contain"
                />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}