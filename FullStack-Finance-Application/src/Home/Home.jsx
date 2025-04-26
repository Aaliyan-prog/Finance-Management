import React from 'react'
import Navbar from '../Component/navbar'
import NavbarOption from '../Component/NavbarOption'
import InfoBoard from './InfoBoard'

const Home = () => {
  return (
    <div className='menu-section'>
      <Navbar/>
      <div class="main-section">
        <NavbarOption/>
        <InfoBoard/>
      </div>
    </div>
  )
}

export default Home