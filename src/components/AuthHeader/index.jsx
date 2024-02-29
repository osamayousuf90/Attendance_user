import React from 'react'
import { FaPowerOff } from "react-icons/fa6";

const AuthHeader = () => {

    const handleClear = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <div className='w-full py-4 px-10 flex justify-between items-center'>
            <div>
                <span className='text-white font-bold text-3xl md:text-xl'>Osama Yousuf</span>
            </div>
            <div className='flex gap-4'>
                <FaPowerOff onClick={handleClear} className='text-white cursor-pointer' size={35} />
            </div>
        </div>
    )
}

export default AuthHeader