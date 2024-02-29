import React from 'react'
import HistoryHeader from '../../components/HistoryHeader'
import HistoryList from '../../components/HistoryList'

const History = () => {
    return (
        <div className='w-full mb-5 flex flex-col'>
            <HistoryHeader />
            <HistoryList />
        </div>
    )
}

export default History