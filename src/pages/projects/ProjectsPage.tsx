import { ProjectGrid } from '../../components/projects/ProjectGrid'
import { Seo } from '../../components/seo/Seo'
import { ScienceStrip } from '../../components/layout/ScienceStrip'
import { PageHero } from '../../components/layout/PageHero'
import { useLanguage } from '../../hooks/useLanguage'

export function ProjectsPage() {
  const { t } = useLanguage()
  const scienceItems = [0, 1, 2].map((index) => t(`projectsPage.science.${index}`))

  return (
    <>
      <Seo titleKey="seo.title.projects" descriptionKey="seo.description" />
      <PageHero title={t('projects.hero.title')} highlight={t('projects.hero.highlight')} />

      <section className="inner-section projects-section">
        <div className="site-shell">
          <ProjectGrid />
        </div>
      </section>

      <ScienceStrip items={scienceItems} />
    </>
  )
}