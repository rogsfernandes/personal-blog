module.exports = {
  siteMetadata: {
    title: `Rogério dos Santos`,
    author: {
      name: `Rogério dos Santos`,
      summary: '',
    },
    description: `Site sobre interações digitais e suas possibilidades.`,
    siteUrl: `https://rogerio-dos-santos.com/`,
    social: {
      twitter: `rogsfernandes`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`G-S0TZ70KYYE`],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/blog-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'pt',
        langKeyForNull: 'pt',
        useLangKeyLayout: false,
        pagesPaths: [`${__dirname}/content/blog`, `./src/pages`],
        markdownRemark: {
          postPage: 'src/templates/blog-post.js',
          query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug,
                    langKey
                  }
                }
              }
            }
          }
        `,
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
