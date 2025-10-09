import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import Loader from './Components/Loader/Loader'
import { AppsDataProvider } from './Hooks/AppsDataContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppsDataProvider>
      <RouterProvider fallbackElement={<Loader />} router={Router} ></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        newestOnTop
        limit={1}
        theme="light"
      />
    </AppsDataProvider>
  </StrictMode>,
)
