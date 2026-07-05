import { defineConfig } from 'vocs/config'

import sidebar from './src/sidebar.config'

export default defineConfig({
  renderStrategy: 'full-static',
  baseUrl: 'https://mehmetraufoguz.com',
  title: 'Rauf',
  description: 'Portfolio',
  colorScheme: 'light dark',
  topNav: [
    { text: 'Home', link: '/' },
    { text: 'Projects', link: '/projects' },
    { text: 'Blog', link: '/blog' },
  ],
  sidebar,
  socials: [
    { icon: 'github', link: 'https://github.com/mehmetraufoguz' },
    { icon: 'telegram', link: 'https://t.me/mehmetraufoguz' },
  ],
})
