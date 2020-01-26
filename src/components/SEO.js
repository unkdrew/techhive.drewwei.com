import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = (
  { article, description, path, title }
) => (
  <StaticQuery
    query={query}
    render={
      (
        {
          site: {
            siteMetadata: {
              defaultTitle,
              defaultDescription,
              siteUrl
            }
          }
        }
      ) => {
        const seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          url: `${siteUrl}${path || '/'}`,
        }

        return (
          <>
            <Helmet title={seo.title}>
              <meta name="description" content={seo.description} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {(article ? true : null) && (
                <meta property="og:type" content="article" />
              )}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
            </Helmet>
          </>
        )
      }
    }
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
  article: PropTypes.bool
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  path: null,
  article: false
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`
