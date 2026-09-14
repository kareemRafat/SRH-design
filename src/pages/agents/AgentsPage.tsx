import { AGENTS } from '../../data/agents'
import { Seo } from '../../components/seo/Seo'
import { AgentBand } from '../../components/agents/AgentBand'
import { PageHero } from '../../components/layout/PageHero'
import { useLanguage } from '../../hooks/useLanguage'

export function AgentsPage() {
  const { t } = useLanguage()
  return (
    <>
      <Seo titleKey="seo.title.brands" descriptionKey="seo.description" />
      <PageHero title={t('brandsPage.hero.title')} highlight={t('brandsPage.hero.highlight')} />

      <section className="agent-list" aria-label={t('brandsPage.aria')}>
        {AGENTS.map((agent, index) => (
          <AgentBand key={agent.name} agent={agent} even={index % 2 === 1} />
        ))}
      </section>
    </>
  )
}