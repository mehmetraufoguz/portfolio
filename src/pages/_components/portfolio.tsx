'use client'

import GitHubCalendar from 'react-github-calendar'
import { useColorScheme } from './use-color-scheme'

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

const socialLinks = [
  { href: 'https://github.com/mehmetraufoguz', label: 'Github' },
  { href: 'https://www.linkedin.com/in/mehmetraufoguz', label: 'Linkedin' },
  { href: 'https://t.me/mehmetraufoguz', label: 'Telegram' },
  { href: 'https://www.instagram.com/mehmetraufoguz', label: 'Instagram' },
] as const

export function Portfolio() {
  const colorScheme = useColorScheme()
  const statsTheme = colorScheme === 'dark' ? 'dark' : 'default'

  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/88249309"
        alt="Rauf"
        className="mt-10 mb-10 h-20 w-20 rounded-full"
      />

      <h1>Hello, this is Rauf 👋🏻</h1>

      <blockquote>
        Obi-Wan: Hello there.
        <br />
        General Grievous: General Kenobi..
      </blockquote>

      <h2>Contributions</h2>
      <p>mostly private projects</p>
      <div className="mt-6 mb-6">
        <GitHubCalendar
          showWeekdayLabels
          username="mehmetraufoguz"
          colorScheme={colorScheme}
        />
      </div>

      <h2>Featured Projects</h2>
      <p>ta-daa 🥳</p>
      <div className="mt-6 mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <div key={project.repo}>
            <a href={project.href} target="_blank" rel="noreferrer">
              <img
                src={`https://github-readme-stats.vercel.app/api/pin/?username=${project.username}&repo=${project.repo}&theme=${statsTheme}`}
                alt={project.alt}
              />
            </a>
          </div>
        ))}
      </div>

      <h2>Social Links</h2>
      <p>i dont usually use them</p>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
