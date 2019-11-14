import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./post.scss"

const BlogPostTemplate = (data) => {
  const post = data.data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.excerpt || post.excerpt}
      />
      <div id="post">
        <div class="content">
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p>{post.fields.date}, {post.frontmatter.author || "The Mun Team"}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($url: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { url: { eq: $url } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        date(formatString: "MMMM DD, YYYY")
      }
      frontmatter {
        title
        author
        excerpt
      }
    }
  }
`
