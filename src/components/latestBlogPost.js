/**
 * The latestBlogPost component is the banner that links to the newest blog post.
 */
import React from "react"
import * as latestBlogPostStyles from "./latestBlogPost.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

const LatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(blogPosts)/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1
      ) {
        edges {
          node {
            parent {
              ... on File {
                name
              }
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  if (data.allMarkdownRemark.edges && data.allMarkdownRemark.edges.length) {
    return (
      <Link to={`/blog/${data.allMarkdownRemark.edges[0].node.parent.name}/?source=latestblogpost`}>
        <div className={latestBlogPostStyles.banner}>
          <div className={latestBlogPostStyles.bannerBody}>
            <span>
              <strong>Latest blog post:</strong>{" "}
              {data.allMarkdownRemark.edges[0].node.frontmatter.title}
            </span>
          </div>
        </div>
      </Link>
    )
  }
  return null
}

export default LatestBlogPost
