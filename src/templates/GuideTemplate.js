import Layout from 'components/layout'
import { graphql } from 'gatsby'
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// `data` is injected by the GraphQL query at the bottom
export default function GuideTemplate({ data }) {
  return (
    <Layout fullMenu>
      <article id="main">
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <header>
                <h2>{data.mdx.frontmatter.title}</h2>
                <p>{data.mdx.frontmatter.description}</p>
              </header>
            </section>
            <hr />
            <div>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
      frontmatter {
        path
        title
        description
      }
      body
    }
  }
`
