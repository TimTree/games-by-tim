import React, { useState, useEffect } from "react"
// import PropTypes from 'prop-types'

const ThemeToggler = props => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

  const toggleTheme = theme => {
    window.__setPreferredTheme(theme)
  }

  return <props.children theme={theme} toggleTheme={toggleTheme} />
}

/*
ThemeToggler.propTypes = {
  children: PropTypes.func.isRequired,
}*/

export default ThemeToggler
