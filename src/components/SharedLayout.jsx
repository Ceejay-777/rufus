import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Chat from './Chat'
import BackContainer from './BackContainer'

const SharedLayout = () => {
  return (
    <div>
        <BackContainer />
        <NavBar />
        <Chat />
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout
