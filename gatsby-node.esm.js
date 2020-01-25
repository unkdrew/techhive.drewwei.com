import kebabCase from 'lodash/kebabCase'

const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
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

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const guideTemplate = path.resolve('src/templates/GuideTemplate.js')
  const tagTemplate = path.resolve('src/templates/TagTemplate.js')

  function createPageForPageType(node, type, template) {
    if (type == node.frontmatter.type) {
      const { description, path, title } = node.frontmatter
      createPage(
        {
          path,
          component: template,
          context: {
            description,
            title
          }
        }
      )
      console.log(`  Created page: ${path}`)
    }
  }

  function createPageForTag(tag, template) {
    const path = `/tags/${kebabCase(tag)}/`
    createPage(
      {
        path,
        component: template,
        context: {
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
        tags: group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(
    result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }

      result.data.allMdx.edges.forEach(
        ({ node }) => {
          createPageForPageType(node, 'guide', guideTemplate)
        }
      )

      result.data.allMdx.tags.forEach(
        (tag) => {
          createPageForTag(tag.fieldValue, tagTemplate)
        }
      )
    }
  )
}
