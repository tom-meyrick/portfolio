import React from "react"
import Layout from "../components/Layout"
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
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
      {projects.map(({ node: project }) => {
        const title = project.title
        const description = project.description
        const image = project.image.childImageSharp.fluid
        const code = project.code
        const url = project.url
        return (
          <Projects
            title={title}
            description={description}
            image={image}
            code={code}
            url={url}
          />
        )
      })}
      <Contact />
    </Layout>
  )
}
