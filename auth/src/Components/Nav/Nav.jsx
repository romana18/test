import React, { useState } from 'react'
import { Fragment } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Search from '../Search/Search'

function Nav() {
  const [what, setWhat] = useState("Search")
  const history = useNavigate()

  const handleSearch = () => {
    if (what === "Search") {
      history('/')
    } else if (what === "Pricing" || what === "pricing") {
      history(`/${what.toLowerCase()}`)
    }
    else if (what === "Movies") {
      history('/movie')
    }
    else if (what === "TV series") {
      history('/tv')
    }
    else {
      history(`/dashboard/${what.toLowerCase()}`)
    }
  }

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  }
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://i.ibb.co/BtMkkNq/red-1618916-1280.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FilmFlow</span>
          </NavLink>

          {/* <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <input type="text" onChange={(e) => setWhat(e.target.value)} onKeyDown={handlekeydown} className="px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-md w-96" placeholder={what} />
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSearch}  >Search</button>
          </div> */}
          <Search />

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className={({ isActive, isPending }) =>
                  isPending ? "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : isActive ? "block py-2 px-3 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : ""
                } >Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/movie" className={({ isActive, isPending }) =>
                  isPending ? "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : isActive ? "block py-2 px-3 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : ""
                }>Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className={({ isActive, isPending }) =>
                  isPending ? "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : isActive ? "block py-2 px-3 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : ""
                }>Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/login" className={({ isActive, isPending }) =>
                  isPending ? "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : isActive ? "block py-2 px-3 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : ""
                }>Login</NavLink>
              </li>

              <li>
                <NavLink to="/signup" className={({ isActive, isPending }) =>
                  isPending ? "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : isActive ? "block py-2 px-3 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" : ""
                }>Sign Up</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav