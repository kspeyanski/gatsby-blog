import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const resp = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            path
          }
        }
      }
    }
  `)

  return (<Layout>
    <SEO title="Home" />
    <ul>
      {resp.allMarkdownRemark.nodes.map((node) => (
        <li>
          <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>)
}

export default IndexPage
