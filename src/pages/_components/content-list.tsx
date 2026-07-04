import { formatDate } from './content'

type ContentMetaProps = {
  tags: readonly string[]
  date: string
  github?: string
  author?: string
}

export function ContentMeta({ tags, date, github, author }: ContentMetaProps) {
  return (
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
      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          View on GitHub →
        </a>
      )}
    </div>
  )
}
