import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = (
  { article, description, path, title }
) => {
  const data = useStaticQuery(
    graphql`
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
  )

  const seo = {
    title: title || data.site.siteMetadata.defaultTitle,
    description: description || data.site.siteMetadata.defaultDescription,
    url: `${data.site.siteMetadata.siteUrl}${path || '/'}`,
  }

  return (
    <>
      <Helmet title={seo.title}>
        <meta name="description" content={seo.description}/>
        {seo.url && <meta property="og:url" content={seo.url}/>}
        {(article ? true : null) && (<meta property="og:type" content="article"/>)}
        {seo.title && <meta property="og:title" content={seo.title}/>}
        {seo.description && (<meta property="og:description" content={seo.description}/>)}
      </Helmet>
    </>
  )
}

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
