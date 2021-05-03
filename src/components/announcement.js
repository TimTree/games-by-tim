/**
 * The announcement component displays a banner across all pages if an announcement exists.
 */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as announcementStyles from "./announcement.module.scss"

const Announcement = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "index" } }) {
        frontmatter {
          announcement
        }
      }
    }
  `)
  if (data.markdownRemark.frontmatter.announcement !== "") {
    return (
      <div className={announcementStyles.banner}>
        <div className={announcementStyles.bannerBody}>
          <span
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.announcement }}
          />
        </div>
      </div>
    )
  }

  return null
}

export default Announcement
