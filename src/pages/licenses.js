import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./licenses.scss"

const LicensesPage = () => (
    <Layout>
        <SEO title="Licenses" />
        <div id="licenses">
            <header className="content">
                <h2>Licenses</h2>
            </header>
            <section>
                <div className="inner">
                    <div className="content">
                        <p>The Mun Programming Language and all other official projects, including this website, are generally dual-licensed:</p>
                        <ul>
                            <li><a href="https://opensource.org/licenses/MIT">Apache License, Version 2.0</a></li>
                            <li><a href="https://opensource.org/licenses/MIT">MIT license</a></li>
                        </ul>
                        <p>Specific licensing info for each project can be found in its GitHub Repository.</p>
                        <p>Third-party logos may be subject to third-party copyrights and trademarks, and are not available under the same license as the rest of the Mun website.</p>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default LicensesPage
