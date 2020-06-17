/**
 * The small project pages (ex: artworks, music and prototypes since they're smaller in scale
 * for my site's context)
 */
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import ShareButtons from "../components/shareButtons"
import Comments from "../components/comments"

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        screenshots {
          childImageSharp {
            original {
              src
              width
              height
            }
          }
        }
      }
      parent {
        ... on File {
          name
        }
      }
      html
      excerpt(pruneLength: 160)
    }
  }
`

const SmallProject = props => {
  const image = props.data.markdownRemark.frontmatter.screenshots[0]
    ? props.data.markdownRemark.frontmatter.screenshots[0].childImageSharp.original
    : null
  return (
    <Layout>
      <SEO
        title={props.data.markdownRemark.frontmatter.title}
        description={props.data.markdownRemark.excerpt}
        image={image}
        pathname={props.location.pathname}
      />
      <main>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div className="fadeBody">
          <article>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            {props.data.markdownRemark.frontmatter.tags &&
            props.data.markdownRemark.frontmatter.tags.length ? (
              <p>
                <strong>Tags:</strong> {props.data.markdownRemark.frontmatter.tags.join(", ")}
              </p>
            ) : null}
            <h4 style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>Share this project</h4>
            <ShareButtons
              url={`${props.data.site.siteMetadata.siteUrl}/${props.data.markdownRemark.parent.name}/`}
              title={props.data.markdownRemark.frontmatter.title}
            />
          </article>
          <Comments id={`/blog/${props.data.markdownRemark.parent.name}/`} />
        </div>
      </main>
    </Layout>
  )
}

export default SmallProject
