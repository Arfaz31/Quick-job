import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import Statistics from './Component/Statistics.jsx';
import AppliedJob from './Component/AppliedJob.jsx';
import Blog from './Component/Blog.jsx';
import JobDetails from './Component/JobDetails.jsx';

const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  children: [
    {
      path:'/',
     element: <Home/>,
     loader: () => fetch('jobfeatures.json')
    },
    {
      path: 'statistics',
      element:<Statistics/>
    },
    {
      path:'appliedjob',
      element:<AppliedJob/>,
      loader:() => fetch ('jobfeatures.json')
    },
    {
    path: 'job/:id',
    element: <JobDetails/>
    },
    {
      path:'blog',
      element:<Blog/>
    }
  ]
  
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
