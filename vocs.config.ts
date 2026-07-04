import { defineConfig } from 'vocs/config'

export default defineConfig({
  renderStrategy: 'full-static',
  title: 'Rauf',
  description: 'Portfolio',
  colorScheme: 'light dark',
  topNav: [
    { text: 'Home', link: '/' },
    { text: 'Projects', link: '/projects' },
    { text: 'Blog', link: '/blog' },
  ],
  sidebar: {
    '/projects': {
      backLink: true,
      items: [
        { text: 'All Projects', link: '/projects' },
        { text: 'Genesis Contracts', link: '/projects/genesis-contracts' },
        { text: 'Pool Contracts', link: '/projects/pool-contracts' },
      ],
    },
    '/blog': {
      backLink: true,
      items: [
        { text: 'All Posts', link: '/blog' },
        {
          text: 'react-github-calendar',
          link: '/blog/react-github-calendar',
        },
        {
          text: 'Building a Portfolio Portal with Vocs',
          link: '/blog/vocs-portfolio-site',
        },
      ],
    },
  },
  socials: [
    { icon: 'github', link: 'https://github.com/mehmetraufoguz' },
    { icon: 'telegram', link: 'https://t.me/mehmetraufoguz' },
  ],
})
