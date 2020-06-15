import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import blogYearStyles from "./blog.module.scss"
import { Link, graphql } from "gatsby"
import moment from "moment"
import Img from "gatsby-image"
import BlogSidebar from "../components/blogSidebar"

export const pageQuery = graphql`
  query($endRange: Date, $limit: Int!) {
    site {
      siteMetadata {
        author
        blog_description
      }
    }
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(blogPosts)/" }
        frontmatter: { date: { lt: $endRange } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
    ) {
      edges {
        node {
          parent {
            ... on File {
              name
            }
          }
          frontmatter {
            date
            title
            short_description
            hero_image {
              childImageSharp {
                fluid(maxWidth: 220) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogYear = props => {
  return (
    <Layout>
      <main>
        <SEO
          title={`Blog - year ${props.pageContext.year}`}
          description={props.data.site.siteMetadata.blog_description}
          pathname={props.location.pathname}
        />
        <h1>{`Blog - year ${props.pageContext.year}`}</h1>
        <div className={blogYearStyles.blogGrid}>
          <div className="fadeBody">
            <article>
              {props.data.allMarkdownRemark.edges.map(edge => (
                <div key={edge.node.frontmatter.title}>
                  <Link
                    to={`/blog/${edge.node.parent.name}/`}
                    style={{ textDecoration: "unset", color: "var(--text-color)" }}
                  >
                    <div className={blogYearStyles.blogWrapper}>
                      <h2 className={blogYearStyles.postTitle}>{edge.node.frontmatter.title}</h2>

                      {edge.node.frontmatter.hero_image ? (
                        <div style={{ margin: "0 auto", maxWidth: "220px" }}>
                          <div
                            style={{
                              margin: `0 ${
                                edge.node.frontmatter.hero_image.childImageSharp.fluid.aspectRatio <
                                1.78
                                  ? ((16 / 9 -
                                      edge.node.frontmatter.hero_image.childImageSharp.fluid
                                        .aspectRatio) /
                                      (16 / 9) /
                                      2) *
                                    100
                                  : 0
                              }%`,
                            }}
                          >
                            <Img
                              fluid={edge.node.frontmatter.hero_image.childImageSharp.fluid}
                              alt={`${edge.node.frontmatter.title} hero image`}
                            />
                          </div>
                        </div>
                      ) : null}

                      <p>{edge.node.frontmatter.short_description}</p>
                      <p style={{ fontSize: "0.9rem" }}>
                        {props.data.site.siteMetadata.author} on{" "}
                        {moment(edge.node.frontmatter.date).local().format(`MMMM DD, YYYY hh:mm a`)}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </article>
          </div>
          <BlogSidebar />
        </div>
      </main>
    </Layout>
  )
}

export default BlogYear
