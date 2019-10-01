import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./faq.scss"


const FAQPage = () => { 
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitter
            discord
          }
        }
      }
    `
  )
  
  return (
    <Layout>
      <SEO title="Frequently Asked Questions" />
        <div id="faq">
          <header className="content">
            <h2>FAQ</h2>
          </header>
          <section>
            <div className="inner">
              <div className="content bg-dark">
                <h4>Why another programming language?</h4>
                <p>It was never our goal to write a new language. We want to achieve quick developer iteration through natively supported hot reloading for data and functions. As no other language - that we know of - supports this, the easiest way to proof its feasibility is through a novel language. If existing languages decide to incorporate our findings in the future, we'd consider our goal achieved too.</p>
                
                <h4>How stable is Mun?</h4>
                <p>Mun is an experimental language, which means that its compiler, runtime and syntax are actively under  development. At this time, there is no backwards compatibility, so expect problems when pulling the latest source from our repositories.</p>
                
                <h4>How is Mun licensed?</h4>
                <p>Information about the licenses under which you can use Mun can be found <Link to="/licenses">here</Link>.</p>

                <h4>Does Mun have editor support?</h4>
                <p>At present, there are no IDE integrations for Mun that we know of.</p>

                <h4>Other questions?</h4>
                <p>If your question hasn't been answered, feel free to reach out to us on <a className="fab" href={site.siteMetadata.twitter} target="_blank"><i className="fab fa-twitter"></i></a> or <a href={site.siteMetadata.discord} className="fab" target="_blank"><i className="fab fa-discord"></i></a></p>
              </div>
            </div>
          </section>
      </div>
    </Layout>
  )
}

export default FAQPage
