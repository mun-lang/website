module.exports = {
  siteMetadata: {
    siteUrl: "https://mun-lang.org",
    title: `Mun Programming Language`,
    description: `Mun, a programming language empowering creation through iteration.`,
    author: `The Mun Development Team`,
    discord: `https://discord.gg/SfvvcCU`,
    githubSponsor: `https://github.com/sponsors/mun-lang`,
    openCollective: `https://opencollective.com/mun`,
    repository: `https://github.com/mun-lang/mun`,
    twitter: `https://twitter.com/munlangorg`,
  },
  plugins: [
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Dark+ (default dark)', // Or install your favorite theme from GitHub
              extensions: ['mun']
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mun Programming Language`,
        short_name: `Mun`,
        start_url: `/`,
        background_color: `#2274a5`,
        theme_color: `#2274a5`,
        display: `minimal-ui`,
        icon: `src/images/mun-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.url,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.url,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: {fileAbsolutePath: {regex: "/\\/content\\/posts\\/.+$/"}}
                  sort: { order: DESC, fields: [fields___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { 
                        url
                        date 
                      }
                      frontmatter {
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "The Mun programming language RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148878934-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
