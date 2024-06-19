import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Layout.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Pricing from './Components/Pricing/Pricing.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Test from './Components/Test/Test.jsx'
import Particular from './Components/ParticularMovie/Particular.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:'Dashboard/:path',
      element:<Dashboard/>
    },{
      path:'',
      element:<Home/>
    },
  {
    path:'login',
    element:<Login/>
  },
  {
    path:'signup',
    element:<Signup/>
  },
{
  path:'pricing',
  element:<Pricing/>
},
{
  path:'test/:userid',
  element:<Test/>
},{
  path:'app',
  element:<App/>
},{
  path:'particular',
  element:<Particular/>
}]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>

  </React.StrictMode>,
)
