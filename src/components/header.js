import React from "react"
import { Link } from "gatsby"
const Header = () => {
  return (
    <nav>
      <div class="container mx-auto px-6 py-2 flex justify-end items-center">
        <div class="hidden lg:block">
          <ul class="inline-flex">
            <li>
              <Link class="px-4 hover:text-gray-800" href="/#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link class="px-4 hover:text-gray-800" href="/#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link class="px-4 hover:text-gray-800" href="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
