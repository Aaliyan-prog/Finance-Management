import React from 'react'
import "../assets/css/CostOfSell/CostSection.css"
import { Link } from 'react-router-dom'
import CosReport from "../assets/Images/COS-Report.png";


const CostOutput = () => {
  // const imgSrc = "../assets/Images/COS-Report.png"

  return (
    <div className='inner-content-section'>
      <div className="inner-content">
        <img src={CosReport} />
        <div className='inner-content-link-section'>
          <Link className='inner-content-link' to="/Cost-Of-Sell/COS-Report">Generate Report</Link>
        </div>
      </div>
    </div>
  )
}

export default CostOutput