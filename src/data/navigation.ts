export type NavItem = {
  key: string
  to: string
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', to: '/' },
  { key: 'about', to: '/about' },
  { key: 'services', to: '/services' },
  { key: 'projects', to: '/projects' },
  { key: 'brands', to: '/brands' },
  { key: 'maintenance', to: '/maintenance' },
  { key: 'join', to: '/join' },
]