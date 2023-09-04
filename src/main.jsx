import React from 'react'
import ReactDOM from 'react-dom/client'
import Rick from './Rick.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Character from './Character.jsx'

const routes = createBrowserRouter([
  {
    path: '/character/:id',
    element: <Character/>
  },
  {
    path: '/',
    element: <Rick/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={routes}/>
  </React.StrictMode>,
)
