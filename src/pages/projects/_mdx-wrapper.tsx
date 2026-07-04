import type { ReactNode } from 'react'

import { ContentMeta } from '../_components/content-list'

type Props = {
  children: ReactNode
  frontmatter: {
    title?: string
    description?: string
    date?: string
    tags?: readonly string[]
    github?: string
    [key: string]: unknown
  }
}

export default function ProjectWrapper({ children, frontmatter }: Props) {
  const { title, description, date, tags = [], github } = frontmatter

  return (
    <article className="content-page">
      <header className="content-page-header">
        <p className="content-page-eyebrow">Project</p>
        {title && <h1>{title}</h1>}
        {description && <p className="content-page-description">{description}</p>}
        {date && <ContentMeta tags={tags} date={date} github={github} />}
      </header>
      {children}
    </article>
  )
}
