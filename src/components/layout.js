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
        {/* Facebook */}
        <meta property="og:url" content="https://tom-meyrick.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tom Meyrick: Full Stack Developer" />
        <meta property="og:image" content="../content/images/tom_meyrick.png" />
        <meta
          property="og:image:alt"
          content="Tom Meyrick is a full stack developer and recent DevelopMe graduate"
        />
        <meta
          property="og:description"
          content="Tom Meyrick is a full stack developer. Experienced in a full suite of frontend and backend tools and frameworks. Check out my most recent work here"
        />
        <meta property="og:site_name" content="Tom Meyrick" />
        <meta property="og:locale" content="en_UK" />
        {/* Twitter */}
        <meta
          name="twitter:card"
          content="Tom Meyrick is a full stack developer. Experienced in a full suite of frontend and backend tools and frameworks. Check out my most recent work here"
        />
        <meta name="twitter:title" content="Tom Meyrick" />
        <meta
          name="twitter:description"
          content="Tom Meyrick is a full stack developer. Experienced in a full suite of frontend and backend tools and frameworks. Check out my most recent work here"
        />
        <meta
          name="twitter:image"
          content="../content/images/tom_meyrick.png"
        />
        <meta
          name="twitter:image:alt"
          content="Tom Meyrick is a full stack developer and recent DevelopMe graduate"
        />
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
