/**
 * The introduction component is the part of the homepage with your photo and call to action
 * statement.
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import introductionStyles from "./introduction.module.scss"
import Img from "gatsby-image"

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
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
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid
              }
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
          <Img
            fluid={data.markdownRemark.frontmatter.personal_photo.childImageSharp.fluid}
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
