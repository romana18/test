import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <div className='bg-black  p-4 text-3xl text-center'>
      <ul>
        <li>
          <NavLink to="/home" className={({isActive})=>
            `${isActive?"text-orange-500":"text-white"}`
          }>
    Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/learn" className={({isActive})=>
            `${isActive?"text-orange-500":"text-white"}`
          } >
            Movies 
          </NavLink>
        </li>
      </ul>

    </div>
  )
}

export default Header