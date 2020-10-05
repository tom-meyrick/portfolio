import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"
import Github from "../content/icons/github.svg"
import LinkSVG from "../content/icons/link.svg"

const Projects = ({ title, description, image, code, url }) => {
  const { menu } = navLinks
  return (
    <section class="container">
      <div class="container mx-auto text-md w-1/3 shadow-md rounded">
        <div class="px-10 flex flex-start pt-10">
          <h2 class="font-bold">{title}</h2>
          <p class="m-5">{description}</p>
        </div>
        <div class="p-10 flex flex-end flex-row-reverse">
          <a href={code}>
            <img src={Github} class="w-10 h-10 mr-10"></img>
          </a>
          <a href={url}>
            <img src={LinkSVG} class="w-10 h-10 mr-10"></img>
          </a>
        </div>
      </div>
    </section>
  )
}
export default Projects
