import React from 'react';
import Layout from './layout';

export interface BlogPageContext {
    html: string;
    frontmatter: {
        title: string;
        path: string;
    }
}

export interface BlogProps {
    pageContext: BlogPageContext
}

const Blog = (props: BlogProps) => {
    return (
        <Layout>
            <div
                dangerouslySetInnerHTML={{
                    __html: props.pageContext.html
                }}
            />
        </Layout>
    )
}

export default Blog