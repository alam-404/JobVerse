import React from 'react'
import ReactDOM from 'react-dom/client'

// styling css
import './index.css'

// importing react router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

// Components
import Home from './components/Layout/Home.jsx'


// route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
