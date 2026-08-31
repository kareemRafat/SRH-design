import { useLanguage } from '../../hooks/useLanguage'

type MapEmbedProps = {
  variant?: 'home' | 'page'
  noMargin?: boolean
}

export function MapEmbed({ variant = 'page', noMargin = false }: MapEmbedProps) {
  const { t } = useLanguage()
  if (variant === 'home') {
    return (
      <div className="rounded-2xl overflow-hidden shadow-sm h-80 lg:flex-1">
        <iframe
          title={t('map.homeTitle')}
          src="https://www.google.com/maps?q=Al%20Awali%20District%2C%20Makkah%20Al%20Mukarramah%2C%20Saudi%20Arabia&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    )
  }

  return (
    <div className="map-block" style={noMargin ? { marginTop: 0 } : undefined}>
      <iframe
        title={t('map.pageTitle')}
        loading="lazy"
        src="https://www.openstreetmap.org/export/embed.html?bbox=39.82%2C21.36%2C39.94%2C21.48&amp;layer=mapnik&amp;marker=21.42%2C39.88"
      />
    </div>
  )
}