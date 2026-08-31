import { Reveal } from '../layout/Reveal'
import { useLanguage } from '../../hooks/useLanguage'

// Placeholder portraits (Unsplash). Replace with real leader photos when provided:
// drop files into public/assets/images/leaders/ and keep paths as-is.
const LEADER_IMAGES: Record<'ceo' | 'td', string> = {
  ceo: '/assets/images/leaders/ceo.webp',
  td: '/assets/images/leaders/td.webp',
}

type LeaderKey = 'ceo' | 'td'

function LeaderCard({ id, reverse = false }: { id: LeaderKey; reverse?: boolean }) {
  const { t } = useLanguage()
  const paragraphs = (t(`${id}.message`) as string).split('\n\n')

  // image — flex : 1
  const media = (
    <div className="relative flex-1 min-w-0 h-52 sm:h-auto">
      <img
        loading="lazy"
        decoding="async"
        src={LEADER_IMAGES[id]}
        width={800}
        height={1200}
        alt={t(`${id}.name`)}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-6/90 via-navy-6/25 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-heading font-semibold text-white leading-snug">{t(`${id}.name`)}</p>
        <p className="text-xs text-gold-3 mt-0.5 tracking-wide">{t(`${id}.role`)}</p>
      </div>
    </div>
  )

  // text — flex : 2
  const content = (
    <div className="relative flex-[2] min-w-0 p-6 sm:p-7 flex flex-col justify-center">
      <span
        aria-hidden="true"
        className="absolute top-3 end-5 font-heading font-extrabold text-gold-5/20 text-7xl leading-none select-none pointer-events-none"
      >
        &ldquo;
      </span>
      {id === 'td' ? (
        <p className="font-heading font-bold text-lg text-navy-4 dark:text-white mb-2.5 leading-snug">
          {t('td.headline')}
        </p>
      ) : null}
      <div className="relative space-y-2.5">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-sm text-slate-5 dark:text-slate-2 leading-relaxed text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )

  return (
    <article className="h-full bg-white dark:bg-slate-7 rounded-3xl border border-slate-0.5 dark:border-slate-6 shadow-sm overflow-hidden flex flex-col sm:flex-row">
      {/* first row: image then text — second row: text first, image at the end */}
      {reverse ? (
        <>
          {content}
          {media}
        </>
      ) : (
        <>
          {media}
          {content}
        </>
      )}
    </article>
  )
}

export function LeaderMessages() {
  const { t } = useLanguage()
  return (
    <section className="py-20 sm:py-28 bg-slate-0/60 dark:bg-slate-8/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <p className="text-gold-6 font-medium mb-2">{t('leaders.kicker')}</p>
          <h2 className="font-heading font-bold text-5xl sm:text-6xl text-navy-4 dark:text-white">
            {t('leaders.title1')}
            <br />
            {t('leaders.title2')}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 auto-rows-fr gap-8">
          <Reveal className="h-full">
            <LeaderCard id="ceo" />
          </Reveal>
          <Reveal className="h-full">
            <LeaderCard id="td" reverse />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
