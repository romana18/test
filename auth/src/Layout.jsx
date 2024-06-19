import React from 'react'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import TmdbContextProvider from './Context/TmdbContextProvider'
function Layout() {
  return (
    <TmdbContextProvider>
      <Nav />
      <Outlet />
      <Footer />
    </TmdbContextProvider>
  )
}

export default Layout