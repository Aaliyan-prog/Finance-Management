import React from 'react'
import StockEntry from "../../assets/Images/form.png"
import { Link } from 'react-router-dom'


const StockInput = () => {
  return (
    <div className="stock-inner-content-section">
      <div className="inner-content">
        <img src={StockEntry} alt="" />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to='/sell/stock-entry'>Stock Entry</Link>
        </div>
      </div>
    </div>
  )
}

export default StockInput