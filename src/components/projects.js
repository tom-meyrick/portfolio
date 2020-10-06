import React, { useEffect } from "react"
import Github from "../content/icons/github.svg"
import LinkSVG from "../content/icons/link.svg"
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"

const Projects = ({ title, description, code, url }) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section
      class="container pt-10 xl:h-auto xl:max-h-1/3 xl:p-10"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div class="container mx-auto text-md shadow-md rounded">
        <div class="px-10 flex flex-start pt-10">
          <h2 class="font-bold">{title}</h2>
          <p class="m-5">{description}</p>
        </div>
        <div class="p-10 flex flex-end flex-row-reverse">
          <a href={code}>
            <motion.img
              whileTap={{ scale: 0.4 }}
              src={Github}
              class="w-10 h-10 mr-10"
              alt="github-logo"
            ></motion.img>
          </a>
          <a href={url}>
            <motion.img
              whileTap={{ scale: 0.4 }}
              src={LinkSVG}
              class="w-10 h-10 mr-10"
              alt="link"
            ></motion.img>
          </a>
        </div>
      </div>
    </section>
  )
}
export default Projects
