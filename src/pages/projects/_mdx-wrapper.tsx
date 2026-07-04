import type { ReactNode } from 'react'
import { Layout } from 'vocs'

import { ContentPageHeader } from '../_components/content-page-header'

type Props = {
  children: ReactNode
}

export default function ProjectWrapper({ children }: Props) {
  return (
    <Layout>
      <article className="content-page">
        <ContentPageHeader eyebrow="Project" showGithub />
        {children}
      </article>
    </Layout>
  )
}
