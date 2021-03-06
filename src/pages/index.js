import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Contact from "../components/contact"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            description
            url
            code
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges
  return (
    <Layout>
      <Hero />
      <Skills />
      <h2
        class="text-center text-5xl font-bold pt-10 lg:pt-20 xl:pt-10 md:pb-20"
        id="projects"
      >
        Projects
      </h2>
      <div class="container mx-auto xl:flex xl:flex-row">
        {projects.map(({ node: project }) => {
          const title = project.title
          const description = project.description
          const code = project.code
          const url = project.url
          return (
            <Projects
              title={title}
              description={description}
              code={code}
              url={url}
            />
          )
        })}
      </div>
      <Contact />
    </Layout>
  )
}
