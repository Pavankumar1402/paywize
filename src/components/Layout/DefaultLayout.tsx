import React from 'react'
import SideBar from '../SideBar'
import ChatSection from '../ChatComponents/ChatSection'

const DefaultLayout = ({ children }) => {
    return (
        <div className='flex w-screen'>
            <div className=''>
                <SideBar />
            </div>
            <div className=''>
                {children}
            </div>
            <div className=''>
                <ChatSection />
            </div>
        </div>
    )
}

export default DefaultLayout