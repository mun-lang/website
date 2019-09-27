import { Link } from "gatsby"
import React from "react"

import "../styles/_hamburger.scss";

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
    window.addEventListener('resize', this.hideMenu);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.hideMenu);
  }

  render() {
    const { showMenu } = this.state;
    return (
      <header class={"pure-g" + (showMenu ? " open" : "")}>
        <div class="pure-u-1 pure-u-md-1-2 pure-menu pure-menu-horizontal">
          <Link className="pure-menu-heading pure-menu-link" to="/">
            Mun
          </Link>
          <a href="#" class={"hamburger" + (showMenu ? " x" : "")} id="toggle" onClick={() => this.toggleMenu()}><s class="bar"></s><s class="bar"></s></a>
        </div>
        <div class={"pure-u-1 pure-u-md-1-2 pure-menu pure-menu-horizontal menu-contents"}>
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link className="pure-menu-link" to="/">Blog</Link>
            </li>
            <li className="pure-menu-item">
              <a className="pure-menu-link" href="https://docs.mun-lang.org">Documentation</a>
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
      </header >
    );
  }
}

export default Header