/**
 * Simple 404 page.
 * Maybe in the future, I'll add more flair here.
 */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const FourOhFour = () => {
  return (
    <Layout>
      <main>
        <SEO title="404" />
        <h1>404 - Page not found!</h1>
      </main>
    </Layout>
  )
}

export default FourOhFour
