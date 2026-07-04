import { getLatestBlogPosts, getLatestProjects } from './content'
import { ContentCards } from './content-cards'

export function PortalPreview() {
  const latestProjects = getLatestProjects(3)
  const latestPosts = getLatestBlogPosts(3)

  return (
    <div className="vocs:mt-12 vocs:flex vocs:flex-col vocs:gap-12">
      <section>
        <div className="vocs:mb-4 vocs:flex vocs:items-baseline vocs:justify-between vocs:gap-4">
          <h2 data-v className="vocs:!mt-0">
            Latest Projects
          </h2>
          <a
            href="/projects"
            className="vocs:text-sm vocs:text-secondary vocs:no-underline hover:vocs:text-accent"
          >
            View all →
          </a>
        </div>
        <ContentCards items={latestProjects} basePath="/projects" />
      </section>

      <section>
        <div className="vocs:mb-4 vocs:flex vocs:items-baseline vocs:justify-between vocs:gap-4">
          <h2 data-v className="vocs:!mt-0">
            Latest Posts
          </h2>
          <a
            href="/blog"
            className="vocs:text-sm vocs:text-secondary vocs:no-underline hover:vocs:text-accent"
          >
            View all →
          </a>
        </div>
        <ContentCards items={latestPosts} basePath="/blog" />
      </section>
    </div>
  )
}
