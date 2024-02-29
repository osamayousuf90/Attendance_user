import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";


const HistoryHeader = () => {

    const handleBack = () => {
        window.history.back()
    }

    return (
        <div className='bgLinear flex justify-between relative items-center flex-wrap vSm:justify-center gap-2 w-full py-4 px-10 rounded-b-2xl'>
            <div>
                <IoArrowBackCircleOutline onClick={handleBack} className='text-white cursor-pointer text-5xl transition-all ease-in-out hover:scale-[1.05]' />
            </div>
            <div>
                <p className='text-3xl md:text-xl text-white'>Attendance History</p>
            </div>
            <div></div>
        </div>
    )
}

export default HistoryHeader