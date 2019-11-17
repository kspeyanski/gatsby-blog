/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = async (api) => {
    const BlogTemplate = path.resolve('./src/components/Blog.tsx');
    const resp = await api.graphql(`
    {
        allMarkdownRemark {
            nodes {
                html
                frontmatter {
                    title
                    path
                }
            }
        }
    }`)

    Promise.all(resp.data.allMarkdownRemark.nodes.map(async (node) => {
        await api.actions.createPage({
            path: node.frontmatter.path,
            context: node,
            component: BlogTemplate
        })
    }))
}