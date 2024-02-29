import React from 'react'
import HistoryCard from '../HistoryCard'

const HistoryList = () => {
    return (
        <div style={{ height: "calc(100vh - 275px)" }} className='px-6 mt-4 overflow-auto w-full'>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />

        </div>
    )
}

export default HistoryList