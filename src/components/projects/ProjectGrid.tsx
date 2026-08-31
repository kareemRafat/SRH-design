import { useState } from 'react'
import { PROJECTS } from '../../data/projects'
import type { ProjectStatus } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { useLanguage } from '../../hooks/useLanguage'

type Filter = 'all' | ProjectStatus

export function ProjectGrid() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>('all')
  const visibleProjects = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.status === filter)

  return (
    <>
      <div className="project-tabs" role="tablist" aria-label={t('projectsGrid.aria')}>
        <button
          className={`project-tab ${filter === 'all' ? 'is-active' : ''}`}
          data-project-tab="all"
          type="button"
          role="tab"
          aria-selected={filter === 'all'}
          onClick={() => setFilter('all')}
        >
          {t('projectsGrid.all')}
        </button>
        <button
          className={`project-tab ${filter === 'completed' ? 'is-active' : ''}`}
          data-project-tab="completed"
          type="button"
          role="tab"
          aria-selected={filter === 'completed'}
          onClick={() => setFilter('completed')}
        >
          {t('projectsGrid.completed')}
        </button>
      </div>

      <div className="project-grid" key={filter}>
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  )
}