import { blogPosts, projects, sortByDateDesc } from './pages/_components/content'

const mainSidebar = [
  { text: 'Home', link: '/' },
  { text: 'Projects', link: '/projects' },
  { text: 'Blog', link: '/blog' },
] as const

export default {
  '/': mainSidebar,
  '/projects': {
    backLink: true,
    items: [
      { text: 'All Projects', link: '/projects' },
      ...sortByDateDesc(projects).map((project) => ({
        text: project.title,
        link: `/projects/${project.slug}`,
      })),
    ],
  },
  '/blog': {
    backLink: true,
    items: [
      { text: 'All Posts', link: '/blog' },
      ...sortByDateDesc(blogPosts).map((post) => ({
        text: post.title,
        link: `/blog/${post.slug}`,
      })),
    ],
  },
}
