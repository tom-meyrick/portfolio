import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"

const Projects = ({ title, description, image, code, url }) => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container mx-auto text-md">
        <div class="px-10 py-20 m-10 flex flex-start flex-col">
          <h2 class="font-bold">Projects</h2>
          <div class="flex">
            <div class="m-5 w-1/2">
              <h2 class="font-italic">{title}</h2>
              <p class="m-5">{description}</p>
            </div>
            <div class="m-5 w-1/2">
              <img src={image} alt="iScream"></img>
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
