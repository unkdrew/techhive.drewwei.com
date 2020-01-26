import GuideLink from 'components/GuideLink'
import Layout from 'components/layout'
import SEO from 'components/SEO'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Tags = ({ pageContext, data }) => {
  const { pagePath, tag, title } = pageContext
  const { edges } = data.allMdx

  return (
    <Layout fullMenu>
      <SEO
        title={title}
        description={title}
        path={pagePath}
      />

      <article id="main">
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <header>
                <h2 className="button icon fa-tag disabled">{tag}</h2>
              </header>
            </section>
            <hr/>
            <ul>
              {
                edges.map(
                  ({ node }) => {
                    return (
                      <li key={node.id}>
                        <GuideLink guide={node} />
                      </li>
                    )
                  }
                )
              }
            </ul>
          </div>
        </section>
      </article>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          id
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
