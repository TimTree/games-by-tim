/**
 * The header is the navbar, which contains the logo and important page links.
 */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import logo from "../../static/logo.svg"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import * as headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          github_username
        }
      }
    }
  `)
  return (
    <header>
      <div className={headerStyles.headerBody}>
        <Link to="/">
          <img className={headerStyles.logo} src={logo} alt={data.site.siteMetadata.title} />
        </Link>
        <nav>
          <input
            type="checkbox"
            id="nav-toggler"
            className={headerStyles.navToggleCheckbox}
            aria-label="Toggle mobile nav bar"
          ></input>
          <label htmlFor="nav-toggler" className={headerStyles.navToggle}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </label>
          <ul className={headerStyles.navLinks}>
            <li>
              <Link to="/" activeClassName={headerStyles.activeNavLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about/" activeClassName={headerStyles.activeNavLink}>
                About
              </Link>
            </li>
            <li>
              <Link to="/blog/" activeClassName={headerStyles.activeNavLink}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact/" activeClassName={headerStyles.activeNavLink}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href={`https://github.com/${data.site.siteMetadata.github_username}/`}
                title="GitHub profile"
                target="_blank"
                rel="noreferrer noopener"
                className="githubLogo"
              >
                <svg
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  height="23px"
                  viewBox="0 0 40 40"
                >
                  <g>
                    <path d="m20 0c-11 0-20 9-20 20 0 8.8 5.7 16.3 13.7 19 1 0.2 1.3-0.5 1.3-1 0-0.5 0-2 0-3.7-5.5 1.2-6.7-2.4-6.7-2.4-0.9-2.3-2.2-2.9-2.2-2.9-1.9-1.2 0.1-1.2 0.1-1.2 2 0.1 3.1 2.1 3.1 2.1 1.7 3 4.6 2.1 5.8 1.6 0.2-1.3 0.7-2.2 1.3-2.7-4.5-0.5-9.2-2.2-9.2-9.8 0-2.2 0.8-4 2.1-5.4-0.2-0.5-0.9-2.6 0.2-5.3 0 0 1.7-0.5 5.5 2 1.6-0.4 3.3-0.6 5-0.6 1.7 0 3.4 0.2 5 0.7 3.8-2.6 5.5-2.1 5.5-2.1 1.1 2.8 0.4 4.8 0.2 5.3 1.3 1.4 2.1 3.2 2.1 5.4 0 7.6-4.7 9.3-9.2 9.8 0.7 0.6 1.4 1.9 1.4 3.7 0 2.7 0 4.9 0 5.5 0 0.6 0.3 1.2 1.3 1 8-2.7 13.7-10.2 13.7-19 0-11-9-20-20-20z"></path>
                  </g>
                </svg>
              </a>
              <ThemeToggler>
                {({ theme, toggleTheme }) => {
                  if (theme === null) {
                    return (
                      <label className="darkmode_label">
                        {" "}
                        <div className="modeContainer">
                          <i className="ggSun" title="Light mode"></i>
                          <i className="ggMoon" title="Dark mode"></i>
                        </div>
                      </label>
                    )
                  }
                  return (
                    <label className="darkmode_label">
                      <input
                        type="checkbox"
                        className="themeChanger"
                        onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
                        checked={theme === "dark"}
                        aria-label="Toggle light/dark mode"
                      />{" "}
                      <div className="modeContainer">
                        <i className="ggSun" title="Light mode"></i>
                        <i className="ggMoon" title="Dark mode"></i>
                      </div>
                    </label>
                  )
                }}
              </ThemeToggler>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
