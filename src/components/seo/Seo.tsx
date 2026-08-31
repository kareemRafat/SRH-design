import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../hooks/useLanguage'

type SeoProps = {
  titleKey: string
  descriptionKey?: string
  path?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export function Seo({ titleKey, descriptionKey, path }: SeoProps) {
  const { t, lang } = useLanguage()
  const { pathname } = useLocation()

  useEffect(() => {
    const title = t(titleKey)
    const url = `${window.location.origin}${path ?? pathname}`

    document.title = title
    upsertCanonical(url)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', lang === 'ar' ? 'ar_SA' : 'en_US')
    if (descriptionKey) {
      const description = t(descriptionKey)
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }
  }, [titleKey, descriptionKey, t, lang, pathname, path])

  return null
}
