export type ServiceType = {
  id: string
  titleKey: string
  descriptionKey: string
  imageAltKey: string
  cardImage: string
  linkPath?: string
}

export const SERVICE_TYPES: ServiceType[] = [
  {
    id: 'escalator',
    titleKey: 'services.types.escalator.name',
    descriptionKey: 'services.types.escalator.desc',
    imageAltKey: 'services.types.escalator.imageAlt',
    cardImage: '/assets/images/escalator-card.webp',
    linkPath: '/services/escalators',
  },
  {
    id: 'passenger',
    titleKey: 'services.types.passenger.name',
    descriptionKey: 'services.types.passenger.desc',
    imageAltKey: 'services.types.passenger.imageAlt',
    cardImage: '/assets/images/passenger-elevator-card.webp',
    linkPath: '/services/passenger-elevators',
  },
  {
    id: 'home',
    titleKey: 'services.types.home.name',
    descriptionKey: 'services.types.home.desc',
    imageAltKey: 'services.types.home.imageAlt',
    cardImage: '/assets/images/future-3-800.webp',
    linkPath: '/services/home-elevators',
  },
  {
    id: 'service',
    titleKey: 'services.types.service.name',
    descriptionKey: 'services.types.service.desc',
    imageAltKey: 'services.types.service.imageAlt',
    cardImage: '/assets/images/service-freight-card.webp',
    linkPath: '/services/freight-elevators',
  },
]
