import React from 'react'
import "../assets/css/Expenses/ExpenseForm.css"

const DomesticExpenseform = ({ domesexpenformData, HandleDomesState }) => {
  const HandleChange = (e) => {
    const {name, value} = e.target
    HandleDomesState(name, value);
  }

  return (
    <div className="Expense-form-content">
      <div className="first-sec">
        <div className="Expense-name-section Expense-input-section">
          <label htmlFor="domesName">Name</label>
          <input 
            type="text" 
            name='domesName' 
            id='domesName' 
            value={domesexpenformData.domesName}
            onChange={HandleChange}
            placeholder='Enter Name'
          />
        </div>
        <div className="Expense-category-section Expense-input-section">
          <label htmlFor="domesCategory">Category</label>
          <input 
            type="text" 
            name='domesCategory' 
            id='domesCategory' 
            value={domesexpenformData.domesCategory}
            onChange={HandleChange}
            placeholder='Enter Category'
          />
        </div>
      </div>

      <div className="second-sec">
        <div className="Expense-price-section Expense-input-section">
          <label htmlFor="domesPrice">Price</label>
          <input 
            type="number" 
            name='domesPrice' 
            id='domesPrice'
            value={domesexpenformData.domesPrice}
            onChange={HandleChange}
            placeholder='Enter Price'
          />
        </div>
        <div className="Expense-date-section Expense-input-section">
          <label htmlFor="domesDate">Date</label>
          <input 
            type="date" 
            name='domesDate' 
            id='domesDate'
            value={domesexpenformData.domesDate}
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

export default DomesticExpenseform