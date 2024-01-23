import React from 'react'
import ReactDOM from 'react-dom/client'

// styling css
import './index.css'

// importing react router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

// custom loader
import { appliedJobsLoader } from './utils/customLoader.js'

// Components
import Home from './components/Layout/Home.jsx'
import JobDetailsPage from './components/Layout/JobDetailsPage.jsx'
import AppliedJobsPage from './components/Layout/AppliedJobsPage.jsx'
import Error404 from './components/ErrorPage/Error404.jsx'


// route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/job/:jobId',
    element: <JobDetailsPage />,
    loader: () => fetch('/jobs.json')
  },
  {
    path: '/applied',
    element: <AppliedJobsPage />,
    loader: async () => await appliedJobsLoader()
  },
  {
    path: "*",
    element: <Error404 />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
