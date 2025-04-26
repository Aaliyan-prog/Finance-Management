import React from 'react'
import { Link } from 'react-router-dom';
import DomesticFormOutput from "../assets/Images/details.png"

const DomesticExpenseOutput = () => {
  return (
    <div className='Expense-inner-content-section'>
      <div className="inner-content">
        <img src={DomesticFormOutput} alt="" />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to="/Expenses/Domestic-expense-Report">Domestic expenses Report</Link>
        </div>
      </div>
    </div>
  )
}

export default DomesticExpenseOutput