import { Reveal } from '../layout/Reveal'
import { StatBand } from '../ui/StatBand'
import { useLanguage } from '../../hooks/useLanguage'

export function AboutHero() {
  const { t } = useLanguage()
  return (
    <section className="about-hero relative isolate overflow-hidden bg-navy-6">
      <img
        fetchPriority="high"
        decoding="async"
        src="/assets/images/bg_hero-1600.webp"
        width="1600"
        height="868"
        alt={t('hero.imageAlt')}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="about-hero-content relative mx-auto mt-10">
        <Reveal>
          <p className="text-gold-3 font-medium tracking-wide mb-3">{t('hero.welcome')}</p>
          <h1 className="font-heading font-bold text-white text-[clamp(46px,13vw,56px)] sm:text-[clamp(68px,7vw,112px)] leading-[1.15] tracking-[-0.045em] whitespace-pre-line">
            {t('hero.brand')}
          </h1>
          <p className="font-heading font-normal text-white/90 text-[clamp(27px,7vw,32px)] sm:text-[clamp(36px,3.6vw,58px)] leading-none mt-3 mb-6">
            {t('hero.tagline')}
          </p>
          <p className="max-w-md text-white mb-10">
            {t('hero.sub1')}
            <br />
            {t('hero.sub2')}
          </p>
        </Reveal>
      </div>

      <div className="about-stats-band">
        <Reveal>
          <StatBand variant="band" />
        </Reveal>
      </div>
    </section>
  )
}