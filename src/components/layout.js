/**
 * The layout component contains the outer HTML that every page should have.
 */
import React from "react"
import Header from "./header"
import Footer from "./footer"
import Announcement from "./announcement"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.capsule}>
      <div className={layoutStyles.capsule2}>
        <Header />
        <Announcement />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
