import { STATS } from '../../data/stats'
import { useLanguage } from '../../hooks/useLanguage'
import { useCountUp } from '../../hooks/useCountUp'

type StatBandProps = {
  variant?: 'cards' | 'band'
}

function parseStat(value: string) {
  const match = value.match(/^([^0-9]*)([0-9]+)$/)
  if (!match) return { prefix: '', number: 0 }
  return { prefix: match[1], number: parseInt(match[2], 10) }
}

function StatValue({ value, className }: { value: string; className: string }) {
  const parsed = parseStat(value)
  const { ref, value: count } = useCountUp<HTMLParagraphElement>(parsed.number)
  return (
    <p ref={ref} className={className}>
      {parsed.prefix}
      {count}
    </p>
  )
}

export function StatBand({ variant = 'cards' }: StatBandProps) {
  const { t } = useLanguage()
  if (variant === 'band') {
    return (
      <div className="about-stats" aria-label={t('statBand.aria')}>
        {STATS.map((stat) => {
          const lines = t<string[]>(stat.key)
          return (
            <article className="about-stat" key={stat.value}>
              <StatValue value={stat.value} className="about-stat-value" />
              <p className="about-stat-label">
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </article>
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {STATS.map((stat) => {
        const lines = t<string[]>(stat.key)
        return (
          <div
            key={stat.value}
            className="bg-white dark:bg-slate-7 rounded-2xl shadow-sm px-4 py-5 sm:px-6 sm:py-6"
          >
            <StatValue
              value={stat.value}
              className="font-heading font-extrabold text-2xl sm:text-4xl text-navy-4 dark:text-white"
            />
            <p className="text-xs sm:text-sm text-slate-4 dark:text-slate-2 mt-2">
              {lines[0]}
              <br />
              {lines[1]}
            </p>
          </div>
        )
      })}
    </div>
  )
}