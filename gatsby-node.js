/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/post.js`)
  const result = await graphql(
    `
        {
          allMarkdownRemark(
            sort: { fields: [fields___date], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  url
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.url,
      component: blogPost,
      context: {
        url: post.node.fields.url,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const pathRegex = /^\/(\d{4})-(\d{1,2})-(\d{1,2})-(.*)\/$/
    const matches = pathRegex.exec(value)
    const url = matches ? `/blog/${matches[1]}/${matches[2]}/${matches[3]}/${matches[4]}/` : value
    createNodeField({
      node,
      name: `url`,
      value: url,
    })

    let date = matches ? new Date(Date.UTC(parseInt(matches[1]), parseInt(matches[2]) - 1, parseInt(matches[3]))) : new Date()
    createNodeField({
      node,
      name: `date`,
      value: date,
    })
  }
}