import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { TfiHandPointUp } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';


const Attendance = () => {
    const [checkIn, setCheckIn] = useState(false)
    const navigate = useNavigate()
    const [time, setTime] = useState(new Date());

    const handleNavigate = () => {
        navigate("/history")
    }


    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <div className='w-full mb-5 flex flex-col items-center justify-center'>
            <div>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'> {moment(time).format('h:mm A')}</p>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'>{moment().format('dddd')}</p>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'>{moment().format('MMM D, YYYY')}</p>
            </div>

            <div onClick={() => setCheckIn(!checkIn)} className={`mt-14 md:mt-4 h-[200px] w-[200px] md:h-[150px] md:w-[150px] gap-3 cursor-pointer flex flex-col justify-center items-center  rounded-full ${checkIn ? "bg-[#597BDD] shadow-cyan-500/50" : "bg-[#e25a87] shadow-cyan-500/50"}`}>
                <TfiHandPointUp className='text-white' size={55} />
                <p className='text-white uppercase text-xl md:text-sm'>{checkIn ? "Check In" : "Check Out"}</p>
            </div>

            <div className='mt-5'>
                <button onClick={handleNavigate} className='bgLinear text-white py-2 px-4 rounded-md transition-all ease-in-out hover:scale-[1.05]'>View History</button>
            </div>
        </div>
    )
}

export default Attendance