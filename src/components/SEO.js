import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = (
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
        const Seo = {
          title: title || defaultTitle,
          description: description || defaultDescription,
          url: `${siteUrl}${path || '/'}`,
        }

        return (
          <>
            <Helmet title={Seo.title}>
              <meta name="description" content={Seo.description} />
              {Seo.url && <meta property="og:url" content={Seo.url} />}
              {(article ? true : null) && (
                <meta property="og:type" content="article" />
              )}
              {Seo.title && <meta property="og:title" content={Seo.title} />}
              {Seo.description && (
                <meta property="og:description" content={Seo.description} />
              )}
            </Helmet>
          </>
        )
      }
    }
  />
)

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
  article: PropTypes.bool
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  path: null,
  article: false
}

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`
