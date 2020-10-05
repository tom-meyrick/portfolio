import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"

const Hero = () => {
  const { menu } = navLinks

  return (
    <section class="h-screen">
      <div class="container font-bold text-center bg-pattern flex h-screen">
        <div class="px-10 pt-30 m-auto">
          <h1 class="m-5 text-6xl text-white font-bungee">Tom Meyrick</h1>
          <h1 class="m-5 text-6xl text-white font-bungee">
            Full Stack Developer
          </h1>
          <button
            class="bg-white hover:bg-orange-400 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded m-5"
            onClick={() => {
              window.location.href = "mailto: tom_meyrick@hotmail.co.uk"
            }}
          >
            Work with me
          </button>
        </div>
      </div>
    </section>
  )
}
export default Hero
