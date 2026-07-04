import type { ReactNode } from 'react'
import { Layout } from 'vocs'

import { ContentPageHeader } from '../_components/content-page-header'

type Props = {
  children: ReactNode
}

export default function BlogWrapper({ children }: Props) {
  return (
    <Layout>
      <article className="content-page">
        <ContentPageHeader eyebrow="Blog" />
        {children}
      </article>
    </Layout>
  )
}
