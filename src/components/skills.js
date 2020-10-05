import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"

const Skills = () => {
  const { menu } = navLinks
  return (
    <section>
      <div class="container mx-auto text-md h-100 pt-10 px-10 pb-40">
        <div class="text-center pt-30">
          <h1 class="text-5xl font-anton py-10 pb-20">Skills</h1>
        </div>
        <div class="flex flex-row">
          <div class="w-1/4">
            <h3 class="text-2xl font-monoton">Frameworks</h3>
            <div>
              <ul class="pt-10">
                <li>React/Redux</li>
                <li>Gatsby</li>
                <li>Laravel</li>
              </ul>
              <div class="pt-20">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-2xl font-monoton">Technologies</h3>
            <div>
              <ul class="pt-10">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div class="pt-20">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-2xl font-monoton">Tooling</h3>
            <div>
              <ul class="pt-10">
                <li>Git</li>
                <li>Gulp</li>
                <li>npm</li>
                <li>Vagrant</li>
                <li>TDD</li>
                <li></li>
                <li></li>
              </ul>
              <div class="pt-20">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-2xl font-monoton">Other</h3>
            <div>
              <ul class="pt-10">
                <li>Project management</li>
                <li>Trello</li>
                <li>Agile</li>
                <li>Documentation</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div class="pt-20">
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
