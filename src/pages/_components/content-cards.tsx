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
          description={`_${formatDate(item.date)}_\n\n${item.description}`}
        />
      ))}
    </Cards>
  )
}
