import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"

const Hero = () => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container text-xl font-bold text-center">
        <div class="px-10 py-20 m-10">
          <h1 class="m-5 text-6xl">Tom Meyrick</h1>
          <button class="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5">
            Work with me
          </button>
        </div>
      </div>
    </section>
  )
}
export default Hero
