import React from 'react'

const Links = ({ children, label }) => {
    return (
        <li className="flex gap-2 text-gray-600 hover:text-gray-900 hover:font-semibold">{children}<a href=""> {label}</a></li>
    )
}

export default Links