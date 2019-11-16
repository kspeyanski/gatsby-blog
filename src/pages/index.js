import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from 'gatsby-image';

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.css';

const IndexPage = () => {
  const allPagesResp = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes 	{
          frontmatter {
            title
            path
            image
          }
        }
      }
      allImageSharp {
        nodes {
          parent {
            ...on File {
              relativePath
            }
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <ul className="list-unstyled">
        {allPagesResp.allMarkdownRemark.nodes.map((node, idx) => {
          return <li className="list-item" key={idx}>
            <Link className="card" to={node.frontmatter.path}>
              <Image fluid={allPagesResp.allImageSharp.nodes.find(i => i.parent.relativePath === node.frontmatter.image).fluid} style={{ width: 100, height: 100 }} />
              <h5 className="card-title">{node.frontmatter.title}</h5>
            </Link>
          </li>
        })}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default IndexPage
