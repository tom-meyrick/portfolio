import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"
import WaveSVG from "../content/icons/wave-hand-svgrepo-com.svg"

const Projects = () => {
  return (
    <section id="contact">
      <div class="container mx-auto text-md bg-blue-100 rounded p-20 md:p-0">
        <div class="pt-20 m-10">
          <div class="flex flex-col md:flex-row">
            <div class="sm:pb-10 w-1/2 text-6xl">Contact</div>
            <div class="hidden md:w-1/2 md:flex md:justify-end">
              <img src={WaveSVG} class="w-25 h-25 mr-20"></img>
            </div>
          </div>
        </div>
        <div class="m-10 pb-10 text-xl">
          <p>I'm on the lookout for new opportunities.</p>
          <p>Let's talk.</p>
        </div>
      </div>
    </section>
  )
}
export default Projects
