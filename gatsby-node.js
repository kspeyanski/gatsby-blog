/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async (api) => {
  const BlogComponent = path.resolve('./src/components/Blog.jsx');
  const resp = await api.graphql(`
    {
        allMarkdownRemark {
          nodes {
            html
            frontmatter {
              title
              path
              image
            }
          }
        }
      }
    `)

  Promise.all(resp.data.allMarkdownRemark.nodes.map(async (node) => {
    await api.actions.createPage({
      path: node.frontmatter.path,
      context: { ...node, image: node.frontmatter.image },
      component: BlogComponent
    })
  }))
}
