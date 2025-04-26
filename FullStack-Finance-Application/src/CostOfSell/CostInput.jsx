import React from 'react'
import "../assets/css/CostOfSell/CostSection.css"
import { Link } from 'react-router-dom'
import CosEntery from "../assets/Images/COS-Entry.png";

const CostInput = () => {

  return (
    <div className='inner-content-section'>
      <div className="inner-content">
        <img src={CosEntery}/>
        <div className='inner-content-link-section'>
          <Link className='inner-content-link' to="/Cost-Of-Sell/cost-of-sell-entry">Enter Cost of Sells</Link>
        </div>
      </div>
    </div>
  )
}

export default CostInput