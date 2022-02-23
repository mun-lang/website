import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

import { useStaticQuery, graphql, Link } from "gatsby"

import AmethystLogo from "../images/amethyst-logo-standard.svg"
import MozillaLogo from "../images/moz-logo-bw-rgb.svg"
import NetlifyLogo from "../images/netlify-full-logo-light.svg"
import OpenCollectiveIcon from "../images/oc-icon.png"
import MunLogo from "../images/logo.svg"
import PongVideo from "../videos/showcase/pong.mp4"
import Warning from "../images/warning.svg"

function IndexPage() {
  const { site, syntax, syntaxMaster, allMarkdownRemark  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            discord
            githubSponsor
            openCollective
            repository
            twitter
          }
        }
        syntax: markdownRemark(
          fileAbsolutePath: {regex: "/\\/examples\\/syntax.md$/"}
        ) {
          html
        }
        syntaxMaster: markdownRemark(
          fileAbsolutePath: {regex: "/\\/examples\\/syntax_master.md$/"}
        ) {
          html
        }
        allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/\\/content\\/posts\\/.+$/"}}
            sort: { fields: [fields___date], order: DESC }
            limit: 2
          ) {
          edges {
            node {
              excerpt
              fields {
                url
                date(formatString: "MMMM DD, YYYY")
              }
              frontmatter {
                title
                excerpt
                author
              }
            }
          }
        }
      }
    `
  )

  const posts = allMarkdownRemark.edges

  return (
    <Layout >
      <SEO />
      <div id="home">
        <section className="pitch">
          <div className="content">
            <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
              <h1><MunLogo style={{height: "2.5em", paddingRight: "0.5em"}} /></h1>
              <h1>Mun</h1>
            </div>
            <h3>A programming language empowering creation through iteration.</h3>
          </div>
        </section>
        <section id="under-construction">
          <div className="content bg-dark">
            <h2><Warning className="warning-icon"/>&nbsp;Work in Progress&nbsp;<Warning  className="warning-icon"/></h2>
            <h5>We appreciate your interest in Mun, but you are a little early to the party. The Mun language and toolchain are still in the early stages of development and nowhere near production-ready. If that doesn't scare you, then please continue reading.</h5>
          </div>
        </section>
        <section id="showcase" className="listing">
          <div className="content bg-dark">
            <h2>Make It or Break It</h2>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-2">
                <article>
                  <header>
                    <h5>Pong (est. 1972)</h5>
                    <small>Mun v0.2, "The Mun Team"</small>
                  </header>
                  <section>
                    <p>
                      <video width="100%" controls>
                        <source src={PongVideo} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    </p>
                  </section>
                </article>
              </div>
              <div className="pure-u-1 pure-u-md-1-2">
                <article>
                  <header>
                    <h5>Your Make It or Break It Demo?</h5>
                    <small>Mun v0.2, "You"</small>
                  </header>
                  <section>
                    <a id="showcase-reward" href="https://github.com/mun-lang/mun/issues/220"  target="_blank" rel="noopener noreferrer" alt="Make It or Break It">
                      <p>
                        <span className="fas fa-medal" style={{ fontSize: "96px" }}></span>
                        <h3>Most Voted Submission</h3>
                        <h4>Season 1</h4>
                      </p>
                    </a>
                  </section>
                </article>
              </div>
            </div>
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
        <section id="syntax" className="bg-light">
          <div className="content">
            <h2>Syntax</h2>
            <p>The driving force behind the development of Mun is natively supported hot reloading for functions and data. As such, the language and its syntax will keep growing at the rate in which we add hot reloading-supported semantics.</p>
            <p>We take inspiration from a range of application, scripting, and systems programming languages, but we also want the community's input in defining a syntax that you find comfortable to use. We will regularly tweet proposals for new syntax, so make sure to <a href={site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">follow us</a>.</p>
            <Tabs>
              <TabList>
                <Tab>master</Tab>
                <Tab>v0.2</Tab>
              </TabList>
              <TabPanel>
                <div dangerouslySetInnerHTML={{ __html: syntaxMaster.html }}></div>
              </TabPanel>
              <TabPanel>
                <div dangerouslySetInnerHTML={{ __html: syntax.html }}></div>                  
              </TabPanel>  
            </Tabs>
          </div>
        </section>
        <section id="recent-posts" class="bg-light listing">
          <div className="content">
            <h2>Recent blog posts</h2>
            <div className="pure-g">
            {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <div className="pure-u-1 pure-u-md-1-2">
                      <article>
                        <header>
                          <h5><Link to={node.fields.url}>{title}</Link></h5>
                          <small>{node.fields.date}, {node.frontmatter.author || "The Mun Team"}</small>
                        </header>
                        <section>
                          <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt || node.excerpt }} />
                        </section>
                      </article>
                    </div>
                  )
                })}
            </div>
            <Link className="btn" to="/blog" id="all-posts" style={{ marginRight: "0.5em" }}>All posts</Link>
            <a className="btn" href="rss.xml"><i className="fas fa-rss"></i> &nbsp; subscribe</a>
          </div>
        </section>
        <section id="support" className="bg-light">
          <div className="content">
            <h2>Support us</h2>
            <p>The Mun programming language is developed by a group of volunteers. To further advance the project, we welcome any and all:</p>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href={site.siteMetadata.repository} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> &nbsp; Contribute</a>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href={site.siteMetadata.openCollective} target="_blank" rel="noopener noreferrer"><img src={OpenCollectiveIcon} alt="" width="16px" height="16px" style={{ marginBottom: "-2px" }} /> Donate</a>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href={site.siteMetadata.discord} target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i> &nbsp; Engage</a>
            <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href={site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i> &nbsp; Follow</a>
            <a className="btn" href={site.siteMetadata.githubSponsor} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> &nbsp; Sponsor</a>
          </div>
        </section>
        <section id="thanks" className="bg-light">
          <div className="content" style={{marginTop: "2em"}}>
            <h2>Thanks</h2>
            <div>
              <p>Mun would not exist without the hard work, time, and resources generously contributed by individuals and companies. We would like to thank everyone for making Mun a reality!</p>
              <h4>Individuals</h4>     
              <p>Mun is developed by a community. We are very thankful to the community for all of its contributions.</p>
              <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href="https://github.com/mun-lang/mun/graphs/contributors" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> &nbsp; Contributors</a>
              <a className="btn" style={{ marginRight: "0.5em", marginBottom: "0.5em" }} href={site.siteMetadata.githubSponsor} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> &nbsp; Sponsors</a>
              <h4>Corporate sponsors</h4>
              <p>Mun is supported by companies through the use of infrastructure or by (facilitating) donations</p>
              <div className="pure-g" id="sponsors">
                <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <a href="https://www.mozilla.org/en-US/moss/" target="_blank" rel="noopener noreferrer" aria-label="Mozilla Open Source Support"><MozillaLogo /></a>
                </div>
                <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" aria-label="Netlify"><NetlifyLogo /></a>
                </div>
                <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
                  <a href="https://amethyst.rs/" target="_blank" rel="noopener noreferrer" aria-label="Amethyst Foundation"><AmethystLogo style={{ width: "100px" }} /></a>
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
