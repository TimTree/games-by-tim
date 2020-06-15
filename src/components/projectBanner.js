import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import projectBannerStyles from "./projectBanner.module.scss"
import Img from "gatsby-image"

const ProjectBanner = props => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { isproject: { eq: true } } }) {
        nodes {
          frontmatter {
            title
            short_description
            screenshots {
              childImageSharp {
                fluid(maxWidth: 380) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `)
  let projectIndex = -1
  for (let i = 0; i < data.allMarkdownRemark.nodes.length; i += 1) {
    if (data.allMarkdownRemark.nodes[i].parent.name === props.project) {
      projectIndex = i
    }
  }
  let giantScreenshotMargin
  let screenshotView = "block"
  if (projectIndex !== -1) {
    if (
      data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots &&
      data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots.length
    ) {
      const desiredAspect = 16 / 9
      giantScreenshotMargin =
        ((desiredAspect -
          data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots[0].childImageSharp
            .fluid.aspectRatio) /
          desiredAspect /
          2) *
        100
      screenshotView = "grid"
    }
  }
  return (
    <div>
      {projectIndex !== -1 ? (
        <Link
          to={`/${data.allMarkdownRemark.nodes[projectIndex].parent.name}/`}
          style={{ textDecoration: "unset", color: "var(--text-color)" }}
        >
          <section
            className={projectBannerStyles.projectCapsule}
            style={{ display: screenshotView }}
          >
            {giantScreenshotMargin ? (
              <div
                className={projectBannerStyles.screenshot}
                style={{ margin: `0 ${giantScreenshotMargin}%` }}
              >
                <Img
                  fluid={
                    data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots[0]
                      .childImageSharp.fluid
                  }
                  draggable={false}
                  alt={data.allMarkdownRemark.nodes[projectIndex].frontmatter.title}
                />
              </div>
            ) : null}
            <div>
              <h2 className={projectBannerStyles.projectName}>
                {data.allMarkdownRemark.nodes[projectIndex].frontmatter.title}
              </h2>
              <p>{data.allMarkdownRemark.nodes[projectIndex].frontmatter.short_description}</p>
              <p>
                {data.allMarkdownRemark.nodes[projectIndex].frontmatter.tags &&
                data.allMarkdownRemark.nodes[projectIndex].frontmatter.tags.length
                  ? data.allMarkdownRemark.nodes[projectIndex].frontmatter.tags.map(tag => (
                      <span key={tag} className={projectBannerStyles.tag}>
                        {tag}
                      </span>
                    ))
                  : null}
              </p>
            </div>
          </section>
        </Link>
      ) : null}
    </div>
  )
}

export default ProjectBanner
