import React from 'react'
import './chatSection.css'

const Sender = ({ message }) => {
    return (
        <div className='sender bg-blue-200 text-sm'>{message}</div>
    )
}

export default Sender