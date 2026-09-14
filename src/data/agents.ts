export type Agent = {
  key: string
  name: string
  logo: string
  pdf: string
}

export const AGENTS: Agent[] = [
  {
    key: 'srh',
    name: 'SRH',
    logo: '/assets/images/agent-srh-logo.webp',
    pdf: '/catalogs/SRH Aufzuege.pdf',
  },
  {
    key: 'fuji',
    name: 'FUJI',
    logo: '/assets/images/agent-fuji-logo.webp',
    pdf: '/catalogs/Fuji Catalogue.pdf',
  },
  {
    key: 'bdfuji',
    name: 'BDFUJI',
    logo: '/assets/images/agent-bdfuji-logo.webp',
    pdf: '/catalogs/BD FUJII Catalogue.pdf',
  },
]