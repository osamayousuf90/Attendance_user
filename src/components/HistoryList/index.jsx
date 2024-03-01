import React from 'react'
import HistoryCard from '../HistoryCard'

const HistoryList = () => {
    return (
        <div className='px-6 historyScrollHeight mt-4 sm:mt-0 overflow-auto w-full'>
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