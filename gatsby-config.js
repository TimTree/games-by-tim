const config = require("./config.json")

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    github_username: config.github_username,
    blog_description: config.blog_description,
    siteUrl: config.siteurl,
    hyvor_talk_website_id: config.hyvor_talk_website_id,
    google_analytics_id: config.google_analytics_id,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import "./src/styles/variables";`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogPosts",
        path: `${__dirname}/content/blogPosts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "smallProjects",
        path: `${__dirname}/content/smallProjects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "mainData",
        path: `${__dirname}/content/mainData`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700, // The max width of articles
              backgroundColor: "none",
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: "›",
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: "remove-empty-fields",
      options: {
        fieldsToRemove: [
          "hero_image",
          "screenshots",
          "app_icon",
          "personal_photo",
          "social_media_image",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.title,
        start_url: `/`,
        background_color: `#24778b`,
        theme_color: `#24778b`,
        display: `standalone`,
        icon: `static/icon.png`,
      },
    },
    // By default, gatsby-plugin-offline potentially displays outdated page data.
    // Change its settings to utilize a network first approach in more cases.
    // (Config based on https://stackoverflow.com/a/62039872)
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: "CacheFirst",
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: "NetworkFirst",
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: "StaleWhileRevalidate",
            },
            {
              urlPattern: /\/$/,
              handler: "NetworkFirst",
            },
          ],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    // By default, gatsby-plugin-sitemap sets the priority the same for all pages.
    // Change config such that the homepage gets a higher priority. This should
    // in theory cause the homepage to rank higher in search engines relative to
    // all other pages.
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              nodes {
                path
              }
            }
          }
        `,
        output: "/sitemap",
        serialize: ({ path }) => {
          return {
            url: path,
            changefreq: "daily",
            priority: path === "/" ? 1.0 : 0.7,
          }
        },
      },
    },
    // The RSS feed will contain the 20 newest blog posts only.
    // This prevents the feed from getting too large and adheres
    // to other RSS feeds I've researched.
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
                  description: edge.node.frontmatter.short_description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fileAbsolutePath: { regex: "/(blogPosts)/" } }
                  sort: {frontmatter: {date: DESC}}
                  limit: 20
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        date
                        title
                        short_description
                      }
                      html
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: config.title,
          },
        ],
      },
    },
    ...(config.google_analytics_id
      ? [
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [config.google_analytics_id],
              gtagConfig: {
                anonymize_ip: true,
              },
              pluginConfig: {},
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#2872e1`,
        showSpinner: false,
      },
    },
  ],
}
