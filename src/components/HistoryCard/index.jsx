import React from 'react'

const HistoryCard = () => {
    return (
        <div className='w-full my-1'>
            <label className='text-[#FDFBF4] my-3 font-semibold'>Date: 13/02/2024</label>
            <div className='bg-white py-3 flex justify-between items-center px-2 rounded-lg'>
                <div>
                    <p className='text-[#000000] my-[2px] font-bold sm:text-[10px] vSm:text-[8px] '>Date</p>
                    <p className='text-[#808080] font-medium sm:text-[10px] vSm:text-[8px] '>13/02/2024</p>
                </div>

                <div>
                    <p className='text-[#000000] my-[2px] font-bold sm:text-[10px] vSm:text-[8px] '>Check In</p>
                    <p className='text-[#808080] font-medium sm:text-[10px] vSm:text-[8px] text-center '>1:00 PM</p>
                </div>


                <div>
                    <p className='text-[#000000] my-[2px] font-bold sm:text-[10px] vSm:text-[8px] '>Check Out</p>
                    <p className='text-[#808080] font-medium vSm:text-[8px] sm:text-[10px] text-center '>9:29 PM</p>
                </div>

                <div>
                    <p className='text-[#000000] my-[2px] font-bold sm:text-[10px] vSm:text-[8px]'>Total Time</p>
                    <p className='text-[#808080] font-medium sm:text-[10px] vSm:text-[8px] text-center '>8H 29M</p>
                </div>
            </div>
        </div>
    )
}

export default HistoryCard