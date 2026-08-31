import type { Agent } from '../../data/agents'
import { useLanguage } from '../../hooks/useLanguage'

type AgentBandProps = {
  agent: Agent
  even: boolean
}

export function AgentBand({ agent, even }: AgentBandProps) {
  const { t } = useLanguage()
  const logoCard = (
    <div className="agent-logo-card">
      <img src={agent.logo} alt={t(`agents.${agent.key}.logoAlt`)} loading="lazy" decoding="async" />
    </div>
  )
  const copy = (
    <div className="agent-copy">
      <h2>{agent.name}</h2>
      <p>{t(`agents.${agent.key}.description`)}</p>
      <a href={agent.pdf} target="_blank" rel="noopener noreferrer" className="agent-pdf-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        {t('agents.viewCatalogue')}
      </a>
    </div>
  )

  return (
    <article className="agent-band">
      <div className="site-shell agent-row">{even ? copy : logoCard}{even ? logoCard : copy}</div>
    </article>
  )
}