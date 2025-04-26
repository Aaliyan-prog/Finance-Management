import React from 'react'
import stockReport from "../../assets/Images/details.png"
import { Link } from 'react-router-dom'

const StockOutput = () => {
  return (
    <div className="stock-inner-content-section">
      <div className="inner-content">
        <img src={stockReport} alt="" />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to="/sell/stock-report">Stock Report</Link>
        </div>
      </div>
    </div>
  )
}

export default StockOutput