import Layout from 'components/layout'
import Seo from 'components/Seo'
import { graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import PropTypes from 'prop-types'
import React from 'react'

const TagsPage = (
  {
    data: {
      allMdx: { group },
      site: {
        siteMetadata: { title }
      }
    }
  }
) => (
  <Layout fullMenu>
    <Seo
      title='Tags'
      description='Tags'
      path='/tags/'
    />

    <article id="main">
      <section className="wrapper style5">
        <div className="inner">
          <section>
            <header>
              <h2>Tags</h2>
            </header>
          </section>
          <hr />
          <div>
            <ul className="tags">
              {
                group.sort(
                  function(a, b) {
                    const diff = b.totalCount - a.totalCount;
                    return diff === 0 ? a.fieldValue.localeCompare(b.fieldValue) : diff
                  }
                ).map(
                  tag => (
                    <li key={tag.fieldValue}><a href={`/tags/${kebabCase(tag.fieldValue)}/`} className="button special small">{tag.fieldValue} ({tag.totalCount})</a></li>
                  )
                )
              }
            </ul>
          </div>
        </div>
      </section>
    </article>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape(
    {
      allMdx: PropTypes.shape(
        {
          group: PropTypes.arrayOf(
            PropTypes.shape(
              {
                fieldValue: PropTypes.string.isRequired,
                totalCount: PropTypes.number.isRequired
              }
            ).isRequired
          )
        }
      ),
      site: PropTypes.shape(
        {
          siteMetadata: PropTypes.shape(
            {
              title: PropTypes.string.isRequired
            }
          )
        }
      )
    }
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
