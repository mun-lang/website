import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

function IndexPage() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            tagline
          }
        }
      }
    `
  )
  return (
    <Layout >
      <SEO />
      <div className="content">
        <section className="pitch">
          <h1>Mun</h1>
          <h3>{site.siteMetadata.tagline}</h3>
        </section>
        <section>
          <p>This is some random text</p>
        </section>
      </div>
    </Layout >
  );
}

export default IndexPage
