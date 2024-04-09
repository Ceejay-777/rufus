import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Chat from './Chat'
import BackContainer from './BackContainer'
import TopContainer from './TopContainer'

const SharedLayout = () => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if(infoOpen && chatOpen) {
      setInfoOpen(false)
    }
  }, [chatOpen])

  useEffect(() => {
    if(infoOpen && chatOpen) {
      setChatOpen(false)
    }
  }, [infoOpen])

  return (
    <div>
        <BackContainer />
        {(infoOpen || chatOpen) && <TopContainer setInfoOpen={setInfoOpen} setChatOpen={setChatOpen}/>}
        <NavBar infoOpen={infoOpen} setInfoOpen={setInfoOpen}/>
        <Chat chatOpen={chatOpen} setChatOpen={setChatOpen}/>
        <Outlet />
        <Footer />
    </div>
  )
}

export default SharedLayout
