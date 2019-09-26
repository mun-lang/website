import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <div className="pitch">
        <h1>Mun</h1>
        An application programming language for increased developer efficiency.
      </div>
    </div>
  </Layout>
)

export default IndexPage
