import React from 'react';
import Layout from './layout';
import Image, { FluidObject } from 'gatsby-image'
import { graphql } from 'gatsby';

export interface BlogProps {
    pageContext: {
        html: string;
    }
    data: {
        file: {
            image: {
                fluid: FluidObject
            }
        }
    }
}

const Blog = (props: BlogProps) => {
    return (
        <Layout>
            <div>
                <Image
                    style={{ width: 200, height: 200 }}
                    fluid={props.data.file.image.fluid}
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
    query ImageQuery($image: String) {
        file(relativePath: {eq:$image}) {
            image: childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default Blog;