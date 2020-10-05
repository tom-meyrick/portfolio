import React from "react"
import { Link } from "gatsby"
import { navLinks, siteShortTitle } from "../config"
import Image from "gatsby-image"
import MailSVG from "../content/icons/mail.svg"
import LinkedInSVG from "../content/icons/linkedin.svg"
import GithubSVG from "../content/icons/github.svg"

const Projects = () => {
  return (
    <section id="contact">
      <div class="container mx-auto text-md bg-blue-200 text-white rounded">
        <div class="px-10 pt-20 m-10 flex flex-start flex-col">
          <div class="flex">
            <div class="w-1/2 text-6xl font-anton flex-start">Contact</div>
            <div class="w-1/2 flex flex-row justify-end">
              <ul class="flex pr-10">
                <li>
                  <img
                    src={MailSVG}
                    class="h-10 w-10 m-10 bg-white rounded"
                  ></img>
                </li>
                <li>
                  <img
                    src={LinkedInSVG}
                    class="h-10 w-10 m-10 bg-white rounded"
                  ></img>
                </li>
                <li>
                  <img
                    src={GithubSVG}
                    class="h-10 w-10 m-10 bg-white rounded"
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Projects
