import React from 'react'
import HistoryHeader from '../../components/HistoryHeader'
import HistoryList from '../../components/HistoryList'
import Confirmation from '../../components/Modals/Confirmation'
import { useSelector } from 'react-redux'

const History = () => {
    const { modal } = useSelector((state) => state?.modalActions)

    const handleConfirm = (res) => {
        if (res === "yes") {
            window.localStorage.clear()
            window.location.reload()
        }
    }

    return (
        <div className='w-full mb-5 sm:mb-0 flex flex-col'>
            {modal === "exit" && <Confirmation text="Are you sure?" onChange={handleConfirm} />}
            <HistoryHeader />
            <HistoryList />
        </div>
    )
}

export default History