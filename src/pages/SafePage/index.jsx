import React from 'react'

const SafePage = () => {

    const handleClear = () => {
        window.localStorage.clear()
        window.location.reload()
    }

    return (
        <div className='w-full'>
            <h1 className='text-black'>Yes i am logged in and i am safe</h1>
            {/* <button className='bg-black text-white p-2 rounded-lg' onClick={handleClear}>Logout</button> */}
        </div>
    )
}

export default SafePage