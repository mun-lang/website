import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

import { useStaticQuery, graphql } from "gatsby"

import NetlifyLogo from "../images/netlify-full-logo-light.svg"

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
      <div id="home">
        <section className="pitch">
          <div className="content">
            <h1>Mun</h1>
            <h3>{site.siteMetadata.tagline}</h3>
          </div>
        </section>
        <section className="underconstruction">
          <div className="content">
            <h2>Under development</h2>
            <p>Thank you for stumbling upon this page. We are working very hard on achieving all the goals listen on this page for Mun but currently the language and toolchain are under heavy development.</p>
          </div>
        </section>
        <section className="info">
          <div className="content">
            <h2>Goals<div className="highlight"></div></h2>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Hot-reloadable</h4>
                <p>Mun is build around the principle of hot-reloading meaning that all code can be reloaded while your application is running.</p>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Efficient</h4>
                <p>All code is compiled to machine code instead of being interpreted or JIT compiled. This ensures that the processor can focus on running your code without any overhead of a virtual machine.</p>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Developer friendly</h4>
                <p>Mun syntax is designed to be user friendly for a wide variety of developers. The compiler has also been build to be able to provide you with always available code completion, allowing you to focus on writing code instead of reading.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="support">
          <div className="content">
            <h2>Support us</h2>
            <p>The Mun programming language is developed by a group of volunteers. We welcome recurring donations, which enable us to spend more time working on Mun.</p>
            <p>Mun is sponsored by the following companies:</p>
            <div className="pure-g sponsors">
              <div className="pure-u-1 pure-u-sm-1-2">
                <NetlifyLogo />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout >
  );
}

export default IndexPage
