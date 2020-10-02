import React from "react"
import { Link } from "gatsby"
import { siteShortTitle } from "../config/index"
const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-red-200 py-6 px-12">
      <Link to="/" aria-label="home">
        <h1 className="text-3xl font-bold text-white">Tom Meyrick</h1>
      </Link>
    </footer>
  )
}
export default Footer
