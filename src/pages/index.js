import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <section className="content">
      <div className="pitch">
        <h1>Mun</h1>
        An application programming language for increased developer efficiency.
      </div>
    </section>
  </Layout>
)

export default IndexPage
