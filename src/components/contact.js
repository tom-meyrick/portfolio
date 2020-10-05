import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"
import WaveSVG from "../content/icons/wave-hand-svgrepo-com.svg"

const Projects = () => {
  return (
    <section id="contact">
      <div class="container mx-auto text-md bg-blue-100 rounded">
        <div class="pt-20 m-10">
          <div class="flex">
            <div class="w-1/2 text-6xl">Contact</div>
            <div class="w-1/2 flex justify-end">
              <img src={WaveSVG} class="w-25 h-25 mr-20"></img>
            </div>
          </div>
        </div>
        <div class="m-10 pb-10 text-xl">
          <p>I'm currently looking for new opportunities.</p>
          <p>Feel free to get in touch for a chat.</p>
        </div>
      </div>
    </section>
  )
}
export default Projects
