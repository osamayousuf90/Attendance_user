import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()
    return (
        <div className='w-full bg-black py-5 px-10 flex justify-between items-center'>
            <div>
                <span className='cursor-pointer text-white font-bold text-lg'>Osama</span>
            </div>
            <div className='flex gap-4'>
                <Link to="/" className={`${location?.pathname === "/" ? "text-red-500" : "text-white"} `}>Home</Link>
                <Link to="/about" className={`${location?.pathname === "/about" ? "text-red-500" : "text-white"} `}>About</Link>
                <Link to="/login" className={`${location?.pathname === "/login" ? "text-red-500" : "text-white"} `}>Login</Link>
            </div>
        </div>
    )
}

export default Header