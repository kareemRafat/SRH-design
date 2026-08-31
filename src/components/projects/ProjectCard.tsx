import { Link } from 'react-router-dom'
import type { CSSProperties } from 'react'
import type { ProjectCard as ProjectCardData } from '../../data/projects'
import { useLanguage } from '../../hooks/useLanguage'

type ProjectCardProps = {
  project: ProjectCardData
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { t } = useLanguage()
  const spriteStyle = project.sprite
    ? ({
        '--crop-left': project.sprite.cropLeft,
        '--crop-top': project.sprite.cropTop,
      } as CSSProperties)
    : undefined

  const staggerStyle = { '--i': index } as CSSProperties

  return (
    <article className="project-card" style={staggerStyle}>
      <Link to={`/projects/${project.id}`} aria-label={t('projects.viewAria')}>
        <span className="project-media">
          {project.sprite ? (
            <span
              className={`project-sprite ${project.sprite.isRowTwo ? 'is-row-two' : ''}`}
              style={spriteStyle}
            >
              <img
                src={project.sprite.src}
                alt={t('projects.spriteAlt')}
                loading="lazy"
                decoding="async"
              />
            </span>
          ) : (
            <img
              src={project.image}
              alt={project.imageAltKey ? t(project.imageAltKey) : ''}
              loading="lazy"
              decoding="async"
            />
          )}
          <span className="project-hover-overlay" aria-hidden="true">
            <span className="project-hover-frame"></span>
            <span className="project-hover-content">
              <b>+</b>
              <strong>{t('projects.placeholderName')}</strong>
              <small>{t('projects.placeholderText')}</small>
            </span>
          </span>
        </span>
        <h2>{t(project.titleKey)}</h2>
      </Link>
      <p>{t(project.descriptionKey)}</p>
    </article>
  )
}