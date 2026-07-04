import { Card, Cards } from 'vocs'

import { formatDate } from './content'

type ContentCardItem = {
  slug: string
  title: string
  description: string
  date: string
}

type ContentCardsProps = {
  items: readonly ContentCardItem[]
  basePath: '/projects' | '/blog'
}

export function ContentCards({ items, basePath }: ContentCardsProps) {
  return (
    <Cards>
      {items.map((item) => (
        <Card
          key={item.slug}
          to={`${basePath}/${item.slug}`}
          title={item.title}
          description={item.description}
          topRight={
            <span className="content-card-date">{formatDate(item.date)}</span>
          }
        />
      ))}
    </Cards>
  )
}
