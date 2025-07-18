import React from 'react'
import { SlCalender } from "react-icons/sl";
import './header.css'
const Header = () => {
    return (
        <div className='flex justify-between'>
            <div>
                <h1 className='text-3xl font-bold'>Hello, Margaret</h1>
                <p className=''>Track Team progress here. You almost reach a goal!</p>
            </div>
            <div className='flex gap-2 items-center'>
                <p>16 May, 2023</p>
                <div className='icon-container-calender bg-gray-200'>
                    <SlCalender />
                </div>
            </div>
        </div>
    )
}

export default Header