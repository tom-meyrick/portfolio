import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"

const Projects = ({ title, description, image, code, url }) => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container mx-auto text-md">
        <div class="px-10 py-10 m-10 flex flex-start flex-col">
          <div class="flex">
            <div class="m-5 w-1/2">
              <h2 class="font-italic">{title}</h2>
              <p class="m-5">{description}</p>
            </div>
            <div class="m-5 w-1/2 h-10 w-10 ">
              <Image fluid={image} alt={title} class="border-4"></Image>
              <p>{code}</p>
              <p>{url}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
