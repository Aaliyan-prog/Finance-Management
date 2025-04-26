import React from 'react'
import "../assets/css/Sell/sell.css"
import "../assets/css/Sell/Stock/Stock.css"
import Navbar from '../Component/navbar'
import NavbarOption from '../Component/NavbarOption'
import SellInput from './sellInput'
import SellOutput from './sellOutput'
import StockInput from './Stock/StockInput'
import StockOutput from './Stock/StockOutput'

const Sell = () => {
  return (
    <div className="menu-section">
      <Navbar/>
      <div className="main-section">
        <NavbarOption/>
        <div className="sell-content-section">
          <h1>Sell & Stock</h1>
          <div className="sell-main-content-section">
            <SellInput/>
            <SellOutput/>
            <StockInput/>
            <StockOutput/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sell