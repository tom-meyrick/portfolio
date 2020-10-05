import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"

const Skills = () => {
  const { menu } = navLinks
  return (
    <section class="pl-20">
      <div class="container mx-auto text-md h-100 pt-10 px-10 pb-40">
        <div class="text-center pt-30">
          <h1 class="text-5xl font-anton py-10 pb-20 pr-20 font-bold">
            Skills
          </h1>
        </div>
        <div class="flex flex-row">
          <div class="w-1/4">
            <h3 class="text-2xl font-bold">Frameworks</h3>
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
            <h3 class="text-2xl font-bold">Technologies</h3>
            <div>
              <ul class="pt-10">
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>PHP</li>
              </ul>
              <div class="pt-20">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-2xl font-bold">Tooling</h3>
            <div>
              <ul class="pt-10">
                <li>Git</li>
                <li>Gulp</li>
                <li>npm</li>
                <li>Vagrant</li>
                <li>TDD</li>
              </ul>
              <div class="pt-20">
                <span class="dot"></span>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <h3 class="text-2xl font-bold">Other</h3>
            <div>
              <ul class="pt-10">
                <li>Project management</li>
                <li>Trello</li>
                <li>Agile</li>
                <li>Documentation</li>
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
