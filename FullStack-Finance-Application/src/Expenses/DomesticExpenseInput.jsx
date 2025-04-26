import React from 'react'
import { Link } from 'react-router-dom';
import DomesticEntryExpense from "../assets/Images/form.png"

const DomesticExpenseInput = () => {
  return (
    <div className='Expense-inner-content-section'>
      <div className="inner-content">
        <img src={DomesticEntryExpense} alt="" />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to={"/Expenses/Domestic-expense-entry"}>Domestic expenses Entry</Link>
        </div>
      </div>
    </div>
  )
}

export default DomesticExpenseInput