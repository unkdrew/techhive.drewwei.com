import GuideLink from 'components/GuideLink'
import Layout from 'components/layout'
import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'

const IndexPage = (
  {
    data: {
      allMdx: { edges }
    }
  }
) => {
  const Guides = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <li key={edge.node.id}><GuideLink guide={edge.node}/></li>)

  return (
    <Layout>
      <Helmet>
        <title>Guides - Dreezy's Tech Hive</title>
        <meta name="description" content="Guides" />
      </Helmet>

      <section id="banner" className="style1">
        <div className="inner">
          <header className="major">
            <h1>Guides</h1>
          </header>
          <div className="content">
            <p>From coding to everything else.</p>
          </div>
        </div>
      </section>

      <div id="main">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h2>Index</h2>
            </header>
            <ul>
              {Guides}
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { order: DESC, fields: [ frontmatter___date ] },
      filter: { frontmatter: { type: { eq: "guide" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
