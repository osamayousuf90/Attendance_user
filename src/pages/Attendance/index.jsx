import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { TfiHandPointUp } from "react-icons/tfi";
import { useNavigate } from 'react-router-dom';
import Confirmation from '../../components/Modals/Confirmation';
import { useSelector } from 'react-redux';
import CheckedConfirmation from '../../components/Modals/CheckedConfirmation';
import { setModal } from '../../redux/slices/modalActions';
import { useDispatch } from 'react-redux';
import { GettingCheckin } from '../../services';

const Attendance = () => {
    const [checkIn, setCheckIn] = useState(false)
    const navigate = useNavigate()
    const [time, setTime] = useState(new Date());
    const { modal } = useSelector((state) => state?.modalActions)
    const dispatch = useDispatch()
    const userId = localStorage.getItem("userId")

    // getting user check in status
    const gettingUserCheckIn = async () => {
        const body = {
            userId: parseInt(userId)
        }
        const res = await GettingCheckin(body)
        console.log("getting checking user ====>", res)
    }


    const handleNavigate = () => {
        navigate("/history")
    }


    const handleCheckIn = () => {
        setCheckIn(!checkIn)
        dispatch(setModal("confirmation"))
    }

    const handleConfirm = (res) => {
        if (res === "yes") {
            window.localStorage.clear()
            window.location.reload()
        }
    }


    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        gettingUserCheckIn()
        // eslint-disable-next-line
    }, [])


    return (
        <div className='w-full mb-5 flex flex-col items-center justify-center'>
            {modal === "exit" && <Confirmation text="Are you sure?" onChange={handleConfirm} />}
            {modal === "confirmation" && <CheckedConfirmation status={checkIn} text={checkIn ? "Your Check-Out time is" : "Your Check-In time is"} />}
            <div>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'> {moment(time).format('h:mm A')}</p>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'>{moment().format('dddd')}</p>
                <p className='text-5xl my-4 md:my-0 md:text-2xl text-white text-center font-semibold'>{moment().format('MMM D, YYYY')}</p>
            </div>

            <div onClick={handleCheckIn} className={`mt-14 md:mt-4 h-[200px] w-[200px] md:h-[150px] md:w-[150px] gap-3 cursor-pointer flex flex-col justify-center items-center  rounded-full ${checkIn ? "bg-[#597BDD] shadow-cyan-500/50" : "bg-[#e25a87] shadow-cyan-500/50"}`}>
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