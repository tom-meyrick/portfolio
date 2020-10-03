import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"

const About = () => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container mx-auto text-md">
        <div class="px-10 py-10 m-10 flex flex-start flex-col">
          <div>
            <h2 class="font-bold text-gray-500">About Me</h2>
            <p class="m-5 w-1/2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
