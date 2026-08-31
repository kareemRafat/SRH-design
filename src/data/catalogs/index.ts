import type { Localized, ServiceCatalog } from './types'
import { ESCALATOR_CATALOG } from './escalator'
import { PASSENGER_CATALOG } from './passenger'
import { FREIGHT_CATALOG } from './freight'
import { HOME_CATALOG } from './home'

export type { Localized, ServiceCatalog }

const CATALOGS: Record<string, ServiceCatalog> = {
  [ESCALATOR_CATALOG.slug]: ESCALATOR_CATALOG,
  [PASSENGER_CATALOG.slug]: PASSENGER_CATALOG,
  [FREIGHT_CATALOG.slug]: FREIGHT_CATALOG,
  [HOME_CATALOG.slug]: HOME_CATALOG,
}

export function getCatalog(slug: string | undefined): ServiceCatalog | undefined {
  if (!slug) return undefined
  return CATALOGS[slug]
}
