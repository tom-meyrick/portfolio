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
              Hi, I'm Tom. I used to work as a copywriter, now I'm a full stack
              developer. I just graduated from Develop Me's intensive Coding
              Fellowship programme, where I learned to code using a whole host
              of utilities and frameworks - including React, Laravel and Redux.
              Here you'll find some of my most recent projects. I'm currently
              looking for work, so feel free to get in touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
