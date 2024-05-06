import React from 'react'
import MenuComponent from '../navbars/navbarBotton'
import Navbar from '../navbars/navbar'
import Herosection from '../hero-section/herosection'

function Home() {
  return (
    <>
        <Navbar />
        <Herosection />
        <MenuComponent />
    </>
  )
}

export default Home