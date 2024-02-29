import React from 'react'
import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import Rootlayout from '../Layouts/Rootlayout';
import AuthLayout from '../Layouts/AuthLayout';
import AuthGuard from '../Guard/AuthGuard';
import SafeLayout from '../Layouts/SafeLayout';
import UserAuthGuard from '../Guard/UserAuthGuard';

// const Home = lazy(() => import("../pages/Home"));
// const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Attendance = lazy(() => import("../pages/Attendance"));
const History = lazy(() => import("../pages/History"));


const token = localStorage.getItem('token')

export const router = createBrowserRouter([
    {
        path: "*",
        element: token ? (<Navigate to="/attendance" replace />) : (<Navigate to="/login" replace />)
    },
    // {
    //     element: <UserAuthGuard />,
    //     children: [
    //         {
    //             element: <Rootlayout />,
    //             children: [
    //                 {
    //                     path: "/",
    //                     element: <Home />,
    //                 },
    //                 {
    //                     path: "/about",
    //                     element: <About />,
    //                 },
    //             ],
    //         },
    //     ],
    // },
    {
        element: <UserAuthGuard />,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "/login",
                        element: <Login />,
                    },
                    {
                        path: "/signup",
                        element: <Signup />,
                    }
                ]
            },
        ],
    },
    {
        element: <AuthGuard />,
        children: [
            {
                element: <SafeLayout />,
                children: [
                    {
                        path: "/attendance",
                        element: <Attendance />,
                    },
                    {
                        path: "/history",
                        element: <History />,
                    },
                ]
            },
        ],
    },
]);