import React from 'react';

const Blog = (props) => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: props.pageContext.html
            }}
        />
    )
}

export default Blog
