import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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
  }`)
  return (<Layout>
    <SEO title="Home" />

    <ul>
      {resp.allMarkdownRemark.nodes.map((node) => {
        return (<li><Link to={node.frontmatter.path}>{node.frontmatter.title}</Link></li>)
      })}
    </ul>
  </Layout>)
}

export default IndexPage
