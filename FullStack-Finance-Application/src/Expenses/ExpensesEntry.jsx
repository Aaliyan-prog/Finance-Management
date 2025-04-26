import React, { useState } from 'react'
import "../assets/css/style.css"
import "../assets/css/Expenses/ExpenseForm.css"
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import ExpenseForm from './ExpenseForm'
import axios from 'axios'

const ExpensesEntry = (e) => {
  const InitialExpenses = {
    expenseName: "",
    expenseCategory: "",
    expensePrice: "",
    expenseDate: ""
  }

  const [expenseValue, setExpenseValue] = useState(InitialExpenses);

  const HandleInputChange = (name, value) => {
    setExpenseValue(prevVal => ({
      ...prevVal, 
      [name]: value
    }))
  }

  const HandleSubmit = (e) => {
    e.preventDefault();

    setExpenseValue(InitialExpenses);

    axios.post("http://localhost:4000/src/controllers/Expenses/Expense.php",
      expenseValue,
      {
        headers: {
          'Content-Type': "Application/json"
        }
      }
    )
    .then(res => {
      console.log("Success: ", res)
    }).catch(err => {
      console.log("Error: ", err);
    })
  }

  return (
    <div className='menu-section'>
      <Navbar/>
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={'/Expenses'}/>
        <div className="Expenseform">
          <h1>Expense Form</h1>
          <form method="post" onSubmit={(event) => HandleSubmit(event)}>
            <ExpenseForm HandleInputChange={HandleInputChange} expenseValue={expenseValue}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ExpensesEntry