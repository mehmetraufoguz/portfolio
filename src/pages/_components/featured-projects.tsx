'use client'

const featuredProjects = [
  {
    href: 'https://github.com/Metatime-Technology-Inc/genesis-contracts',
    username: 'Metatime-Technology-Inc',
    repo: 'genesis-contracts',
    alt: 'genesis-contracts',
  },
  {
    href: 'https://github.com/Metatime-Technology-Inc/pool-contracts',
    username: 'Metatime-Technology-Inc',
    repo: 'pool-contracts',
    alt: 'pool-contracts',
  },
] as const

export function FeaturedProjects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {featuredProjects.map((project) => (
        <a key={project.repo} href={project.href} target="_blank" rel="noreferrer">
          <img
            className="dark:hidden"
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${project.username}&repo=${project.repo}&theme=default`}
            alt={project.alt}
          />
          <img
            className="hidden dark:block"
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${project.username}&repo=${project.repo}&theme=dark`}
            alt={project.alt}
          />
        </a>
      ))}
    </div>
  )
}
