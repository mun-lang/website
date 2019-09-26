import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="pure-menu pure-menu-horizontal pure-menu-scrollable">
      <div className="navContent">
        <Link className="pure-menu-heading pure-menu-link" to="/">
          {siteTitle}
        </Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link className="pure-menu-link" to="/">Blog</Link>
          </li>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" to="/">Documentation</Link>
          </li>
          <li className="pure-menu-item">
            <Link className="pure-menu-link" to="/">Donate</Link>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link icon" href="https://github.com/mun-lang/mun"><span className="fab"></span></a>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link icon" href="https://discord.gg/SfvvcCU"><span className="fab"></span></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/*
<div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    */