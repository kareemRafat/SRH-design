import { useLanguage } from '../../hooks/useLanguage'

type ScienceStripProps = {
  items: string[]
}

export function ScienceStrip({ items }: ScienceStripProps) {
  const { t } = useLanguage()
  return (
    <section className="science-strip">
      <div className="site-shell science-grid">
        <h2>
          {t('scienceStrip.title1')} <span>{t('scienceStrip.span')}</span>
        </h2>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}