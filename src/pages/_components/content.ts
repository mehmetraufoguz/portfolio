export type Project = {
  slug: string
  title: string
  description: string
  date: string
  github: string
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
    slug: 'genesis-contracts',
    title: 'Genesis Contracts',
    description: 'Core smart contract suite for the Genesis protocol — tokenomics, staking, and governance.',
    date: '2025-06-01',
    github: 'https://github.com/Metatime-Technology-Inc/genesis-contracts',
    tags: ['solidity', 'ethereum', 'defi'],
  },
  {
    slug: 'pool-contracts',
    title: 'Pool Contracts',
    description: 'Liquidity pool contracts with automated market-making and reward distribution.',
    date: '2025-05-15',
    github: 'https://github.com/Metatime-Technology-Inc/pool-contracts',
    tags: ['solidity', 'amm', 'defi'],
  },
] as const

export const blogPosts: readonly BlogPost[] = [
  {
    slug: 'react-github-calendar',
    title: 'react-github-calendar — A Clean Contribution Graph for React',
    description:
      'How I integrated a lightweight GitHub contribution calendar into this portfolio and what I learned along the way.',
    date: '2026-03-20',
    tags: ['react', 'packages', 'ui'],
  },
  {
    slug: 'vocs-portfolio-site',
    title: 'Building a Portfolio Portal with Vocs',
    description:
      'Why Vocs works well for a personal site that mixes docs-style project pages with a blog — and how the layout system helps.',
    date: '2026-03-10',
    tags: ['vocs', 'mdx', 'portfolio'],
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
