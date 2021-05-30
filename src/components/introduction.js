/**
 * The introduction component is the part of the homepage with your photo and call to action
 * statement.
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as introductionStyles from "./introduction.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
      markdownRemark(fields: { slug: { eq: "index" } }) {
        frontmatter {
          blurb
          personal_photo {
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  `)
  return (
    <div className={introductionStyles.introduction}>
      <div className={introductionStyles.introductionBody}>
        <div className={introductionStyles.photo}>
          <GatsbyImage
            image={data.markdownRemark.frontmatter.personal_photo.childImageSharp.gatsbyImageData}
            alt={data.site.siteMetadata.author}
          />
        </div>
        <div className={introductionStyles.blurb}>
          <p
            className={introductionStyles.blurb1}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.blurb }}
          />
          <p className={introductionStyles.blurb2} style={{ marginBottom: "0" }}>
            <a href="#projects">↓ See projects</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Introduction
