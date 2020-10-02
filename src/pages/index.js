import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
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
                  srcSet
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
    </Layout>
  )
}
