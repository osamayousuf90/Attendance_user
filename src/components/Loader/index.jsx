import React from 'react'
import loader from "../../assets/images/loader.gif"

const Loader = () => {
    return (
        <div className="flex justify-center items-center w-full h-screen ">
            <img src={loader} alt="" className="object-contain w-40" />
        </div>
    )
}
export default Loader