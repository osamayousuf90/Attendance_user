import React, { useState } from 'react'
import { TfiHandPointUp } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';


const Attendance = () => {
    const [checkIn, setCheckIn] = useState(false)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/history")
    }

    return (
        <div className='w-full mb-5 flex flex-col items-center justify-center'>
            <div>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'>05:19 PM</p>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'>Wednesday</p>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'>Feb 28, 2024</p>
            </div>

            <div onClick={() => setCheckIn(!checkIn)} className={`mt-14 md:mt-4 h-[200px] w-[200px] md:h-[150px] md:w-[150px] gap-3 cursor-pointer flex flex-col justify-center items-center  rounded-full ${checkIn ? "bg-[#597BDD] shadow-cyan-500/50" : "bg-[#e25a87] shadow-cyan-500/50"}`}>
                <TfiHandPointUp className='text-white' size={55} />
                <p className='text-white uppercase text-xl md:text-sm'>{checkIn ? "Check In" : "Check Out"}</p>
            </div>

            <div className='mt-5'>
                <button onClick={handleNavigate} className='bg-[#DA4D56] text-white py-2 px-4 rounded-md transition-all ease-in-out hover:scale-[1.05]'>View History</button>
            </div>
        </div>
    )
}

export default Attendance