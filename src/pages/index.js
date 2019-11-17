import React from "react"
import Image from 'gatsby-image';
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss';

const IndexPage = () => {
  const resp = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
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

  return (<Layout>
    <SEO title="Home" />
    <ul className="list-unstyled">
      {resp.allMarkdownRemark.nodes.map((node, idx) => (
        <li className="list-item" key={idx}>
          <Link className="card" to={node.frontmatter.path}>
            <Image
              style={{
                width: 100,
                height: 100
              }}
              fluid={resp.allImageSharp.nodes.find(i => i.parent.relativePath === node.frontmatter.image).fluid}
            />
            <h5 className="card-title">  {node.frontmatter.title}</h5>
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>)
}

export default IndexPage
