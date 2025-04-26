import React from 'react'

const ExpenseForm = ({ HandleInputChange, expenseValue }) => {
  const HandleChange = (e) => {
    const {name, value} = e.target;
    HandleInputChange(name, value);
  }

  return (
    <div className='Expense-form-content'>
      <div className="first-sec">
        <div className="Expense-name-section Expense-input-section">
          <label htmlFor="expenseName">Name</label>
          <input 
            type="text" 
            name='expenseName' 
            id='ExpenseName' 
            value={expenseValue.expenseName} 
            onChange={HandleChange} 
            placeholder='Enter Name'
          />
        </div>

        <div className="Expense-category-section Expense-input-section">
          <label htmlFor="expenseCategory">Category</label>
          <input 
            type="text" 
            name='expenseCategory' 
            id='expenseCategory' 
            value={expenseValue.expenseCategory} 
            onChange={HandleChange} 
            placeholder='Enter Category'
          />
        </div>
      </div>

      <div className="second-sec">
        <div className="Expense-price-section Expense-input-section">
          <label htmlFor="expensePrice">Price</label>
          <input 
            type="number" 
            name='expensePrice' 
            id='expensePrice' 
            value={expenseValue.expensePrice} 
            onChange={HandleChange}
            placeholder='Enter Price' 
          />
        </div>

        <div className="Expense-date-section Expense-input-section">
          <label htmlFor="expenseDate">Date</label>
          <input 
            type="date" 
            name='expenseDate' 
            id='ExpenseDate' 
            value={expenseValue.expenseDate} 
            onChange={HandleChange} 
          />
        </div>
      </div>

      <div className="last-section">
        <button>Submit</button>
      </div>
    </div>
  )
}

export default ExpenseForm