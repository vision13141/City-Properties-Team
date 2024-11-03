import React from 'react'

const Paragraph = ({ className, text }) => {
    return (
        <p className={`${className} text-prh text-base`}>{text}</p>
    )
}

export default Paragraph