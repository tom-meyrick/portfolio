import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import Footer from "../components/footer"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  return (
    <div
      className="min-h-full grid"
      style={{
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tom Meyrick</title>
        <meta
          name="description"
          content="Tom Meyrick is a full stack developer based in Bristol, UK. Recent
          graduate of the intensive Coding Fellowship at DevelopMe. Get in touch
          today."
        />
        <meta name="author" content="Tom Meyrick" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
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
