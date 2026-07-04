import { getLatestBlogPosts, getLatestProjects } from './content'
import { ContentCards } from './content-cards'

export function PortalPreview() {
  const latestProjects = getLatestProjects(3)
  const latestPosts = getLatestBlogPosts(3)

  return (
    <div className="portal-preview">
      <section className="portal-section">
        <div className="portal-section-header">
          <h2>Latest Projects</h2>
          <a href="/projects">View all →</a>
        </div>
        <ContentCards items={latestProjects} basePath="/projects" />
      </section>

      <section className="portal-section">
        <div className="portal-section-header">
          <h2>Latest Posts</h2>
          <a href="/blog">View all →</a>
        </div>
        <ContentCards items={latestPosts} basePath="/blog" />
      </section>
    </div>
  )
}
