import { Card, Cards } from 'vocs'

import {
  formatDate,
  formatProjectCardMeta,
  type BlogPost,
  type Project,
} from './content'

export function ProjectCards({ items }: { items: readonly Project[] }) {
  return (
    <Cards>
      {items.map((item) => (
        <Card
          key={item.slug}
          to={`/projects/${item.slug}`}
          title={item.title}
          description={`${formatProjectCardMeta(item)}\n\n${item.description}`}
        />
      ))}
    </Cards>
  )
}

export function BlogCards({ items }: { items: readonly BlogPost[] }) {
  return (
    <Cards>
      {items.map((item) => (
        <Card
          key={item.slug}
          to={`/blog/${item.slug}`}
          title={item.title}
          description={`_${formatDate(item.date)}_\n\n${item.description}`}
        />
      ))}
    </Cards>
  )
}
