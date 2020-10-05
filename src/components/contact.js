import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"

const Projects = () => {
  return (
    <section>
      <div class="container mx-auto text-md">
        <div class="px-10 pt-20 m-10 flex flex-start flex-col">
          <div class="flex">
            <div class="w-1/2 text-6xl font-anton">Contact</div>
            <div class="w-1/2 flex flex-col">
              <ul>
                <li>Email: tomgmeyrick@gmail.com LinkedIn:</li>
                <li>LinkedIn: linkedin.com/in/tom-meyrick/</li>
                <li>Github: https://github.com/tom-meyrick</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
