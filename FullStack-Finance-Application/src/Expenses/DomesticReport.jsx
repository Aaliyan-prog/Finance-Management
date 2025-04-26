import React from 'react'
import "../assets/css/Expenses/ExpenseReport.css"
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import DomesExpenReportTable from './DomesExpenReportTable'
import { usePDF } from 'react-to-pdf'


const DomesticReport = () => {
  const { toPDF, targetRef } = usePDF({
    filename: "domesticExpenseTable.php",
    page: {
      margin: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20
      },
      format: "a4",
      orientation: "landscape"
    }
  });

  const HandleDomwsExpen = async () => {
    try {
      await toPDF();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='menu-section'>
      <Navbar/>
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={'/Expenses'}/>
        <h1>Domestic Expenses</h1>
        <div className="expense-report">
          <DomesExpenReportTable targetRef={targetRef}/>
        </div>
        <div className='report-output'>
          <button onClick={HandleDomwsExpen}>Generate PDF</button>
        </div>
      </div>
    </div>
  )
}

export default DomesticReport