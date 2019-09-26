import React from "react"

const Footer = () => (
    <footer>
        <div className="footerContent">
            © {new Date().getFullYear()}, Built with {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    </footer>
)

export default Footer
