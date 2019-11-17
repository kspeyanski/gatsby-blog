import React from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

export interface BlogPageContext {
    html: string;
    frontmatter: {
        title: string;
        path: string;
    }
}

export interface BlogProps {
    pageContext: BlogPageContext;
    data: {
        file: {
            image: {
                fluid: FluidObject;
            }
        }

    }
}

const Blog = (props: BlogProps) => {
    return (
        <Layout>
            <div>
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

export const ImageQuery = graphql`
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