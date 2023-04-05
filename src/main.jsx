import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ErrorPage from './error/error-page'
import Orders from './components/Orders/Orders';
import Review from './components/Review/Review.jsx'
import Inventory from './components/Inventory/Inventory'
import Login from './components/Login/Login';
import loadProducts from './loadProducts.js'
import Shop from './components/Shop/Shop'
import './index.css'



const route = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <Shop />
    },
    {
      path: 'shop',
      element: <Shop />
    },

    {
      path: 'order',
      element: <Orders />
    },
    {
      path: 'order-review',
      element: <Review />,
      loader: loadProducts
    },
    {
      path: 'inventory',
      element: <Inventory />
    },
    {
      path: 'login',
      element: <Login />
    }
  ]

}]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
