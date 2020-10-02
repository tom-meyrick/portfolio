import React from "react"
import PropTypes from "prop-types"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-full grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <Hero />
      <About />

      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.any,
}
export default Layout
