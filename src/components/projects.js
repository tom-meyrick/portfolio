import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"

const Projects = ({ title, description, image, code, url }) => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container mx-auto text-md w-2/4 shadow-md rounded">
        <div class="px-10 py-20 mb-10 flex flex-start flex-col text-gray-400">
          <h2 class="font-bold">{title}</h2>
          <p class="m-5">{description}</p>
        </div>
      </div>
    </section>
  )
}
export default Projects
