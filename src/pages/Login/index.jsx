import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = () => {
        window.localStorage.setItem("token", 'true')
        // window.location.reload()
        navigate('/safePage')

    }

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='w-[50%] p-10 rounded-xl md:w-[100%] bg-black'>
                <h1 className='text-white text-3xl'>Welcome Please Login!</h1>
                <div className='flex flex-col my-4 w-full'>
                    <label className='text-white my-2'>Email</label>
                    <input className='p-2 outline-none border-none' type="email" placeholder='Enter Email' />
                </div>

                <div className='flex flex-col my-4 w-full'>
                    <label className='text-white my-2'>Password</label>
                    <input className='p-2 outline-none border-none' type="password" placeholder='Enter Password' />
                </div>

                <div className='text-center mt-5'>
                    <button onClick={handleLogin} className='text-white py-2 px-5 rounded-xl outline-none border-none bg-blue-400'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login