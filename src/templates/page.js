/**
 * The normal pages, with just a title and article.
 */
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        social_media_image {
          childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`

const Page = props => {
  const image = props.data.markdownRemark.frontmatter.social_media_image
    ? props.data.markdownRemark.frontmatter.social_media_image.childImageSharp.original
    : null
  return (
    <Layout>
      <Seo
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.excerpt}
        image={image}
        pathname={props.location.pathname}
      />
      <main>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div className="fadeBody">
          <article dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </div>
      </main>
    </Layout>
  )
}

export default Page
