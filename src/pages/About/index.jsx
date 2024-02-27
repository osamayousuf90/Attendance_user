import React from 'react'
import bannerImg from "../../assets/images/Marketplace-Assets-14.png";

const About = () => {
    return (
        <div className='w-full'>
            <div className=' grid grid-cols-2 md:grid-cols-1'>
                <div>
                    <img src={bannerImg} className='w-[80%] md:w-full' alt="bannerImg" />
                </div>
                <div>
                    <h1 className='text-5xl md:text-3xl md:text-center'>Hey This is about page!</h1>
                    <p className='my-2 md:text-center'>Lorem ispum sasdf sdafdsa asdfasf </p>
                </div>
            </div>
        </div>
    )
}

export default About