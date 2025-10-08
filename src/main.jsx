import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import Loader from './Components/Loader/Loader'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider fallbackElement={<Loader />} router={Router} ></RouterProvider>
  </StrictMode>,
)
