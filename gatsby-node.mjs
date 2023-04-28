import { createFilePath } from 'gatsby-source-filesystem'
import _ from 'lodash'
import { resolve } from 'path'

export const onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if ('Mdx' === node.internal.type) {
    const slug = createFilePath({node, getNode, basePath: 'markdown-pages'})
    createNodeField(
      {
        node,
        name: 'slug',
        value: slug
      }
    )
  }
}

export const createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const tagTemplate = resolve('src/templates/TagTemplate.js')

  function createPageForTag(tag, template) {
    const path = `/tags/${_.kebabCase(tag)}/`
    createPage(
      {
        path,
        component: template,
        context: {
          pagePath: path,
          tag,
          title: `Tag: ${tag}`
        }
      }
    )
    console.log(`  Created page: ${path}`)
  }

  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              description
              path
              title
              type
            }
          }
        }
        tags: group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
        }
      }
    }
  `).then(
    result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMdx.tags.forEach(
        (tag) => {
          createPageForTag(tag.fieldValue, tagTemplate)
        }
      )
    }
  )
}
