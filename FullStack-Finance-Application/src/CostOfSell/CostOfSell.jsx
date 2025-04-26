import React from 'react'
import "../assets/css/style.css"
import Navbar from '../Component/navbar'
import NavbarOption from '../Component/NavbarOption'
import CostInput from './CostInput'
import CostOutput from './CostOutput'

const CostOfSell = () => {
  return (
    <div className='menu-section'>
      <Navbar />
      <div class="main-section">
        <NavbarOption />
        <div className="Content-Section">
          <h1>Cost Of Sell</h1>
          <div className="Content-section-main">
            <CostInput/>
            <CostOutput/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostOfSell