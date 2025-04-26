import React, { useState } from 'react'
import Navbar from '../../Component/navbar'
import NavbarOptionAdvan from '../../Component/NavbarOptionAdvan'
import { usePDF } from 'react-to-pdf'
import "../../assets/css/Sell/Stock/StockReport.css"
import StockReport from './StockReport'
import { useStockContext } from '../../GlobalComponent/StockContext'

const StockReportSection = () => {
  const plusStockVal = localStorage.getItem("plusStock")
  const subStockVal = localStorage.getItem("subStock")
  const StockVal = Number(localStorage.getItem("totalStock"))

  console.log(plusStockVal, subStockVal, StockVal);
  
  

  const { toPDF, targetRef } = usePDF({
    filename: "stock-report.pdf",
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

  const HandleStockSubmit = async () => {
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
        <div className="TotalStockNum">
          <div className="StockdetailAdd">
            <h2>Stock</h2>
            <p>{plusStockVal}</p>
          </div>
          <div className="Stockdetailavailable">
            <h2>Total Stock</h2>
            <p>{StockVal}</p>
          </div>
          <div className="StockdetailSub">
            <h2>Stock</h2>
            <p>{subStockVal}</p>
          </div>
        </div>
        <div className="stock-report">
          <StockReport targetRef={targetRef} />
        </div>
        <div className="report-output">
          <button onClick={HandleStockSubmit}>Create PDF</button>
        </div>
      </div>
    </div>
  )
}

export default StockReportSection