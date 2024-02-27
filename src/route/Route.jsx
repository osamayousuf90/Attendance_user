import React from 'react'
import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Rootlayout from '../Layouts/Rootlayout';

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));


export const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Navigate to={"Login"} />
    // },
    {
        path: "*",
        element: <Navigate to={"/"} />
    },
    {
        // element: <AuthGuard />,
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
]);