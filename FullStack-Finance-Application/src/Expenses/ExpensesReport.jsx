import React from 'react'
import "../assets/css/Expenses/ExpenseReport.css"
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import ExpenseTable from './ExpenseTable'
import { usePDF } from 'react-to-pdf'


const ExpensesReport = () => {
  const { toPDF, targetRef } = usePDF({filename: "expenses-report.pdf",
    page: {
      margin: {
        top: 50,
        bottom: 20,
        left: 20,
        right: 20
      },
      format: 'a4',
      orientation: 'landscape'
    }
  });

  const HandleExpenseSubmit = async () => {
    try {
      await toPDF();
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='menu-section'>
      <Navbar/>
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={'/Expenses'}/>
        <h1>Commercial Expense Report</h1>
        <div className="expense-report">
          <ExpenseTable targetRef={targetRef}/>
        </div>
        <div className="report-output">
          <button onClick={HandleExpenseSubmit}>Create PDF</button>
        </div>
      </div>
    </div>
  )
}

export default ExpensesReport