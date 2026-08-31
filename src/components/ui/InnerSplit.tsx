import type { ReactNode } from 'react'
import { Reveal } from '../layout/Reveal'
import type { RevealVariant } from '../../hooks/useReveal'

type InnerSplitProps = {
  image?: { src: string; alt: string; width?: number; height?: number }
  heading?: ReactNode
  children: ReactNode
  reverse?: boolean
  copyClassName?: string
  mediaVariant?: RevealVariant
}

export function InnerSplit({
  image,
  heading,
  children,
  reverse = false,
  copyClassName = '',
  mediaVariant,
}: InnerSplitProps) {
  const mediaVariantClass = mediaVariant ?? (reverse ? 'right' : 'left')

  const media = image ? (
    <Reveal className="image-frame" variant={mediaVariantClass}>
      <img
        loading="lazy"
        decoding="async"
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
    </Reveal>
  ) : null

  const copy = (
    <Reveal className={`${copyClassName}${heading ? ' split-copy' : ''}`}>{children}</Reveal>
  )

  const splitClass = heading ? ' inner-split-with-heading' : ''

  return (
    <div className={`site-shell split-layout${splitClass}${reverse ? ' is-reverse' : ''}`}>
      {heading ? <Reveal className="split-heading">{heading}</Reveal> : null}
      {reverse ? (
        <>
          {copy}
          {media}
        </>
      ) : (
        <>
          {media}
          {copy}
        </>
      )}
    </div>
  )
}