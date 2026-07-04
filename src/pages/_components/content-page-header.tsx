'use client'

import { MdxPageContext } from 'vocs'

import { formatDate } from './content'

type ContentPageHeaderProps = {
  eyebrow: 'Project' | 'Blog'
  showGithub?: boolean
}

type PageFrontmatter = {
  title?: string
  description?: string
  date?: string
  tags?: readonly string[]
  github?: string
  author?: string
  hideContentHeader?: boolean
}

export function ContentPageHeader({ eyebrow, showGithub }: ContentPageHeaderProps) {
  const { frontmatter } = MdxPageContext.use()
  const page = frontmatter as PageFrontmatter | undefined

  if (!page || page.hideContentHeader) return null

  const { title, description, date, tags = [], github, author } = page

  return (
    <header className="content-page-header">
      <p className="content-page-eyebrow">{eyebrow}</p>
      {title && <h1>{title}</h1>}
      {description && <p className="content-page-description">{description}</p>}
      {date && (
        <div className="content-meta">
          <time dateTime={date}>{formatDate(date)}</time>
          {author && <span className="content-author">by {author}</span>}
          {tags.length > 0 && (
            <ul className="content-tags">
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
          {showGithub && github && (
            <a href={github} target="_blank" rel="noreferrer">
              View on GitHub →
            </a>
          )}
        </div>
      )}
    </header>
  )
}
