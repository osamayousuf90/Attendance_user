import React from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../../redux/slices/modalActions'

const Confirmation = ({ onChange, text }) => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setModal(""))
    }

    return (
        <div className='w-full flex flex-col justify-center items-center h-screen z-[999] fixed top-0 left-0 bg-[#3838386c]'>
            <div className='bg-[#FFFFFF] shadow-lg w-[350px] md:w-[90%] rounded-md py-4 px-8'>
                <p className='text-[#747C84] mt-2 font-medium text-lg'>{text}</p>

                <div className='flex justify-end items-center mt-5'>
                    <div className='flex gap-3'>
                        <button onClick={() => onChange("yes")} className='bg-[#159488] text-white rounded-sm text-sm px-4 py-1.5 transition-all duration-100 ease-in-out hover:bg-[#2d736c]'>Yes</button>
                        <button onClick={handleClose} className='bg-[#BEC4C9] shadow-sm text-black text-sm rounded-sm transition-all duration-100 ease-in-out hover:bg-[#999d9f] px-4 py-1.5' > Cancel</button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Confirmation