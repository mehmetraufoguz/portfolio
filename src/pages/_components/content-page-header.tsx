'use client'

import { Badge, Link, MdxPageContext } from 'vocs'

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
}

export function ContentPageHeader({ eyebrow, showGithub }: ContentPageHeaderProps) {
  const { frontmatter } = MdxPageContext.use()
  const page = frontmatter as PageFrontmatter | undefined

  if (!page?.title) return null

  const { title, description, date, tags = [], github, author } = page

  return (
    <>
      <p className="vocs:mb-2 vocs:text-xs vocs:uppercase vocs:tracking-wide vocs:text-secondary">
        {eyebrow}
      </p>
      <hgroup data-v>
        <h1 data-v>{title}</h1>
        {description && <p data-v>{description}</p>}
      </hgroup>
      {(date || author || tags.length > 0 || (showGithub && github)) && (
        <div className="vocs:mt-4 vocs:flex vocs:flex-wrap vocs:items-center vocs:gap-3 vocs:text-sm vocs:text-secondary">
          {date && <time dateTime={date}>{formatDate(date)}</time>}
          {author && <span>by {author}</span>}
          {tags.map((tag) => (
            <Badge key={tag} variant="note">
              {tag}
            </Badge>
          ))}
          {showGithub && github && <Link to={github}>View on GitHub →</Link>}
        </div>
      )}
    </>
  )
}
