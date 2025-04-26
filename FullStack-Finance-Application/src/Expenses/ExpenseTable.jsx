import React, { useEffect, useState } from 'react'

const ExpenseTable = ({ targetRef }) => {
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/src/api/ExpenseFrConn/expenseFrConn.php");
  
        if(!response.ok){
          throw new Error("Network was not ok");
        }
  
        const result = await response.json();
        console.log(result);
        setExpenseData(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [])

  return (
    <div className='expense-report-table'>
      <div className="report-table">
        <table ref={targetRef}>
          <thead>
            <tr>
              <th>No</th>
              <th>Date</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {expenseData.map((item) => (
              <tr key={item.expenseId}>
                <td>{item.expenseId}</td>
                <td>{item.expenseDate}</td>
                <td>{item.expenseName}</td>
                <td>{item.expenseCategory}</td>
                <td>{item.expensePrice}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ExpenseTable