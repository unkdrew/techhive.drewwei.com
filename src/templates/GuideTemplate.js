import Layout from 'components/layout'
import { DiscussionEmbed } from 'disqus-react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import kebabCase from 'lodash/kebabCase'
import React from 'react'
import { Helmet } from 'react-helmet'
import config from 'root/config'

export default function GuideTemplate({ pageContext, data }) {
  const { description, title } = pageContext

  const disqusConfig = {
    shortname: config.disqusShortName,
    config: { identifier: data.mdx.id }
  }

  return (
    <Layout fullMenu>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

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
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
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

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      id
      frontmatter {
        path
        title
        description
        tags
      }
      body
    }
  }
`
