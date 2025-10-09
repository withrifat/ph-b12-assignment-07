import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import Apps from '../Components/Apps/Apps';
import AppDetails from '../Components/AppsDetails/AppDetails';
import Installation from '../Components/Installation/Installation';
import InstalledApps from '../Components/InstalledApps/InstalledApps';
import Loader from '../Components/Loader/Loader';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'apps',
        element: <Apps />,
      },
      {
        path: 'appdetails/:id',
        element: <AppDetails />,
      },
      {
        path: 'installation',
        element: <Installation />,
      },
      {
        path: 'installed',
        element: <InstalledApps />,
      },
    ],
  },
]);

export default Router;
