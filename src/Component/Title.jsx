import React from 'react'

const Title = ({ text, className }) => {
    let pattern = /#([^#]+)#/g;
    let span = text.replace(pattern, "<h3 Class='one'>$1</h3>");
    return (
        <h1 className={`${className} font-bold text-title`} dangerouslySetInnerHTML={{ __html: span }}></h1 >
    )
}

export default Title