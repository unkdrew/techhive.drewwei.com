const path = require('path')

module.exports = {
  siteMetadata: {
    title: "Dreezy's Tech Hive",
    author: "Drew Wei",
    description: "A personal blog, about tech."
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        root: path.join(__dirname, '.'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages')
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-embed-video',
            options: {
              width: 560,
              height: 315,
              related: true, // Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true // Disable insertion of <style> border: 0
            }
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: path.join(__dirname, 'src/markdown-pages')
      }
    }
  ]
}
