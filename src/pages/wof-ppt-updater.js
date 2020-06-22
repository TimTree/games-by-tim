/**
 * The Wheel of Fortune for PowerPoint update checker.
 * This can't use the normal page template because it needs to be able to read the URL query string
 * for version checking
 */
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const WoFUpdater = props => {
  return (
    <Layout>
      <SEO title="Wheel of Fortune for PowerPoint update checker" pathname="/wof-ppt-updater/" />
      <main>
        <h1>Wheel of Fortune for PowerPoint update checker</h1>
        <div className="fadeBody">
          <article>
            <noscript>
              <p>
                JavaScript is disabled; the below message may not be accurate. Check for updates
                manually <Link to="/wheel-of-fortune-for-powerpoint/">on the project page.</Link>
                <hr />
              </p>
            </noscript>
            {props.location.search === "?ver=4.1.2" || props.location.search === "?ver=4.1.2mac" ? (
              <p>Your version of Wheel of Fortune for PowerPoint is up to date.</p>
            ) : (
              <p>
                An updated version of Wheel of Fortune for PowerPoint is available. Download it{" "}
                <Link to="/wheel-of-fortune-for-powerpoint/">on the project page</Link>.
              </p>
            )}
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default WoFUpdater
