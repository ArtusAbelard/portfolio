import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Acid from './pages/Acid.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App></App>,
    errorElement: Error()
    
  },
  {
    path: "/acid",
    element: <Acid></Acid>,
    errorElement: Error()
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
