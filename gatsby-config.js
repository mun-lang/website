module.exports = {
  siteMetadata: {
    siteUrl: "https://mun-lang.org",
    title: `Mun Programming Language`,
    description: `Mun, a programming language empowering creation through iteration.`,
    author: `The Mun Development Team`,
    twitter: `https://twitter.com/munlangorg`,
    discord: `https://discord.gg/SfvvcCU`,
    openCollective: `https://opencollective.com/mun`
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
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              languageExtensions: [
                {
                  language: "mun",
                  definition: {
                    comment: {
                      pattern: /(^|[^\\:])\/\/.*/,
                      lookbehind: true,
                      greedy: true
                    },
                    boolean: /\b(?:true|false)\b/,
                    function: /\w+(?=\()/,
                    keyword: /\b(?:bool|float|fn|int|let)\b/,
                    number: /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\d(?:_?\d)*)?\.?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\b/,
                    operator: /[-+*\/=]=?/,
                    punctuation: /\.{1,3}|[{}[\];(),:]/,
                  }
                }
              ]
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-slug`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mun Programming Language`,
        short_name: `Mun`,
        start_url: `/`,
        background_color: `#2274a5`,
        theme_color: `#2274a5`,
        display: `minimal-ui`,
        //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
                  date: edge.node.frontmatter.date,
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
