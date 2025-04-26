import React from 'react'
import "../assets/css/Expenses/Expenses.css"
import ExpenseEntry from "../assets/Images/form.png"
import { Link } from "react-router-dom"

const ExpenseInput = () => {
  return (
    <div className="Expense-inner-content-section">
      <div className="inner-content">
        <img src={ExpenseEntry} />
        <div className="inner-content-link-section">
          <Link className='inner-content-link' to="/Expenses/Expense-Entry">Expense Entry</Link>
        </div>
      </div>
    </div>
  )
}

export default ExpenseInput