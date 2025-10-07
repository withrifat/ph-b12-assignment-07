import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Apps from '../Components/Apps/Apps';
import Installation from '../Components/Installation/Installation';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
        loader: () => fetch('/data.json'),
      },
      {
        path: 'apps',
        loader: () => fetch('/data.json'),
        element: <Apps />,
      },
      {
        path: 'installation',
        element: <Installation />,
      },
    ],
  },
]);

export default Router;
