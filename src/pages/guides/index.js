import Layout from 'components/layout'
import Seo from 'components/Seo'
import { graphql } from 'gatsby'
import React from 'react'

const IndexPage = (
  {
    data: {
      allMdx: { edges }
    }
  }
) => {
  const Guides = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(
      edge => <li key={edge.node.id}><a href={`${edge.node.frontmatter.directory}${edge.node.frontmatter.path}`}>[{edge.node.frontmatter.date}] {edge.node.frontmatter.title}</a></li>
    )

  return (
    <Layout>
      <Seo
        title='Guides'
        description='Guides'
        path='/guides/'
      />

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
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "guide" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            directory
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
