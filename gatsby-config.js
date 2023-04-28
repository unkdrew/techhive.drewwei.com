const config = require('./config');
const path = require('path')

module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: config.siteTitle,
    author: config.siteAuthor,
    description: 'A personal blog, about tech.',
    url: config.siteUrl
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'G-D40MJ2N274',
        defaultDataLayer: { platform: 'gatsby' },
        enableWebVitalsTracking: true
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Dreezy's Tech Hive",
        short_name: "Dreezy's Tech Hive",
        start_url: '/',
        background_color: '#78c4ff',
        theme_color: '#78c4ff',
        display: 'minimal-ui',
        icon: 'src/assets/images/icon.png'
      }
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
              related: true,  // Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true  // Disable insertion of <style> border: 0
            }
          },
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: path.join(__dirname, 'src/markdown-pages')
      }
    }
  ]
}
