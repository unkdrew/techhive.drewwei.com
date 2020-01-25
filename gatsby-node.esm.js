import kebabCase from 'lodash/kebabCase'

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const guideTemplate = path.resolve('src/templates/GuideTemplate.js')
  const tagTemplate = path.resolve('src/templates/TagTemplate.js')

  function createPageForPageType(node, type, template) {
    if (type == node.frontmatter.type) {
      createPage(
        {
          path: node.frontmatter.path,
          component: template,
          context: {}
        }
      )
    }
  }

  function createPageForTag(tag, template) {
    createPage(
      {
        path: `/tags/${kebabCase(tag)}/`,
        component: template,
        context: {
          tag
        }
      }
    )
  }

  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              path
              type
              tags
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
