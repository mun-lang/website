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
      <section className="content">
        <div className="pitch">
          <h1>Mun</h1>
          {site.siteMetadata.tagline}
        </div>
      </section>
    </Layout >
  );
}

export default IndexPage
