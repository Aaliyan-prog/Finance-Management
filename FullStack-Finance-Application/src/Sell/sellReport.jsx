import React from 'react'
import Navbar from '../Component/navbar'
import NavbarOptionAdvan from '../Component/NavbarOptionAdvan'
import SellTable from './SellTable'
import "../assets/css/Sell/sellReport.css"
import { usePDF } from 'react-to-pdf'

const SellReport = () => {
  const {toPDF, targetRef} = usePDF({
    filename: "sell-report.pdf",
    page: {
      margin: {
        top: 50,
        right: 20,
        left: 20,
        bottom: 20
      },
      format: "a4",
      orientation: "landscape"
    }
  });

  const HandleExpenseSubmit = async () => {
    try {
      await toPDF();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='menu-section'>
      <Navbar />
      <div className="main-section">
        <NavbarOptionAdvan LinkParam={'/sell'} />
        <h1>Sell Report</h1>
        <div className="sell-report">
          <SellTable targetRef={targetRef} />
        </div>
        <div className="report-output">
          <button onClick={HandleExpenseSubmit}>Create PDF</button>
        </div>
      </div>
    </div>
  )
}

export default SellReport