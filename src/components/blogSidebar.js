import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogSidebarStyles from "./blogSidebar.module.scss"
import moment from "moment"

const BlogSidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blogPosts)/" } }
        sort: { fields: [frontmatter___date], order: DESC }
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

  const all_years = {}

  for (let i = 0; i < data.allMarkdownRemark.edges.length; i += 1) {
    const the_year = moment(data.allMarkdownRemark.edges[i].node.frontmatter.date).local().format(`YYYY`)
    all_years[the_year] = all_years[the_year] === undefined ? 1 : (all_years[the_year] += 1)
  }
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
