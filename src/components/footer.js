import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import footerLogo from "../../static/footer.svg"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
      markdownRemark(fields: { slug: { eq: "index" } }) {
        frontmatter {
          footer_note
        }
      }
    }
  `)
  return (
    <footer>
      <div className={footerStyles.footerBody}>
        <img src={footerLogo} className={footerStyles.timCursor} alt="Footer logo" />
        <div className={footerStyles.copyright}>
          <p>
            ©2011-{new Date().getFullYear()} {data.site.siteMetadata.author}
          </p>
          <p
            className={footerStyles.attribution}
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.frontmatter.footer_note }}
          />
          <p className={footerStyles.attribution}>
            <Link to="/privacy-policy/">Privacy policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
