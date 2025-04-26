import React from 'react'
import { Link } from 'react-router-dom'
import sellReport from "../assets/Images/details.png"

const SellOutput = () => {
  return (
    <div className="sell-inner-content-section">
      <div className="inner-content">
        <img src={sellReport} alt="" />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to="/sell/sell-report">Sell Report</Link>
        </div>
      </div>
    </div>
  )
}

export default SellOutput