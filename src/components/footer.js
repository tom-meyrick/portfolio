import React from "react"
import MailSVG from "../content/icons/mail.svg"
import LinkedInSVG from "../content/icons/linkedin.svg"
import GithubSVG from "../content/icons/github.svg"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="flex bg-blue-200 container justify-center rounded">
      <div>
        <ul class="flex">
          <li>
            <a href="mailto: tom_meyrick@hotmail.co.uk">
              <motion.img
                src={MailSVG}
                class="h-10 w-10 m-10 rounded"
                whileTap={{ scale: 0.4 }}
                alt="email symbol"
              ></motion.img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tom-meyrick/">
              <motion.img
                src={LinkedInSVG}
                class="h-10 w-10 m-10 rounded"
                whileTap={{ scale: 0.4 }}
                alt="linkedin-logo"
              ></motion.img>
            </a>
          </li>
          <li>
            <a href="https://github.com/tom-meyrick">
              <motion.img
                src={GithubSVG}
                class="h-10 w-10 m-10 rounded"
                whileTap={{ scale: 0.4 }}
                alt="github-logo"
              ></motion.img>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
