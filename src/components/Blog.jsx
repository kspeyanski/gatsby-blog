import React from 'react';
import Layout from './layout';

const Blog = (props) => {
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
