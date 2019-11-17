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
        nodes {
          html
          frontmatter {
            title
            path
            image
          }
        }
      }
      allImageSharp {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
          }
          parent {
            ...on File {
              relativePath
            }
          }
        }
      }
    }
  `);

  return (<Layout>
    <SEO title="Home" />
    <ul className="list-unstyled">
      {allPagesResp.allMarkdownRemark.nodes.map((node) => (
        <li className="list-item" key={node.frontmatter.title}>
          <Link className="card" to={node.frontmatter.path}>
            <Image
              style={{ width: 100, height: 100 }}
              fluid={allPagesResp.allImageSharp.nodes.find(i => i.parent.relativePath === node.frontmatter.image).fluid}
            />
            <h5 className="card-title">{node.frontmatter.title}</h5>
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>)
}

export default IndexPage
