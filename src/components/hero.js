import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"

const Hero = () => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container mx-auto bg-red-200 text-white text-xl font-bold shadow-lg">
        <div class="px-10 py-20 m-10">
          <p class="m-5">Hello, I'm Tom.</p>
          <p class="m-5">
            I'm a former copywriter and full stack developer, based in Bristol
            UK.
          </p>
          <p class="m-5">
            This is where you can find some of my most recent projects
          </p>
          <button class="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5">
            Work with me
          </button>
        </div>
      </div>
    </section>
  )
}
export default Hero
