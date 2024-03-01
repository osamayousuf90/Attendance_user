import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../../redux/slices/modalActions'
import moment from 'moment'
import checkedIcon from "../../assets/images/checked.gif"

const CheckedConfirmation = ({ text, status }) => {
    const dispatch = useDispatch()
    const [time, setTime] = useState(new Date());

    const handleClose = () => {
        dispatch(setModal(""))
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);


    return (
        <div className='w-full flex flex-col justify-center items-center h-screen z-[999] fixed top-0 left-0 bg-[#3838386c]'>
            <div className={`${status ? "checkInGradient" : "checkOutGradient"}  shadow-lg w-[350px] md:w-[90%] rounded-lg py-4 px-8`}>
                <div className='flex justify-center mt--1'>
                    <img src={checkedIcon} className='w-20' alt="checkedIcon" />
                </div>
                <p className='text-white text-center mt-2 font-medium text-lg'>{text}</p>
                <p className='text-white text-center mt-2 font-medium text-lg'>{moment(time).format('h:mm A')}</p>
                <p className='text-white text-center mt-2 font-medium text-lg'>{moment().format('MMM D, YYYY')}</p>
                <div className='text-center mt-4'>
                    <button onClick={handleClose} className='bg-transparent outline-none shadow-sm border-1 w-[80%] border-white text-white text-sm rounded-sm transition-all duration-100 ease-in-out hover:bg-[#999d9f] px-4 py-2'>Okay</button>
                </div>
            </div>
        </div >
    )
}

export default CheckedConfirmation