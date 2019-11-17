import React from 'react';

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
        <div
            dangerouslySetInnerHTML={{
                __html: props.pageContext.html
            }}
        />
    )
}

export default Blog