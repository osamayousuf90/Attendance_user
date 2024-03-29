import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/White logo-01.png";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginValidation } from "../../validationSchemas";
import { toast } from "react-toastify";
import { LoginApi } from "../../services";

const Login = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      const body = {
        ...values,
        deviceId: '12345'
      }
      const res = await LoginApi(body)
      if (res?.message === "Wrong Email" || res?.message === "Wrong Password") {
        toast.warning("Invalid Credential")
      }
      else {
        window.localStorage.setItem('token', res?.data?.token)
        window.localStorage.setItem('name', res?.data?.name)
        window.localStorage.setItem('userId', res?.data?.id)
        navigate("/attendance");
        toast.success("Logged in succesfully");
      }
    } catch (err) {
      toast.error('Some error occured')
    }
  };

  const handleSigup = () => {
    navigate("/signup");
  };

  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center">
      <div
        // style={{ height: "calc(100vh - 40px)" }}
        className="w-[600px] overflow-auto no-scrollbar p-10 sm:p-4 rounded-xl border-2 border-white md:w-full bg-transparent"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidation}
        >
          <Form>
            <div className="flex justify-center">
              <img src={logo} className="w-44" alt="" />
            </div>
            <h1 className="text-white mt-4 text-center text-3xl sm:text-xl">
              Attendance System
            </h1>
            <div className="flex flex-col my-2 w-full">
              <label className="text-white font-semibold my-2">Email</label>
              <Field
                autoComplete="off"
                className="pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500"
                placeholder="Enter Email"
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage
                className="text-white font-bold text-md mt-2 ml-2"
                name="email"
                component="div"
              />
            </div>

            <div className="flex flex-col relative my-2 w-full">
              <label className="text-white font-semibold my-2">Password</label>
              <Field
                autoComplete="off"
                className="pl-5 py-2.5 pr-5 outline-none  rounded-lg border-1 border-gray-400 placeholder:text-gray-500"
                placeholder="Enter Password"
                type={eye === false ? "password" : "text"}
                id="password"
                name="password"
              />
              {eye === false ? (
                <IoEyeOffSharp
                  className="absolute right-3 bottom-3.5 cursor-pointer"
                  onClick={() => setEye(!eye)}
                />
              ) : (
                <IoEyeSharp
                  className="absolute right-3 bottom-3.5 cursor-pointer"
                  onClick={() => setEye(!eye)}
                />
              )}
            </div>
            <ErrorMessage
              className="text-white font-bold text-md mt-2 ml-2"
              name="password"
              component="div"
            />

            <div className="text-center mt-5">
              <button
                type="submit"
                className="text-white uppercase font-semibold border-3 border-white py-2 w-full px-5 rounded-lg outline-none bg-transparent transition-all ease-in-out hover:scale-[1.05]"
              >
                Login
              </button>
              <div className="mt-3 flex justify-between items-center gap-3 px-4">
                <div className="h-[2px] w-full bg-white rounded-lg"></div>
                <p className="text-white font-semibold text-md">OR</p>
                <div className="h-[2px] w-full bg-white rounded-lg"></div>
              </div>
            </div>
          </Form>
        </Formik>
        <button
          onClick={handleSigup}
          className="text-white mt-2 uppercase font-semibold border-3 border-white py-2 w-full px-5 rounded-lg outline-none bg-transparent transition-all ease-in-out hover:scale-[1.05]"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
