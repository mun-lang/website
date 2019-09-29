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
                <div className="inner bg-dark">
                    <div className="content">
                        <p>The Mun Development Team is a group of software enthusiasts working on Mun in their spare time. We are grateful for any donations that will help us dedicate more time and resources towards building the Mun language and toolchain.</p>
                        <p>We are in the process of setting up a processing platform for our donations. Until then, please feel free to contact us by email.</p>
                        <a href="mailto:team@mun-lang.org" className="btn">Email the Mun Development Team</a>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default DonatePage
