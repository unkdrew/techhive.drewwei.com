import Layout from 'components/layout'
import Seo from 'components/Seo'
import { DiscussionEmbed } from 'disqus-react'
import { Link, graphql } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import React from 'react'
import config from 'root/config'

const Guide = ({ data, children }) => {
  const disqusConfig = {
    shortname: config.disqusShortName,
    config: { identifier: data.mdx.id }
  }

  return (
    <Layout fullMenu>
      <Seo
        title={data.mdx.frontmatter.title}
        description={data.mdx.frontmatter.description}
        path={data.mdx.frontmatter.path}
        article
      />

      <article id="main">
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <header>
                <h2>{data.mdx.frontmatter.title}</h2>
                <p>{data.mdx.frontmatter.description}</p>
              </header>
            </section>
            <ul className="tags">
              <li key="tags">
                <Link to="/tags" className="button icon fa-tags">Tags</Link>
              </li>
              {
                data.mdx.frontmatter.tags.map(
                  tag => (
                    <li key={tag}>
                        <Link to={`/tags/${kebabCase(tag)}/`} className="button special small">{tag}</Link>
                    </li>
                  )
                )
              }
            </ul>
            <hr />
            <div>
              {children}
            </div>
            <div>
              <DiscussionEmbed {...disqusConfig} />
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Guide

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        path
        title
        description
        tags
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      body
    }
  }
`
