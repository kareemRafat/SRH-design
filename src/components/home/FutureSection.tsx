import { ReorderSplit } from '../ui/SplitSection'
import { useLanguage } from '../../hooks/useLanguage'

export function FutureSection() {
  const { t } = useLanguage()
  return (
    <section className="relative bg-[linear-gradient(94.02deg,#151930_1.61%,#3F4670_99.49%)] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReorderSplit
          reverse
          heading={
            <>
              <p className="text-gold-3 font-medium mb-2">{t('home.future.kicker')}</p>
              <h2 className="font-heading font-bold text-5xl sm:text-6xl text-white mb-5">
                {t('home.future.title1')}
                {t('home.future.title2') ? <><br />{t('home.future.title2')}</> : null}
              </h2>
            </>
          }
          media={
            <>
              <div className="absolute -bottom-[22px] -end-2 sm:-end-5 w-[40%] h-[44%] rounded-[20px] bg-gold-5" aria-hidden="true"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  loading="lazy"
                  decoding="async"
                  src="/assets/images/future-2-800.webp"
                  width="800"
                  height="800"
                  alt={t('home.future.alt1')}
                  className="rounded-2xl w-full aspect-square object-cover"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="/assets/images/future-1-800.webp"
                  width="800"
                  height="626"
                  alt={t('home.future.alt2')}
                  className="rounded-2xl w-full aspect-square object-cover"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="/assets/images/future-4-800.webp"
                  width="800"
                  height="584"
                  alt={t('home.future.alt3')}
                  className="rounded-2xl w-full aspect-square object-cover"
                />
                <img
                  loading="lazy"
                  decoding="async"
                  src="/assets/images/future-3-800.webp"
                  width="800"
                  height="533"
                  alt={t('home.future.alt4')}
                  className="rounded-2xl w-full aspect-square object-cover"
                />
              </div>
            </>
          }
          copy={
            <p className="text-slate-1.5 leading-relaxed max-w-lg text-justify">
              {t('home.future.text')}
            </p>
          }
        />
      </div>
    </section>
  )
}