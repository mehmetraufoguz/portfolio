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
    slug: 'example-project',
    title: 'Example Project',
    description: 'A short summary of what this project does and why it is worth a look.',
    date: '2026-01-01',
    github: 'https://github.com/your-username/your-repo',
    tags: ['template'],
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
