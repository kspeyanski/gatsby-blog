import React from 'react';
import Layout from './layout';

export interface BlogProps {
    pageContext: {
        html: string;
    }
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

export default Blog;