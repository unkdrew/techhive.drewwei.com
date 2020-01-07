import Layout from 'components/layout'
import { graphql } from 'gatsby'
import React from 'react'

// `data` is injected by the GraphQL query at the bottom
export default function GuideTemplate({ data }) {
  const { markdownRemark } = data  // data.markdownRemark holds our input data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout fullMenu>
      <article id="main">
        <section className="wrapper style5">
          <div className="inner">
            <section>
              <header>
                <h2>{frontmatter.title}</h2>
                <p>{frontmatter.description}</p>
              </header>
            </section>
            <hr />
            <div dangerouslySetInnerHTML={{ __html: html }}/>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        description
      }
      html
    }
  }
`
