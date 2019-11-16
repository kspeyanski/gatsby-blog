import React from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';

const Blog = (props) => {
    console.log(props.data.file.image.fluid.src);
    return (
        <Layout>
            <div id="blog">
                <Image fluid={props.data.file.image.fluid} style={{ width: 200, height: 200 }} />
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.pageContext.html
                    }}
                />
            </div>
        </Layout>
    )
}

export const blogQuery = graphql`
query ImageQuery($image: String) {
    file(relativePath: {eq: $image}) {
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

export default Blog
