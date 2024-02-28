import React from 'react'
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Rootlayout from '../Layouts/Rootlayout';
import AuthLayout from '../Layouts/AuthLayout';
import AuthGuard from '../Guard/AuthGuard';
import SafeLayout from '../Layouts/SafeLayout';
import UserAuthGuard from '../Guard/UserAuthGuard';

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const SafePage = lazy(() => import("../pages/SafePage"));
const Users = lazy(() => import("../pages/Users"));


const token = localStorage.getItem('token')

export const router = createBrowserRouter([
    {
        path: "*",
        element: token ? (<Navigate to="/safePage" replace />) : (<Navigate to="/" replace />)
    },
    {
        element: <UserAuthGuard />,
        children: [
            {
                element: <Rootlayout />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: "/about",
                        element: <About />,
                    },
                ],
            },
        ],
    },
    {
        // element: <UserAuthGuard />,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "/login",
                        element: <Login />,
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
                        path: "/safePage",
                        element: <SafePage />,
                    },
                    {
                        path: "/users",
                        element: <Users />,
                    },
                ]
            },
        ],
    },
]);