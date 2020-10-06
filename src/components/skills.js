import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Skills = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <section class="pl-20" id="skills">
      <div class="container mx-auto text-md xl:h-screen xl:h-1/2 pt-10 md:px-10">
        <div class="text-center pt-30">
          <h1 class="text-5xl font-anton py-10 pb-20 pr-20 font-bold">
            Skills
          </h1>
        </div>
        <div
          class="flex flex-col md:flex-row"
          data-aos="fade-up"
          data-aos-duration="150"
        >
          <div class="md:w-1/4">
            <h3 class="text-2xl font-bold">Frameworks</h3>
            <div>
              <ul class="pt-10 text-xl md:text-md">
                <li>React/Redux</li>
                <li>Gatsby</li>
                <li>Laravel</li>
              </ul>
              <div class="pt-10 md:pt-20 pb-20 md:pb-0">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="md:w-1/4">
            <h3 class="text-2xl font-bold">Technologies</h3>
            <div>
              <ul class="pt-10 text-xl md:text-md">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
              </ul>
              <div class="pt-10 md:pt-20 pb-20 md:pb-0">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="md:w-1/4">
            <h3 class="text-2xl font-bold">Tooling</h3>
            <div>
              <ul class="pt-10 text-xl md:text-md">
                <li>Git</li>
                <li>Gulp</li>
                <li>npm</li>
                <li>Vagrant</li>
                <li>TDD</li>
              </ul>
              <div class="pt-10 md:pt-20 pb-20 md:pb-0">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="md:w-1/4">
            <h3 class="text-2xl font-bold">Other</h3>
            <div>
              <ul class="pt-10 text-xl md:text-md">
                <li>Project management</li>
                <li>Trello</li>
                <li>Agile</li>
                <li>Documentation</li>
              </ul>
              <div class="pt-10 md:pt-20 pb-20 md:pb-0">
                <span class="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills
