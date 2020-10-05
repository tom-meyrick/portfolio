import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = () => (
  <nav>
    <div class="container mx-auto px-6 py-2 flex justify-between items-center">
      <a class="text-2xl lg:text-4xl" href="#">
        SHMW
      </a>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:block">
        <ul class="inline-flex">
          <li>
            <Link class="px-4 font-bold" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link class="px-4 hover:text-gray-300" to="/#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link class="px-4 hover:text-gray-300" to="/#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link class="px-4 hover:text-gray-300" to="/#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
