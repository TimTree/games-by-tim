/**
 * The blog sidebar contains the blog archive with clickable years and a link to the RSS feed.
 */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as blogSidebarStyles from "./blogSidebar.module.scss"
import moment from "moment"

const BlogSidebar = () => {
  // Query all blog post dates to populate the blog archive years list
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blogPosts)/" } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              date
            }
          }
        }
      }
    }
  `)

  // Determine how many blog posts are there per year
  const all_years = {}

  for (let i = 0; i < data.allMarkdownRemark.edges.length; i += 1) {
    const the_year = moment(data.allMarkdownRemark.edges[i].node.frontmatter.date)
      .local()
      .format(`YYYY`)
    all_years[the_year] = all_years[the_year] === undefined ? 1 : (all_years[the_year] += 1)
  }
  // all_years starts counting with the earliest year, so use reverse() to display blog years
  // newest first.
  return (
    <aside className={blogSidebarStyles.sidebar}>
      <h2 className={blogSidebarStyles.sidebarHeader}>Blog archive</h2>
      <div className={blogSidebarStyles.years}>
        {Object.keys(all_years)
          .slice(0)
          .reverse()
          .map(year => (
            <Link key={year} to={`/blog/year/${year}/`}>
              <p>
                {year} ({all_years[year]})
              </p>
            </Link>
          ))}
      </div>
      <p style={{ margin: "2rem 0" }}>
        <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS feed
        </a>{" "}
        <Link to="/rss-feed/">(?)</Link>
      </p>
    </aside>
  )
}

export default BlogSidebar
