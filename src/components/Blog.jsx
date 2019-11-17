import React from 'react'
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';

const Blog = (props) => {
    return (
        <Layout>
            <div>
                <Image
                    fluid={props.data.file.childImageSharp.fluid}
                    style={{
                        width: 200,
                        height: 200
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.pageContext.html
                    }}
                />
            </div>
        </Layout>
    )
}

export const ImageQuery = graphql`
query ImageQuery($image: String){
    file(relativePath:{eq:$image}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
}`

export default Blog;