import React, { useEffect } from "react"
import WaveSVG from "../content/icons/wave-hand-svgrepo-com.svg"
import AOS from "aos"
import "aos/dist/aos.css"

const Projects = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section id="contact">
      <div
        class="container mx-auto text-md bg-blue-100 rounded p-20 md:pt-0"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <div class="pt-20 m-10">
          <div class="flex flex-col md:flex-row">
            <div class="sm:pb-10 w-1/2 text-6xl">Contact</div>
            <div class="hidden md:w-1/2 md:flex md:justify-end">
              <img
                src={WaveSVG}
                class="w-25 h-25 mr-20 pt-20"
                alt="waving hand"
              ></img>
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
