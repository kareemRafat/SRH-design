import { Link } from 'react-router-dom'
import { HOME_PROJECTS } from '../../data/projects'
import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

export function ProjectsStrip() {
  const { t } = useLanguage()
  return (
    <section id="projects" className="py-20 sm:py-28 bg-slate-0/60 dark:bg-slate-8/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-gold-6 font-medium mb-2">{t('home.projects.kicker')}</p>
            <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white">
              {t('home.projects.title1')}
              {t('home.projects.title2') ? <><br />{t('home.projects.title2')}</> : null}
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center rounded-full bg-navy-4 hover:bg-navy-3 text-white px-10 py-2.5 text-sm font-medium transition-colors"
          >
            {t('common.more')}
          </Link>
        </Reveal>
        <Reveal className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4">
          {HOME_PROJECTS.map((card) => (
            <Link
              key={card.image}
              to="/projects"
              className="group relative block rounded-2xl overflow-hidden shrink-0 snap-start w-[80%] sm:w-[46%] lg:w-[31%]"
            >
              <img
                loading="lazy"
                decoding="async"
                src={card.image}
                width="320"
                height="483"
                alt={t(card.key)}
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-7/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <span className="absolute inset-6 sm:inset-7" aria-hidden="true">
                  <span className="absolute top-0 start-0 w-6 h-6 border-t-2 border-s-2 border-white/40"></span>
                  <span className="absolute top-0 end-0 w-6 h-6 border-t-2 border-e-2 border-white/40"></span>
                  <span className="absolute bottom-0 start-0 w-6 h-6 border-b-2 border-s-2 border-white/40"></span>
                  <span className="absolute bottom-0 end-0 w-6 h-6 border-b-2 border-e-2 border-white/40"></span>
                </span>
                <div className="text-center">
                  <span className="block text-gold-5 text-4xl font-light leading-none mb-4" aria-hidden="true">
                    +
                  </span>
                  <p className="font-heading text-white text-lg font-medium mb-1">{t('projects.placeholderName')}</p>
                  <p className="text-slate-2 text-xs">{t('projects.placeholderText')}</p>
                </div>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}