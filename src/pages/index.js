import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

import { Link, useStaticQuery, graphql } from "gatsby"

import NetlifyLogo from "../images/netlify-full-logo-light.svg"

function IndexPage() {
  const { site, markdownRemark  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitter
          }
        }
        markdownRemark(
          fileAbsolutePath: {regex: "/\\/examples\\/syntax.md$/"}
        ) {
          html
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
            <h3>A programming language empowering creation through iteration.</h3>
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
                <p>Mun uses LLVM to compile to machine code that can be natively executed on any target platform, guaranteeing the best possible runtime performance.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="target-audience">
          <div className="content">
            <h2>Made for Creators<div className="highlight"></div></h2>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Games</h4>
                <p>Quickly iterate designs using Mun's hot reloading capabilities, without compromising performance.</p>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Mobile &amp; Console</h4>
                <p>Leverage Mun's cross compilation to unlock hot reloading for console and mobile development.</p>
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <h4>Robotics</h4>
                <p>Use Mun's toolchain to build, tweak, and deploy applications to your robot with zero downtime.</p>
              </div>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <h4>WebAssembly</h4>
              <p>Use the same Mun toolchain to build, test, and deploy content to the web using WebAssembly modules.</p>
            </div>
            <div className="pure-u-1 pure-u-md-1-3">
              <h4>XR</h4>
              <p>Embed Mun into AR / MR / VR apps to unleash the power of creation in an immersive environment.</p>
            </div>
          </div>
        </section>
        <section id="under-construction">
          <div className="content bg-dark">
            <h2>Work in Progress</h2>
            <h5>We appreciate your interest in Mun, but you are a little early to the party. The Mun language and toolchain are very much a work in progress. If that doesn't scare you, then you might be interested in:</h5>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href="https://github.com/mun-lang/mun" target="_blank">Contributing</a>
            <Link className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} to="/donate">Donating</Link>
            <a className="btn" href={`https://twitter.com/${site.siteMetadata.twitter}`} target="_blank"> <i className="fab fa-twitter"></i> &nbsp; Updates</a>
          </div>
        </section>
        <section id="syntax" className="bg-light">
          <div className="content">
            <h2>Syntax</h2>
            <p>The driving force behind the development of Mun is natively supported hot reloading for functions and data. As such, the language and its syntax will keep growing at the rate in which we add hot reloading-supported semantics.</p>
            <p>We take inspiration from a scala of application, scripting, and systems programming languages, but we also want the community's input in defining a syntax that you find comfortable to use. We will regularly tweet proposals for new syntax, so make sure to <a href={`https://twitter.com/${site.siteMetadata.twitter}`}>follow us</a>.</p>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
          </div>
        </section>
        <section id="support" className="bg-light">
          <div className="content">
            <h2>Support us</h2>
            <p>The Mun programming language is developed by a group of volunteers. We welcome donations, which enable us to spend more time working on Mun.</p>
            <Link to="donate" className="btn">Donate</Link>
            <div style={{ marginTop: "2em" }}>
              <p>Mun is sponsored by the following companies:</p>
              <div className="pure-g" id="sponsors">
                <div className="pure-u-1 pure-u-sm-1-2">
                  <a href="https://www.netlify.com/" target="_blank"><NetlifyLogo /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout >
  );
}

export default IndexPage
