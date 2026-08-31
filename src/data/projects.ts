export type HomeProject = {
  key: string
  image: string
}

export const HOME_PROJECTS: HomeProject[] = [
  {
    key: 'home.projects.alt1',
    image: '/assets/images/project-1.webp',
  },
  {
    key: 'home.projects.alt2',
    image: '/assets/images/project-2.webp',
  },
  {
    key: 'home.projects.alt3',
    image: '/assets/images/project-3.webp',
  },
]

export type ProjectStatus = 'current' | 'completed'

export type ProjectCard = {
  id: string
  titleKey: string
  status: ProjectStatus
  descriptionKey: string
  sprite?: {
    src: string
    isRowTwo?: boolean
    cropLeft: string
    cropTop: string
  }
  image?: string
  imageAltKey?: string
}

export const PROJECTS: ProjectCard[] = [
  {
    id: 'p1',
    titleKey: 'projects.title',
    status: 'current',
    descriptionKey: 'projects.description',
    sprite: {
      src: '/assets/images/projects-row-1-sheet.svg',
      cropLeft: '-144.92%',
      cropTop: '-58.05%',
    },
  },
  {
    id: 'p2',
    titleKey: 'projects.title',
    status: 'current',
    descriptionKey: 'projects.description',
    sprite: {
      src: '/assets/images/projects-row-1-sheet.svg',
      cropLeft: '-251.87%',
      cropTop: '-58.05%',
    },
  },
  {
    id: 'p3',
    titleKey: 'projects.title',
    status: 'completed',
    descriptionKey: 'projects.description',
    sprite: {
      src: '/assets/images/projects-row-1-sheet.svg',
      cropLeft: '-358.02%',
      cropTop: '-58.05%',
    },
  },
  {
    id: 'p4',
    titleKey: 'projects.title',
    status: 'current',
    descriptionKey: 'projects.description',
    sprite: {
      src: '/assets/images/projects-row-2-sheet.svg',
      isRowTwo: true,
      cropLeft: '-144.92%',
      cropTop: '-28.21%',
    },
  },
  {
    id: 'p5',
    titleKey: 'projects.title',
    status: 'completed',
    descriptionKey: 'projects.description',
    sprite: {
      src: '/assets/images/projects-row-2-sheet.svg',
      isRowTwo: true,
      cropLeft: '-251.87%',
      cropTop: '-28.21%',
    },
  },
  {
    id: 'p6',
    titleKey: 'projects.title',
    status: 'current',
    descriptionKey: 'projects.description',
    sprite: {
      src: '/assets/images/projects-row-2-sheet.svg',
      isRowTwo: true,
      cropLeft: '-358.02%',
      cropTop: '-28.21%',
    },
  },
  {
    id: 'p7',
    titleKey: 'projects.title',
    status: 'completed',
    descriptionKey: 'projects.description',
    image: '/assets/images/project-3.webp',
    imageAltKey: 'projects.p7.alt',
  },
  {
    id: 'p8',
    titleKey: 'projects.title',
    status: 'current',
    descriptionKey: 'projects.description',
    image: '/assets/images/future-3-800.webp',
    imageAltKey: 'projects.p8.alt',
  },
  {
    id: 'p9',
    titleKey: 'projects.title',
    status: 'completed',
    descriptionKey: 'projects.description',
    image: '/assets/images/project-2.webp',
    imageAltKey: 'projects.p9.alt',
  },
]

export const PROJECT_BODY_KEYS: string[] = [
  'projects.body.0',
  'projects.body.1',
  'projects.body.2',
]

export const PROJECT_SPECIFICATION_KEYS: string[] = [
  'projects.specs.0',
  'projects.specs.1',
  'projects.specs.2',
]

export const PROJECT_GALLERY: string[] = [
  '/assets/images/service-hallway-image.svg',
  '/assets/images/project-1.webp',
  '/assets/images/project-2.webp',
  '/assets/images/project-3.webp',
]