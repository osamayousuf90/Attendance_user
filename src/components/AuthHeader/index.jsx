import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AuthHeader = () => {
    const location = useLocation()

    const handleClear = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <div className='w-full bg-black py-5 px-10 flex justify-between items-center'>
            <div>
                <span className='cursor-pointer text-white font-bold text-lg'>logined as John</span>
            </div>
            <div className='flex gap-4'>
                <Link to="/attendance" className={`${location?.pathname === "/attendance" ? "text-red-500" : "text-white"} `}>Attendance</Link>
                <Link to="/users" className={`${location?.pathname === "/users" ? "text-red-500" : "text-white"} `}>Users</Link>
                <Link onClick={handleClear} className={`${location?.pathname === "/logout" ? "text-red-500" : "text-white"} `}>Logout</Link>
            </div>
        </div>
    )
}

export default AuthHeader