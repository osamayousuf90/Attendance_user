import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../../assets/images/White logo-01.png"
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signupValidation } from '../../validationSchemas';
import { MdOutlineDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import { toast } from 'react-toastify';
import { SignUp } from '../../services';

const Signup = () => {
    const navigate = useNavigate()
    const [eye, setEye] = useState(false)
    const [eye2, setEye2] = useState(false)
    const [img, setImg] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qD5w-Nx-KaaUOdVaFc3dnXL0bMsn3ccBuZPC1VhgaA&s")

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    };

    const onSubmit = async (values) => {
        try {
            if (img) {
                const body = {
                    ...values,
                    image: img,
                    deviceId: '12345',
                }
                const res = await SignUp(body)
                if (res?.message === "Email Already Exists") {
                    toast.warning("Email Already Exists")
                } else if (res?.message === "user registered successfully") {
                    navigate('/login')
                    toast.success("Signup succesfully")
                }
            }
        } catch (err) {
            toast.error("Some error occured")
        }
    };

    const handleLoginRoute = () => {
        navigate("/login")
    }

    const handleImg = (e) => {
        const file = e?.target?.files[0]
        setImg(URL.createObjectURL(file))
    }


    return (
        <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
            <div style={{ height: "calc(100vh - 180px)" }} className='w-[600px] overflow-auto p-10 sm:p-4 rounded-xl border-2 border-white md:w-[100%] bg-transparent'>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={signupValidation}>
                    <Form>
                        <div className='flex justify-center'>
                            <img src={logo} className='w-44' alt="" />
                        </div>
                        <h1 className='text-white mt-4 text-center text-3xl sm:text-xl'>Welcome please singup</h1>

                        <div className='relative flex flex-col items-center w-full mt-4 '>
                            <div className='w-[200px] relative h-[200px] md:w-[140px] md:h-[140px] bg-[#B6B6B6] flex justify-center items-center mt-2 rounded-full'>
                                {img && <img src={img} alt='sdf' className='h-full w-full rounded-full object-contain' />}
                                {!img &&
                                    <input accept={'image/*'} type="file" className='h-full w-full z-[99] opacity-0' onChange={(e) => handleImg(e)} />
                                }
                                {!img &&
                                    <div className='text-center absolute flex justify-center w-full'>
                                        {!img && <CgProfile size={65} className=' rounded-md text-white' />}
                                    </div>
                                }
                                {img && <MdOutlineDelete onClick={() => setImg('')} size={35} className='absolute cursor-pointer top-2 p-2 right-4 rounded-full bg-white text-red-700' />}
                                {!img && <IoMdAddCircleOutline size={45} className='absolute cursor-pointer bottom-2 p-2 right-2 rounded-full bg-white text-red-700' />}
                            </div>
                        </div>
                        {!img && <div className='text-white font-bold text-center text-md mt-2' name="name" component="div">Profile image is required</div>}

                        <div className='flex flex-col my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Name</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Name' type="text" id="name" name="name" />
                            <ErrorMessage className='text-white font-bold text-md mt-2 ml-2' name="name" component="div" />
                        </div>

                        <div className='flex flex-col my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Email</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Email' type="email" id="email" name="email" />
                            <ErrorMessage className='text-white font-bold text-md mt-2 ml-2' name="email" component="div" />
                        </div>

                        <div className='flex flex-col my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Phone Number</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Phone Number' type="text" id="phone" name="phone" />
                            <ErrorMessage className='text-white font-bold text-md mt-2 ml-2' name="phone" component="div" />
                        </div>

                        <div className='flex flex-col relative my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Password</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Password' type={eye === false ? "password" : "text"} id="password" name="password" />
                            {eye === false ? <IoEyeOffSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye(!eye)} /> : <IoEyeSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye(!eye)} />}
                        </div>
                        <ErrorMessage className='text-white font-bold text-md mt-2 ml-2' name="password" component="div" />

                        <div className='flex flex-col relative my-2 w-full'>
                            <label className='text-white font-semibold my-2'>Confirm Password</label>
                            <Field autoComplete="off" className='pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500' placeholder='Enter Confirm Password' type={eye2 === false ? "password" : "text"} id="confirmPassword" name="confirmPassword" />
                            {eye2 === false ? <IoEyeOffSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye2(!eye2)} /> : <IoEyeSharp className='absolute right-3 bottom-3.5 cursor-pointer' onClick={() => setEye2(!eye2)} />}
                        </div>
                        <ErrorMessage className='text-white font-bold text-md mt-2 ml-2' name="confirmPassword" component="div" />

                        <div className='text-center mt-5'>
                            <button className='text-white mt-2 uppercase font-semibold border-3 border-white py-2 w-full px-5 rounded-lg outline-none bg-transparent transition-all ease-in-out hover:scale-[1.05]'>Signup</button>
                            <div className='mt-3 flex justify-between items-center gap-3 px-4'>
                                <div className='h-[2px] w-full bg-white rounded-lg'></div>
                                <p className='text-white font-semibold text-md'>OR</p>
                                <div className='h-[2px] w-full bg-white rounded-lg'></div>
                            </div>
                        </div>
                    </Form>
                </Formik>
                <button onClick={handleLoginRoute} className='text-white sm:text-[12px] mt-2 uppercase font-semibold border-3 border-white py-2 w-full px-5 rounded-lg outline-none bg-transparent transition-all ease-in-out hover:scale-[1.05]'>Already have an account?</button>
            </div>

        </div>
    )
}

export default Signup