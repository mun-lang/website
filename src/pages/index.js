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
            <h1>Mun<div className="highlight"></div></h1>
            <h3>{site.siteMetadata.tagline}</h3>
          </div>
        </section>
        <section id="pillars">
          <div className="content">
            <h2>Pillars<div className="highlight"></div></h2>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Hot Reloading</h4>
                <p>Mun natively supports hot reloading - the process of changing code and resources while an app is running - on all target platforms and consoles with marginal runtime overhead. Its runtime has useful error messages, and can easily be embedded into other languages.</p>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Static Typing</h4>
                <p>Mun's type system eliminates an entire class of runtime errors and provides powerful IDE integration with auto-completion and refactoring tools allowing developers to focus on writing code.</p>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Performance</h4>
                <p>Mun is compiled to machine code that can be natively executed on any target platform, guaranteeing the best possible runtime performance.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="under-construction">
          <div className="content">
            <h2>Work in Progress</h2>
            <h5>We appreciate your interest in Mun, but you are a little early to the party. The Mun language and toolchain are very much a work in progress. If that doesn't scare you, then you might be interested in:</h5>
            <ul>
              <li>contributing</li>
              <li>donating</li>
              <li>updates</li>
            </ul>
          </div>
        </section>
        <section id="support">
          <div className="content">
            <h2>Support us</h2>
            <p>The Mun programming language is developed by a group of volunteers. We welcome recurring donations, which enable us to spend more time working on Mun.</p>
            <p>Mun is sponsored by the following companies:</p>
            <div className="pure-g" id="sponsors">
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
