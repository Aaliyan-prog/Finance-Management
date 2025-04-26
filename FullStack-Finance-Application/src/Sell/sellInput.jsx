import React from 'react'
import { Link } from 'react-router-dom'
import sellEntry from "../assets/Images/form.png"

const SellInput = () => {
  return (
    <div className="sell-inner-content-section">
      <div className="inner-content">
        <img src={sellEntry} alt="" />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to='/sell/sell-entry'>Sell Entry</Link>
        </div>
      </div>
    </div>
  )
}

export default SellInput