import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                Component: <Home/>,
            },

        ]
    }
])
// const Router = createBrowserRouter([
//     {
//         path: "/",
//         element: <MainLayout/>,
//         errorElement: <ErrorPage/>,
//         children: [
//             {
//                 index: true,
//                 Component: <Home/>,
//             },

//         ]
//     }
// ])

export default Router;