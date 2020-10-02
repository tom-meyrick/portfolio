import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-full grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.any,
}
export default Layout
