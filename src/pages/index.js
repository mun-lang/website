import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

import { useStaticQuery, graphql } from "gatsby"

import AmethystLogo from "../images/amethyst-logo-standard.svg"
import NetlifyLogo from "../images/netlify-full-logo-light.svg"
import Warning from "../images/warning.svg"

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
            discord
            openCollective
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
        <section id="under-construction">
          <div className="content bg-dark">
            <h2><Warning className="warning-icon"/>&nbsp;Work in Progress&nbsp;<Warning  className="warning-icon"/></h2>
            <h5>We appreciate your interest in Mun, but you are a little early to the party. The Mun language and toolchain are still in the early stages of development and nowhere near production-ready. If that doesn't scare you, then please continue reading.</h5>
          </div>
        </section>
        <section id="mission" className="bg-light">
          <div className="content">
            <h2>Mission</h2>
            <p>The idea to create Mun originated out of frustration with the Lua dynamic scripting language that is extensively used for game development at Abbey Games.</p>
            <p>Lua's hot reloading capabilities and LuaJIT's performance make it a great language for rapid prototyping of real-time applications - such as games - on PC. However, the language has performance issues on some mobile and console platforms - to which LuaJIT cannot deploy, the language lacks refactoring functionality, and does not scale well with modern technology.</p>
            <p>Mun tries to take the best of both worlds to create a more robust, highly iterative, productive, and performant programming language.</p>
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
        <section id="syntax">
          <div className="content">
            <h2>Syntax</h2>
            <p>The driving force behind the development of Mun is natively supported hot reloading for functions and data. As such, the language and its syntax will keep growing at the rate in which we add hot reloading-supported semantics.</p>
            <p>We take inspiration from a range of application, scripting, and systems programming languages, but we also want the community's input in defining a syntax that you find comfortable to use. We will regularly tweet proposals for new syntax, so make sure to <a href={site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">follow us</a>.</p>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }}></div>
          </div>
        </section>
        <section id="support" className="bg-light">
          <div className="content">
            <h2>Support us</h2>
            <p>The Mun programming language is developed by a group of volunteers. To further advance the project, we welcome any and all:</p>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href="https://github.com/mun-lang/mun" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> &nbsp; Contributions</a>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href={site.siteMetadata.openCollective} target="_blank" rel="noopener noreferrer">Donations</a>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href={site.siteMetadata.discord} target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i> &nbsp; Feedback</a>
            <a className="btn" href={site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i> &nbsp; Updates</a>
            <div style={{ marginTop: "2em" }}>
              <p>Mun is sponsored by the following companies:</p>
              <div className="pure-g" id="sponsors">
                <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"><NetlifyLogo /></a>
                </div>
                <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <a href="https://amethyst.rs/" target="_blank" rel="noopener noreferrer"><AmethystLogo style={{ width: "100px" }} /></a>
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
