import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const allPagesResp = useStaticQuery(graphql`
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
    }
  `);

  return (<Layout>
    <SEO title="Home" />
    <ul>
      {allPagesResp.allMarkdownRemark.nodes.map((node) => (
        <li key={node.frontmatter.title}>
          <Link to={node.frontmatter.path}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>)
}

export default IndexPage
