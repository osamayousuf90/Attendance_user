import React from 'react'
import { FaPowerOff } from "react-icons/fa6";
import { setModal } from '../../redux/slices/modalActions';
import { useDispatch } from 'react-redux';

const AuthHeader = () => {
    const dispatch = useDispatch()
    const name = localStorage?.getItem('name')

    const handleOpenModal = () => {
        dispatch(setModal("exit"))
    }

    return (
        <div className='w-full py-4 px-10 flex justify-between items-center'>
            <div>
                <span className='text-white font-bold text-3xl capitalize md:text-xl'>{name}</span>
            </div>
            <div className='flex gap-4'>
                <FaPowerOff onClick={handleOpenModal} className='text-white cursor-pointer' size={35} />
            </div>
        </div>
    )
}

export default AuthHeader