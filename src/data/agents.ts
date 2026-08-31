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
    pdf: '/ourAgents/srh-catalogue.pdf',
  },
  {
    key: 'fuji',
    name: 'FUJI',
    logo: '/assets/images/agent-fuji-logo.webp',
    pdf: '/ourAgents/fuji-catalogue.pdf',
  },
  {
    key: 'bdfuji',
    name: 'BDFUJI',
    logo: '/assets/images/agent-bdfuji-logo.webp',
    pdf: '/ourAgents/bdfuji-catalogue.pdf',
  },
]