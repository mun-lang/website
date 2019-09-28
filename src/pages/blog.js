import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./blog.scss"

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props
        const posts = data.allMarkdownRemark.edges

        return (
            <Layout>
                <SEO title="Blog" />
                <div id="blog">
                    <header className="content">
                        <h2>Blog</h2>
                        <p>On our blog we try to write frequent updates about the development of Mun.</p>
                    </header>
                    <section id="posts">
                        <div className="inner">
                            <div className="content">
                                {posts.map(({ node }) => {
                                    const title = node.frontmatter.title || node.fields.slug
                                    return (
                                        <article>
                                            <header>
                                                <h4><Link to={node.fields.slug}>{title}</Link></h4>
                                                <small>{node.frontmatter.date}, {node.frontmatter.author || "The Mun Team"}</small>
                                            </header>
                                            <section>
                                                <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt || node.excerpt }} />
                                            </section>
                                        </article>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            excerpt
            author
          }
        }
      }
    }
  }
`
export default BlogIndex