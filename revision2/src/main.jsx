import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Team from './Components/Team.jsx'
import Contacts from './Components/Contacts.jsx'
import Github from './Components/Github.jsx'
import User from './Components/User.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[{
      path:'',
      element:<Home/>
    },{
      path:'/team',
      element:<Team/>
    },
    {
      path:'/Contact',
      element:<Contacts/>
    },
    {
      path:'/github/:userna',
      element:<Github/>
    },
    {
      path:'/user/:id',
      element:<User/>
    }
  
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
