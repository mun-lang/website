import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./donate.scss"

const DonatePage = () => (
    <Layout>
        <SEO title="Donate" />
        <div id="donate">
            <header className="content">
                <h2>We need your help</h2>
                <h5>Every contribution helps!</h5>
            </header>
            <section>
                <div className="inner">
                    <div className="content">
                        {/* <p>The Mun Programming Language is developed by a group of volunteers. We welcome any and all contributions!</p>
                        <ul>
                            <li>Hiring part-time, full-time or contract developers to work on Mun</li>
                        </ul> */}
                        We are currently figuring out how to set up a donation system. We hope you check back.
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default DonatePage
