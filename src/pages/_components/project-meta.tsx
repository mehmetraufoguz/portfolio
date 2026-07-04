import { Link } from 'vocs'

import {
  formatDate,
  formatProjectStatus,
  formatProjectVisibility,
  getProject,
} from './content'

type ProjectMetaProps = {
  slug: string
}

export function ProjectMeta({ slug }: ProjectMetaProps) {
  const project = getProject(slug)
  if (!project) return null

  return (
    <p data-v>
      <em>{formatDate(project.date)}</em>
      {' · '}
      {formatProjectVisibility(project.visibility)}
      {' · '}
      {formatProjectStatus(project.status)}
      {project.tags.map((tag) => (
        <span key={tag}> · {tag}</span>
      ))}
      {project.github && (
        <>
          {' · '}
          <Link to={project.github}>View on GitHub →</Link>
        </>
      )}
    </p>
  )
}
