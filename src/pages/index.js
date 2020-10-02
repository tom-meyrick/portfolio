import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  // const data = useStaticQuery(graphql``)
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}
