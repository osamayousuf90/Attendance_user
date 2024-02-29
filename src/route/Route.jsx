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

const Login = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../pages/Login")), 1300);
    });
});

const Signup = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../pages/Signup")), 1300);
    });
});

const Attendance = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../pages/Attendance")), 1300);
    });
});

const History = lazy(() => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(import("../pages/History")), 1300);
    });
});

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