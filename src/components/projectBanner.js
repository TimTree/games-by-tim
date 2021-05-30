/**
 * The projectBanner component is for the project listings on the homepage.
 * It contains a screenshot, the project title, a short description of that project,
 * the tags, and a link to that project page.
 */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as projectBannerStyles from "./projectBanner.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectBanner = props => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { isproject: { eq: true } } }) {
        nodes {
          frontmatter {
            title
            short_description
            screenshots {
              childImageSharp {
                gatsbyImageData(width: 380, layout: CONSTRAINED)
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
  // The top graphql query outputs every project. Find the exact index for the specific project
  // called in the React prop.
  let projectIndex = -1
  for (let i = 0; i < data.allMarkdownRemark.nodes.length; i += 1) {
    if (data.allMarkdownRemark.nodes[i].parent.name === props.project) {
      projectIndex = i
    }
  }

  // If the project has no screenshot, change the banner's display to block.
  // Otherwise, make the display grid to display a screenshot and project title/description
  // side by side.
  let giantScreenshotMargin
  let screenshotView = "block"
  if (projectIndex !== -1) {
    if (
      data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots &&
      data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots.length
    ) {
      // The project screenshot grid is optimized for 16:9 aspect ratio images.
      // If the screenshot aspect ratio differs, set a margin for the grid such that
      // there's an invisible pillarbox.
      const desiredAspect = 16 / 9
      giantScreenshotMargin =
        ((desiredAspect -
          data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots[0].childImageSharp
            .gatsbyImageData.width /
            data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots[0].childImageSharp
              .gatsbyImageData.height) /
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
              <div style={{ margin: `0 ${giantScreenshotMargin}%` }}>
                <GatsbyImage
                  image={
                    data.allMarkdownRemark.nodes[projectIndex].frontmatter.screenshots[0]
                      .childImageSharp.gatsbyImageData
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
