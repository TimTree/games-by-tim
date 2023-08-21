/**
 * The homepage
 */
import React from "react"
import Layout from "../components/layout"
import LatestBlogPost from "../components/latestBlogPost"
import Introduction from "../components/introduction"
import ProjectBanner from "../components/projectBanner"
import Seo from "../components/seo"
import { Link, graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fields: { slug: { eq: "projectOrder" } }) {
        frontmatter {
          project_order {
            platform_label
            order
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo pathname="/" />
      <LatestBlogPost />
      <Introduction />
      <main>
        <div className="fadeBody">
          <div
            id="projects"
            style={{ visibility: "hidden", top: "-4rem", display: "block", position: "relative" }}
          ></div>
          {data.markdownRemark.frontmatter.project_order.map(order_number => (
            <div key={order_number.platform_label}>
              <h2>{order_number.platform_label}</h2>
              {order_number.platform_label === "Prototypes" ? (
                <p>
                  Prototypes are works in progress I actively seek feedback on. Sometimes, I offer a
                  spot on the credits in exchange for comments.
                </p>
              ) : null}
              <div style={{ margin: "0 auto", maxWidth: "1100px" }}>
                {order_number.order.map(theOrder => (
                  <div key={theOrder}>
                    <ProjectBanner key={theOrder} project={theOrder} />
                  </div>
                ))}
                {order_number.platform_label === "Prototypes" && order_number.order.length === 0 ? (
                  <p>
                    <em>No prototypes available at this time</em>
                  </p>
                ) : null}
              </div>
            </div>
          ))}
          <p style={{ marginTop: "2.4rem", fontSize: "1.2rem" }}>
            Looking for unlisted projects and other goodies? Check out the{" "}
            <Link to="/grab-bag/">grab bag</Link>.
          </p>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
