import React from "react"
import { Link } from "gatsby"
import { siteShortTitle } from "../config/index"
import MailSVG from "../content/icons/mail.svg"
import LinkedInSVG from "../content/icons/linkedin.svg"
import GithubSVG from "../content/icons/github.svg"

const Footer = () => {
  return (
    <footer className="flex bg-blue-200 container justify-center rounded">
      <div class="">
        <ul class="flex">
          <li>
            <a href="mailto: tom_meyrick@hotmail.co.uk">
              <img src={MailSVG} class="h-10 w-10 m-10 rounded"></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tom-meyrick/">
              <img src={LinkedInSVG} class="h-10 w-10 m-10 rounded"></img>
            </a>
          </li>
          <li>
            <a href="https://github.com/tom-meyrick">
              <img src={GithubSVG} class="h-10 w-10 m-10 rounded"></img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
