import React from "react"
import { Link } from "gatsby"
import { siteShortTitle } from "../config/index"
import MailSVG from "../content/icons/mail.svg"
import LinkedInSVG from "../content/icons/linkedin.svg"
import GithubSVG from "../content/icons/github.svg"

const Footer = () => {
  return (
    <footer className="flex bg-blue-200 container justify-center">
      <div class="">
        <ul class="flex">
          <li>
            <img src={MailSVG} class="h-10 w-10 m-10 bg-white rounded"></img>
          </li>
          <li>
            <img
              src={LinkedInSVG}
              class="h-10 w-10 m-10 bg-white rounded"
            ></img>
          </li>
          <li>
            <img src={GithubSVG} class="h-10 w-10 m-10 bg-white rounded"></img>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
