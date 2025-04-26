import React from 'react'
import "../assets/css/Expenses/Expenses.css";
import Navbar from '../Component/navbar'
import NavbarOption from '../Component/NavbarOption'
import ExpenseInput from './ExpenseInput';
import ExpenseOutput from './ExpenseOutput';
import DomesticExpenseInput from './domesticExpenseInput';
import DomesticExpenseOutput from './DomesticExpenseOutput';

const Expenses = () => {
  return (
    <div className='menu-section'>
      <Navbar/>
      <div className="main-section">
        <NavbarOption/>
        <div className="Expense-content-section">
          <h1>Expenses</h1>
          <div className="Expense-main-content-section">
            <ExpenseInput/>
            <ExpenseOutput/>
            <DomesticExpenseInput/>
            <DomesticExpenseOutput/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expenses