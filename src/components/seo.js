/**
 * The seo component processes the metadata for every page.
 * It generates page titles, meta descriptions, canonical links, and the image
 * to display if the page is linked on social media.
 */
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
function SEO({ description, lang, meta, image: metaImage, title, pathname }) {
  const { site, markdownRemark } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        markdownRemark(fields: { slug: { eq: "index" } }) {
          frontmatter {
            personal_photo {
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
  )
  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : metaImage === null
      ? null
      : `${site.siteMetadata.siteUrl}${markdownRemark.frontmatter.personal_photo.childImageSharp.original.src}`
  const canonical =
    pathname === "/"
      ? `${site.siteMetadata.siteUrl}`
      : pathname
      ? `${site.siteMetadata.siteUrl}${pathname}`
      : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={
        title === "default" ? site.siteMetadata.title : `%s - ${site.siteMetadata.title}`
      }
      link={[
        {
          rel: `stylesheet`,
          href:
            "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=Raleway:wght@600&display=swap",
        },
      ].concat(
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      )}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:title`,
          content: title === "default" ? site.siteMetadata.title : title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title === "default" ? site.siteMetadata.title : title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : image === null
            ? [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
            : [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: markdownRemark.frontmatter.personal_photo.childImageSharp.original.width,
                },
                {
                  property: "og:image:height",
                  content:
                    markdownRemark.frontmatter.personal_photo.childImageSharp.original.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
        )
        .concat(meta)}
    >
      <noscript>{`
        <style>
          .darkmode_label {
            display: none;
          }
          .githubLogo {
            padding: 16px 0 16px 0 !important;
          }
          @media (prefers-color-scheme: dark) {
            body {
              --main-bg: #1c1c1c;
              --text-color: #ccc;
              --sidebar-border: rgba(230, 230, 230, 0.25);
              --header-bg: rgba(14, 14, 14, 0.98);
              --header-bg-blur: rgba(14, 14, 14, 0.8);
              --nav-hamburger: #888;
              --nav-hamburger-dropdown: rgba(42, 42, 42, 0.98);
              --accent1: #1e2729;
              --accent2: #153a4c;
              --link-color: #b0b0ff;
              --announcement-bg: #1a461d;
              --active-link: #397de4;
            }
          }
        </style>
    `}</noscript>
    </Helmet>
  )
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  title: "default",
  description: ``,
}
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}
export default SEO
