import React from 'react'
import "../assets/css/Expenses/Expenses.css"
import ExpenseReport from "../assets/Images/details.png"
import { Link } from "react-router-dom"

const ExpenseOutput = () => {
  return (
    <div className="Expense-inner-content-section">
      <div className="inner-content">
        <img src={ExpenseReport} />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to="/Expenses/Expenses-report">Expense Report</Link>
        </div>
      </div>
    </div>
  )
}

export default ExpenseOutput