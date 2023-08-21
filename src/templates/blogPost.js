/**
 * The blog post pages
 */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import * as blogPostStyles from "./blogPost.module.scss"
import footerLogo from "../../static/footer.svg"
import moment from "moment"
import { GatsbyImage } from "gatsby-plugin-image"
import ShareButtons from "../components/shareButtons"
import CommentsBox from "../components/commentsBox"

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        short_description
        project_name
        date
        hero_image {
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
    allMarkdownRemark(filter: { frontmatter: { isproject: { eq: true } } }) {
      nodes {
        frontmatter {
          app_icon {
            childImageSharp {
              gatsbyImageData(width: 100, layout: FIXED)
            }
          }
          links {
            link_text
            url
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
`
const BlogPost = props => {
  let projectIndex = -1
  for (let i = 0; i < props.data.allMarkdownRemark.nodes.length; i += 1) {
    if (
      props.data.allMarkdownRemark.nodes[i].parent.name ===
      props.data.markdownRemark.frontmatter.project_name
    ) {
      projectIndex = i
    }
  }
  const image = props.data.markdownRemark.frontmatter.hero_image
    ? props.data.markdownRemark.frontmatter.hero_image.childImageSharp.original
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
        <p>
          <Link to="/blog/">{"<"} Blog index</Link>
        </p>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div className="fadeBody">
          <article>
            <div className={blogPostStyles.byline}>
              <div className={blogPostStyles.authorDateline}>
                <div className={blogPostStyles.personalIconDiv}>
                  <img
                    src={footerLogo}
                    className={blogPostStyles.personalIcon}
                    alt={`${props.data.site.siteMetadata.author}'s icon`}
                  />
                </div>
                <div>
                  {props.data.site.siteMetadata.author} <br />{" "}
                  <time
                    datetime={moment(props.data.markdownRemark.frontmatter.date)
                      .local()
                      .format(`YYYY-MM-DD`)}
                    itemprop="datePublished"
                  >
                    {moment(props.data.markdownRemark.frontmatter.date)
                      .local()
                      .format(`MMMM DD, YYYY hh:mm a`)}
                  </time>
                </div>
              </div>
            </div>
            {projectIndex !== -1 ? (
              <div className={blogPostStyles.projectPopup}>
                {props.data.allMarkdownRemark.nodes[projectIndex].frontmatter.app_icon ? (
                  <div>
                    <GatsbyImage
                      image={
                        props.data.allMarkdownRemark.nodes[projectIndex].frontmatter.app_icon
                          .childImageSharp.gatsbyImageData
                      }
                    />
                  </div>
                ) : null}
                <div>
                  {props.data.allMarkdownRemark.nodes[projectIndex].frontmatter.links &&
                  props.data.allMarkdownRemark.nodes[projectIndex].frontmatter.links.length
                    ? props.data.allMarkdownRemark.nodes[projectIndex].frontmatter.links.map(
                        link => (
                          <h2 key={link.url} className={blogPostStyles.projectName}>
                            <a href={link.url} target="_blank" rel="noreferrer noopener">
                              {link.link_text}
                            </a>
                          </h2>
                        )
                      )
                    : null}
                  <h3 className={blogPostStyles.projectMoreInfo}>
                    <Link to={`/${props.data.allMarkdownRemark.nodes[projectIndex].parent.name}/`}>
                      More info
                    </Link>
                  </h3>
                </div>
              </div>
            ) : null}
            <div
              className={blogPostStyles.blogPost}
              dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
            />
            <div className={blogPostStyles.socialMediaBottom}>
              <h4 style={{ marginBottom: "0.5rem" }}>Share this post</h4>
              <ShareButtons
                url={`${props.data.site.siteMetadata.siteUrl}/blog/${props.data.markdownRemark.parent.name}/`}
                title={props.data.markdownRemark.frontmatter.title}
              />
            </div>
            <div className={blogPostStyles.nextPrev}>
              {props.pageContext.prev !== null ? (
                <div>
                  <Link to={`${props.pageContext.prev}`}>{"<"} Newer post</Link>
                </div>
              ) : (
                <div></div>
              )}
              <div>
                <Link to="/blog/">Index</Link>
              </div>
              {props.pageContext.next !== null ? (
                <div>
                  <Link to={`${props.pageContext.next}`}>Older post {">"}</Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </article>
          <CommentsBox id={`/blog/${props.data.markdownRemark.parent.name}/`} />
        </div>
      </main>
    </Layout>
  )
}

export default BlogPost
