import { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'

type ProjectGalleryProps = {
  images: string[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  return (
    <>
      <div className="project-main-media">
        <img
          data-gallery-main-image
          src={images[active]}
          alt={t('gallery.mainAlt')}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="project-thumbnails" aria-label={t('gallery.aria')}>
        {images.map((src, index) => (
          <button
            key={src}
            className={`project-thumb ${active === index ? 'is-active' : ''}`}
            type="button"
            aria-label={t('gallery.showAria', { n: index + 1 })}
            onClick={() => setActive(index)}
          >
            <img
              src={src}
              alt={t('gallery.imgAria', { n: index + 1 })}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
      </div>
    </>
  )
}