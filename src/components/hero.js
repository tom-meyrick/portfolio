import React from "react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section class="h-screen">
      <div class="container font-bold text-center bg-pattern flex h-screen">
        <motion.div
          class="px-10 pt-30 m-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <h1 class="m-5 text-6xl text-white font-bungee">Tom Meyrick</h1>
          <h1 class="m-5 text-6xl text-white font-bungee">
            Full Stack Developer
          </h1>
          <motion.button
            whileTap={{ scale: 0.8 }}
            class="bg-white hover:bg-orange-400 text-blue-400 font-semibold hover:text-white py-2 px-4 border border-blue-300 hover:border-transparent rounded m-5"
            onClick={() => {
              "mailto: tom_meyrick@hotmail.co.uk"
            }}
          >
            Work with me
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
export default Hero
