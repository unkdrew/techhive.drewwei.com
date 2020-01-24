import Layout from 'components/layout'
import { DiscussionEmbed } from 'disqus-react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import config from 'root/config'

// `data` is injected by the GraphQL query at the bottom
export default function GuideTemplate({ data }) {
  const disqusConfig = {
    shortname: config.disqusShortName,
    config: { identifier: data.mdx.id }
  }

  console.log("FIND ME: "+config.disqusShortName);

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
      }
      body
    }
  }
`
