import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./footer.scss"

const Footer = () => {
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
        <footer id="footer">
            <div className="content">
                <div class="pure-g" id="sitemap">
                    <div class="pure-u-1 pure-u-md-1-3">
                        <h6>Discover</h6>
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><a href="https://docs.mun-lang.org">Documentation</a></li>
                            <li><Link to="/licenses">Licenses</Link></li>
                        </ul>
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3">
                        <h6>Support</h6>
                        <ul>
                            <li><Link to="/donate">Donate</Link></li>
                            <li><a href="mailto:team@mun-lang.org">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="pure-u-1 pure-u-md-1-3" id="social">
                        <h6>Social</h6>
                        <a href="https://github.com/mun-lang/mun" target="_blank"><i className="fab fa-github"></i></a>
                        <a href={site.siteMetadata.discord} target="_blank"><i className="fab fa-discord"></i></a>
                        <a href={site.siteMetadata.twitter} target="_blank"><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div style={{
                    textAlign: "center",
                    marginTop: "1.5em"
                }}>
                    <small>This website is available on <a href="https://github.com/mun-lang/website" target="_blank">Github</a> and contributions are welcome.</small>
                </div>
            </div>
        </footer >
    )
}

export default Footer
