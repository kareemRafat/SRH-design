export type Localized = {
  en: string
  ar: string
}

export type SpecRow = {
  label: Localized
  value: string
}

export type FeatureCard = {
  title: Localized
  text: Localized
}

export type ProductModel = {
  id: string
  name: Localized
  tagline: Localized
  footnote?: Localized
  specs: SpecRow[]
}

export type TableCell = string | Localized

export type DataTable = {
  id: string
  title: Localized
  columns: Localized[]
  rows: TableCell[][]
  remark?: Localized
}

export type SafetyDeviceRow = {
  device: Localized
  description: Localized
  kind: 'standard' | 'optional'
}

export type ServiceCatalog = {
  slug: string
  hero: {
    title: Localized
    subtitle: Localized
    badge: string
    image: string
    imageAlt: Localized
  }
  overview: {
    heading: Localized
    text: Localized
    highlightsHeading: Localized
    highlights: Localized[]
  }
  safety: {
    heading: Localized
    intro: Localized
    features: FeatureCard[]
  }
  products: {
    heading: Localized
    image: string
    imageAlt: Localized
    models: ProductModel[]
  }
  optionalSpecs: {
    heading: Localized
    appliesTo: string
    rows: SpecRow[]
    footnote: Localized
  }
  safetyDevices: {
    heading: Localized
    columns: [Localized, Localized, Localized]
    rows: SafetyDeviceRow[]
    footnote: Localized
  }
  install: {
    heading: Localized
    items: FeatureCard[]
  }
  sketches: {
    heading: Localized
    intro: Localized
    tables: DataTable[]
    notes: Localized
    fullWidth?: boolean
  }
}
