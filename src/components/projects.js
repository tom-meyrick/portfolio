import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"

const Projects = ({ title, description, image, code, url }) => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container mx-auto text-md w-2/4 shadow">
        <div class="px-10 py-20 m-10 flex flex-start flex-col text-gray-500">
          <div class="flex bg-green-500 rounded shadow-lg">
            <div class="m-5 w-1/2 text-white">
              <h2 class="font-bold">{title}</h2>
              <p class="m-5">{description}</p>
            </div>
            <div class="m-5 w-1/2 h-10 w-1">
              <div class="shadow-xl rounded">
                <Image fluid={image} alt={title}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
