/**
 * The project pages
 */
import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import * as projectStyles from "./project.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import ShareButtons from "../components/shareButtons"
import Comments from "../components/comments"

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        short_description
        tags
        title
        links {
          link_text
          url
        }
        github
        version
        whats_new_url
        older_versions_url
        released
        updated
        size
        platform
        license
        project_announcement
        screenshots {
          childImageSharp {
            original {
              src
              width
              height
            }
            resize {
              originalName
            }
            gatsbyImageData(width: 850, layout: CONSTRAINED)
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

const Project = props => {
  const image = props.data.markdownRemark.frontmatter.screenshots[0]
    ? props.data.markdownRemark.frontmatter.screenshots[0].childImageSharp.original
    : null
  // The project screenshot grid is optimized for 16:9 aspect ratio images.
  // If the screenshot aspect ratio differs, set a margin for the grid such that
  // there's an invisible pillarbox.
  let giantScreenshotMargin
  if (
    props.data.markdownRemark.frontmatter.screenshots &&
    props.data.markdownRemark.frontmatter.screenshots.length
  ) {
    const desiredAspect = 16 / 9
    giantScreenshotMargin =
      ((desiredAspect -
        props.data.markdownRemark.frontmatter.screenshots[0].childImageSharp.gatsbyImageData.width /
          props.data.markdownRemark.frontmatter.screenshots[0].childImageSharp.gatsbyImageData
            .height) /
        desiredAspect /
        2) *
      100
  }
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
          {props.data.markdownRemark.frontmatter.project_announcement !== "" ? (
            <article
              dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.frontmatter.project_announcement,
              }}
              style={{ textAlign: "center" }}
            />
          ) : null}
          <section className={projectStyles.projectCapsule}>
            {props.data.markdownRemark.frontmatter.screenshots &&
            props.data.markdownRemark.frontmatter.screenshots.length ? (
              <div style={{ margin: `0 ${giantScreenshotMargin * 2}% 0 0` }}>
                <GatsbyImage
                  image={
                    props.data.markdownRemark.frontmatter.screenshots[0].childImageSharp
                      .gatsbyImageData
                  }
                  draggable={false}
                  alt={props.data.markdownRemark.frontmatter.title}
                />
              </div>
            ) : (
              <div></div>
            )}
            <div>
              {props.data.markdownRemark.frontmatter.links &&
              props.data.markdownRemark.frontmatter.links.length
                ? props.data.markdownRemark.frontmatter.links.map(link => (
                    <h2 key={link.url} className={projectStyles.projectName}>
                      <a href={link.url} target="_blank" rel="noreferrer noopener">
                        {link.link_text}
                      </a>
                    </h2>
                  ))
                : null}
              {props.data.markdownRemark.frontmatter.github !== "" ? (
                <h3>
                  <a
                    href={props.data.markdownRemark.frontmatter.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GitHub repo
                  </a>
                </h3>
              ) : (
                <div style={{ marginTop: "1rem" }}></div>
              )}
              <div className={projectStyles.meta}>
                {props.data.markdownRemark.frontmatter.version !== "" ? (
                  <p>
                    <strong>{props.data.markdownRemark.frontmatter.version}</strong>
                    {props.data.markdownRemark.frontmatter.whats_new_url !== "" &&
                    props.data.markdownRemark.frontmatter.whats_new_url !== null ? (
                      <span>
                        {" "}
                        <Link to={props.data.markdownRemark.frontmatter.whats_new_url}>
                          (What's new)
                        </Link>
                      </span>
                    ) : null}
                  </p>
                ) : null}
                {props.data.markdownRemark.frontmatter.older_versions_url !== "" ? (
                  <p>
                    <Link to={props.data.markdownRemark.frontmatter.older_versions_url}>
                      Older versions
                    </Link>
                  </p>
                ) : null}
                {props.data.markdownRemark.frontmatter.released !== "" ? (
                  <p>
                    <strong>Released: </strong> {props.data.markdownRemark.frontmatter.released}
                  </p>
                ) : null}
                {props.data.markdownRemark.frontmatter.updated !== "" ? (
                  <p>
                    <strong>Updated: </strong> {props.data.markdownRemark.frontmatter.updated}
                  </p>
                ) : null}
                {props.data.markdownRemark.frontmatter.size !== "" ? (
                  <p>
                    <strong>Size: </strong> {props.data.markdownRemark.frontmatter.size}
                  </p>
                ) : null}
                {props.data.markdownRemark.frontmatter.platform !== "" ? (
                  <p>
                    <strong>Platform: </strong> {props.data.markdownRemark.frontmatter.platform}
                  </p>
                ) : null}
                {props.data.markdownRemark.frontmatter.license !== "" ? (
                  <p>
                    <strong>License: </strong> {props.data.markdownRemark.frontmatter.license}
                  </p>
                ) : null}
                <h4 style={{ marginBottom: "0.5rem" }}>Share this project</h4>
                <ShareButtons
                  url={`${props.data.site.siteMetadata.siteUrl}/${props.data.markdownRemark.parent.name}/`}
                  title={props.data.markdownRemark.frontmatter.title}
                />
              </div>
            </div>
          </section>
          <div style={{ marginTop: "2rem" }}></div>
          <article>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            {props.data.markdownRemark.frontmatter.tags &&
            props.data.markdownRemark.frontmatter.tags.length ? (
              <p>
                <strong>Tags:</strong>{" "}
                <em>{props.data.markdownRemark.frontmatter.tags.join(", ")}</em>
              </p>
            ) : null}
          </article>
          {props.data.markdownRemark.frontmatter.screenshots &&
          props.data.markdownRemark.frontmatter.screenshots.length ? (
            <div>
              <h3>Screenshots (click to enlarge)</h3>
              <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {props.data.markdownRemark.frontmatter.screenshots.map(screenshot => (
                  <div
                    key={screenshot.childImageSharp.id}
                    style={{ width: "250px", margin: "0.5rem" }}
                  >
                    <a
                      href={screenshot.childImageSharp.original.src}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <GatsbyImage
                        image={screenshot.childImageSharp.gatsbyImageData}
                        alt={screenshot.childImageSharp.resize.originalName}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <Comments id={`/${props.data.markdownRemark.parent.name}/`} />
        </div>
      </main>
    </Layout>
  )
}

export default Project
