export type ProjectVisibility = 'public' | 'private'
export type ProjectStatus = 'completed' | 'in-progress' | 'discontinued'

export type Project = {
  slug: string
  title: string
  description: string
  date: string
  visibility: ProjectVisibility
  status: ProjectStatus
  github?: string
  tags: readonly string[]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  tags: readonly string[]
}

export const projects: readonly Project[] = [
  {
    slug: 'aa-news-encoder',
    title: 'aa-news-encoder',
    description:
      'Turkish news classification pipeline — AA API ingestion, Kafka, fine-tuned BERT, REST/SSE API, and dashboard.',
    date: '2026-04-30',
    visibility: 'public',
    status: 'completed',
    github: 'https://github.com/mehmetraufoguz/aa-news-encoder',
    tags: ['nlp', 'turkish', 'bert', 'kafka'],
  },
  {
    slug: 'app-documents',
    title: 'app-documents',
    description:
      'Git-backed markdown document platform with magic-link auth and a publishable client SDK.',
    date: '2026-03-08',
    visibility: 'public',
    status: 'in-progress',
    github: 'https://github.com/mehmetraufoguz/app-documents',
    tags: ['documents', 'git', 'full-stack', 'markdown'],
  },
  {
    slug: 'job-applications',
    title: 'Job Applications CLI',
    description: 'Terminal UI for tracking job applications with Ink, Drizzle ORM, and embedded Postgres.',
    date: '2025-12-05',
    visibility: 'public',
    status: 'completed',
    github: 'https://github.com/mehmetraufoguz/job-applications',
    tags: ['cli', 'ink', 'typescript', 'productivity'],
  },
  {
    slug: 'genesis-contracts',
    title: 'Genesis Contracts',
    description:
      'MetaChain genesis smart contracts — mining, validation, reward pools, and BSC bridging.',
    date: '2023-09-27',
    visibility: 'public',
    status: 'completed',
    github: 'https://github.com/mehmetraufoguz/genesis-contracts',
    tags: ['solidity', 'ethereum', 'defi'],
  },
  {
    slug: 'pool-contracts',
    title: 'Pool Contracts',
    description:
      'Metatime Coin distribution pools with vesting, claiming, liquidity, and strategic burns.',
    date: '2023-05-14',
    visibility: 'public',
    status: 'completed',
    github: 'https://github.com/mehmetraufoguz/pool-contracts',
    tags: ['solidity', 'token-distribution', 'defi'],
  },
] as const

export const blogPosts: readonly BlogPost[] = [
  {
    slug: 'example-post',
    title: 'Example Post',
    description: 'A short intro to what this post covers — the package, tool, or idea you are writing about.',
    date: '2026-01-01',
    tags: ['template'],
  },
] as const

export function sortByDateDesc<T extends { date: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date))
}

export function getLatestProjects(limit = 3): Project[] {
  return sortByDateDesc(projects).slice(0, limit)
}

export function getLatestBlogPosts(limit = 3): BlogPost[] {
  return sortByDateDesc(blogPosts).slice(0, limit)
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatProjectVisibility(visibility: ProjectVisibility): string {
  return visibility === 'public' ? 'Public' : 'Private'
}

export function formatProjectStatus(status: ProjectStatus): string {
  switch (status) {
    case 'completed':
      return 'Completed'
    case 'in-progress':
      return 'In progress'
    case 'discontinued':
      return 'Discontinued'
  }
}

export function formatProjectCardMeta(project: Pick<Project, 'date' | 'visibility' | 'status'>): string {
  return `_${formatDate(project.date)} · ${formatProjectVisibility(project.visibility)} · ${formatProjectStatus(project.status)}_`
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
