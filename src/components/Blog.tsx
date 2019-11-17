import React from 'react';

export interface BlogProps {
    pageContext: {
        html: string;
    }
}

const Blog = (props: BlogProps) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: props.pageContext.html
            }}
        />
    )
}
export default Blog;