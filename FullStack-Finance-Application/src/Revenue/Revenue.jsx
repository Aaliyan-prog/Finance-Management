import React from 'react'
import Navbar from '../Component/navbar'
import NavbarOption from '../Component/NavbarOption'
import "../assets/css/Revenue/RevenueReport.css"
import RevenueTable from './RevenueTable';
import { usePDF } from 'react-to-pdf';

const Revenue = () => {
  const {toPDF, targetRef} = usePDF({filename: "Revenue-Report.pdf",
  page: {
    margin: {
      top: 50,
      bottom: 20,
      right: 20,
      left: 20
    },
    format: "a4",
    orientation: "landscape"
  }
  });

  const HandleRevenueGeneratePdf = async () => {
    try {
      await toPDF()
    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <div className="menu-section">
      <Navbar/>
      <div className="main-section">
        <NavbarOption/>
        <h1>Revenue</h1>
        <div className="Revenue-report">
          <RevenueTable targetRef={targetRef}/>
        </div>
        <div className="report-output">
          <button onClick={HandleRevenueGeneratePdf}>Create PDF</button>
        </div>
      </div>
    </div>
  )
}

export default Revenue