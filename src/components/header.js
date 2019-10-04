import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

import "../styles/_hamburger.scss";

const WINDOW_CHANGE_EVENT = typeof window !== `undefined` && ('onorientationchange' in window) ? 'orientationchange' : 'resize';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.hideMenu = this.hideMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }))
  }

  hideMenu() {
    this.setState(() => ({ showMenu: false }))
  }

  componentDidMount() {
    window.addEventListener(WINDOW_CHANGE_EVENT, this.hideMenu);
  }
  componentWillUnmount() {
    window.removeEventListener(WINDOW_CHANGE_EVENT, this.hideMenu);
  }

  render() {
    const { showMenu } = this.state;
    return (
      <nav>
        <div class={"pure-g" + (showMenu ? " open" : "")}>
          <div class="pure-u-1 pure-u-md-1-2 pure-menu pure-menu-horizontal">
            <Link className="pure-menu-heading pure-menu-link" to="/">
              Mun
          </Link>
            <a href="#" class={"hamburger" + (showMenu ? " x" : "")} id="toggle" onClick={() => this.toggleMenu()}><s class="bar"></s><s class="bar"></s></a>
          </div>
          <div class={"pure-u-1 pure-u-md-1-2 pure-menu pure-menu-horizontal menu-contents"}>
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/blog">Blog</Link>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="https://docs.mun-lang.org">Documentation</a>
              </li>
              <StaticQuery
                  query={
                    graphql`
                      query {
                        site {
                          siteMetadata {
                            twitter
                            discord
                            openCollective
                          }
                        }
                      }
                    `
                  }
                  render={({ site }) => (
                    <>
                    <li className="pure-menu-item">
                      <a className="pure-menu-link" href={site.siteMetadata.openCollective} target="_blank" rel="noopener noreferrer">Donate</a>
                    </li>
                    <li className="pure-menu-item">
                      <a className="pure-menu-link" href="https://trello.com/b/ZcMiREnC/mun-roadmap" target="_blank" rel="noopener noreferrer">Roadmap</a>
                    </li>
                    <li className="pure-menu-item">
                      <a className="pure-menu-link icon" href="https://github.com/mun-lang/mun" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </li>
                    <li className="pure-menu-item">
                      <a className="pure-menu-link icon" href={site.siteMetadata.discord} target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
                    </li>
                    <li className="pure-menu-item">
                      <a className="pure-menu-link icon" href={site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    </li>
                    </>
                  )}
                />
            </ul>
          </div>
        </div>
      </nav >
    );
  }
}

export default Header
