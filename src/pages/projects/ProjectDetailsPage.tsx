import { Link, useParams } from 'react-router-dom'
import { Seo } from '../../components/seo/Seo'
import { PROJECTS, PROJECT_BODY_KEYS, PROJECT_SPECIFICATION_KEYS, PROJECT_GALLERY } from '../../data/projects'
import { ProjectGallery } from '../../components/projects/ProjectGallery'
import { ScienceStrip } from '../../components/layout/ScienceStrip'
import { PageHero } from '../../components/layout/PageHero'
import { useLanguage } from '../../hooks/useLanguage'

export function ProjectDetailsPage() {
  const { id } = useParams()
  const { t } = useLanguage()
  const project = PROJECTS.find((item) => item.id === id)
  const scienceItems = [0, 1, 2].map((index) => t(`projectDetails.science.${index}`))

  return (
    <>
      <Seo titleKey="seo.title.projects" descriptionKey="seo.description" />
      <PageHero title={t('projects.hero.title')} highlight={t('projects.hero.highlight')} />

      {project ? (
        <article className="inner-section">
          <div className="site-shell">
            <h2 className="project-detail-title">{t(project.titleKey)}</h2>
            <ProjectGallery images={PROJECT_GALLERY} />

            <div className="project-description">
              {PROJECT_BODY_KEYS.map((key) => (
                <p key={key}>{t(key)}</p>
              ))}
            </div>

            <section className="specification-list" aria-labelledby="specifications-title">
              <h2 id="specifications-title">{t('projects.specsTitle')}</h2>
              <ul>
                {PROJECT_SPECIFICATION_KEYS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      ) : (
        <section className="inner-section">
          <div className="site-shell">
            <p>{t('projects.notFound')}</p>
            <Link to="/projects" className="inline-flex items-center rounded-full bg-[#4a507f] hover:bg-navy-3 text-white px-8 py-3 text-sm font-medium transition-colors">
              {t('projects.back')}
            </Link>
          </div>
        </section>
      )}

      <ScienceStrip items={scienceItems} />
    </>
  )
}