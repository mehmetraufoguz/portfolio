import type { ReactNode } from 'react'

import { ContentMeta } from '../_components/content-list'

type Props = {
  children: ReactNode
  frontmatter: {
    title?: string
    description?: string
    date?: string
    tags?: readonly string[]
    author?: string
    [key: string]: unknown
  }
}

export default function BlogWrapper({ children, frontmatter = {} }: Props) {
  const { title, description, date, tags = [], author } = frontmatter

  return (
    <article className="content-page">
      <header className="content-page-header">
        <p className="content-page-eyebrow">Blog</p>
        {title && <h1>{title}</h1>}
        {description && <p className="content-page-description">{description}</p>}
        {date && <ContentMeta tags={tags} date={date} author={author} />}
      </header>
      {children}
    </article>
  )
}
